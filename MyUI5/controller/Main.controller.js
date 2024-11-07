sap.ui.define(
    ["sap/ui/core/mvc/Controller"],
    function(Controller){
        return Controller.extend("tom.controller.Main",{
            myFunction : function(){
                var oCore = sap.ui.getCore().byId("idSpidy");
                //oControl.setEnabled(false)
                alert(oCore.getValue()); 
            },
            enableBtn: function(){
                var oBtn=sap.ui.getCore().byId("idBtn")
                oBtn.attachPress(this.myFunction)
            }
        })
    }
)