const axios = require('axios');
const express = require('express');


//GetExchangeRate
const getExchangeRate = async (fromCurrency, toCurrency) =>{
    try {
            // Await data asynchrouneously and then assign it to response after returning the data
    const response =  await axios.get(`https://v6.exchangerate-api.com/v6/${process.env.CAPI_KEY}/latest/${fromCurrency}`)
    const rates = response.data.conversion_rates;
    // Divide the rate of the base currency by 1 
    const baseCurrency = 1 / rates[fromCurrency];
    //The exchange rate would now be The base currency multiply by the rates of the desired currency
    const exchangeRate = baseCurrency * rates[toCurrency]
    // console.log(exchangeRate)
    //Manages Errors messages
    if(isNaN(exchangeRate)){
        throw new Error(`Unable to get ${fromCurrency} as base currency for ${toCurrency}`)
    }
    return exchangeRate
        
    } catch (error) {
        throw new Error(`Unable to get ${fromCurrency} as base currency for ${toCurrency}`)
    }

}

//GetCountries
const getCountries = async (toCurrency) => {
    try {    
           // Await data asynchrouneously and then assign it to response after returning the data
        const response = await axios.get(`https://restcountries.com/v3.1/currency/${toCurrency}`)
        // Return only the names of the countries and disregard any other data
        return response.data.map(countries => countries.name.common)
    } catch (error) {
        throw new Error(`Unable to get Countries that use ${toCurrency} as currency`)
        
    }
}

//ConvertCurrency
const convertCurrency = async (toCurrency, fromCurrency, amount) =>{
    // Get name of the current country(desired country to convert currency to)
        const countries = await getCountries(toCurrency);
        //Get the exchange rate from the function
        const exchangeRate = await getExchangeRate(fromCurrency,toCurrency);
        // Multiply the amount with the exchancge rate and then rounds it to 2 decimals.
        //toFixed() turn a number to string and rounds the string to a specified number of decimals.
        const convertedAmount = (amount * exchangeRate).toFixed(2);
        return `${amount} ${fromCurrency} = ${convertedAmount} ${toCurrency}. It can be spend in the following countries ${countries}` 
  
       
}

const convertedCurrency = (req, res) =>{
    // let body = req.body
    const toCurrency = req.body.toCurrency;
    const fromCurrency = req.body.fromCurrency
    const amount = req.body.amount
    convertCurrency(toCurrency, fromCurrency, amount)
    .then((message) => {
        const exchangeRate =  getExchangeRate(fromCurrency, toCurrency)
        console.log(res.statusCode)
    res.render('convertedCurrency', {
       data: message

    })
})
    .catch((error) => {
    res.render('convertedCurrency', {
        data: error.message
    })
})
}


// Call convert currency to get meaningful data.

module.exports = convertedCurrency