'use strict'
//Stretch goal of adminController.js.
var app = app || {};

(function (module) {
  const adminController = {};

  adminController.init = function () {
    $('main > section').hide();
    $('#blog-stats').show();

    if (!app.Article.all.length) {
      app.Article.fetchAll(app.adminView.initAdminPage);
    }  
    else {
      app.adminView.initAdminPage();
    }   
  }

  module.adminController = adminController;
})(app);