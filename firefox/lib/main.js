const pageMod = require("page-mod");
const data = require("self").data;
const tabs = require("tabs");
const Request = require('request').Request;

var selectors = [];

var selectorsRequest = Request({
    url: data.url('common/selectors.txt'),
    onComplete: function(response) {
        var lines = response.text.split("\n");
        lines.forEach(function(line) {
            if (line.substr(0,2) != '//' && line.trim().length) {
                selectors.push(line);
            }
        });
        
        pageMod.PageMod({
            include: "*",
            contentScriptWhen: "ready",
            contentScriptFile: [
                data.url("common/jquery.min.js"),
                data.url("common/fancybox/jquery.fancybox.pack.js"),
                data.url("common/adreplacer.js"),
                data.url("content.js")
            ],
            contentStyleFile: [
                data.url("common/content.css"),
                data.url("common/fancybox/jquery.fancybox.css")
            ],
            onAttach: function(worker) {
                worker.postMessage({'action': 'setSelectors', 'data': selectors});
            }
        });
        
    }
}).get();
