describe("Test Country Store",function(){
	var store = null;
	beforeEach(function(){
		store = Application.getStore("CountryStore");
		waitsFor(function(){ 
			 	return !store.isLoading(); },"load never completed",4000
		);
	});

	it("test Country Store data",function(){
		expect(store).toBeDefined();
		expect(store).toBeTruthy();
	});
	it("test Country Store data country",function(){
		expect(store.getCount()).toEqual(3);
	});
});