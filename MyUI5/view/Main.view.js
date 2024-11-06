sap.ui.jsview("tom.view.Main",
{
    getControllerName: function(){
        return "tom.controller.Main";
    },
    createContent: function (oController){
        var oInp = new sap.m.Input("idSpidy",{
            submit:[oController.enableBtn,oController]
        })
        var oSpiderman = new sap.m.Button("idBtn",{
            text:"Rounith is here"
        });  
        return [oInp,oSpiderman];
    }

});