(function($) {
    // --------------------------------------------------------------------
    // Base toaster impl

    var defaults = { 
        toaster: {
            position: { top: 0, right: 0 }
        },
        toast: { 
            width: 200,
            
            selector: '.toaster',
            
            type: 'info',
            text: 'none',
            closeText: 'Close',
            
            sticky: false,
            duration: 6000,
            
            close: null
        }
    }
    
    // --------------------------------------------------------------------
    // jQuery toaster plugins
    
    function cssTRBL($el, property, values) {
        var dirs = ['top','right','bottom','left'],
            prefix = property ? property + '-' : '',
            props = {};
        
        if (typeof(values) == 'string') {
            values = [values, values, values, values];
        } else if (values.length == 2) {
            values = [values[0], values[1], values[0], values[1]];
        }
        
        $.each(dirs, function(i, d) {
            if (values[i] !== undefined) {
                props[prefix + dirs[i]] = values[i];
            }
        });

        $el.css(props);
    }

    (function($) {
        // ========
        // TODO: add events
        // ========
        $.fn.toaster = toaster;
    
        var methods = {
            init: function(options) {
                var defaults = toaster.defaults,
                    opts = $.extend({}, defaults, options),
                    $this = this.first();
                
                opts.position = opts.position 
                    || defaults.position 
                    || { top: 0, right: 0 };
                
                $this.first()
                    .addClass('toaster')
                    .css('position', 'absolute')
                    .appendTo('body');
                    
                cssTRBL($this, '', [
                    opts.position.top,
                    opts.position.right,
                    opts.position.bottom,
                    opts.position.left
                ]);

                cssTRBL($this, 'margin', '1em');
                cssTRBL($this, 'padding', '1em');
                
                return this;
            },
            
            clear: function() { $(this).data('toaster').clear() }
        };
    
        function toaster(method) {
            if ((! method) || typeof(method) === 'object') {
                return methods.init.apply(this, arguments);
            } else if (methods[method]) {
                return methods[method].apply(this, Array.prototype.slice.call(arguments, 1));
            } else  {
              $.error('Method ' +  method + ' does not exist on jQuery.toaster');
            }
        };
    
        toaster.methods = methods;
        toaster.defaults = defaults.toaster;
    }($));

    (function() {
        // ========
        // TODO: add events
        // ========
        $.fn.toast = toast;
    
        var methods = {
            init: function(options) {
                var defaults = toast.defaults,
                    opts = $.extend({}, defaults, options),
                    sel = opts.selector || defaults.selector,
                    type = opts.type = opts.type || defaults.type || 'none',
                    closeTxt = opts.closeText || 'Close Notice',
                    toaster = $(sel).first(),
                    data = { opts: opts }, 
                    that = this,
                    $this;
                    
                // bail if already initialized
                if (this.data('toast')) return;
                this.data('toast', data);

                // create container if it doesn't exist
                if (! toaster.length) {
                    toaster = $('<div>').toaster({ cls: sel });
                }

                $this = $('<div>')
                    .addClass('toast')
                    .appendTo(toaster)
                    .append('<a href="#close" title="'+closeTxt+'">X</a>')
                    .append(this);
                    
                data.wrapper = $this;
                
                if (opts.type && opts.type != 'none') {
                    $this.addClass('toast-' + opts.type);
                }
                
                if (opts.width) {
                    $this.css('width', opts.width);
                }
                
                $('>a', $this).click(function(e) {
                    e.preventDefault();
                    this.toast('close');
                });
                    
                if (! opts.sticky) {
                    setTimeout(function() {
                        that.toast('close');
                    }, opts.duration);
                }
                
                return this;
            },
            
            close: function() {
// console.log('close', this, this.data('toast'));
                var data = this.data('toast'),
                    $this = data.wrapper,
                    opts = data.opts;
                    
                $this.animate({ opacity: '0' }, 600, function() {
                    $this.animate({  height: '0', margin: 0, padding: 0 }, 600, function() {
                        $this.remove();
                        
                        if (typeof(opts.close) == 'function') {
                            opts.close();
                        }
                    })
                });
            }
        };    

        function toast(method) {
            if ((! method) || typeof(method) === 'object') {
                return methods.init.apply(this, arguments);
            } else if (methods[method]) {
                return methods[method].apply(this, Array.prototype.slice.call(arguments, 1));
            } else  {
              $.error('Method ' +  method + ' does not exist on jQuery.toast');
            }
        };

        toast.methods = methods;
        toast.defaults = defaults.toast;
    }());
    
    // --------------------------------------------------------------------
}($));
