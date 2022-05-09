# Front End

1. In `src` folder, create two folders:
    * `components`
        * This folder will contain Atomic, Molecular, and Organism level components that will be used throughout your app
    * `pages`
        * This folder will contain Template level components that represent the different pages of your app

1. In `pages` folder, create two folders:
    * `home`
        * This folder will contain `.js` and `.css` files for the Home page of your app
    * `login`
        * This folder will contain `.js` and `.css` files for the Login page of your app

1. In the `pages/home` folder, create two files:
    * `Home.js`
        * This will be the Template level React component for the Home page
    * `Home.css`
        * This will contain any custom CSS classes you want to create for your Home page

1. Edit `Home.js`
    * Add React import statements at the top of the file
        * `import React, { useState, useEffect } from "react";`
    * Create a simple functional component as a placeholder
        ```
        function HomePage() {
            return (
                <div>
                    <h2>Home Page</h2>
                </div>
            );
        }

        export default HomePage;
        ```

1. Repeat this process for a Login Page component
    * Put your `.js` and `.css` files in the `pages/login` folder

1. Repeat this process for any other pages you want to create in your app (Country Page, City Page, Admin Page, etc.)


