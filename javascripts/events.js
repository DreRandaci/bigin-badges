'use strict';

$('#btnsContainer').click((e) => {
    if (e.target.id === "bounce") {
        $('.col-md-3').addClass('bounce');
    } else if (e.target.id === 'tada') {
        $('.col-md-3').addClass('tada');
    } else if (e.target.id === 'hinge') {
        $('.col-md-3').addClass('hinge');
    } else if (e.target.id === 'rotate') {
        $('.col-md-3').addClass('rotateIn');
    }
});

module.exports = {};