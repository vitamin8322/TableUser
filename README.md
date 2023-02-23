## Random User Table

This project is a simple web application that displays a table of random user data fetched from the [Random User API](https://randomuser.me/).

The table displays the user's full name, username, and thumbnail image, and allows the user to navigate through multiple pages of data. The table can also be sorted by username or full name.

## Technologies
This project was built using the following technologies:

React: a popular JavaScript library for building user interfaces <br>
TypeScript: a statically-typed superset of JavaScript
Redux: a predictable state container for JavaScript apps

## Getting started

To get started with this project, follow these steps:

1. Clone this repository to your local machine using the following command:
```
git clone https://github.com/vitamin8322/TableUser.git
```

2. Navigate to the project directory:
```
cd table-user
```

3. Install the project dependencies:
```
npm install
```

4. Start the development server:
```
npm start
```
This will start the server and open the application in your default browser at [http://localhost:3000](http://localhost:3000).

## Folder structure
The project is structured as follows:

```
my-app/
  node_modules/
  public/
    index.html
    favicon.ico
  src/
    components/
      UserTable/
        UserTable.tsx
    pages/
      HomePage/
        HomePage.tsx
    store/
      actions/
        userActions.ts
      reducers/
        userReducer.ts
      types/
        userTypes.ts
      store.ts
    App.tsx
    index.tsx
    index.css
    logo.svg
  package.json
  tsconfig.json
```

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.
