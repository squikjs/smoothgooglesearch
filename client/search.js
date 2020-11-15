const languages = require('../data/languages.json');
const errors = require('../errors/searchError.js');

class Search {
  constructor(options) {
    this.options = options;
  }
  google(query) {
    if (query.includes(' ')) { query.replace(/ /gi, '%20')}
    var searchQuery = "https://www.google.com/search?q=" + query;
    return searchQuery;
  }
  youtube(query) {
    var searchQuery = "https://www.youtube.com/search?q=" + query;
    return searchQuery;
  }
  googleMaps(query) {
    var searchQuery = "https://www.google.com/maps?q=" + query;
    return searchQuery;
  }
  googleTranslate(query) {
    let from = query.from ? query.from: 'auto';
    let to = query.to ? query.to: 'auto';
    let text = query.text ? query.text : ' ';
    let checkFrom = languages[from];
    let checkTo = languages[to];
    if (from != 'auto' && checkFrom === undefined) { 
      const error = errors.searchError('Invalid language code.')
      console.log(error)
      process.exit(1)
    }
    if (to != 'auto' && checkTo === undefined) { 
      const error = errors.searchError('Invalid language code.')
      console.log(error)
      process.exit(1)
    }
    var searchQuery = `https://translate.google.com/?q=#view=home&op=translate&sl=${from}&tl=${to}&text=${text}`
    return searchQuery;
  }
  googlePlayStore(query, categorySearch) {
    if (query.includes(' ')) { query.replace(/ /gi, '%20')}
    let category = categorySearch ? `&c=${categorySearch}` : ' ';
    let q = query ? `${query}` : ' ';
    const categoryList = [
      '&c=apps',
      '&c=books',
      '&c=movies'
    ]
    if (category != ' ' && !categoryList.includes(category)) {
      const error = errors.searchError('Inavlid category given.')
      console.log(error)
      process.exit(1)
    }
    var searchQuery = `https://play.google.com/store/search?q=${q}${category}`;
    return searchQuery;
  }
}

module.exports = Search;
