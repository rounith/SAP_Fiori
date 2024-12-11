sap.ui.define([
    "sap/ui/core/mvc/Controller",
    "sap/ui/model/json/JSONModel"
], function (Controller, JSONModel) {
    "use strict";

    return Controller.extend("tom.controller.View1", {
        onInit: function () {
            // Load and set the model from the JSON file
            var oModel = new JSONModel();
            oModel.loadData("model/mockData/sample.json", null, false); // Load your JSON file
            
            // Extract all names into a single array for dropdown options
            var oData = oModel.getData();
            var aAllNames = [];
            ["MMItems", "SDItems", "FICOItems", "FioriItems"].forEach(function (sKey) {
                oData[sKey].forEach(function (item) {
                    aAllNames.push({ key: item.name, text: item.name });
                });
            });

            // Add the flattened names list to the model
            oData.AllNames = aAllNames;
            oModel.setData(oData);
            this.getView().setModel(oModel);
        },

        onDropdownChange: function (oEvent) {
            var sSelectedKey = oEvent.getParameter("selectedItem").getKey();
            var sPath = oEvent.getSource().getBindingContext().getPath();
            
            // Update the model with the selected value
            var oModel = this.getView().getModel();
            oModel.setProperty(sPath + "/name", sSelectedKey);
            // Send the updated data to the server
            var sUpdatedData = JSON.stringify(oModel.getData());
            $.ajax({
                url: "http://127.0.0.1:5500/MyUI5/index.html", // Server endpoint
                method: "POST",
                contentType: "application/json",
                data: sUpdatedData,
                success: function () {
                    sap.m.MessageToast.show("File updated successfully!");
                },
                error: function () {
                    sap.m.MessageToast.show("Failed to update the file!");
                }
            });
            // Log the updated JSON model
            console.log("Updated JSON:", oModel.getData());
        }
    });
});
