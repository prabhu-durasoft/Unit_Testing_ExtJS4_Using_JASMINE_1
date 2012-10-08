describe("Test Country Combo",function(){
	var combo = null;
	beforeEach(function(){
		combo = Ext.getCmp("countrycmb");
	});
	it("test Country combo box",function(){
		expect(combo.getFieldLabel()).toEqual("Country");
	});
	it("test Country combo count",function(){
		expect(combo.getStore().getCount()).toEqual(3);
	});
});