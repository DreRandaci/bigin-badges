'use strict';
const dom = require('./domHandler');

$.ajax('https://teamtreehouse.com/drerandaci.json').done((data) => {
    let badgeData = {};
    badgeData = data.badges;
    dom.buildDomString(badgeData);
}).fail((error) => {
    console.log(error);  
});

module.exports = {};