# How to make this package work?
***
First, install the package via `npm install smoothgooglesearch`.
Next, to import the package in your code, use the following in your code:
```Javascript
const google = require('smoothgooglesearch')
const search = new google.Search(); 
```
To get the url you want, you have to make a request like this:
```Javascript
var url = search.google('[text you wanna search]')
```
This variable `url` is just a string (in url format) that will take you to the google search and write your text in the search bar.
***
Functions you can use:
`google('text')` - Google search
`youtube('text')` - YouTube search
`googleMaps('text')` - Search Google Maps for a place
`googleTranslate({text: 'text', from: 'en', to: 'es'})` - "text" is the text to transalte, "from" is the language to translate from and "to" is the language to translate to.
`googlePlayStore('text', 'apps')` - "text" is the text to search for and "apps" is the category to search for. If no category is specified, then it will search for all categories.
`gmail('inbox')` - Open gmail, "inbox" is the field. You can use starred, imp, etc.
