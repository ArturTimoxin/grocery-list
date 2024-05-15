import express, { NextFunction, Request, Response } from 'express';
import { GroceryListItem } from './Data.types';
import { StorageFactory } from './StorageFactory';

const router = express.Router();
const storage = StorageFactory.getStorage<GroceryListItem>();

storage.init('grocery-list', './data');

router.use(express.json());

router.use((req: Request, res: Response, next: NextFunction) => {
  res.append('Content-Type', 'application/json');
  next();
});

router.get('/', async (req: Request, res: Response) => {
  res.send(await storage.getAll());
});

router.post('/', async (req: Request, res: Response) => {
  const obj = req.body;
  const storedObject = await storage.create(obj);
  res.status(201).send(storedObject);
});

router.put('/:id', async (req: Request, res: Response) => {
  const existingObject = await storage.get(+req.params.id);
  if (existingObject == null) {
    return res.status(404).send();
  }

  const obj = req.body;
  if (obj.id !== +req.params.id) {
    obj.id = +req.params.id;
  }
  const updatedObject = await storage.update(obj);
  res.status(200).send(updatedObject);
});

router.delete('/:id', async (req: Request, res: Response) => {
  const existingObject = await storage.get(+req.params.id);
  if (existingObject == null) {
    return res.status(404).send();
  }
  await storage.delete(existingObject);
  res.status(200).send();
});

const app = express();

app.use('/grocery-list', router);
app.listen(3000, () => console.log('Server app listening on port 3000!'));
