import { ENV_TYPES } from '@types';

export interface NativeConfig {
  APP_NAME: string;
  ENVIRONMENT: ENV_TYPES;
  API_URL: string;
}

declare module 'react-native-config' {
  export const Config: NativeConfig;
  export default Config;
}
