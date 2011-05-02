function clear() { $('.toaster').remove(); }
function wrapper(el) { return $($(el).data('toast').wrapper); }
function hasToaster() { equal($('.toaster').length, 1, 'expected a single toast container'); }

$(function() {
    module('Toast Creation');
    
    test('Container is created automatically', function() {
        clear();
        $('<p>xxx</p>').toast();
        hasToaster();
    });
    
    test('Toast has "toast" class', function() {
        clear(); 
        var el = $('<p>test</p>').toast();
        ok(wrapper(el).hasClass('toast'));
    })
    
    test('Toast type "none" is not called out', function() {
        clear();
        var el = $('<p>test</p>').toast({ type: 'none' });
        equal(wrapper(el)[0].className, 'toast');
    });
    
    test('Other toast types are called out', function() {
        clear();
        var info   = $('<p>test</p>').toast({ type: 'info' });
        var notice = $('<p>test</p>').toast({ type: 'notice' });
        var warn   = $('<p>test</p>').toast({ type: 'warn' });
        var error  = $('<p>test</p>').toast({ type: 'error' });
        
        ok(wrapper(info  ).hasClass('toast-info'),   'info toast should have toast-info class');
        ok(wrapper(notice).hasClass('toast-notice'), 'notice toast should have toast-notice class');
        ok(wrapper(warn  ).hasClass('toast-warn'),   'warn toast should have toast-warn class');
        ok(wrapper(error ).hasClass('toast-error'),  'error toast should have toast-error class');
    });
    
    module('Toast Configuration');
    // todo
    // test('option "width"', function() {});
    // test('option "selector"', function() {});
    // test('option "type"', function() {});
    // test('option "text"', function() {});
    // test('option "closeText"', function() {});
    // test('option "sticky"', function() {});
    // test('option "duration"', function() {});
    // test('option "close"', function() {});
    
    module('Toast Removal');
    // todo
    // test('by timeout', function() {});
    // test('by API call', function() {});
    // test('by mouse click', function() {});

    module('(cleanup)');
    test('(cleanup)', function() { clear(); })
});