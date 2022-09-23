# Currency-Converter using Javascript/nodejs and some API's

I build this project with the intention to understand the functionality of how async await(Javascript asynchrounous) work and to also get a bit deeper into understanding how API manipulations works.

## Table of contents

- [Overview](#overview)
  - [The challenge](#the-challenge)
  - [Screenshot](#screenshot)
  - [Links](#links)
- [My process](#my-process)
  - [Built with](#built-with)
  - [What I learned](#what-i-learned)
  - [Continued development](#continued-development)
  - [Useful resources](#useful-resources)
- [Author](#author)
- [Acknowledgments](#acknowledgments)

## Overview
Create a Currency converter app that would enable users convert any currency(base) in the world to his desired currency(desired) with a simple UI using exchange Rate and countries API's, Boostrap and Express-handlebars**


### The challenge

My challenge was to have hand on experience of how async/await methodology in javascript by building a small project using this two API's [currency exchange API](https://v6.exchangerate-api.com/v6/${process.env.CAPI_KEY}/latest/${fromCurrency}) and [Country](https://restcountries.com/v3.1/currency/${toCurrency}) so that user would be able to:
>> Convert any country currency to his desired countries and know which countries he can use it

## ScreenShot
![pn](https://user-images.githubusercontent.com/12422620/192004321-7c99d5d1-732c-4c29-b685-6e15088e3a41.png)


### Searched Result
![pn2](https://user-images.githubusercontent.com/12422620/192004363-1bce9782-cbcb-42e7-a7ac-cb93e02d8292.png)




### Links

- Solution URL: https://github.com/Danities316/currency-converter-js
- Live Site URL: https://shrouded-mesa-22373.herokuapp.com/

## My process
- I used googleapis for the font by @import url('https://fonts.googleapis.com/css2?family=Manrope:wght@800&display=swap');
- I Creatively create responsive landing page using boostrap 5, i was greatly inspired by the work of others projects
- I simply fetch currency exchange API data using **Axios**, creat a function to get all the data, extract the rates for each country(rates), calculate the country base currency(baseCurrency) and calculate the exchange rate(baseCurrency * rates[toCurrency].
- Deploying the project to Heroku - I have to understand the steps and process of hosting nodejs project on the cloud

### Built with
- Semantic HTML5 markup
- Boostrap 5
- express
- Express-handlebars
- currency exchange API
- Countries API

### What I learned
- Fetching API data and manipulating them
- How to use async/await, it functionalities and manage errors
- Deep understanding of How to manipulate API data
- How to create mobile-first project
- Deploying project to either Heroku or any other cloud base services


### Continued development
- I would like to create modularity in the file structure -  following webpack standard
- I would like to upgrade the currency converter to a more functioanl and usable app

### Useful resources
-  google 
- stakeoverflow 

### Author
- [Danities Ichaba - Linkdin](https://www.linkedin.com/in/danities-ichaba-50a806171?lipi=urn%3Ali%3Apage%3Ad_flagship3_profile_view_base_contact_details%3Bww5hjSUjT%2BCSaJSXADphiQ%3D%3D)
- [Danities Ichaba Twitter](https://twitter.com/danitiestech)
- [Danities Ichaba Hashnode](https://hashnode.com/@Danities)
Twitter - @danitiestech
