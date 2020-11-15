# smoothgooglesearch
**A simple library to get url's from google, as simple as possible.**
***
Sample code to start with 
---
Use `npm install smoothgooglesearch` to install the package!
```Javascript
//here we initialise the constants google (which imports the package) and search(which will be used to get url's)
const google = require('smoothgooglesearch')
const search = new google.Search(); 

//here we make a variable called "googleUrl"
let googleUrl = search.google('#textforsearching')
let youtubeUrl = search.youtube('#textforsearching')
let mapsurl = search.googleMaps('#textforsearching')
//for translateUrl you have to give parameters
/** 
 * @params text - Text to translate.
 * @params from - Language to translate from, it will be auto if not specified.
 * @params to - Language to translate to, it will be auto if not specified.
*/
let translateUrl = search.googleTranslate({text : '#textforsearching', from: 'en', to: 'es'})
let googlePlayStoreUrl = search.googlePlayStore('#textforsearching', 'apps') //'#category - can be apps, books or movies.'
console.log(googleUrl, youtubeUrl, mapsurl, translateUrl, googlePlayStoreUrl)

```