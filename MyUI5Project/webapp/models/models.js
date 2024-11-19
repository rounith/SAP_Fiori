sap.ui.define(
    ['sap/ui/model/json/JSONModel',
        'sap/ui/model/xml/XMLModel'],
    function(JSONModel,XMLModel){
        return{
            createMyJSONModel: function(filePath){
                var oModel = new JSONModel()
                oModel.loadData(filePath)
                return oModel
            },
            createMyXMLModel: function(filePath){
                var oXml = new XMLModel()
                oXml.loadData(filePath)
                return oXml
            }

        }
})
//1. create function
//2. create model
//3. use .loadData and insert address of json file
//4. return model