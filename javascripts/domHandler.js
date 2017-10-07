'use strict';

const buildDomString = (badgeData) => {
    let domString = '';
    badgeData.forEach((badge) => {
        domString += `<div class='col-md-3 animated infinite'>`;
        domString +=    `<img class='animated bounceInUp' src=${badge.icon_url}>`;
        domString += `</div>`;
    });
    writeToDom(domString);
};

const writeToDom = (domString) => {
    $('#badgeOutput').html(domString);
    printButtons();
};

const printButtons = () => {
    $('#btnsContainer').html(
        `<button id='bounce' class='animated fadeIn btn btn-info'>Bouncy</button>
        <button id='tada' class='animated fadeIn btn btn-info'>TADA!</button>
        <button id='hinge' class='animated fadeIn btn btn-info'>Off the hinges</button>
        <button id='rotate' class='animated fadeIn btn btn-info'>Twist, bop it, rotate it</button>
        <button id='rollOut' class='animated fadeIn btn btn-info'>Lets Roll Out</button>
        <button id='flash' class='animated fadeIn btn btn-info'>Flash em broh</button>
        <button id='shake' class='animated fadeIn btn btn-info'>Shake em broh</button>`);
};

module.exports = {buildDomString};