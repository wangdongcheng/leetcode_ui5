sap.ui.define([
	"sap/ui/core/mvc/XMLView"
], function(XMLView) {
	"use strict";

	XMLView.create({
		viewName: "leetcode.view.Editor"
	}).then(function(oView) {
		oView.placeAt("content");
	});

});