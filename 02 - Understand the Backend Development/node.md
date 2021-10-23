# Date: 23 / 10 / 2021

# Understand the Backend Development

## An Overview of How the Web Works

**WHAT HAPPENS WHEN WE ACCESS A WEBPAGE**
<br>
each time we type a url or a domaine name in our website in oder to open up a new web page or each time we request from an api.
<br>
Well the most simple answer is that our browser which is also called a client sends a request to the server where the webpage is hosted, and the server will then send back a response, which is gonna contain the webpage that we just requested.
<br>
and this process is called the request-respond model or client-server architecture.
<br>

### DNS

<br>
DNS stand for
<br>

- Domain
- Name
- Server
  <br>
  jo the first step when we request a website , is the browser makes a request to a DNS, and this special server will then simply match the web address that we typed into the browser to the server's real IP Address.
  <br>
  then we request (get/post) using http (hyper text transfer protocal) method, if the http status code is good (200), then our browser load the index.html,css, js

### let's looks as a practical

go to any web page you want i go to udemy we go to any web page
<br>
once you type the domain name then open developer tool and go to network tab see the all info what type of this req what the status code and so more.

## Front-end vs Back-end

## front-end

let's learn about what is a front-end and what is a back-end

<br>

so Front-end Development is all about everything that happens in the web browse.L<br>
so its about designing and building the final website that's gonna be visible to the user, and there for name frontend

<br>
the front-end developer using the basic technologies
- HTML
- CSS 
- JAVASCRIPT

which together from the front-end technology stack.

<br>
now many advance front-end developer add more stuff to teh front-end stack like javascript framework/library css framework/library

- react / angular
- tailwind / bootstrap

<br>
so these technology make front-end development easier.

## back-end

so this part web development is about everything that happens on the web server, so every thing that are invisible to the final user and there for the name back-end,

<br>
now we are talking about server so now see what the server is
<br>
a basic server is really just a computer that is connected to the internet which, first stores a website'file like html,css,js and second thing runs an HTTP server that is capable of understand URLs, request and also delivering responses.

## types of website

### static

now static website that just accept request from user and response a static page that called static site

### dynamic

dynamic server is who that talk with database, always run HTTP Server and also the file talking to each other,
<br>
when we build dynamic website or app we will also use a database, which we can access right form our applications.we stor data in database like user, application data or text, and our backend will communicate with that data base.

<br>
the technology we can use in back-end development
- Node.js ( as a dynamic web server)
- MongoDB (as our database)

that are our backend stack.
<br>
but there are so many different back-end technologies and stack available for the backend.
<br>
think like:

- PHP
  with
- MySQL
  <br>
  or
- python
- postgreSQL

## What is full stack

now, you might have heard the term full stack before, and that simply front-end + back-end stacks together.

- so developers that does both front-end and back-end development can call him self
  **a full stack** developer
