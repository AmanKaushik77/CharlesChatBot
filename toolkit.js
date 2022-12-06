
var text = "I am looking to find a new phone for myself"


// console.log("POS Tagger --------------------")
// POSTagger(text);
// console.log("Sentiment -----------");
// Sentiment(text);
// console.log("NER-----------------------");
// NER(text);
moreInfo(3);
function POSTagger (text){

var posTagger = require( 'wink-pos-tagger' );

var tagger = posTagger();


var tagged = tagger.tagSentence(text);
for(var i = 0; i < tagged.length; i++){
    console.log(tagged[i]);
}

}


function Sentiment(text){

var sentiment = require( 'wink-sentiment' );

    console.log( sentiment( text ) );

}

function NER(text){
    var ner = require( 'wink-ner' );

var myNER = ner();

var trainingData = [
  { text: 'phone', entityType: 'product'},
  { text: 'desktop', entityType: 'product' },
  { text: 'laptop', entityType: 'product' },
  { text: 'tablet', entityType: 'product' },
  { text: 'watch', entityType: 'product' }
];

myNER.learn( trainingData );

var winkTokenizer = require( 'wink-tokenizer' );

var tokenize = winkTokenizer().tokenize;

var tokens = tokenize( text );

tokens = myNER.recognize( tokens );
var tok = tokens;

console.log( tok );

}

function moreInfo( productType){
  var request = require('request');
  var query ;
  if(productType ==1 ){
      query = "apple watch";
  }else if(productType == 2){
      query = "macbook";
  }else if(productType == 3){
      query = "apple iphone";
  }else if(productType == 4){
      query = "apple ipad";
  }else if(productType == 5){
      query = "apple desktop";
  }
  
  var parturl = "https://en.wikipedia.org/w/api.php?action=opensearch&search=";
  var format = "&format=json";

  var url = parturl+query+format;
  var summary;
  request(url, function (err, response, body) {
   if(err){
      var error = "Cannot connect to server";
      console.log(err);
  }    else {
      var wiki = JSON.parse(body);
      for (var i = 0; i < wiki[1].length; i++) {
          var wikiOne = wiki[1][i];
          var wikiTwo = wiki[2][i];
          var wikiThree = wiki[3][i];

          var data = " Simmilar products that you can explore: " + wikiOne + " Details - " + wikiTwo + " Follow this link: " + wikiThree + "\n";
          summary += data;
         
      }
      console.log(summary.toString());
      return summary;
      
  }
  });
}









