# Node Login Demo
-----------------
This is a Simple Password protected demo of a **node.js** password protected Member Zone.

This is by no means complete but should give you an idea to get started with form submission, validation, themes, mongoose mongo access, sessions and authentication

- If you have a single theme, you probably wanna use something like pug 

## Highlights:
- uses express
- has a basic themes
- authenticates using montoeg and mongoose
- rudimentary theme engine (basic string replace)
- Shows how to create a simple member zone, storing the users in mongo db. 
- features a buggy falling blocks game that is available if you are logged in to demonstrate a member only page

## To use:
- make sure node.js is installed and in your executable path
- make sure mongodb is installed and running (adjust credentials in user.js)
- change to nodezone directory
- make sure there is nothing running on port 3000 (or change port)
- run "node app"

## Files:
- **app.js** - main route and express setup
- **user.js** - mongoose mongo model and user abstraction class
- **routes.js** - kind of a controller class decides what pages to show/handles auth
- **res/** contains all graphics/ html pages
- **views/** contains views like login form, member text, welcome page...
- **themes/** those are themes that can be swapped for a different view
- **config/** - json config file

## Licence

MIT License... Basically do whatever you want with it as long as you keep the license file

**Be cool, Redefine limits, have fun**
