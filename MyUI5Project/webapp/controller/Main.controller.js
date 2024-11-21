sap.ui.define(
	["cloud4c/fiori/controller/Basecontroller",
		'cloud4c/fiori/models/models',
		'cloud4c/fiori/util/formatter'

	],
	function(Basecontroller, Models, Formatter ){
		return Basecontroller.extend("cloud4c.fiori.controller.Main",{
			formatter:Formatter,
			oMulModel: Models.createMyJSONModel("models/mockdata/multimodel.json"),
			oXml:Models.createMyXMLModel("models/mockdata/samplexml.xml"),
			oModel: Models.createMyJSONModel("models/mockdata/sample.json"),
			onInit: function(){
				var oResource = Models.createMyResourceModel()
				//create a Model object, Set or load data in the model
				sap.ui.getCore().setModel(oResource,"i18n")
				//Multimodel concept
				var oXml=Models.createMyJSONModel("models/mockdata/sample.json")
				sap.ui.getCore().setModel(oXml)
				oTable= this.getView().byId("idTab")
				oTable.bindRows("/empTab")

				// Make the model aware to the application
				
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
			ResourceModel:function(){
				sap.ui.getCore().setModel(this.oResource)

			},
			Attach:function(oGift){
				// var Path=this.oModel.getProperty(oGift.getParameters().rowContext.sPath)
				// this.oModel.setProperty("/empStr",Path)
				var sPath=oGift.getParameter("rowContext").getPath()
				var oSimpleForm=this.getView().byId("simpleForm")
				oSimpleForm.bindElement(sPath)
			},
			onLanguageSwitchChange: function (oEvent) {
				var bState = oEvent.getParameter("state");
				var sLanguage = bState ? "en" : "hi";

				var sCurrentUrl = window.location.href;
				var sNewUrl;
			
				// Check if the URL already has 'sap-ui-language'
				if (sCurrentUrl.includes("sap-ui-language=")) {
					sNewUrl = sCurrentUrl.replace(/sap-ui-language=[a-z-]+/, "sap-ui-language=" + sLanguage);
				} else {
					var sSeparator = sCurrentUrl.includes("?") ? "&" : "?";
					sNewUrl = sCurrentUrl + sSeparator + "sap-ui-language=" + sLanguage;
				}
			
				// Redirect to the new URL
				window.location.href = sNewUrl;
			}
			
		});
});