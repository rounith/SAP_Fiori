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
            },
            showInConsole: function(oEvent){
                //1.Get list control object
                var oList = this.getView().byId("idList")
                //2.get all the selected
                var arr = oList.getSelectedItems();
                //3. iterate to all the list items
                arr.forEach(element => {
                    console.log(element.getTitle())
                });
            },
            onDelete: function(oEvent){
                //1. Which item was clicked to be deleted
                var deletedItem=oEvent.getParameter("listItem")
                var sPath= deletedItem.getBindingContextPath()
                var index= sPath.split("/")[sPath.split("/")-1]
                //2. read all the model data
                var oModel= this.getOwnerComponent().getModel("local")
                var aData= oModel.getProperty("/fruits")
                //3. delete the item @index
                aData.splice(index,1)
                //5. set back the data to the model
                oModel.setProperty("/fruit",aData)
            },
            oChange: function(){
                var oChan=this.getView().byId("idList")
                var oMode=oChan.getProperty("mode")
                if(oMode=='Delete'){
                    oChan.setProperty("mode","MultiSelect")
                }else{
                   oChan.setProperty("mode","Delete")
                }
            }
        })
    })