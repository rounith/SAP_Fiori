sap.ui.define(
    ["sap/ui/core/mvc/Controller"],
    function(Controller){
        "use strict"
        return Controller.extend("cloud4c.fioriApp.controller.View2",{
            onInit:function(){
                this.oRouter=this.getOwnerComponent().getRouter()
                this.oRouter.getRoute("next").attachMatched(this.herculis)
            },
            herculis:function(){
                console.log("Hello this is route name revanth")
            },
            onBack: function(){
                //var oApp=this.getView().getParent()
                //oApp.to("idView1")
                this.oRouter.navTo("home")
            }
        })
    })