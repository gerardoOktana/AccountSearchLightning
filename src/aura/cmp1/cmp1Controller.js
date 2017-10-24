({
    fireApplicationEvent : function(cmp, event) {
        
        var accName = cmp.get("v.paccSearch");
        
        if(accName.length > 2) {
            if(event.getParams().keyCode == 13){
                var searchAccsEvent = $A.get("e.c:searchAccsEvent");
                searchAccsEvent.setParams({
                    "accName" : accName
                });
                searchAccsEvent.fire();
            }
        }
    }
})