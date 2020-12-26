# remmie-vue

This is the README file for the remmie-vue repository.

To obtain a copy of this repository, execute the git clone https://github.com/kitdaniellim/remmie-vue.git command in the directory where you want the files to be located.

To run the application, run both Node and Vue.

Don't forget to run npm install in both remmie-vue and remmie-sequelize because we didn't push node_modules to save space :)

N O T E      F O R     S I R     E A N:
Product List obtained from database from assumed partnered hotel.
This data is not part of our database definitions but is needed for display in staff accounts.
```
// in app.js
let orders = [
        { id: 1, prodName: 'Burger King Deluxe Omega', price: 50.0, desc: 'Awesomeness in mouth' },
        { id: 2, prodName: 'Shanghai Lumpia', price: 225.0, desc: 'Awesomeness in mouth' },
        { id: 3, prodName: 'Mixed Seafood Chowder', price: 195.0, desc: 'Awesomeness in mouth' },
        { id: 4, prodName: 'Baked Scallop', price: 285.0, desc: 'Awesomeness in mouth' },
        { id: 5, prodName: 'Cream of Mushroom Soup', price: 150.0, desc: 'Awesomeness in mouth' },
        { id: 6, prodName: 'Pork Baby Backribs', price: 450.0, desc: 'Awesomeness in mouth' },
    ];
```
### Run Node js
```
Open terminal and enter the following commands to run Node.
cd remmie-sequelize
node app
```

### Run Vue 
```
Open another terminal and enter the following commands to run Vue.
cd remmie-vue 
npm run serve
```


### For putting initializing database/test values
```
 npx sequelize-cli db:migrate
 npx sequelize-cli db:seed:all
```
