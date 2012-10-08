Ext.Loader.setConfig({enabled : true});
Ext.require('Ext.app.Application');

var Application = null;

Ext.onReady(function() {
    Application = Ext.create('Ext.app.Application', {
        name: 'UT',

        controllers: [
                      "CountryController"	
        ],

        launch: function() {
    		Ext.create("Ext.container.Viewport",{
    			renderTo : Ext.getBody(),
    			items : [
    			         	{
    			         		xtype : "countrycombo",
    			         		id : "countrycmb"
    			         	}
    			        ]
    		});
            //include the tests in the test.html head
            jasmine.getEnv().addReporter(new jasmine.TrivialReporter());
            jasmine.getEnv().execute();
        }
    });
});