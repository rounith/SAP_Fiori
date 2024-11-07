sap.ui.define(
    ["sap/ui/core/mvc/Controller"],
    function(Controller){
        return Controller.extend("tom.controller.Bruno",{
            mySubmit: function(){
                var oUsername=sap.ui.getCore().byId("bruno--userName").getValue()
                var oPassword=sap.ui.getCore().byId("bruno--password").getValue()
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