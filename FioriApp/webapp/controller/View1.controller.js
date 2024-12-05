sap.ui.define(
    ["sap/ui/core/mvc/Controller"],
    function(Controller){
        "use strict"
        return Controller.extend("cloud4c.fioriApp.controller.View1",{
            onInit: function(){
                this.oRouter= this.getOwnerComponent().getRouter()
            },
            onNext: function(){
                //var oApp = this.getView().getParent()
                //oApp.to("idView2") //give ID
                this.oRouter.navTo("next")
            }
        })
    })