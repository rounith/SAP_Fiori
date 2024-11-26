sap.ui.define(
    ["sap/ui/core/mvc/Controller"],
    function(Controller){
        "use strict"
        return Controller.extend("cloud4c.fioriApp.controller.View2",{
            onBack: function(){
                var oApp=this.getView().getParent()
                oApp.to("idView1")
            }
        })
    })