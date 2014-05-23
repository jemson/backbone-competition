require.config({
	paths: {
		backbone: "libs/backbone/backbone",
		marionette: "libs/backbone/backbone.marionette",
		jquery: "libs/jquery/jquery-2.1.1",
		underscore: "libs/lodash/lodash",
		text: "libs/require/text"
	},
	shim: {
		marionette: {
			deps: ["backbone"],
			exports: "Marionette"
		}
	}
});

require(["app"], function(App){
	App.start();
});