({
    callPunkAPI : function(cmp, event, helper) {
        var xmlhttp = new XMLHttpRequest();
        var url = "https://api.punkapi.com/v2/beers";
        
        xmlhttp.onreadystatechange = function() {
            if (this.readyState == 4 && this.status == 200) {
                var myArr = JSON.parse(this.responseText);
                cmp.set('v.callResult', this.responseText);
                cmp.set('v.beers', myArr);
            }
        };
        xmlhttp.open("GET", url, true);
        xmlhttp.send();
    },
    toggleResponse : function(cmp, event, helper) {
        var toggleCallResponse = cmp.find("call-response");
        $A.util.toggleClass(toggleCallResponse, "toggle");
    },
    loadMore : function(cmp, event, helper) {
        var loadMoreValue = cmp.get("v.loadBeer") + 4;
        cmp.set('v.loadBeer', loadMoreValue);
        
        if(loadMoreValue - cmp.get("v.beers").length > 0){
            var toggleLoadMore = cmp.find("load-more");
        	$A.util.toggleClass(toggleLoadMore, "toggle");
        }
    }
})