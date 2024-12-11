sap.ui.define(
    ['sap/ui/model/json/JSONModel',
        'sap/ui/model/xml/XMLModel',
        'sap/ui/model/resource/ResourceModel'],
    function(JSONModel,XMLModel,ResourceModel){
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
            },
            createMyResourceModel: function(){
                var oResource=new ResourceModel ({
                    bundleUrl:"i18n/i18n.properties"
                });
                return oResource
            }
        }
})
//1. create function
//2. create model's object
//3. use .loadData and insert address of json file
//4. return model