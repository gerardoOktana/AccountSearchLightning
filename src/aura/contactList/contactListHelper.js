({
    loadContacts : function(cmp, accId) {
        var action = cmp.get("c.getContacts");
        action.setParams({ accId : accId });
        
        action.setCallback(this, function(response) {
            var state = response.getState();
            if (state === "SUCCESS") {
                cmp.set("v.contacts", response.getReturnValue());
                console.log(accId);
                console.log(response.getReturnValue());
                this.updateTotal(cmp);
            }            
        });
        $A.enqueueAction(action);
    },     
    updateTotal: function(cmp) {
        var contacts = cmp.get("v.contacts");
        if(contacts!=null){
            cmp.set("v.totalContacts", contacts.length);
        } else {
            cmp.set("v.totalContacts", "0");
        }
        
    }
})