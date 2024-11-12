sap.ui.define(
    ['sap/ui/model/json/JSONModel'],function(JSONModel){
        return{
            createMyJSONModel: function(){
                var oModel = new JSONModel()
                oModel.loadData("models/mockdata/sample.json")
                return oModel
            }
        }

    })