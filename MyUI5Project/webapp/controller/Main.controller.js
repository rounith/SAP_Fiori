sap.ui.define(
	["cloud4c/fiori/controller/Basecontroller",
		'cloud4c/fiori/models/models',

	],
	function(Basecontroller, Models){
		return Basecontroller.extend("cloud4c.fiori.controller.Main",{
			oMulModel: Models.createMyJSONModel("models/mockdata/multimodel.json"),
			oXml:Models.createMyXMLModel("models/mockdata/samplexml.xml"),
			oModel: Models.createMyJSONModel("models/mockdata/sample.json"),
			onInit: function(){
				
				//create a Model object, Set or load data in the model
				
				//Multimodel concept
				var oXml=Models.createMyXMLModel("models/mockdata/samplexml.xml")
				sap.ui.getCore().setModel(oXml)
				oTable= this.getView().byId("idTab")
				oTable.bindRows("/empTab/row")

				// Make the model aware to the application
				
				// Binding -4 ways 
				
			},
			changeNameToUC: function(inp){
				if(inp){
					return inp.toUpperCase()
				}

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

				var oForm=this.getView().byId("simpleForm")
				var oContent=oForm.getContent()
				for(let i=0;i<oContent.length;i++){
					const element=oContent[i]
					if(element.getMetadata().getName()==="sap.m.Input" && element.getEnabled()===false){
						element.setEnabled(true)
					}
					else if(element.getMetadata().getName()==="sap.m.Input" && element.getEnabled()===true){
						element.setEnabled(false)
					}
					else if(element.getMetadata().getName()==="sap.m.Input"){
						element.setEnabled(false)
					}
				}
			},
			Switch: function(){
				sap.ui.getCore().setModel(this.oModel)
				oTable= this.getView().byId("idTab")
				oTable.bindRows("/empTab")
				console.log("Hello")
			},
			MulSwitch: function(){
				sap.ui.getCore().setModel(this.oMulModel)
				oTable= this.getView().byId("idTab")
				oTable.bindRows("/empTab")
				console.log("HI")
			},
			xmlModel: function(){
				sap.ui.getCore().setModel(this.oXml)
				oTable= this.getView().byId("idTab")
				oTable.bindRows("/empTab/row")
				console.log("XML")
			},
			Attach:function(oGift){
				// var Path=this.oModel.getProperty(oGift.getParameters().rowContext.sPath)
				// this.oModel.setProperty("/empStr",Path)
				var sPath=oGift.getParameter("rowContext").getPath()
				var oSimpleForm=this.getView().byId("simpleForm")
				oSimpleForm.bindElement(sPath).toUpperCase()
			}
		});
});