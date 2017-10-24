({
	doInit: function(cmp, event, helper) {  
        
    },
    handleApplicationEvent : function(cmp, event, helper) {
        var accId = event.getParam("accId");
        cmp.set("v.test", accId);
    }
})