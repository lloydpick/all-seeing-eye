
jQuery.extend({
	random: function(X) {
	    return Math.floor(X * (Math.random() % 1));
	},
	randomBetween: function(MinV, MaxV) {
	  return MinV + jQuery.random(MaxV - MinV + 1);
	}
});


var shiftIt = function (el /* (jQuery element) Element to shift */) {
    if (!el) {
        return;
    }
    var moveIt = function () {
        var winWidth = $(window).width();
        var width = $.randomBetween(10, winWidth - 60);
        el.css("position","absolute").css("left", width + "px").css("top", "5%");
    };
    //$(window).resize(moveIt);
    moveIt();
};

        function AnimateBalloon(_obj, showTooltip) {
            var tmpLeft = $(_obj).css("left").replace("px", "");
            var docWidth = screen.width;

            var newLeft = "15";
            if (tmpLeft > (docWidth / 2)) {
                newLeft = 15;
            }
            else {
                newLeft = docWidth - 45;
            }

            if (showTooltip) {
                $(_obj).animate({ "left": newLeft + "px" }, $.randomBetween(5, 8) * 118000, "linear", function() { new AnimateBalloon(_obj, true); });
                $(_obj).btOn();
            } else {
                $(_obj).animate({ "left": newLeft + "px" }, $.randomBetween(5, 8) * 118000, "linear", function() { new AnimateBalloon(_obj, false); });
                $(_obj).btOff();
            }

        }

function dropBalloon(_obj) {

    // Stop the floating animation
    $(_obj).stop();

    // Play a sound to get attention

    $('body').append('<embed hidden="true" autostart="true" src="deflate.wav" loop="false" style="height: 0pt;">');

    // Move the balloon down
    $(_obj).animate({"top": "80%"}, 5000, "swing");

    // Restart the floating animation
    AnimateBalloon(_obj, true);
    //$('#cloud').btOn();
}

function resetBalloon(_obj) {

    // Stop the floating animation
    $(_obj).stop();

    // Move the balloon up
    $(_obj).animate({"top": "5%"}, 5000, "swing");

    // Restart the floating animation
    AnimateBalloon(_obj, false);
}

$(document).ready(function() {

    // Spread them out randomly.. if there is such a thing
    $('div.balloon').each(function (i) {
        shiftIt($(this));
        AnimateBalloon($(this), false);
    });

    $('#cloud').bt({
      trigger: 'none',
      contentSelector: "$('#cloud-text')",
      width: 100,
      fill: '#FFF',
      cornerRadius: 10,
      strokeWidth: 0,
      shadow: true,
      shadowOffsetX: 3,
      shadowOffsetY: 3,
      shadowBlur: 8,
      shadowColor: 'rgba(0,0,0,.9)',
      shadowOverlap: false,
      noShadowOpts: {strokeStyle: '#999', strokeWidth: 2},
      positions: ['top', 'bottom']
    });


});

