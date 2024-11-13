sap.ui.define(
	["cloud4c/fiori/controller/Basecontroller",
		'cloud4c/fiori/models/models'
	],
	function(Basecontroller, Models){
		return Basecontroller.extend("cloud4c.fiori.controller.Main",{
			oMulModel: Models.createMyJSONModel("models/mockdata/multimodel.json"),
			oModel: Models.createMyJSONModel("models/mockdata/sample.json"),
			onInit: function(){
				
				//create a Model object, Set or load data in the model
				
				//Multimodel concept
				

				// Make the model aware to the application
				sap.ui.getCore().setModel(this.oModel)
				// Binding -4 ways 
				
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
				sap.ui.getCore().setModel(this.oModel)
				console.log("Hello")
			},
			MulSwitch: function(){
				sap.ui.getCore().setModel(this.oMulModel)
				console.log("HI")
			}
		});
});