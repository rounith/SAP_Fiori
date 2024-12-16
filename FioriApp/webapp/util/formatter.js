sap.ui.define(
    [

    ],
    function(){
        'use strict';
        return{
            getStatus: function(status){
                switch(status){
                    case "Available":
                        return "Success"
                    case "Out of Stock":
                        return "Warning"    
                }
            },
            getAct: function(status){
                switch(status){
                    case "Active":
                        return "Success"
                    case "Inactive":
                        return "Warning"    
                }
            }

    }    
})