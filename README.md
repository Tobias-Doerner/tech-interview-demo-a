# tech-interview-demo-a

This is a small project for recruitment interview purposes.

## Setup & Development

#####

```
npm install
```

##### Compiles and hot reloads for development

```
npm run serve
```

##### Compiles and minifies for production

```
npm run build
```

##### Lints and fixes files

```
npm run lint
```

##### Run your unit tests

```
npm run test:unit
```

## Assignment

The overall aim is to create a web-app to keep track of how many animals we have on our farm. This project includes Vuex and Vue Router. You're free to use them as you see fit and also install any further packages. Add sensible tests (Jest testing is already set up). In the end it could look similar to this:

![Wireframe.png](https://res.cloudinary.com/datanode/image/upload/v1634317681/github/Wireframe.png)

### **Task 1: Create a main page with counters for at least 3 species of animals, pigs, cows and sheep**

Each counter starts out with 0 and consists of a button to increase the amount, a text showcasing the current amount and a button to decrease the amount. You should not be able to decrease the amount below 0.

### **Task 2: Save the state of your farm manager on firebase**

Add a submit button to your page. When the user presses the button the app should send a PUT request with the state of your counters to the endpoint `https://farmdemo-afce1-default-rtdb.europe-west1.firebasedatabase.app/farms/<your-farm-name>.json`. You can choose the name of your farm yourself. While the request happens the user should see some kind of indicator that the app is loading.

### **Task 3: Load the current state of your farm from the backend**

Your app should load the current state of your farm before enabling the user to change it. You can load the current state by doing a GET request for `https://farmdemo-afce1-default-rtdb.europe-west1.firebasedatabase.app/farms/<your-farm-name>.json`.

### **Task 4: Create a second page to show the current state of your Farm (no styling necessary)**

After submitting the state the user should be automatically redirected to this `status` page. The page should have a link back to the page with the counters
