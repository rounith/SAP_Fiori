sap.ui.define([
    "sap/ui/core/mvc/Controller",
    "sap/ui/model/json/JSONModel"
], function (Controller, JSONModel) {
    "use strict";

    return Controller.extend("cloud4c.fioriApp.controller.Main", {
        onInit: function () {
            // Example of setting a model for dynamic data binding
            var oData = {
                "MMItems": [
                    { "title": "Item 1" },
                    { "title": "Item 2" },
                    { "title": "Item 3" }
                ],
                "SDItems": [
                    { "title": "Item A" },
                    { "title": "Item B" },
                    { "title": "Item C" }
                ],
                "FICOItems": [
                    { "title": "Alpha" },
                    { "title": "Beta" },
                    { "title": "Gamma" }
                ],
                "FioriItems": [
                    { "title": "One" },
                    { "title": "Two" },
                    { "title": "Three" }
                ]
            };

            // Create a JSONModel with the data
            var oModel = new JSONModel(oData);
            // Set the model to the view
            this.getView().setModel(oModel);
        }
    });
});
