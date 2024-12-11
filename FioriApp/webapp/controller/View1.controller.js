sap.ui.define(
    ["sap/ui/core/mvc/Controller",
      "sap/ui/model/Filter",
    "sap/ui/model/FilterOperator",
    "cloud4c/fioriApp/util/formatter"
    ],
    function(Controller, Filter, FilterOperator,Formatter){
        "use strict"
        return Controller.extend("cloud4c.fioriApp.controller.View1",{
            formatter: Formatter,
            onInit: function(){
                this.oRouter= this.getOwnerComponent().getRouter()
            },
            onNext: function(ikaven){
                //var oApp = this.getView().getParent()
                //oApp.to("idView2") //give ID
                this.oRouter.navTo("next",{
                    kaven: ikaven
                })
            },
            onItemPress: function(oEvent){
                var oSelecteditem=oEvent.getParameter("listItem")
                var oFruitName=oSelecteditem.getTitle()
                //below we are getting the relative path of each element 
                debugger
                var sPath=oSelecteditem.getBindingContextPath()// '/fruits/0' answer
                var sIndex=sPath.split("/")[sPath.split("/").length-1]// we get '0'
                // above oSelecteditem.getBindingContextPath().split("/") = ['', 'fruits', '0']
                // oSelecteditem.getBindingContextPath().split("/").length-1 = 2
                // oSelecteditem.getBindingContextPath().split("/")[oSelecteditem.getBindingContextPath().split("/").length-1] = '0'

                this.onNext(sIndex)
            },
            onSearch: function (oEvent) {
                // Get the search query
                var sQuery = oEvent.getParameter("query");
                var oList = this.getView().byId("idList");
                var oBinding = oList.getBinding("items");
            
                // Apply filters if there's a query
                var aFilters = [];

                if (sQuery) {
                    // Filter by name
                    var oNameFilter = new Filter("name", FilterOperator.Contains, sQuery);
                    // Filter by type (you can adjust this as needed)
                    var oTypeFilter = new Filter("type", FilterOperator.Contains, sQuery);
                    var oColorFilter= new Filter("color",FilterOperator.Contains, sQuery)
                    var oStatusFilter= new Filter("status",FilterOperator.Contains, sQuery)
                    // Combine filters using OR condition
                    aFilters.push(new Filter({
                        filters: [oNameFilter, oTypeFilter,oColorFilter,oStatusFilter],
                        and: false //in this filters and is default so we are keeping it as false
                    }));
                }
            
                // Update the list binding with filters
                oBinding.filter(aFilters);
            }
        })
    })