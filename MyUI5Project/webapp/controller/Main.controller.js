sap.ui.define(
	["cloud4c/fiori/controller/Basecontroller"],
	function(Basecontroller){
		return Basecontroller.extend("cloud4c.fiori.controller.Main",{
			onInit: function(){
				//create a Model object
				var oModel= new sap.ui.model.json.JSONModel()
				//Set or load data in the model
				oModel.setData({
					"empStr":{
						"empId": 100,
						"empName":"Rounith",
						"salary": 9500,
						"currency":"INR",
						"status":false
					}
				})
				// Make the model aware to the application
				sap.ui.getCore().setModel(oModel)
				// Binding -4 ways 
				//1&2done inside views
				var oSalary = this.getView().byId("idSalary")
				oSalary.bindValue("/empStr/salary")
				oCurr= this.getView().byId("idCurr")
				oCurr.bindProperty("value","/empStr/currency")
			},
			Magic : function(){
				var oForm=this.getView().byId("simpleForm")
				var oContent=oForm.getContent()
				for(let i=0;i<oContent.length;i++){
					const element=oContent[i]
					if(element.getMetadata().getName()==="sap.m.Input" && element.getEnabled()===false){
						element.setEnabled(true)
					}
					if(element.getMetadata().getName()==="sap.m.Input" && element.getEnabled()===true){
						element.setEnabled(false)
					}
				}
			}
		});
});