$(document).ready(function() {
    chrome.extension.sendMessage({'action': 'getSelectors'}, function(selectors) {
        var AR = new AdReplacer(selectors);
        AR.replace();
    });
});
