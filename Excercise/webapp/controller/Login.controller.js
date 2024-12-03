sap.ui.define(
    ["sap/ui/core/mvc/Controller"],
    function(Controller){
        "use strict"
        return Controller.extend("cloud4c.fiori.excercise.controller.Login",{
            Validate: function(){
                var user=this.getView().byId("username").getValue()
                var pass=this.getView().byId("password").getValue()
                if(user=="rounith" && pass=="123"){
                    var oApp = this.getView().getParent()
                    oApp.to("idPicture")
                }
                else{
                    alert("error")
                }
                 //give ID
            }
        })
    })