sap.ui.define([
		"sap/ui/core/mvc/Controller",
		"sap/ui/model/json/JSONModel",
		"sap/ui/core/mvc/XMLView",
		"sap/ui/model/resource/ResourceModel"
	],

	function (Controller) {
		"use strict";

		return Controller.extend("controller.App", {
			onInit: function () {

			},

			onLanguageSelect: function (event) {
				var src = event.getSource();
				var selectedKey = src.getSelectedKey();
				sap.ui.getCore().getConfiguration().setLanguage(selectedKey);
			}

		});

	});