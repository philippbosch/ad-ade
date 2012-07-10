var $replTemplate = $('<div class="ad-ade-repl"></div>'),
    $circle = $('<svg version="1.1" width="100%" height="100%" viewBox="0 0 100 100"><circle fill="#FF0000" cx="50" cy="50" r="50"/></svg>'),
    $body = $('body');

$circle.appendTo($replTemplate);
$replTemplate.on('click', openLightbox);

var openLightbox = function() {
    alert('CLICK!');
};

var applyFilters = function() {
    chrome.extension.sendMessage({'action': 'getSelectors'}, function(selectors) {
        selectors.forEach(function(selector) {
            var $elements = $(selector);
            if ($elements.length) {
                $elements.each(function(i, element) {
                    var $element = $(element);
                    console.log(1, element, $element.position().top);
                    setTimeout(function($element) {
                        return function() {
                            console.log(2, element, $element.position().top);
                        }
                    }($element), 1000);
                    var $repl = $replTemplate.clone(true);
                    $repl.css({
                        position: 'absolute',
                        left: element.offsetLeft + 'px',
                        top: element.offsetTop + 'px',
                        width: element.offsetWidth + 'px',
                        height: element.offsetHeight + 'px',
                        opacity: 0 /*,
                        webkitTransform: 'rotate(' + (Math.random() * 2 - 1) + 'deg)' */
                    });
                    $repl.appendTo($body);
                    setTimeout(function($repl) {
                        return function() { $repl.css('opacity', 1); }
                    }($repl), 1);
                });
            }
        });
    });
};

$(document).ready(function() {
    applyFilters();
});