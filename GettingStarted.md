# PRG7936 Globehopper Project Overview
Below are instructions to help you understand the structure of the project, how to configure the backend, and how to expand on it.

# Configure Backend

## Edit Backend Settings
1. Open the `.env` file in the root of the `/api` folder
2. Edit the value for the `JWT_ACCESS_EXPIRATION_MINUTES` variable
    * Default variable: `JWT_ACCESS_EXPIRATION_MINUTES=30`
    * **Change** the variable to be: `JWT_ACCESS_EXPIRATION_MINUTES=43200`
    * This will make the JWT tokens valid for 30 days instead of 30 minutes.
3. **NOTE** You will need to restart the server (if you have it running) for these changes to take effect

## Configure Database Connection
1. Sign in to MongoDB (https://cloud.mongodb.com).
2. If you do not already have an existing Cluster, create a new one.
3. From the Dashboard, click the **Connect** button for your Cluster.
4. In the modal that pops up, select **Connect your application**.
5. In the first section (**Select your driver and version**), chose **Node.js** for the Driver and **4.0 or later** for the Version.
6. In the second section (**"Add your connection string..."**), copy the connection string.
7. Paste the connection string into the `/api/.env` file on the _right hand side of the equals sign (`=`) for the variable `MONGODB_URL`.
    * The connection string is **NOT** complete at this stage, you need to fill in some missing pieces in the next step
8. Format the connection string:
    * Placeholder connection string will look something like this (which is what you copied from MongoDB):
        ```
        mongodb+srv://[YOUR_DATABASE_USER]:<password>@cluster0.goby0.mongodb.net/myFirstDatabase?retryWrites=true&w=majority
        ```
        * **NOTE**: The `[YOUR_DATABASE_USER]` text in the above example will actually show a username that you set up when you configured this database. You **will** need to know the password for this user.
    * In the connection string, replace `<password>` with the password you set for the database user.
    * In the connection string, replace `myFirstDatabase` with the name of the collection that you want to use for this app.
        * I recommend naming your collection `globehopper`, but it's up to you. Just do not use a collection name that exists already.
        * **NOTE**: You do *NOT* need to create this collection manually in MongoDB. The API project will do it for you automatically when you run the app.
    * Your complete `MONGODB_URL` environment variable with your connection string should look similar to the below example:
        ```
        MONGODB_URL=mongodb+srv://prg7936user:D8m2SQ938U@cluster0.goby0.mongodb.net/globehopper?retryWrites=true&w=majority

        ```
        * **NOTE**: Your database user (`prg7936user` in the above example), password (`D8m2SQ938U` in the above example), database cluster URL (`cluster0.goby0.mongodb.net` in the above example), and collection name (`globehopper` in the above example) **WILL** be different from the above example. I am not telling you to match this example, I am showing you what a completed template looks like.
9. Run the `api` project:
    * Navigate your Terminal to the `api` folder
        * Enter `cd api` from the project root.
    * Run `yarn dev` from the `api` folder
10. Once you run the `api` project, it will automatically create a collection in your database using the name you specified in your connection string.

## Configure your first User
The first user in your database is a bit of a chicken & egg problem. To create a user, you can do this via the API alone:

1. With the backend running, open Postman and setup a `POST` request to `http://localhost:3001/v1/auth/register`
    * Under the **Body** tab, select `raw`
    * Under the **Body** tab, in the dropdown to the right of the radio buttons, select `JSON`
    * Edit the below JSON data with the values you want to use for your Globehopper Admin user:
        ```
        {
            "name": "Admin User",
            "email": "admin@example.com",
            "password": "password1"
        }
        ```
    * Paste your JSON data into the request body panel
    * Click `Send` to submit the request
    * This will create a new user account that you can use with your app
2. Make your user an Admin
    * Go to MongoDB, and view your Database.
    * Expand the database to view the Collections.
    * Select the `users` collection to view the raw data in the database of the user record you just created
    * Hover your mouse over the document for your user and click the Edit button (pencil icon)
    * Change the value of the `role` field to be `admin`
    * Click the **Update** button in the bottom right

## Additional Backend Info
I have added a model, controller, and route file for managing Country records. You can find the files in the `api` project:
* **Model** - `api/models/country.model.js`
* **Controller** - `api/controllers/country.controller.js`
* **Routes** - `api/routes/v1/country.route.js`

The routes can be accessed via the API using the appropriate HTTP request types and the `/v1/countries` or `/v1/countries/:countryId` endpoints:
* **GET** `/v1/countries` - retrieves all Countries
* **POST** `/v1/countries` - creates a new Country
* **PATCH** `/v1/countries/:countryId` - updates an existing Country
* **DELETE** `/v1/countries/:countryId` - deletes an existing Country

If you want to add API capabilities for Cities, you can follow the pattern I used for Countries:
* Create a model file (e.g. `models/city.model.js`)
* Create a controller file (e.g. `controllers/city.controller.js`)
* Create a route file (e.g. `/models/city.route.js`)
* Update the `defaultRoutes` array in `/routes/v1/index.js`) to include your new route file

