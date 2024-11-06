sap.ui.define(
    ["sap/ui/core/mvc/Controller"],
    function(Controller){
        return Controller.extend("tom.controller.Main",{
            myFunction : function(){
                var oCore = sap.ui.getCore();
                var oControl = oCore.byId("idSpidy")
                oControl.setEnabled(false)
                alert(oControl.getValue());
            }
        })
    }
)