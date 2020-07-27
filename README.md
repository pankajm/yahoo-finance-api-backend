# Yahoo Finance API Backend

This is simple API service which serves data from yahoo finance APIs hosted on RapidAPI. 


## Technologies used 
This is a Node.js application with support of few third party libraries from npm repository. (Details can be found in package.json). 

The APIs in this app are meant to be fast as it uses cron which runs as soon as the server starts. It fetches data from RapidAPI and stores it in application memory. The APIs exposed in this app reads data from this memory which makes it blazzing fast. 
#### (P.S. This data can also be stored in DB or Cache like Redis while deploying to production)


## Running the app

1. Clone the project using following link - 

   *https://github.com/pankajm/yahoo-finance-api-backend.git*

2. Once cloned to local machine, navigate to yahoo-finance-api-backend directory and run following command 

   *npm install* 

   This will install all the dependencies. 

2. Run the app using following command 

   *node index.js* OR *nodemon*

3. This will start the server on port 3000 by default

### (P.S. If the port is busy it will ask you to run the app on other port)

4. Once server starts the cron will start fetching data from RapidAPI and store it in app memory. This is to make exposed APIs more robust. Once finished it will pop up message as cron completed !. APIs exposed in app then fetches this data from application memory. Please note that this cron can be triggered periodically in production to get updated data.

5. Open browser or any Rest Client (ex-Postman). Send Get request to following two end points to get the data.

  *localhost:3000/api/news*
  
  *localhost:3000/api/analysis*

### End 
