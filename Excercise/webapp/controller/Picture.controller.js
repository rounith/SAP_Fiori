sap.ui.define(
    ["sap/ui/core/mvc/Controller"],
    function(Controller){
        "use strict"
        return Controller.extend("cloud4c.fiori.excercise.controller.Picture",{
            onBack: function(){
                var oApp=this.getView().getParent()
                oApp.to("idLogin")
            }
        })
    })