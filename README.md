# friend-finder
A compatibility-based "Friend Finder" application -- basically a dating app.

## How does it work?
Friend Finder is a full stack node app deployed on Heroku. Data is saved on a file, not in a database. It uses `Express` to configure and operate the server, `Body-Parser` to pass the json data back and forth between files & functions, and `fs` to read & write from the data files on the server. Various routes are setup to complete the survey, view the JSON API, and post data into the app. A general catch-all route will bring all users to the homepage, regardless of the path the user attempts to access.

## How can I use the app?
`Node` is required to run this app. Deployment on a node server is required. This app is setup to listen on a Heroku default port; in the absence of Heroku, it sets the port to 3000 instead. After downloading the repository, run `npm install` from the command line to ensure you have the necessary packages included in the package.json file. If you don't want to do all that then you can visit the [Live Demo](https://haworth-friend-finder.herokuapp.com/)

### Notes
Experimented with [ChosenJS library](https://harvesthq.github.io/chosen/) and some new ES6 features in the javascript

