// Thanks: http://stackoverflow.com/a/11354026/878361
// Thanks: http://stackoverflow.com/a/9090128/878361
function kgMenu(selectorOrElement, options) {

  options = options || {};

  // Set default options
  options = {
    html5: typeof options.html5 == 'boolean' ? options.html5 : false
  };

  var animationEndEventName = null;
  var linkToBeClickedAfterClosing = null;

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

  init();

  // There are only Function declarations after that point, no other statements but the return statement.
  ////////////////////////////////////////////////////////////////////

  // Internal work functions
  // ========================

  function init() {
    // For idiots still using Microsoft products
    if (!window.console) {
      function noOp(){};
      window.console = {
        log: noOp,
        warn: noOp,
        error: noOp,
        clear: noOp
      }
    }

    addClass(menuElement, 'kg-touch-menu');
    var liArray = menuElement.querySelectorAll('.kg-touch-menu>ul>li');

    for(var i = liArray.length - 1; i >= 0; i--){
      var liElement = liArray[i];

      switch(i){
        case 0:
          addClass(liElement, 'top left');
          break;
        case 1:
          addClass(liElement, 'top right');
          break;
        case 2:
          addClass(liElement, 'upper left');
          break;
        case 3:
          addClass(liElement, 'upper right');
          break;
        case 4:
          addClass(liElement, 'left');
          break;
        case 5:
          addClass(liElement, 'right');
          break;
        case 6:
          addClass(liElement, 'bottom left');
          break;
        case 7:
          addClass(liElement, 'bottom left');
          break;
      }
    }

    // Configure child menus
    var childMenus = menuElement.querySelectorAll('.kg-touch-menu>ul>li>ul');
    for(var i = childMenus.length - 1; i >= 0; i--){
      var childMenu = childMenus[i];
      addClass(childMenu, 'kg-child');
      addClass(childMenu.parentElement, 'kg-has-child');

      // Clear href if any in sub menu opener link
      var submenuOpener = childMenu.parentElement.querySelector('a');
      if(submenuOpener){
        submenuOpener.addEventListener('click', openSubMenu, true);
      }

      var childLis = childMenu.querySelectorAll('li');
      var childLiHeightPercent = 100/childLis.length;
      for(var j = childLis.length - 1; j >= 0; j--){
        var childLi = childLis[j];
        childLi.style.height = childLiHeightPercent + '%';
        childLi.style.lineHeight = childLi.clientHeight + 'px';
      }
    }

    // Bind close button action
    menuElement.querySelector('.kg-close').addEventListener('click', closeMenu, false);

    // Bind `gotoLink` action to links which will open in the same window
    var allLinks = menuElement.querySelectorAll('ul > li:not(.kg-has-child) > a:not([target="_blank"])');

    for(var i = allLinks.length - 1; i >= 0; i--) {
      var link = allLinks[i];
      link.insertAdjacentHTML('afterend', '<div class="kg-link-curtain"></div>');
      link.parentElement.querySelector('.kg-link-curtain').addEventListener('click', gotoLink, false);
    }

    // Bind `closeMenu` action to links which will open in new window/tab
    var allLinks = menuElement.querySelectorAll('ul > li > a[target="_blank"]');

    for(var i = allLinks.length - 1; i >= 0; i--) {
      var link = allLinks[i];
      link.addEventListener('click', closeMenu, false);
    }
  }

  function calculateDimensions() {
    // console.log('calculateDimensions')

    // ul height
    var backBtnHeight = menuElement.querySelector('.kg-close').offsetHeight;
    menuElement.querySelector('ul').style.height = (menuElement.offsetHeight - backBtnHeight) + 'px';

    // li lineheight
    var liArray = menuElement.querySelectorAll('ul li');
    for(var i = liArray.length - 1; i >= 0; i--){
      var liElement = liArray[i];

      liElement.style.lineHeight = liElement.clientHeight + 'px';
    }
  }

  // Event handler functions
  // =======================

  function openSubMenu(event) {
    if(event.eventPhase == Event.AT_TARGET){
      event.preventDefault();
      event.stopPropagation();

      // `this.nextSibling` is the submenu (ul element)
      addClass(this.nextSibling, 'kg-shown');
      calculateDimensions();//TODO unnecessary calculations could be reduced
    }
  }

  function gotoLink(event) {
    event.preventDefault();
    event.stopPropagation();
    linkToBeClickedAfterClosing = this.previousSibling;
    closeMenu();
  }

  menuElement.querySelector('ul li').addEventListener(getAnimationEndEventName(), animationEndCallback, false);

  function animationEndCallback() {
    if(menuElement.className.split(' ').indexOf('kg-hidden') > -1){
      menuElement.style.display = 'none';
    }

    if(linkToBeClickedAfterClosing){
      fireEvent(linkToBeClickedAfterClosing, 'click');
      linkToBeClickedAfterClosing = null;
    }
  }

  // Action functions
  // ===================

  function openMenu(){
    menuElement.style.display = 'block';

    calculateDimensions();
    
    removeClass(menuElement, 'kg-hidden');
    addClass(menuElement, 'kg-shown');

    addClass(document.body, 'kg-no-scroll');
  }

  function closeMenu(){
    removeClass(menuElement, 'kg-shown');
    addClass(menuElement, 'kg-hidden');
    removeClass(document.body, 'kg-no-scroll');

    // Close all submenus
    var openedSubMenus = menuElement.querySelectorAll('ul.kg-child.kg-shown');
    for (var i = openedSubMenus.length - 1; i >= 0; i--) {
      var openedMenu = openedSubMenus[i];
      removeClass(openedMenu, 'kg-shown');
    };

    // display property will be changed in animationend callback
  }

  // Utilitiy functions
  // ===================

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

  /**
  * Fire an event handler to the specified node. Event handlers can detect that the event was fired programatically
  * by testing for a 'synthetic=true' property on the event object
  * http://stackoverflow.com/a/2381862/878361
  * 
  * @param {HTMLNode} node The node to fire the event handler on.
  * @param {String} eventName The name of the event without the "on" (e.g., "focus")
  */
  function fireEvent(node, eventName) {
    // Make sure we use the ownerDocument from the provided node to avoid cross-window problems
    var doc;
    if (node.ownerDocument) {
      doc = node.ownerDocument;
    }
    else if (node.nodeType == 9){
      // the node may be the document itself, nodeType 9 = DOCUMENT_NODE
      doc = node;
    }
    else {
      throw new Error("Invalid node passed to fireEvent: " + node.id);
    }

    if (node.dispatchEvent) {
      // Gecko-style approach (now the standard) takes more work
      var eventClass = "";

      // Different events have different event classes.
      // If this switch statement can't map an eventName to an eventClass,
      // the event firing is going to fail.
      switch (eventName) {
          case "click": // Dispatching of 'click' appears to not work correctly in Safari. Use 'mousedown' or 'mouseup' instead.
          case "mousedown":
          case "mouseup":
          eventClass = "MouseEvents";
          break;

          case "focus":
          case "change":
          case "blur":
          case "select":
          eventClass = "HTMLEvents";
          break;

          default:
          throw "fireEvent: Couldn't find an event class for event '" + eventName + "'.";
          break;
        }
        var event = doc.createEvent(eventClass);

        var bubbles = eventName == "change" ? false : true;
      event.initEvent(eventName, bubbles, true); // All events created as bubbling and cancelable.

      event.synthetic = true; // allow detection of synthetic events
      // The second parameter says go ahead with the default action
      node.dispatchEvent(event, true);
    }
    else  if (node.fireEvent) {
      // IE-old school style
      var event = doc.createEventObject();
      event.synthetic = true; // allow detection of synthetic events
      node.fireEvent("on" + eventName, event);
    }
  }

  // Lazily calculates and caches `animationend` event name for current browser
  function getAnimationEndEventName () {
    var i;
    var _undefined;
    var el = document.createElement('div');
    var transitions = {
      'animation':'animationend',
      'MozAnimation':'animationend',
      'WebkitAnimation':'webkitAnimationEnd'
     };

    if(animationEndEventName){
      return animationEndEventName;
    }

    for (i in transitions) {
      if (transitions.hasOwnProperty(i) && el.style[i] !== _undefined) {
        return transitions[i];
      }
    }

    console.warn('Animation is not supported in this browser. Touch menu may not work properly.');
    return '';
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