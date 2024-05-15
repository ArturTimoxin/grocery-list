# Grocery list test task description

In this test task, we want to check the basic frontend skills of our candidates. You must create an app allowing users to make their grocery lists.

## Here are user stories that should be covered:

As a user, I can view my grocery list
As a user, I can add, edit, and delete items to my grocery list
As a user, I can add an amount to each item in the list
As a user, I can mark an item as bought. This will cross out the title and mark the checkbox as checked.

## Technical requirements:

For this task, we want to use React Native
Layouts are not strict, but the app should look good
Please use JSON-server (https://www.npmjs.com/package/json-server) and React query (https://tanstack.com/query/latest/docs/react/quick-start) to mock an API integration
Push your code to the git repo and share a link with the finished project

## Not required, but it will be a benefit

Gluestack (https://gluestack.io/) usage to build layouts
Multiple build variants for Staging and Production envs
Any additional functionality
Simple NodeJS server instead of JSON-server

This is a new [**React Native**](https://reactnative.dev) project, bootstrapped using [`@react-native-community/cli`](https://github.com/react-native-community/cli).

# Getting Started

![List](https://ibb.co/YQNPHZW)
![Add Item](https://ibb.co/ysVFPVN)

**Prerequisites**:
Make sure you have completed the [React Native - Environment Setup](https://reactnative.dev/docs/environment-setup) instructions.

Also adb environment should work for you. If not - check the video https://www.youtube.com/watch?v=QRFxK9GnX4o for troubleshooting

## Step 1: Install Dependencies

1. run `npm install` in root directory
2. `cd ios` and run `pod install`
3. run 'cd server && npm install' for installing server dependencies

## Step 2: Put your IP address in .env file

Due to serving server app on local host and android platform specific network requests you need to put
your local IP address to API_URL variable.

For instance: `API_URL=http://192.168.0.105:3000`

### How to find your local IP address on Mac

Go to: Settings => Network => WiFi => Details button of your connected network => IP Address

![IP Address on Mac](https://ibb.co/YQNPHZW)

## Step 3: Start the Metro Server and API Server

run `npm start` in your terminal for installing mobile dependencies
run `npm start:clean` to clean metro cache, watchman, and start terminal

## Step 4: Start your Application

Due to environment setup, you need to specify env builds to run, so it cannot be run from metro bundler by pressing `i` or `a` buttons

### For Android

Run scripts below in your terminal. Available options are
`npm run android:dev`
`npm run android:staging`
`npm run android:prod`
`npm run android:prodRelease` _for specific release key signature_

### For iOS

There are two options:

1. Run different schemas in XCode:
   `GroceryList` for dev version
   `GroceryListStaging` for staging version
   `GroceryListProd` for prod version
2. run scripts listed below:
   `npm run ios:dev`
   `npm run ios:staging`
   `npm run ios:prod`

## ENV specific information

There are 4 files in the root folder.
`.env.xxx` are files for the specific environment, all changes should be listed here, also do not forget to add types in `react-native-config.d.ts`.
`.env` file is only needed for ios native part, so it should be not changed, but when you will run _prod_ or _staging_, it will be updated. You can manually remove those changes before commiting, or use script `git update-index --skip-worktree .env`
