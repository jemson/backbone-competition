define([
	"marionette",
	"config/settings"
], function(Marionette){

	var App = new Marionette.Application();

	App.addRegions({
		headerRegion: "#header-region",
		mainRegion:"#main-region",
		dialogRegion:"#dialog-region"
	});

	App.on("initialize:before", function(){
	});

	App.addInitializer(function(){
		console.log('hello');
	});

	App.on("initialize:after", function() {

		if (Backbone.history) {
			Backbone.history.start({pushState: true});

			$(document).on('click', 'a:not([data-bypass])', function(e) {
				var href = $(this).attr('href');
				var protocol = this.protocol + '//';

				if (href.slice(protocol.length) !== protocol) {
					e.preventDefault();
					Backbone.history.navigate(href, true);
				}
			});
		}
	});	

	return App;
});