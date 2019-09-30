var weathertest = require('./WeatherPage.js');
var Test = require('./TestData2.json');

describe('To Open URL', function() {

    it('Test User Enetered InvalidCity',function(){
        weathertest.OpenURL(Test.strURL);
        weathertest.CityWeather(Test.strCity);
    });

    });