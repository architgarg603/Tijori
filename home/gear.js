var $gear1 = $('.gear1'),
    $gear2 = $('.gear2'),
    $gear3 = $('.gear3'),
    $body = $('body'),
    bodyHeight = $body.width()*3;

function getScrollTop() {
    if (typeof pageYOffset != 'undefined') {
        //most browsers except IE before #9
        return pageYOffset;
    } else {
        var B = document.body; //IE 'quirks'
        var D = document.documentElement; //IE with doctype
        D = (D.clientHeight) ? D : B;
        return D.scrollTop;
    }
}

$(window).scroll(function () {
    var scroll = getScrollTop();
    $gear1.css({
        'transform': 'rotate(' + (scroll / bodyHeight * 800) + 'deg)',
        '-moz-transform': 'rotate(' + (scroll / bodyHeight * 800) + 'deg)',
        '-ms-transform': 'rotate(' + (scroll / bodyHeight * 800) + 'deg)',
        '-o-transform:rotate': 'rotate(' + (scroll / bodyHeight * 800) + 'deg)'

    });
    $gear2.css({
        'transform': 'rotate(' + (scroll / bodyHeight * ("-1000")) + 'deg)',
        '-moz-transform': 'rotate(' + (scroll / bodyHeight * ("-1000")) + 'deg)',
        '-ms-transform': 'rotate(' + (scroll / bodyHeight * ("-1000")) + 'deg)',
        '-o-transform:rotate': 'rotate(' + (scroll / bodyHeight * ("-1000")) + 'deg)'

    });
    $gear3.css({
        'transform': 'rotate(' + (scroll / bodyHeight * ("-1000")) + 'deg)',
        '-moz-transform': 'rotate(' + (scroll / bodyHeight * ("-1000")) + 'deg)',
        '-ms-transform': 'rotate(' + (scroll / bodyHeight * ("-1000")) + 'deg)',
        '-o-transform:rotate': 'rotate(' + (scroll / bodyHeight * ("-1000")) + 'deg)'
    });
});