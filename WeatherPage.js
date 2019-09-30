var WeatherPage = function(){
    
      
       // Function or Method to Open URL
       this.OpenURL = function(strURL){
        browser.get(strURL);
        expect(browser.getCurrentUrl()).toContain('https://openweathermap.org');
        browser.sleep(2000);
        };
        // Verify Labels in the WebPage
       this.VerifyLabels = function(){
          // Check for Menu ( Heading Section is Present )
          expect(element(by.linkText('Weather')).isPresent()).toBe(true);
          browser.sleep(800);
          expect(element(by.linkText('Maps ')).isPresent()).toBe(true);
          browser.sleep(800);
          expect(element(by.linkText('Guide')).isPresent()).toBe(true);
          browser.sleep(800);
          expect(element(by.linkText('API')).isPresent()).toBe(true);
          browser.sleep(800);
          expect(element(by.linkText('Price')).isPresent()).toBe(true);
          browser.sleep(800);
          expect(element(by.linkText('Partners')).isPresent()).toBe(true);
          browser.sleep(800);
          expect(element(by.linkText('Stations')).isPresent()).toBe(true);
          browser.sleep(800);
          expect(element(by.linkText('Widgets')).isPresent()).toBe(true);
          browser.sleep(800);
          // Verify Sub Menu of Maps
          element(by.linkText('Maps ')).click();
          browser.sleep(800);
          expect(element(by.linkText('Weather maps')).isPresent()).toBe(true);
          browser.sleep(800);
          expect(element(by.linkText('Current satellite maps')).isPresent()).toBe(true);
          browser.sleep(800);
          expect(element(by.linkText('Beautiful places')).isPresent()).toBe(true);
          browser.sleep(800);

       };
       // Search City Weather 
       this.CityWeather = function(strCity){
           // Enter City Name
         var SearchBox = element(by.className('form-group search-cities__block'));
         expect(SearchBox.isPresent()).toBe(true);
         SearchBox.sendKeys(strCity);
         browser.sleep(800);
         // Click on Search Box
         var SearchCity = element(by.cssContainingText('[class="fa fa-question-circle"]',' Search'));
         expect(SearchCity.isPresent()).toBe(true);
         SearchCity.click();
         browser.sleep(800);
         // Search Result Verification :: Taken Temparature locator as base refernce
         var SearchResult = element(by.className('badge badge-info'));
         SearchResult.isDisplayed().then(function(txt){
         if(txt==true){
             expect(element(by.linkText(strCity)).isDisplayed()).toBe(true);
             console.log("Result Found");
         }
         else{
             throw "Exception -- City Not Found";
         }
         });
       };

    }
                    
    module.exports = new WeatherPage();
    
             
    