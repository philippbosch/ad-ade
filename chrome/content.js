var replTemplate = document.createElement('div');
replTemplate.setAttribute('class', 'ad-ade-repl');
replTemplate.innerHTML = '<svg version="1.1" width="100%" height="100%" viewBox="0 0 100 100"><circle fill="#FF0000" cx="50" cy="50" r="50"/></svg>';

var openLightbox = function() {
    alert('CLICK!');
};

var applyFilters = function() {
    chrome.extension.sendMessage({'action': 'getSelectors'}, function(selectors) {
        selectors.forEach(function(selector) {
            var elements = document.querySelectorAll(selector);
            if (elements.length) {
                for (var i=0, l=elements.length; i<l; i++) {
                    var element = elements[i],
                        rect = element.getBoundingClientRect(),
                        repl = replTemplate.cloneNode(true);
                    repl.style.position = 'absolute';
                    repl.style.left = element.offsetLeft + 'px';
                    repl.style.top = element.offsetTop + 'px';
                    repl.style.width = element.offsetWidth + 'px';
                    repl.style.height = element.offsetHeight + 'px';
                    repl.style.opacity = 0;
                    repl.style.webkitTransform = 'rotate(' + (Math.random() * 2 - 1) + 'deg)';
                    repl.addEventListener('click', openLightbox);
                    document.body.appendChild(repl);
                    setTimeout(function(repl) {
                        return function() { repl.style.opacity = 1; }
                    }(repl), 1);
                }
            }
        });
    });
};

if (document.readyState == 'complete') {
    applyFilters();
} else {
    window.addEventListener('load', applyFilters);
}
