Ext.define("UT.store.CountryStore",{
	extend : "Ext.data.Store",
	autoLoad : true,
	model : "UT.model.Country",
	proxy : {
		url : "countries.txt",
		type : "ajax",
		reader : {
			type : "json",
			root : "countries"
		}
	}
});