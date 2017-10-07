'use strict';

const buildDomString = (badgeData) => {
    let domString = '';
    badgeData.forEach((badge) => {
        domString += `<div>`;
        domString +=    `<img src=${badge.icon_url}>`;
        domString += `</div>`;
    });
    writeToDom(domString);
};

const writeToDom = (domString) => {
    $('#badgeOutput').html(domString);
};

module.exports = {buildDomString};