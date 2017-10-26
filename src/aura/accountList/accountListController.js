({
    doInit: function(cmp, event, helper) {  
        helper.getAccountList(cmp,null);
    },
    searchAccsEvent : function(cmp, event, helper) {
        var accFilter = event.getParam("accName");
        helper.getAccountList(cmp,accFilter);
    },
    showContactsEvent : function(cmp, event) {
        
        var accountId = event.target.getElementsByClassName('account-id')[0].value;
        
        var relateContactsEvent = $A.get("e.c:relateContactsEvent");
        relateContactsEvent.setParams({
            "accId" : accountId
        });
        relateContactsEvent.fire();
    },
    clearSearchEvent : function(cmp, event, helper) {  
        helper.getAccountList(cmp,null);
    }
})