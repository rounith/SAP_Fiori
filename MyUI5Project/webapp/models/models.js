sap.ui.define(
    ['sap/ui/model/json/JSONModel'],
    function(JSONModel){
        return{
            createMyJSONModel: function(){
                var oModel = new JSONModel()
                oModel.loadData("models/mockdata/sample.json")
                return oModel
            }
        }
})
//1. create function
//2. create model
//3. use .loadData and insert address of json file
//4. return model