(function(){
				Myself.Application = function(){
								
				}
				
				_.extend(Myself.Application.prototype, {
								init : function() {
												var main = new Myself.view.Main();												
												$('body').append(main.render().el);
												Backbone.history.start();
								}	
				})

				var app = new Myself.Application();
				app.init();
})();