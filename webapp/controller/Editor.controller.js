sap.ui.define(
	[
		"sap/ui/core/mvc/Controller",
		"sap/m/MessageToast",
		"sap/ui/model/json/JSONModel"
	],
	function(Controller, MessageToast, JSONModel) {
		"use strict";
		return Controller.extend("leetcode.controller.Editor", {
			onInit: function() {
				var oLeetcodeList = {
					"SelectedLeetcode": "0032",
					"LeetcodeCollection": [{
						"LeetcodeID": "0032",
						"Name": "longest-valid-parentheses"
					}, {
						"LeetcodeID": "0322",
						"Name": "coin-change"
					}, {
						"LeetcodeID": "1103",
						"Name": "distribute-candies-to-people"
					}],
					"Editable": true,
					"Enabled": true
				};
				var oModel = new JSONModel(oLeetcodeList);
				this.getView().setModel(oModel);
			},
			onSubmit: function() {
				// show a native JavaScript alert

				// var oValue = sap.ui.getCore().byId("__input").getCustomData();
				var oValue = this.byId("__input").getValue() + this.getView().byId("__list").getSelectedItemId();
				this.byId("__output").setValue(oValue);
				MessageToast.show(oValue);
			}
		});
	});