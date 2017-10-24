 # SAVE TO THE CLOUD
 URL : http://www.savetothecloud.com/
 
 
 ![cloud 1](https://user-images.githubusercontent.com/31361652/31910363-1812395e-b7f2-11e7-98b6-4281bf053239.PNG)

 # INTRODUCTION 

   * University Name: http://www.sjsu.edu/

   * Course: [Cloud Technologies](http://info.sjsu.edu/web-dbgen/catalog/courses/CMPE281.html/)

   * Professor: [Sanjay Garje](https://www.linkedin.com/in/sanjaygarje/)

   * ISA: [Divyanthika Urs](https://www.linkedin.com/in/divyankithaurs/)
   
   * Student: [Anuradha Rajashekar](https://www.linkedin.com/in/anu-rajashekar-4b950092/)
   
   # PROJECT IDEA

   * ‘Save To the Cloud’ is a full stack web application that mainly deals with storing and saving files by leveraging cloud infrastructure.
   * This application focuses on CRUD operations on all the files that are uploaded by the user. 
   * The main objective of this project was to optimize file stack by using API to upload, retrieve, delete and store files in S3 and accelerate speed and performance. 
   * This application lets you to have a private account for all your file storage and access it whenever its needed.
   .
   # FEATURES OF THIS APPLICATION
   
   SAVE TO THE CLOUD can be accessed via domain name : http://www.savetothecloud.com. Compatible both in Desktop and Smartphones.
   
  The list of features provided by the application are as follows:
  * SIGNUP Page: For a NEW USER to enter all relevant information which is collected and
stored in database.
![cloud2](https://user-images.githubusercontent.com/31361652/31910378-26cf0936-b7f2-11e7-9389-d0db40925d7d.PNG)
  * LOGIN Page: For an EXISTING USER to log in with available credentials and access the
application.
![cloud 1](https://user-images.githubusercontent.com/31361652/31910363-1812395e-b7f2-11e7-98b6-4281bf053239.PNG)
  * ABOUT ME Page: For user details and general hobbies and details about user.
  ![cloud 3](https://user-images.githubusercontent.com/31361652/31910388-2bde37b2-b7f2-11e7-8dee-e1475c5761a4.PNG)
  * UPLOAD OPTION: For the user to upload files for storage in Amazon S3.
  ![cloud 5](https://user-images.githubusercontent.com/31361652/31910397-347c839c-b7f2-11e7-821f-1b7549361749.PNG)
  * RETRIEVE ALL FILES OPTION: to retrieve any previously uploaded file
  * DELETE OPTION: To delete files no longer required by user.
  * UPDATE OPTION: To update already uploaded files. The application will redirect users to
upload a new files again with the update / revision.
  * Application displays the following in ‘Retrieve’ page.
     
     • User’s First Name
     
     • User’s Last Name
     
     • File Upload Time
     
     • File Name/ Description
     
     • File Update Time
     ![cloud 6](https://user-images.githubusercontent.com/31361652/31910403-3840a4cc-b7f2-11e7-95e9-8a6b76c42370.PNG)
   
 * Resources Page : User can find links to all the technology used in this application.
 ![cloud 8](https://user-images.githubusercontent.com/31361652/31910737-580b3794-b7f3-11e7-8af5-4620fdd4bd8a.PNG)
 * Link to users Facebook, linkedin, gmail and other social media account in a click away.
 ![about](https://user-images.githubusercontent.com/31361652/31915431-4aa516fa-b803-11e7-83ed-9eb78a285173.PNG)
 
 # ARCHITECTURE DIGRAM FOR THIS PROJECT
 
 ![savetothecloud](https://user-images.githubusercontent.com/31361652/31912751-c4153b82-b7f9-11e7-84a1-ac1c00bd9ba2.jpg)



# PREREQUISITES :

* Create an amazon account and navigate to console in AMAZON AWS.
* Create a bucket in S3 and upload files and check for configuration in S3 and set lifecycle (S3->S3IA->Glacier).
* Link your S3 bucket with Cloudfront to offload traffic on S3 bucket.
* This application is deployed in Elastic Beanstalk environment, where it creates an environment by triggering EC2 instance, Auto Scaling group to  maintain availability during outage, Elastic load balancing to make sure load on instances are distributed and Amazon RDS(MySQL) as a database.
* Cloud watch alarms are set to check for healthy state of instances.
* Lambda Function to receiver cloud watch alerts and send out notification to the user
regarding the event.
* Kindly refer (https://aws.amazon.com/documentation/) for more details about every configuration. 


# LIST OF REQUIRED SOFTWARE:

1. FRONT END: ANGULAR JS, MATERIALIZE (Model, view, controller java script)
2. SERVER SIDE: NODE JS, EXPRESS JS, MULTER, AWS-SDK
3. DATABASE: AMAZON RDS(MYSQL)
4. AMAZON CLOUD INFRASTRUCTURE (Elastic beanstalk, Cloudwatch, SNS, lambda etc.)

FRONT END-
* ANGULAR JS(Model,view, controller) and MATERIALIZE is used for front end. CSS is used for fancy structuring of user interface.

SERVER SIDE-
* Nodejs and Expressjs is used for back end functionality along with AWS-SDK for various functions like putObject, Getobject, ListObject etc in S3.

DATABASE- 
* Mysql relational database is used to store and retrieve user data. This service is provided my Amazon RDS as PAAS.
* "tables" are created in database for tracking user firstname, lastname and other records.

# INSTRUCTIONS TO SET UP PROJECT LOCALLY :

* Clone the above project into your local repository (Clone link :https://github.com/AnuradhaIyer/AWS-cloud-project.git) 
* Go to the folder where the project is cloned, check for package.json file where all the dependencies for the project is mentioned.
* Install node.js in your system. Link for iinstalling- (https://nodejs.org/en/).
* We have included "aws-sdk" for accessing S3 from amazon, so kindly add that as a dependency in package.json file.
* Server.js contains the backend/server side logic in this application.
* Front end functionality is written in Angular JS (Refer "views" folder in the above prohject)
* To run this project, go to the folder where files for this project is available--> open gitbash/cmd-->run "npm install" to install all node modules locally. To start the server, type command "node server js". Application will run in the portr mentioned in the code. Ex: "localhost:8081/"
* Use sublime or notepad++ for editing code and start the server after editing.








