Ext.Loader.setConfig({enabled:true});
Ext.application({
	name : "UT",
	controllers : ["CountryController"],
	launch : function(){
		Ext.create("Ext.container.Viewport",{
			renderTo : Ext.getBody(),
			items : [
			         	{
			         		xtype : "countrycombo",
			         		id : "countrycmb"
			         	}
			        ]
		});

	}
});