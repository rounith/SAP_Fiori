sap.ui.define(
	["cloud4c/fiori/controller/Basecontroller",
		'cloud4c/fiori/models/models'
	],
	function(Basecontroller, Models){
		return Basecontroller.extend("cloud4c.fiori.controller.Main",{
			onInit: function(){
				
				//create a Model object, Set or load data in the model
				var oModel= Models.createMyJSONModel("models/mockdata/sample.json")
				//Multimodel concept
				var oMulModel= Models.createMyJSONModel("models/mockdata/multimodel.json")

				// Make the model aware to the application
				sap.ui.getCore().setModel(oModel)
				sap.ui.getCore().setModel(oMulModel,"iron")

				// Binding -4 ways 
				
				this.getView().byId("idId").bindProperty("value","/empStr/empId")
				var oSalary = this.getView().byId("idSalary")
				this._bindValue()
			},
			_bindValue:function(){
				//1&2done inside views
				//way of binding data using bindValue
				
				
		

				
				//oSalary.bindValue("/empStr/salary")

				//another way of binding using bindProperty

			},
			Magic : function(){
				//Technique 2: Using arent child and loop
				/*var oForm=this.getView().byId("simpleForm")
				var oContent=oForm.getContent()
				for(let i=0;i<oContent.length;i++){
					const element=oContent[i]
					if(element.getMetadata().getName()==="sap.m.Input" && element.getEnabled()===false){
						element.setEnabled(true)
					}
					else if(element.getMetadata().getName()==="sap.m.Input" && element.getEnabled()===true){
						element.setEnabled(false)
					}
				}*/

				//Technique 3: Using binding
				//1: get the object of the model again
				var oSpider = sap.ui.getCore().getModel()
				//2: change thee value in the model for status property by address
				if(oSpider.getProperty("/empStr/status")==false)
					oSpider.setProperty("/empStr/status",true)
				else
					oSpider.setProperty("/empStr/status",false)
			},
			Switch: function(){
					this.getView().byId("idId").bindProperty("value","/empStr/empId")
					this.getView().byId("idName").bindProperty("value","/empStr/empName")
					this.getView().byId("idSalary").bindProperty("value","/empStr/salary")
					this.getView().byId("idCurr").bindProperty("value","/empStr/currency")
			},
			MulSwitch: function(){
				this.getView().byId("idId").bindProperty("value","iron>/empStr/empId")
					this.getView().byId("idName").bindProperty("value","iron>/empStr/empName")
					this.getView().byId("idSalary").bindProperty("value","iron>/empStr/salary")
					this.getView().byId("idCurr").bindProperty("value","iron>/empStr/currency")
			}
		});
});