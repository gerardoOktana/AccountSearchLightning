({
    keystrokeSearchEvent : function(cmp, event) {
        
        var accName = cmp.get("v.paccSearch");
        
        if(accName.length > 2 && event.getParams().keyCode == 13){
            var searchAccsEvent = $A.get("e.c:searchAccsEvent");
            searchAccsEvent.setParams({
                "accName" : accName
            });
            searchAccsEvent.fire();
        } else if(accName.length == 0) {            
            var clearSearchEvent = $A.get("e.c:clearSearchEvent");
            clearSearchEvent.fire();
        }
    }
})