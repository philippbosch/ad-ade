var applySelectors = function(selectors) {
    var AR = new AdReplacer(selectors);
    AR.replace();
};

$(document).ready(function() {
    if (window.top == window.self) {
        chrome.extension.sendMessage({'action': 'getSelectors'}, applySelectors);
    }
});
