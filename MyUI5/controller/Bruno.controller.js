//Scaffolding template
//AMD like syntax- Asynchrounous module loading
sap.ui.define(
    ["sap/ui/core/mvc/Controller"],//This is a base class, Capital C.
    function(Controller){
        return Controller.extend("tom.controller.Bruno",{ //Inheriting base class Controller
            mySubmit: function(){
                var oUsername=this.getView().byId("user").getValue()
                var oPassword=this.getView().byId("Password").getValue()
                console.log(oUsername)
                if(oUsername=='rounith' && oPassword=="1234"){
                    document.write("<h2>Hello World!</h2>")
                }
                else{
                    alert("Incorrect!")
                }
            }
        })
    }
)