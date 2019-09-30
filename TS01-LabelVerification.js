var weathertest = require('./WeatherPage.js');
var Test = require('./TestData1.json');

describe('To Open URL', function() {

    it('Test User can Access the URL',function(){
        weathertest.OpenURL(Test.strURL);
        weathertest.VerifyLabels();
    });

    });