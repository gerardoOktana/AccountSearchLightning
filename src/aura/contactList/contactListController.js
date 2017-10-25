({
    doInit: function(cmp, event, helper) {  
        
    },
    relateContactsEvent : function(cmp, event, helper) {
        var accId = event.getParam("accId");
        helper.loadContacts(cmp, accId);
    },
    clearSearchEvent : function(cmp, event, helper) {
        cmp.set("v.contacts", null);
        helper.updateTotal(cmp);
    }
})