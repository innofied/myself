Myself.view.Topbar = Backbone.View.extend({
				className : Myself.prefix + 'top-bar',
				
				events : {
				},		
				
				initialize : function(){
				},
				
				render : function(){
								var me = this;
								
								Myself.TemplateManager.loadTpl('topbar').done(function(template){												
												$(me.el).html(me.template(me.model.toJSON()));			
								});
								
								return me;
				}
});