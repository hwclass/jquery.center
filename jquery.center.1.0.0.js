/*!
* jquery.center. The jQuery element centering plugin
*
* Copyright (c) 2014 Barış Güler
* http://hwclass.github.io
*
* Licensed under MIT
* http://www.opensource.org/licenses/mit-license.php
*
* http://docs.jquery.com/Plugins/Authoring
* jQuery authoring guidelines
*
* Launch : August 2014
* Version : 1.0
* Released: August 10th, 2014
*
*
* centers any kind of HTML elements in or out of any element as container.
*/

(function ($) {
  $.fn.center = function () {
    $(this).css({'left' : (($(this).parent().width() / 2)-($(this).width()/2)), 'position':'relative'});
  }
}(jQuery));