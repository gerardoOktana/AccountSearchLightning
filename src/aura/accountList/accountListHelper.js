({
    // Fetch the accounts from the Apex controller
    getAccountList: function(component, accFilter) {
        var action = component.get('c.getAccounts');
        action.setParams({ filter : accFilter });

        // Set up the callback
        var self = this;
        action.setCallback(this, function(actionResult) {
            component.set('v.accounts', actionResult.getReturnValue());
        });
        $A.enqueueAction(action);
    }
})