({
    relateContactsEvent : function(cmp, event, helper) {
        var accId = event.getParam("accId");
        helper.loadContacts(cmp, accId);
    },
    clearSearchEvent : function(cmp, event, helper) {
        cmp.set("v.contacts", null);
        helper.updateTotal(cmp);
    },
    goToRecord : function(cmp, event, helper) {
        var contactId = event.target.getAttribute('data-index');
        var editRecordEvent = $A.get("e.force:editRecord");
        if(editRecordEvent){
            editRecordEvent.setParams({
                "recordId": contactId
            });
            editRecordEvent.fire(); 
        }
        else{
            window.location.href = '/'+contactId+'/e'
        }
    },
    goToNewRecord : function(cmp, event, helper) {
        var createRecordEvent = $A.get("e.force:createRecord");
        if(createRecordEvent){
            createRecordEvent.setParams({
                "entityApiName": "Contact"
            });
            createRecordEvent.fire(); 
        }
        else{
            window.location.href = '/003/e';
        }
    }
})