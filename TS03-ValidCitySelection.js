var weathertest = require('./WeatherPage.js');
var Test = require('./TestData1.json');

describe('To Open URL', function() {

    it('Test User Enetered ValidCity',function(){
        weathertest.OpenURL(Test.strURL);
        weathertest.CityWeather(Test.strCity);
    });

    });