# Friend-Finder-Node-and-Express-Server-App
This full-stack site will take in results from users' surveys, then compare their answers with those from other users. The app will then display the name and picture of the user with the best overall match.

## Technologies Used

*   HTML
*   Bootstrap
*   Javascript
*   jQuery
*   Node.js
*   Express.js


## Friend Finder App Demo Link

** Demo Link

[Friend Finder App Demo](https://banana-surprise-66242.herokuapp.com/)

## Friend Finder App Images

** Home page view

![alt text](https://github.com/atiftariq786/Friend-Finder-Node-and-Express-Server-App/blob/master/assets/images/home-page.png?raw=true "Home Page")

** Survey page view 

![alt text](https://github.com/atiftariq786/Friend-Finder-Node-and-Express-Server-App/blob/master/assets/images/survey-page.png?raw=true "Survey Page")

** Best match result 

![alt text](https://github.com/atiftariq786/Friend-Finder-Node-and-Express-Server-App/blob/master/assets/images/Best-match.png?raw=true "Best Match")

## Friend Finder Code Description
*   My server.js file sets up the Express server, specifying our port number, the npm packages that         need to be loaded, and also the routes, which we have externalized.
*   There are 2 separate HTML files (home.html and survey.html) that serve as the front-end portion of      our code; they determine what the user sees (the homepage and the survey, which will also show the      resulting best match).
*   My 2 routing files (htmlRoutes.js and apiRoutes.js) determine the back-end logic (based on the          request being made, the response that gets sent to the browser); the HTML routes display the survey     and the homepage based on the URL that is accessed, and the API routes send back existing content       in our server-side data or add new friends.
*   Best match is calculated by finding the friend with the minimal difference in scores and then           sending that friend to the browser as a JSON object.
*   A modal is then toggled, displaying the the best match to the person who just took the survey.

## Author
   Atif Tariq