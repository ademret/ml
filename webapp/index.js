sap.ui.require([
	"sap/ui/model/json/JSONModel",
	"sap/ui/core/mvc/XMLView",
	"sap/ui/model/resource/ResourceModel",
	"sap/base/i18n/ResourceBundle",
	"sap/ui/commons/layout/MatrixLayout",
	"sap/ui/commons/TextView"
], function (JSONModel, XMLView, ResourceModel, ResourceBundle, MatrixLayout, TextView) {
	"use strict";

	// Attach an anonymous function to the SAPUI5 'init' event
	sap.ui.getCore().attachInit(function () {
		// Create a JSON model from an object literal
		var oModel = new JSONModel({
			firstName: "Harry",
			lastName: "Hawk",
			enabled: true
		});

		// Assign the model object to the SAPUI5 core
		sap.ui.getCore().setModel(oModel);

		// Create a resource bundle for language specific texts
		var oResourceModel = new ResourceModel({
			bundleName: "sap.ui.demo.db.i18n.i18n"
		});

		// Assign the model object to the SAPUI5 core using the name "i18n"
		sap.ui.getCore().setModel(oResourceModel, "i18n");

		// Display the XML view called "App"
		new XMLView({
			viewName: "sap.ui.demo.db.view.App"
		}).placeAt("content");


		var db = new PouchDB('sample');
		db.info().then(function (info) {
		  document.getElementById('display').innerHTML = 'We have a database: ' + JSON.stringify(info);
		});		
	});

});