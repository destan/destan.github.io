// Thanks: http://stackoverflow.com/a/4229290/878361
var Quote = (function QuoteClassInitialization() {

  var storageNamespace = 'com.kodgemisi.quote.';

  var millisecondMap = {
    none: 0,
    minute: 60000,
    hour: 3600000,
    day: 86400000
  };

  // Variables
  // =========

  // Initialized in constructor
  var quotes;

  // Lazily initialized
  var randomQuoteSequence;

  // Functions
  // =========

  function generateRandomQuoteSequence() {
    if(localStorage){
      randomQuoteSequence = Object.keys(quotes);
      shuffle(randomQuoteSequence);
      localStorage.setItem(storageNamespace + 'randomQuoteSequence', JSON.stringify(randomQuoteSequence));
    }
  }

  function transformQuotesArray(arrayByUser) {
    var result = {};
    var totalHash = 0;
    for(var i in arrayByUser){
      var quote = arrayByUser[i];
      var hashValue = hash(quote);
      result[hashValue] = quote;
      totalHash += hashValue;
    }
    return {
      hash: totalHash,
      result: result
    };
  }

  // Getters
  // =======

  function getNextId(interval) {
    var lastQuoteId = null;

    // Check local storage
    if(localStorage){
      var lastQuoteIndex = localStorage.getItem(storageNamespace + 'lastQuoteIndex');

      if(!lastQuoteIndex){// lastQuoteIndex is string in this point, so '!' will behave as expected
        generateRandomQuoteSequence();
        lastQuoteIndex = -1;// this will be incremented before usage
      }

      lastQuoteIndex = parseInt(lastQuoteIndex);
      randomQuoteSequence = getRandomQuoteSequence();
      var lastChangeTime = localStorage.getItem(storageNamespace + 'lastChangeTime');
      lastChangeTime = parseFloat(lastChangeTime); // If lastChangeTime is null then this produces NaN

      // Advance the index if necessary
      if( isNaN(lastChangeTime) || +new Date() - lastChangeTime >= interval){
        ++lastQuoteIndex;

        // Reset the index when end of the array is reached
        if(lastQuoteIndex >= Object.keys(quotes).length){
          lastQuoteIndex = 0;// this will NOT be incremented before usage
        }

        localStorage.setItem(storageNamespace + 'lastQuoteIndex', lastQuoteIndex);
        localStorage.setItem(storageNamespace + 'lastChangeTime', +new Date());
      }

      lastQuoteId = randomQuoteSequence[lastQuoteIndex];

      return lastQuoteId;
    }
    else{
      // no localStorage so give a one time random quote, no guarantee of non-duplicate occurence
      return randomQuoteSequence[0];
    }
  }

  function generateHTMLForQuote(quote) {
    var byLine = quote.url ? '<a href="' + quote.url + '" target="_blank" rel="nofollow">' + quote.by + '</a>' : quote.by;

    return  '' +
            '<section class="kg-quote">' +
            '  <div class="kg-text">“' + quote.text + '”</div>' +
            '  <div class="kg-by">― ' + byLine + '</div>' +
            '</section>';
  }

  function getQuote(interval) {
    var quoteId = getNextId(interval);
    return quotes[quoteId];
  }

  // Lazily loads randomQuoteSequence from localStorage
  function getRandomQuoteSequence() {
    if(!randomQuoteSequence){
      if(localStorage){
        // In getNextId function generateRandomQuoteSequence is called if needed before this function. So it's guaranteed that 
        // randomQuoteSequence is initialized if there is a localStorage.
        randomQuoteSequence = localStorage.getItem(storageNamespace + 'randomQuoteSequence');
        randomQuoteSequence = JSON.parse(randomQuoteSequence);
      }
      else{
        randomQuoteSequence = generateRandomQuoteSequence();
      }
    }
    return randomQuoteSequence;
  }

  // Utils
  // =====

  // Thanks: http://stackoverflow.com/a/2450976/878361
  function shuffle(array) {
    var currentIndex = array.length
    , temporaryValue
    , randomIndex
    ;

    // While there remain elements to shuffle...
    while (0 !== currentIndex) {

      // Pick a remaining element...
      randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex -= 1;

      // And swap it with the current element.
      temporaryValue = array[currentIndex];
      array[currentIndex] = array[randomIndex];
      array[randomIndex] = temporaryValue;
    }

    return array;
  }

  // Thanks: http://stackoverflow.com/a/7616484/878361
  function hash(quoteObject) {
    var text = quoteObject.text + quoteObject.by + quoteObject.url;

    var hash = 0, i, chr, len;
    if (text.length == 0) return hash;
    for (i = 0, len = text.length; i < len; i++) {
      chr   = text.charCodeAt(i);
      hash  = ((hash << 5) - hash) + chr;
      hash |= 0; // Convert to 32bit integer
    }
    return hash;
  };

  // This function will ultimately be the "constructor" for your object
  function Quote(options) {
    options = options || {};

    if(!options.source){
      throw 'Quote Library: `source` is a mandatory property';
    }

    if(typeof options.source != 'object' || typeof options.source.length == 'undefined'){
      throw 'Quote Library: `source` property must be an array';
    }

    var retVal = transformQuotesArray(options.source);

    quotes = retVal.result;

    // If quote list is changed then reset localStorage
    var storedHash = localStorage.getItem(storageNamespace + 'totalHash');
    if(storedHash != retVal.hash){
      // localStorage.clear();
      generateRandomQuoteSequence();
      localStorage.setItem(storageNamespace + 'totalHash', retVal.hash);
    }

    this.options = {
      interval: millisecondMap[options.interval] || millisecondMap['none']
    }
  }

  Quote.prototype.renderInto = function(selector) {

    if(typeof selector == 'string'){
      var containerElement = document.querySelector(selector);
    }
    else{
      containerElement = selector;// In jQuery plugin, DOM object is directly passed
    }

    if(containerElement instanceof Element){
      containerElement.innerHTML += generateHTMLForQuote(getQuote(this.options.interval));
      console.log(this.options.interval);
    }
    else{
      console.error('Quote Library: A DOM element should be provided, instead got:', selector);
    }
  };

  return Quote;
}());