### Starting the backend
1. Be sure your terminal is running using `bash`
2. Point your terminal to the `/api` file in the root folder of the project
3. Run `yarn dev`
4. To stop the application, click into the terminal and type `Ctrl + C`

### Swagger (API) Documentation
http://localhost:3001/v1/docs

# Front End

The core framework of the application has been added for you already. The key pieces are installed and setup already, you will just need to build on top of this app.

All front end code is contained in the `client` folder at the root of the project.

## Redux
The `src/app` folder contains Redux Actions & Reducers. Currently, Redux is only used for handling sign in and sign out, and the only object in the Redux store is the user object.

### Reading from Redux Store
To *read from* the Redux store, add the following import statement and hook to any of your functional components:
* Import statement

        import { useSelector } from 'react-redux';
* Hook

        const appState = useSelector((state) => state);
    * **NOTE**: The above hook will return the *entire* Redux store to the `appState` variable. If you only want one property of the store, you can use a different function in the argument to `useSelector` to selectively return the property you want. Reference `src/components/Layout.js` for an example where I am only getting the `user` property from the Redux store.

### Dispatching Actions
To *add to* the Redux store, we use *Actions* that are *Dispatched*. Add the following import statement and hook to any of your functional components to dispatch actions to Redux.
* Import Statement

        import { useDispatch } from 'react-redux';
* Hook

        const dispatch = useDispatch();

* Call the `dispatch` function whenever you want to update the Redux store. You need to provide an object representing an Action as the argument to the `dispatch` function. Remember that an Action is just a plain JavaScript object with two properties: `type` and `payload`.
    * **NOTE**: Any custom Actions you create need to be added to the `src/app/reducers.js` file so they can be handled. I also added a simple enum to keep track of action types (they are just strings) in the `src/app/actions.js` file. So feel free to add any of your custom actions to that so you don't have to type the string out multiple times. If you do this, be sure to import the `actions` file to your component.
        * See `src/pages/login/Login.js` for an example of this.

## React Router
React Route is installed and configured for the project. Currently there are a handful of existing routes and areas. The root of the router is in the `src/App.js` Component. However, that Component does not handle any routes. The `src/components/Layout.js` file manages the Routes (you would say this file contains the Routers, which is represented by a `<Routes>` component with child `<Route>` components).

There are 2 Routers, one for handling when the user is signed in, one for handling when they are not signed in. Note that the `<Layout>` component uses to Redux to know if the user is signed in or not.

1. Signed in routes
    * `/` - Handled by the `<Authenticated>` component
    * `/admin` - Handled by the `<AdminPage>` component
        * You will only be able to access this page if you are signed in as an Admin. See the **Configure your first User** section above.
2. Not signed in routes
    * `/` - Handled by the `<Unauthenticated>` and `<LoginPage>` components
    * `/register` - Handled by the `<Register>` component

You can add any additional Routes as you see fit for your implementation. I would recommend at least adding a route to view a specific Country.

## Material UI
Material UI is already added to the project and is used in many places. Feel free to use it as much or as little as you like.

## Overall Structure

In `src` folder, there are three main folders:
* `app`
    * This folder contains code that is "application wide". Currently it is only Redux specific code. You can add anything else in here that you like.
* `components`
    * This folder will contain Atomic, Molecular, and Organism level components that will be used throughout your app
* `pages`
    * This folder will contain Template level components that represent the different pages of your app

## Examples/References

### Form Submission Example
See: `src/components/forms/LoginForm.js`

### Fetching Data Example
See: `src/pages/home/Home.js`
* `fetchCountries` function queries the API for countries data


# Starting the applications
## API
1. Be sure your terminal is running using `bash`
2. Point your terminal to the `/api` file in the root folder of the project
3. Run `yarn dev`
4. To stop the application, click into the terminal and type `Ctrl + C`

## Front End
1. Be sure your terminal is running using `bash`
2. Point your terminal to the `/client` file in the root folder of the project
3. Run `npm start`
4. To stop the application, click into the terminal and type `Ctrl + C`