//= require vendor

$(function() {

  quotes = [
    {
      text: "The best way to predict your future is to create it",
      by: "Abraham Lincoln"
    },
    {
      text: "Science advances one funeral at a time",
      by: "(derived from) Max Planck"
    },
    {
      text: "A pessimist is an experienced optimist",
      by: "Oscar Wilde"
    },
    {
      text: "The amount of energy necessary to refute bullshit is an order of magnitude bigger than to produce it",
      by: "Alberto Brandolini",
      url: "https://twitter.com/theagilepirate/status/471655978468122625/"
    }
  ];

  var quoteOfTheDay = new Quote({
    interval: 'minute',
    source: quotes
  });
  quoteOfTheDay.renderInto('#quoteContainer');

});