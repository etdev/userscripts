// ==UserScript==
// @name         Fix StackOverflow
// @namespace    http://stackoverflow.com/
// @version      0.1
// @description  Don't make me scroll horizontally, and remove sidebar
// @author       etdev (etdev.me)
// @match        http://stackoverflow.com/*
// @grant        none
// ==/UserScript==
// Remove the right-hand sidebar, don't horizontal-scroll code boxes, and increase max width of main container

window.onload = function() {
  removeSidebar();
  expandMaxWidth();
  preventHorizScrolling();
};

function removeSidebar() {
  var sidebar = document.getElementById("sidebar");
  sidebar.style.display = "none";
}

function expandMaxWidth() {
  var mainDivStyle = document.getElementById("content").style;
  mainDivStyle.removeProperty("width");
  mainDivStyle.minWidth = "1000px";
  mainDivStyle.maxWidth = "1500px";
  var mainBarStyle = document.getElementById("mainbar").style;
  mainBarStyle.width = "100%";
}

function preventHorizScrolling() {
  var pres = document.getElementsByTagName("pre");
  for (var i=0; i<pres.length; i++) {
    pres[i].style.minWidth = "100%";
    pres[i].style.float = "left";
  }
}

