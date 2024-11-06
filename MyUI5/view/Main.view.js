sap.ui.jsview("tom.view.Main",
{
    getControllerName: function(){
        return "tom.controller.Main";
    },
    createContent: function (oController){
        var oInp = new sap.m.Input("idSpidy")
        var oSpiderman = new sap.m.Button("idBtn",{
            text:"Rounith is here",
            press: oController.myFunction
        });  
        return [oInp,oSpiderman];
    }

});