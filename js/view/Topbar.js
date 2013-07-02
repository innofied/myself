Myself.view.Topbar = Backbone.View.extend({
				className : Myself.prefix + 'topbar',
				
				events : {
				},		
				
				initialize : function(){
				},
				
				render : function(){
								var me = this;
								
								Myself.TemplateManager.loadTpl('topbar').done(function(template){
												me.$el.html(_.template(template, {
																avatar : 'https://lh5.googleusercontent.com/-jNae6BEwbLY/AAAAAAAAAAI/AAAAAAAABdo/_GTMvlvBDuE/photo.jpg',
																name : 'Swarnendu De',
																bio : 'Co-founder, Innofied'
												}));			
								});
								
								return me;
				}
});