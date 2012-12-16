/**
 * Ventus
 * Copyright © 2012 Ramón Lamana
 */
define(['less!../../../css/windowmanager.less'], function() {
	
	var DefaultMode = {
		register: function() {
			console.log("Default mode registered.");
		},

		plug: function() {
		},

		unplug: function() {
		},

		actions: {
			maximize: function(win) {
				win.move(0,0);
				win.el.css('-webkit-transform', 'translate3d(0, 0, 0);');
				win.resize(this.el.width(), this.el.height());
			},

			restore: function(win) {
				win.restore();
			},

			minimize: function(win) {
				win.resize(0,0);
			}
		}
	};

	return DefaultMode;
});
