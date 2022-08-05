# Contact_record_api using Adonis Js

### Install Project

$$ Install node.js (if installed,, skip this step)
$ In your terminal, install adonisjs with this command (npm install -g @adonisjs/cli)
$clone the project using this link git (https://github.com/emmanuelamo/contact_record_api.git) or download the zip file
$cd contact_record_api
$ run (npm install)
$ change .env.example file to .env
$ In the .env, update your database info. Mostly the root_user, password and database name. make sure you create your database as well with the same name in the .env file
$ run (node ace migration:run) to create the tables
$ Optional - run (node ace db:seed) to insert some few records to work with
$ run (node ace serve --watch) to start the server
$ Copy the url in the terminal and apend "/api/following_endpoints", and test it in any environment you prefer.

     



# All endpoint

GET - /contacts (get all contacts, in batches of 10)
GET - /contact/id (get one contact by id)
POST - /contacts (insert contact)
PATCH - /contacts/id (Update contact by id)
DELETE - /contacts/id (Delete contact by id)
POST - /contacts/upload-file

# note: Fields include
firstName
lastName
telephone









  

 
