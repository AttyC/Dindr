# Dinder

### Our Goal:
To learn the MERN (MongoDB, Express, Node.js, React.js) stack and document our learning, processes and team work.  To build an app using our learning from this process.  

Visit our Book: [https://leigan0.gitbooks.io/team-glow/content/](https://leigan0.gitbooks.io/team-glow/content/)  

### Our App:
__Dinder__ is our app which helps developers find other developers to pair with.  


### Tutorials based on this repository

* [How to set up an app with React and Express](https://leigan0.gitbooks.io/team-glow/content/Tutorials/How%20to%20set%20up%20and%20app%20with%20React%20and%20Express.html)

* [How to set up mLab - cloud mongodb](https://leigan0.gitbooks.io/team-glow/content/Mongo/Mlab-set-up.html)

### How to use this code / view our app:

* Open Terminal. Clone the repository:
```
git clone https://github.com/SimonBao/Dindr
```
* Run the following command to install dependencies:  
```
npm install
```  

* You will need to set up Mongo development and test databases:

* [How to set up mLab - cloud mongodb](https://leigan0.gitbooks.io/team-glow/content/Mongo/Mlab-set-up.html)

* Create your environment variable for MongoDB:

__Make sure your database, username and password are correct!__
```
export MONGOLAB_URI=mongodb://<dbuser>:<dbpassword>@<sandbox>.mlab.com:<??>/<db name>
```  

* Start the server  

```
npm start
```
* Go to [http://localhost:4444/](http://localhost:4444/) and see the app

## Running tests
```
npm tests
```

## User Stories

### MVP

```
As a nerd,
So I can find people to geek out with,
I want to be able to meet other nerds
```

```
As a nerd,
So I can show how geeky I am,
I want to be able to list the languages I like to code in
```

```
As a nerd,
So I can find a match,
I want to be able to view other users profiles
```

```
As a nerd,
So I can find a nerd match
I want to be able to 'like' people who I like the look of
```

```
As a nerd
So I know when I get a match
I want to receive a notification
```

## V2 Objectives

```
As a nerd
So other nerds recognise me when we meet
I want to be able to add a profile picture
```

```
As a nerd
So I don't have to waste coding time
I want to be able to search by location \ languages
```
*** We achieved all of the above stories ^^^ ***

```
As a nerd
So I can keep my coding habits private
I want to be able to sign-in and out
```

# V3 Objectives

```
As a nerd
So I don't have to face rejection
I only want to be matched with people who also like me
```

```
As a nerd
To give me more coding time
I want to only be shown geeks in my current location
```

```
As a nerd
To avoid awkward pairing
I want to be able to chat with my matches
```

```
As a nerd
So I can have less chance meeting a fake geek
I want nerds to have pairing ratings
```

```
As a nerd
So I don't waste precious learning time
I want to be able to set preferences
```

### Setup
To set up a new app, see [https://leigan0.gitbooks.io/team-glow/content/setup-new-app.html](https://leigan0.gitbooks.io/team-glow/content/setup-new-app.html)


### If we had more time
* More testing
* Isolate tests
* Unit tests feature tests
* Code refactoring
* Refactor CSS to SCSS
* Deploy to Heroku with MongoLab
