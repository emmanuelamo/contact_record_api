# Contact_record_api using Adonis Js

### Install Project

    $ git https://github.com/emmanuelamo/contact_record_api.git
    $ cd contact_record_api
    $ npm install
    $ node ace db:seed (optional, this will insert 5 records to test with)
    $ node ace serve --watch
    

##### Rename 'env.example' to '.env' 

Application will be running on : http://127.0.0.1:3333
Append the url with /ap (ie. http://127.0.0.1:3333/api)

# All endpoint

GET - /contacts (get all contacts, in batches of 10)
GET - /contact/id (get one contact by id)
POST - /contacts (insert contact)
PATCH - /contacts/id (Update contact by id)
DELETE - /contacts/id (Delete contact by id)

# note: Fields include
firstName
lastName
telephone









  

 
