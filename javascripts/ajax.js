'use strict';
const dom = require('./domHandler');

let badgeData = {};

$.ajax('https://teamtreehouse.com/drerandaci.json').done((data) => {
    badgeData = data.badges;
    dom.buildDomString(badgeData);
}).fail((error) => {
    console.log(error);  
});

const getData = () => {
    return badgeData;
};

module.exports = {getData};