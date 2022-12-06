# Charles. (Apple Product Recommendation Bot) COSC 310

## What does Charles do?
Charles is a ChatBot the recommends the user their ideal Apple product based on the information gathered in the converstation.

## Charles Code
Charles has been developed in HTML, CSS and JavaScript. Here is a brief description of the operations each file runs.<br/>

- index.html - This formats the home page of Charles. <br/>
- about.html - This formats the about page of Charles.<br/>
- styles.css - This file is responsible of the looks aspect of Charles (ex. Color, font, font-size, etc...)<br/>
- app.js - This JavaScript file is responsible for the processing of the user input and sending it to the response.js file. This file also pastes the bots responses.<br/>
- response.js - This JavaScript file is responsible for analizing the text and finding the proper responses that are hardcoded in the file.<br/>
- response.test.js - Added for Assignment 3. This JavaScript file is responsible for unit testing of the major functions used in the response.js file.<br/>
## How it has changed from A3 to the Individual Project
- Implementation of 3 new features
  - Google Static Map API 
  - Google Translate API 
  - Wikipedia API 

## More Information about these new features are down below! 
## Toolkits & Features Implimented  
- Named Entity Recognition 
  - Breaks apart a sentance and goes through to recognize named entities.
  - [Snippet](NERsnip.png)
- Sentiment Analysis 
  - Analysis of words in a sentence to determine if the user input is positive or not.
  - [Snippet](Sentimentsnip.png)
- POS tagging 
  - Coverting sentences to lists of words to dictate if the word is a noun, verb, adjective, etc.
  - [Snippet](POSTaggersnip.png)
- A GUI that has been updated so the user can see conversation history, and the users input.
  - [Snippet](CharlesGUI.png)
- Five or more responses that are used for off topic inputs from the user.
   - [Snippet](5differentResponses.png)
- Charles has a total for 5 topics (4 topics from assignment 2, and 1 new topic added for assignment 3). The topics consist of: 
    - Watches
    - Phones 
    - Laptops
    - Tablets
    - Desktop (New)
- Google translate API - Converts all word into the language that is chosen by the viewer. Can convet the words into any language. (Individual Project)
- Wikipedia API - After the user choses a product, the user can recieve links of simmilar products that they can explore. (Individual Project)
- Google Static Maps API - Shows the user where they can purchase their ideal product if they choose to buy it in-store. (Individual Project)
## List of features that can be extracted from our code
- Our conversation flow, questions, and recommendations can be used and implemented as an API for other users 
- Our Sentiment analysis can be extracted and implemented into others code to help users further analyze their text so they can respond appropriately.
- The Named Entity Recognition feature can also be extracted to help users analyze parts of a given text to extract key words to further help the efficiency of the program.
- Users can also use our POS tagging that can further assist them in analyzing their text.
- Charles can be used by users as a fully functional API, which can be implemented for product recommendation purposes. 

## API's Implemented 
- JQuery - JavaScript library used to manage the event handling aspect of Charles. (A3)
- WINK API (NLP (Natural Language Processing) toolkits). (A3)
- Google Translate API - Converts the text on the page to any language to help users around the world understand better. (Individual Project)
- Wikipedia API - Gathers links of articles of the product you are interested in to help provide more information. (Individual Project)
- Google Static Maps API - Process a map image into an interactive map to help yoou locate that best location to find the ideal product. (Individual Project)



  
 ## Other Documentation 
 - [Project Report](COSC310Assignement3.pdf)
 - [DFD Level 0](DFDLevel0.md)
 - [DFD level 1](DFDLevel1.md)
 - [Testing Overview](Automated_Unit_Testing.md)
 - [Network Graph](https://github.com/charles-bot-groupTwo/COSC310/network)
 
 
# CharlesBot Video! 
- [Individual Project Demo Video](CharlesFinal.mp4)
