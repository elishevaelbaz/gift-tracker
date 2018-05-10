// script for doing the scraping
var axios = require("axios")
var cheerio = require("cheerio")

// registry ID
var regID = 544119829
var url = "https://www.bedbathandbeyond.com/store/giftregistry/view_registry_guest.jsp?pwsToken=&eventType=Wedding&inventoryCallEnabled=true&registryId" + regID

var scrape = function(){
	return axios.get(url).then(function(res){
		var $ = cheerio.load(res.data);
		var items = [];

		$(".grid_12").each(function(i, element){

			var name = $(this).children(".blueName").text().trim();


			console.log(name)
      var dataToAdd = {
        name: name
        // ,
        // summary: sumNeat,
        // url: url
      };

      items.push(dataToAdd);
      
    });
    return items;




			
		
	});
};

module.exports = scrape;