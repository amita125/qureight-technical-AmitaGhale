
# Qureight-technical project

[Description](#description) | [User Stories](#user-stories) | [Mockups](#mockups) |  [Installation Instructions](#installation) | [Credits](#credits)

## <a name="description">Description</a>

Quereight technical project allows Doctors of Qureight Hospital to view the list of patients present in the hospital database. The Doctor have a full rights perform CRUD operation on patient database in hospital datas. 

**Tech Stack:** *React, Bootstrap, Express, Sqlite, Node*

## <a name="user-stories">User Stories</a>
```As a doctor, I would like to view the list of patients in the hospital database.
```
```
As a doctor, I would like to update the patients details.
```
```
As a doctor, I would like to delete the patients from the database.
```
```
As a doctor, I would like to add new patient to the database.
```
```
As a patient, I would like only the doctor of the doctor of the Qureight hospital to view my details.
```

## <a name="mockups">Mockups</a>

When the app is loaded, the user sees the login page, which ask the username and password.
<img src="https://github.com/amita125/qureight-technical-AmitaGhale/blob/master/images/login.png" alt="login" height="400" width="100%"/>

Dashbaard image 
<img src="https://github.com/amita125/qureight-technical-AmitaGhale/blob/master/images/dashboard.png" alt="dashboard" height="400" width="100%"/>

View patient data
<img src="https://github.com/amita125/qureight-technical-AmitaGhale/blob/master/images/view.png" alt="view" height="400" width="100%"/>


Add new patient
<img src="https://github.com/amita125/qureight-technical-AmitaGhale/blob/master/images/add.png" alt="add" height="400" width="100%"/>

Delete the patient 
<img src="https://github.com/amita125/qureight-technical-AmitaGhale/blob/master/images/delete.png" alt="delete" height="400" width="100%"/>



## <a name="installation">Installation Instructions</a>

Clone this repository from github 
```
$ git clone https://github.com/amita125/qureight-technical-AmitaGhale.git
```
After clone install the npm package
```
npm install 
```

run knex for database 
```
knex migrate:latest
```
```
knex seed:run
```

For the project to run you need to run the project command separately. 
Inside the project folder after clone run this command 
```
npm start
```

open another termincal or command line and go to client folder and run 
```
npm start 
```

After the page is loaded and the server is up and running 

Please enter these login details 

# username : QUEDR123
# password : amitaghale

## you can create ur own employee by redirectiong the client route to register page by [ localhost:3000/register ] 

The people cannot go the register page unless redirecting from the request as in real scenario the employee cannot add themselves to the register.




## <a name="credits">Credits</a>

This project used bootstrap.

This project images were linked with the google images. 

This project icons were downloaded from flaticon.
