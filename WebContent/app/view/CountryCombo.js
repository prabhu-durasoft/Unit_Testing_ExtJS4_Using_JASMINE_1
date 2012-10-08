Ext.define("UT.view.CountryCombo",{
	extend : "Ext.form.field.ComboBox",
	xtype : "countrycombo",
	store : "CountryStore",
	displayField : "name",
	fieldLabel : "Country"
});