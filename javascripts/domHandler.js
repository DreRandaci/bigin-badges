'use strict';

const printButtons = () => {
    $('#btnsContainer').html(
        `<button id='bounce' class='btnSize animated fadeIn btn btn-info'>Bouncy</button>
        <button id='tada' class='btnSize animated fadeIn btn btn-info'>TADA!</button>
        <button id='hinge' class='btnSize animated fadeIn btn btn-info'>Off the hinges</button>        
        <button id='rollOut' class='btnSize animated fadeIn btn btn-info'>Lets Roll Out</button>
        <button id='flash' class='btnSize animated fadeIn btn btn-info'>Flash em broh</button>
        <button id='rotate' class='btnSize animated fadeIn btn btn-info'>Rotate em broh</button>
        <button id='shake' class='btnSize animated fadeIn btn btn-info'>Shake em broh</button>`);
};

const tooltipToggle = () => {
    $(() => {
        $('[data-toggle="tooltip"]').tooltip();
    });
};

const buildDomString = (badgeData) => {
    let domString = '';
    badgeData.forEach((badge) => {
        domString += `<div class='col-md-3 animated infinite'>`;
        domString +=    `<a href='#' data-toggle="tooltip" data-placement="right" title="${badge.name}">`;
        domString +=        `<img class='animated bounceInUp' src=${badge.icon_url}>`;
        domString +=    `</a>`;
        domString += `</div>`;
    });
    writeToDom(domString);
};

const writeToDom = (domString) => {
    $('#badgeOutput').html(domString);
    printButtons();
    tooltipToggle();
};

const refreshDom = (badgeData) => {
    let domString = '';
    badgeData.forEach((badge) => {
        domString += `<div class='col-md-3 animated infinite'>
                        <img class='animated' src=${badge.icon_url}>
                      </div>`;
    });
    writeRefreshToDom(domString);
};

const writeRefreshToDom = (domString) => {
    $('#badgeOutput').html(domString);
    tooltipToggle();
};

module.exports = {buildDomString, refreshDom};