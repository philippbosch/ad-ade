var AdReplacer = (function() {
    var selectors = [];
    
    function AdReplacer(theSelectors) {
        selectors = theSelectors;
        this.$replTemplate = $('<div class="ad-ade-repl"></div>'),
        $circle = $('<svg version="1.1" width="100%" height="100%" viewBox="0 0 100 100"><circle fill="#df0641" cx="50" cy="50" r="50"/></svg>'),
        $circle.appendTo(this.$replTemplate);
        this.$replTemplate.on('click', openLightbox);
    }
    
    function openLightbox(e) {
        e.preventDefault();
        e.stopPropagation();
        $.fancybox_aa('http://ad-ade.de/index.php/posts/', {
            type:'iframe',
            margin: [140,20,20,20],
            wrapCSS: 'ad-ade'
        });
        return false;
    };
    
    AdReplacer.prototype.replace = function() {
        var self = this;
        selectors.forEach(function(selector) {
            var $elements = $(selector);
            if ($elements.length) {
                $elements.each(function(i, element) {
                    var $element = $(element);
                    var $repl = self.$replTemplate.clone(true);
                    $repl.on('click', openLightbox);
                    $repl.attr('title', selector);
                    $repl.css({
                        position: $element.css('position'),
                        left: $element.css('left'),
                        top: $element.css('top'),
                        width: $element.width() + 'px',
                        height: $element.height() + 'px',
                        float: $element.css('float'),
                        zIndex: $element.css('z-index')
                    });
                    $element.replaceWith($repl);
                    setTimeout(function($repl) {
                        return function() { $repl.css('opacity', 1); }
                    }($repl), 1);
                });
            }
        });
        
    };
    
    return AdReplacer;
})();
