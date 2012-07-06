var selectors = [];

var xhr = new XMLHttpRequest();
xhr.onload = parseEasyList;
xhr.open("GET", chrome.extension.getURL('/assets/selectors.txt'), true);
xhr.send();

function parseEasyList(e) {
    var lines = this.responseText.split("\n");
    lines.forEach(function(line) {
        if (line.substr(0,2) != '//' && line.trim().length) {
            selectors.push(line);
        }
    });
}

chrome.extension.onMessage.addListener(function(req, sender, sendResponse) {
    if ('action' in req) switch(req.action) {
        case 'getSelectors':
            console.log(selectors);
            sendResponse(selectors);
            break;
    }
});