sap.ui.define(
    ["sap/ui/core/UIComponent"],
    function(UIComponent){
        return UIComponent.extend("cloud4c.fioriApp",{
            metadata:{},
            init: function(){
                //we have to cll the super class contructor
                //when we call base class contructor,we arre invoking default functionality
                //which is available free for us
                UIComponent.prototype.init.apply(this)
            },
            createContent: function(){
                return sap.m.Button({
                    text: "Hello"
                })
            },
            destroy: function(){

            }
        })

    })