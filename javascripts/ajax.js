'use strict';
const dom = require('./domHandler');

$.ajax('https://teamtreehouse.com/drerandaci.json').done((data) => {
    let badgeData = {};
    console.log('full data:', data);
    badgeData = data.badges;
    console.log('badgeData:', badgeData);
    dom.buildDomString(badgeData);
}).fail((error) => {
    console.log(error);  
});

module.exports = {};