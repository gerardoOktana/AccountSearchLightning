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
    }
})