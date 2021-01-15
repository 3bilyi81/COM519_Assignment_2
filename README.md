# COM519_Assignment_2
To start the project you need to have all the following dependacies installed - mongoDB, NodeJs and Express

You need to run this command to import the database and put it into a collection - mongoimport --db=movies  --collection=movies --file="movies.json" --jsonArray 

Note - It did not work for me and I could not fix the error

After that you need to open the website with the Live Server extension into your main browser if you are using Visual Studio Code which I used to code this application. If you are using different software, you should use the given option to run the website into your peferred browser.

The html files interact with the app.js file to get/post (perform CRUD operations) information.

All the CRUD methods are in the app.js file which also makes connection to the database and puts into a collection which later on is being accessed by the user.