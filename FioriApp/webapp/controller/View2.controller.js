sap.ui.define(
    ["sap/ui/core/mvc/Controller",
        "cloud4c/fioriApp/util/formatter",'sap/m/MessageToast'
    ],
    function(Controller,Formatter,MessageToast){
        "use strict"
        return Controller.extend("cloud4c.fioriApp.controller.View2",{
            formatter: Formatter,
            onInit:function(){
                this.oRouter=this.getOwnerComponent().getRouter()
                this.oRouter.getRoute("next").attachMatched(this.herculis, this)
            },
            showPopup:function(){
                var msg = 'F4 working';
                MessageToast.show(msg);
            },  
            herculis:function(oEvent){
                console.log("Hello this is route name revanth")
                var myVar=  oEvent.getParameter("arguments").kaven
                //address of the selected fruit on the first screen
                var fruitRelativePath='local>/fruits/'+myVar
                //bind our view2 conpletely with this address, element binding
                this.getView().bindElement(fruitRelativePath)
            },
            onBack: function(){
                //var oApp=this.getView().getParent()
                //oApp.to("idView1")
                this.oRouter.navTo("home")
            }
        }) 
    })