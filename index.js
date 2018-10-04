const request = require('request');
const argv = require('yargs').argv;


let apiKey = 'adbc7ef7db215de95a53a97c886da6e2';
let city = argv.c || 'istanbul';
let url = `http://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${apiKey}`


request(url, function (err, response, body) {
  if(err){
    console.log('error:', error);
  } else {
  	let weather = JSON.parse(body);
  	let message = `It's ${weather.main.temp} degrees in ${weather.name}!`;
    console.log(message);
  }
});

