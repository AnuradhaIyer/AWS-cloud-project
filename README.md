 # SAVE TO THE CLOUD
 URL : (http://www.savetothecloud.com/)

 # INTRODUCTION 

   * University Name: http://www.sjsu.edu/

   * Course: [Cloud Technologies](http://info.sjsu.edu/web-dbgen/catalog/courses/CMPE281.html/)

   * Professor: [Sanjay Garje](https://www.linkedin.com/in/sanjaygarje/)

   * ISA: [Divyanthika Urs](https://www.linkedin.com/in/divyankithaurs/)
   
   * Student: [Anuradha Rajashekar](https://www.linkedin.com/in/anu-raj-4b950092/)
   
   # PROJECT IDEA

   * ‘Save To the Cloud’ is a full stack web application that mainly deals with storing and saving files by leveraging cloud infrastructure.
   * This application focuses on CRUD operations on all the files that are uploaded by the user. 
   * The main objective of this project was to optimize file stack by using API to upload, retrieve, delete and store files in S3 and accelerate speed and performance. 
   * This application lets you to have a private account for all your file storage and access it whenever its needed.
   .
   # FEATURES OF THIS APPLICATION
   
   SAVE TO THE CLOUD can be accessed via domain name : (http://www.savetothecloud.com/)
   
  The list of features provided by the application are as follows:
  * SIGNUP Page: For a NEW USER to enter all relevant information which is collected and
stored in database.
  * LOGIN Page: For an EXISTING USER to log in with available credentials and access the
application.
  * ABOUT ME Page: For user details and general hobbies and details about user.
  * UPLOAD OPTION: For the user to upload files for storage in Amazon S3.
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

# INSTRUCTIONS TO SET UP PROJECT LOCALLY :

* Clone the above project into your local repository (Clone link :https://github.com/AnuradhaIyer/AWS-cloud-project.git) 
* Go to the folder where the project is cloned, check for package.json file where all the dependencies for the project is mentioned.
* Install node.js in your system. Link for iinstalling- (https://nodejs.org/en/).
* We have included "aws-sdk" for accessing S3 from amazon, so kindly add that as a dependency in package.json file.
* Server.js contains the backend/server side logic in this application.
* Front end functionality is written in Angular JS (Refer "views" folder in the above prohject)
* To run this project, go to the folder where files for this project is available--> open gitbash/cmd-->run "npm install" to install all node modules locally. To start the server, type command "node server js". Application will run in the portr mentioned in the code. Ex: "localhost:8081/"
* Use sublime or notepad++ for editing code and start the server after editing.








