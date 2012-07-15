var selectors;

function loadSelectors() {
    selectors = [];
    
    var xhr = new XMLHttpRequest();
    xhr.onload = parseSelectorList;
    xhr.open("GET", "http://ad-ade.de/selectors.txt?" + encodeURIComponent((new Date()).toString()), true);
    xhr.send();
    
    function parseSelectorList(e) {
        var lines = this.responseText.split("\n");
        lines.forEach(function(line) {
            if (line.substr(0,2) != '//' && line.trim().length) {
                selectors.push(line);
            }
        });
    }
}

loadSelectors();

chrome.extension.onMessage.addListener(function(req, sender, sendResponse) {
    if ('action' in req) switch(req.action) {
        case 'getSelectors':
            sendResponse(selectors);
            break;
        case 'reloadSelectors':
            loadSelectors();
            sendResponse();
            break;
    }
});