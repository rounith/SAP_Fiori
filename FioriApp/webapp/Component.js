sap.ui.define(
    ["sap/ui/core/UIComponent"],
    function(UIComponent){
        return UIComponent.extend("cloud4c.fioriApp.Component",{
            metadata:{},
            init: function(){
                //we have to call the super class contructor
                //when we call base class contructor,we arre invoking default functionality
                //which is available free for us example router feature
                UIComponent.prototype.init.apply(this)
            },
            createContent: function(){
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
            },
            destroy: function(){

            }
        })

    })