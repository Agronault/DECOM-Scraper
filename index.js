const request = require("request-promise");
const parse = require('cheerio');
const linkTest = "http://www.decom.cefetmg.br/pessoas/coordenadores/";

module.exports = function(){

    request(linkTest).then(
        function(response){
            
            console.log(parse('div.row > div.col-md-10', response));
        }
    ).catch(
        function(err){
            console.log("ERROR");
        }
    );
}