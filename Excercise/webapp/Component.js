sap.ui.define(
    ["sap/ui/core/UIComponent"],
    function(UIComponent){
        return UIComponent.extend("cloud4c.fiori.excercise.Component",{
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
                    viewName: "cloud4c.fiori.excercise.view.App"
                });
                var oView1 = new sap.ui.view({
                    type : "XML",
                    id:"idLogin",
                    viewName: "cloud4c.fiori.excercise.view.Login"
                });
                var oView2 = new sap.ui.view({
                    type : "XML",
                    id:"idPicture",
                    viewName: "cloud4c.fiori.excercise.view.Picture"
                });
                oView.byId("rounith").addPage(oView1).addPage(oView2);
                return oView
            },

            destroy: function(){

            }
        })

    })