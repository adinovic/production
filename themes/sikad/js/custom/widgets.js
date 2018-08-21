

jQuery(document).ready(function(){


	//show tabbed widget
	jQuery('#tabs').tabs();

	//accordion
	jQuery('#accordion').accordion();

	//content slider
	jQuery('#slidercontent').bxSlider({
		prevText: '',
		nextText: ''
	});

	//slim scroll
    jQuery('#scroll1').slimscroll({
        color: '#666',
        size: '6px',
        width: 'auto',
        height: '450px'                  
    });


	///// Tipsy Tooltip /////
	$('.tipN').tipsy({gravity: 'n',fade: true, html:true});
	$('.tipS').tipsy({gravity: 's',fade: true, html:true});
	$('.tipW').tipsy({gravity: 'w',fade: true, html:true});
	$('.tipE').tipsy({gravity: 'e',fade: true, html:true});

});

  $(document).ready(function () {
        $('.menu_class').click(function () {
        $('.the_menu').slideToggle('medium')});
    })
