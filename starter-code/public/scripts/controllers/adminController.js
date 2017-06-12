'use strict'
//Stretch goal of adminController.js.
var app = app || {};

(function (module) {
  const adminController = {};

  adminController.init = function () {
    $('main > section').hide();
    $('#admin').fadeIn(750);

    app.adminView();
  }


})(app);