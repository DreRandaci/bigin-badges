'use strict';

const data = require('./ajax');
const dom = require('./domHandler');

$('#btnsContainer').click((e) => {
    let badges = data.getData();
    dom.refreshDom(badges);
    switch (e.target.id) {
        case 'bounce':
            $('.col-md-3').addClass('bounce');
            break;
        case 'tada':
            $('.col-md-3').addClass('tada');
            break;
        case 'hinge':
            $('.col-md-3').addClass('hinge');
            break;
        case 'rotate':
            $('.col-md-3').addClass('rotateIn');
            break;
        case 'rollOut':
            $('.col-md-3').addClass('rollOut');
            break;
        case 'flash':
            $('.col-md-3').addClass('flash');
            break;
        case 'shake':
            $('.col-md-3').addClass('shake');
            break;  
        default:
            window.alert('THAT BUTTON DOESNT F*KIN WORK BROH');
    }
});

module.exports = {};