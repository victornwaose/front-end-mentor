"use strict";

var container = document.querySelector('.bookmark');
var links = document.querySelectorAll('.link');
var contents = document.querySelectorAll('.content');
links.forEach(function (link) {
  link.addEventListener('click', function (e) {
    //console.log('link-clicked')
    toggleLinks(e);
    toggleContent(e);
  });
});

function toggleLinks(e) {
  links.forEach(function (link) {
    link.classList.remove('active');
    e.target.classList.add('active');
  });
}

function toggleContent(e) {
  contents.forEach(function (content) {
    content.classList.remove('active');
  });
  var selected = e.target.getAttribute('data-target');
  var shown = container.querySelector(selected);
  shown.classList.add('active');
}