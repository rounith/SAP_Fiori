sap.ui.define(
    ["sap/ui/core/UIComponent"],
    function(UIComponent){
        return UIComponent.extend("cloud4c.fioriApp.Component",{
            metadata:{
                manifest:"json"
            },
            
            init: function(){
                //we have to call the super class contructor
                //when we call base class contructor,we arre invoking default functionality
                //which is available free for us example router feature
                UIComponent.prototype.init.apply(this)
                //Routing
                //router will creatte view objects.
                this.oRouter = this.getRouter();
                this.oRouter.initialize(); //this reads routing config from manifest.json
            },

            /*createContent: function(){
                var oView = new sap.ui.view({
                    type : "XML",
                    viewName: "cloud4c.fioriApp.view.App"
                });
                var oView1 = new sap.ui.view({
                    type : "XML",
                    id:"idView1",
                    viewName: "cloud4c.fioriApp.view.View1"
                });
                var oView2 = new sap.ui.view({
                    type : "XML",
                    id:"idView2",
                    viewName: "cloud4c.fioriApp.view.View2"
                });
                oView.byId("rounith").addPage(oView1).addPage(oView2);
                return oView
            },*/

            destroy: function(){

            }
        })

    })