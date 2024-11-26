sap.ui.define(
    ["sap/ui/core/mvc/Controller"],
    function(Controller){
        "use strict"
        return Controller.extend("cloud4c.fioriApp.controller.View1",{
            onNext: function(){
                var oApp = this.getView().getParent()
                oApp.to("idView2") //give ID
            }
        })
    })