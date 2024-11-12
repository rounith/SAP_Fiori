sap.ui.define(
	["cloud4c/fiori/controller/Basecontroller",
		'cloud4c/fiori/models/models'
	],
	function(Basecontroller, Models){
		return Basecontroller.extend("cloud4c.fiori.controller.Main",{
			onInit: function(){
				
				//create a Model object
				var oModel= Models.createMyJSONModel()
				//Set or load data in the model
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
				var oSpider=sap.ui.getCore().getModel()
				//2: change thee value in the model for status property by address
				if(oSpider.getProperty("/empStr/status")==false)
					oSpider.setProperty("/empStr/status",true)
				else
					oSpider.setProperty("/empStr/status",false)
			}
		});
});