# oda-finalproject

> Nuxt.js project

Authors: Sierra Lorenzini (sjl40), Rikki Kendall (yrk3), Charlotte Roh(hr67)

## What makes your application useful
What makes our application most useful is the fact that it's easily translatable into the real world, as it's literally made for an existing NGO with existing data. Through the newly designed website, more dreamers and immigrants would be able to seek help, reach out to them, and easily find information they want. Also, more people will find the website, be informed about the status quo of immigrants of the US and the clear layout of the site will help them to ideally be interested in this problem and help them out.

## Special instructions needed to set up, run, access, or use your application (like user passwords you have set up, command line utilities, or external programs that need to be run)
One most striking difference we set up in our own application compared to the original website is the fact that we created a login page that will allow users to specify whether they are an admin or a simple user. If one is an admin, he would be able to add a project to the project page. A user can donate a certain amount of money. Other than that, there is a functioning English-Spanish language toggle targeting users of both languages.

## References for your data that establishes its authenticity
Authenticity of the data we used in our application comes from the fact that we implemented an already existing website -- all the texts and the logo comes from the original website, however, we took most of the layout and design down and reinvented it into a new website using a totally different framework (the original website has been pre-made by Squarespace, and we started from scratch).

## Discuss both the pros and the cons of different framework possibilities you considered and why you made the decision you did (including choosing not to use any framework)
We decided to use Nuxt.js because it's basically the same as Vue.js except it's better, as it's able to create a static html page when we run generate -- this is particularly useful when we want to keep the website simple and light without allowing too much time for compilation.

>Notes (Sierra):
In general I am happy with how this website turned out. I learned a lot about Vue, Nuxt, and Firebase and feel more comfortable now developing a more complex website. I worked pretty hard to implement user authorization and authentication (users and admins can donate, admins can add projects to projects page) and the dual language functionality through a Vuex store. Nuxt took a lot of trial and error to figure out but in the end it was nice to generate a static website espeically considering this page is meant to be more informational than a dynamic application.

>One thing that still isn't working (and I have no idea why) is the image carousel on the Why page. It is there, but only shows up when you click on the big white area. This is particularly strange considering Rikki used my exact code just modified for different data in the Why page and it works perfectly there. I tried posting on Piazza and doing a lot of research but couldn't figure out how to fix it.

## Build Setup

``` bash
# install dependencies
$ npm install # Or yarn install

# serve with hot reload at localhost:3000
$ npm run dev

# build for production and launch server
$ npm run build
$ npm start

# generate static project
$ npm run generate
```

For detailed explanation on how things work, checkout the [Nuxt.js docs](https://github.com/nuxt/nuxt.js).
