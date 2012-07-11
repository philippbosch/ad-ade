const pageMod = require("page-mod");

var foo = function() {
    window.alert("Page matches ruleset, oh yeah.");
};

pageMod.PageMod({
  include: "*",
  contentScript: foo
});

// const widgets = require("widget");
// const tabs = require("tabs");
// 
// var widget = widgets.Widget({
//   id: "mozilla-link",
//   label: "Mozilla website",
//   contentURL: "http://www.mozilla.org/favicon.ico",
//   onClick: function() {
//     tabs.open("http://www.mozilla.org/");
//   }
// });
// 
// console.log("The add-on is running.");
