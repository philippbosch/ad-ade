safari.self.tab.dispatchMessage("getSelectors");

safari.self.addEventListener("message", function(e) {
    if (e.name === 'setSelectors') {
        var AR = new AdReplacer(e.message);
        AR.replace();
    }
}, false);
