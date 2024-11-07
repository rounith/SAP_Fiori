sap.ui.define(
    ["tom/controller/Basecontroller"],
        function(Controller){
            return Controller.extend("tom.controller.Excercise",{
                onInit:function(){
                    this.getView().byId("user").setValue("rounith")
                }
                
            })
        }
) 