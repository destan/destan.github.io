Jekyll Template
================

Jekyll site template with ready to use custom features. Github pages compatible.

Features
--------

* Asset pipeline
  - Sass/Compass
  - Javascript compression and concatenation
  - HTML compression
* Built-in category pages
* Built-in tag pages
* Ready to use semantic HTML5 structure
  - `head`, `header`, `footer`, `google_analytics` partials
* Dynamic menu
* Draft flag

Install
-------

```
$ cd <project_dir>
$ rvm gemset create jekyll
$ rvm gemset use jekyll
$ git checkout jekyll
$ bundle install
$ jekyll serve -w --config _config.dev.yml
```

Omit `--config _config.dev.yml` to see all the blog posts, buld will be slower if you have more than 10 posts.

Usage
-----

1. git checkout jekyll #change branch to make modifications
2. Write posts with `.markdown` suffix because `.md` suffiexed files are ignored for performance on development.
3. See your changes in local `jekyll serve -w --config _config.dev.yml`
4. **add & commit & push new posts** to jekyll branch
5. run `./publi.sh` to publish changes to github pages

ToC script
----------

Run on a browser console for a page in dev environment, than paste the result to the page itself inside following tags:

```
<nav class="well">
  <header>İçindekiler</header>

{% markdown %}

  <PASTE HERE>

{% endmarkdown %}
</nav>
```

```
var result = '';
var debug = false;
var number = {
  H2: 1,
  H3: 1,
  H4: 1,
  H5: 1,
  H6: 1
};

var spaces = {
  H2: '',
  H3: '    ',
  H4: '        ',
  H5: '            ',
  H6: '                '
};

$('h2,h3,h4,h5,h6').each(function(i,e){
  var space = spaces[e.tagName];
  var prefix = number[e.tagName]++;
  var debugString = debug ? ' (' + e.tagName + ')' : '';

  result += space + prefix + '. [' + e.textContent.replace(/(\s{2,}|\n)/, '') + '](#' + e.id + ')' + debugString  + '\n';

  switch(e.tagName){
    case 'H2':
    number.H3 = 1;
    number.H4 = 1;
    number.H5 = 1;
    number.H6 = 1;
    break;
    case 'H3':
    number.H4 = 1;
    number.H5 = 1;
    number.H6 = 1;
    break;
    case 'H4':
    number.H5 = 1;
    number.H6 = 1;
    break;
    case 'H5':
    number.H6 = 1;
    break;
  }
});

console.log(result);
```

License
-------

GNU AFFERO GENERAL PUBLIC LICENSE, Version 3

See `LICENSE` file for full license.
