
	$('#toggle-fullscreen').click(function () {
                    
		var root = document.documentElement;

                if (root.webkitRequestFullScreen) {
                        root.webkitRequestFullScreen(
                                window.Element.ALLOW_KEYBOARD_INPUT
                        );
                } else if (root.mozRequestFullScreen) {
                        root.mozRequestFullScreen();
                }

	});


