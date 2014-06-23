// Thanks: http://stackoverflow.com/a/11354026/878361
// Thanks: http://stackoverflow.com/a/9090128/878361
function kgMenu(selectorOrElement) {

  if(typeof selectorOrElement == 'string'){
    var menuElement = document.querySelector(selectorOrElement);
    if(!menuElement){
      throw 'Given selector does not indicate a DOM element!';
    }
  }
  else if(typeof selectorOrElement == 'object'){
    var menuElement = selectorOrElement;
    if(!menuElement){
      throw 'Given object must be a DOM element!';
    }
  }

  addClass(menuElement, 'kg-touch-menu');
  var liArray = menuElement.querySelectorAll('ul li');
  for(var i in liArray){
    var liElement = liArray[i];

    switch(i){
      case '0':
        addClass(liElement, 'top left');
        break;
      case '1':
        addClass(liElement, 'top right');
        break;
      case '2':
        addClass(liElement, 'upper left');
        break;
      case '3':
        addClass(liElement, 'upper right');
        break;
      case '4':
        addClass(liElement, 'left');
        break;
      case '5':
        addClass(liElement, 'right');
        break;
      case '6':
        addClass(liElement, 'bottom left');
        break;
      case '7':
        addClass(liElement, 'bottom left');
        break;
    }
  }

  var configurationApplied = false;
  var animationEndEventName = null;

  // For idiots still using Microsoft products
  if (!window.console) {
    var noOp = function(){}; // no-op function
    window.console = {
      log: noOp,
      warn: noOp,
      error: noOp,
      clear: noOp
    }
  }

  // bind close button action
  menuElement.addEventListener('click', function closeButtonClickHandler() {
    closeMenu();
  });

  function getAnimationEndEventName () {
    if(animationEndEventName){
      return animationEndEventName;
    }

    var i;
    var _undefined;
    var el = document.createElement('div');
    var transitions = {
      'animation':'animationend',
      'MozAnimation':'animationend',
      'WebkitAnimation':'webkitAnimationEnd'
     };

    for (i in transitions) {
      if (transitions.hasOwnProperty(i) && el.style[i] !== _undefined) {
        return transitions[i];
      }
    }

    console.warn('');
    return '';
  }

  menuElement.querySelector('ul li').addEventListener(getAnimationEndEventName(), animationEndCallback, false);

  function animationEndCallback(argument) {
    if(menuElement.className.split(' ').indexOf('kg-hidden') > -1){
      menuElement.style.display = 'none';
    }
  }

  function calculateDimensions() {
    // ul height
    var backBtnHeight = menuElement.querySelector('.kg-close').offsetHeight;
    menuElement.querySelector('ul').style.height = (menuElement.offsetHeight - backBtnHeight) + 'px';

    // li lineheight
    var liArray = menuElement.querySelectorAll('ul li');
    for(var i = 0; i < liArray.length; ++i){
      var liElement = liArray[i];

      liElement.style.lineHeight = liElement.clientHeight + 'px';
    }
  }

  function openMenu(){
    menuElement.style.display = 'block';

    calculateDimensions();
    
    removeClass(menuElement, 'kg-hidden');
    addClass(menuElement, 'kg-shown');
  }

  function closeMenu(){
    removeClass(menuElement, 'kg-shown');
    addClass(menuElement, 'kg-hidden');

    // display property will be changed in animationend callback
  }

  function addClass(element, className){
    var classArray = element.className.split(' ');
    if(classArray.indexOf(className) == -1){
      classArray.push(className);
    }
    element.className = classArray.join(' ');
  }

  function removeClass(element, className){
    var classArray = element.className.split(' ');
    var index = classArray.indexOf(className);
    if(index > -1){
      classArray.splice(index, 1);
    }
    element.className = classArray.join(' ');
  }

  return {
    openMenu: function() {
      openMenu();
    },
    closeMenu: function() {
      closeMenu();
    }
  };

}