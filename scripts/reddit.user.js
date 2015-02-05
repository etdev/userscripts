// ==UserScript==
// @name         Fix Reddit
// @namespace    http://reddit.com/
// @version      0.1
// @description  Turn off sidebar by default and add toggle to turn it back on
// @author       etdev (etdev.me)
// @match        /reddit.com.*\/r\/.*comments.*/
// @grant        none
// ==/UserScript==
window.onload = function() {
  toggleSidebar();
};

function toggleSidebar() {
  var unwanted = [ ".linkinfo", ".sponsorshipbox", ".sidebox.submit.submit-link", ".sidebox.submit.submit-text", ".titlebox", ".sidecontentbox", ".account-activity-box" ];
  for (var i=0; i<unwanted.length; i++) {
    toggleVis(unwanted[i]);
  }
}

function toggleVis(selector) {
  console.log("selector: " + selector);
  var results = document.querySelectorAll(selector);
  for (var i=0; i<results.length; i++) {
    result = results[i];
    if (result.style.display === "none") { result.style.display = "visible"; }
    else { result.style.display = "none"; }
  }
}
