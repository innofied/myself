Myself.view.Main = Backbone.View.extend({
				id : 'main_content',
				
				events : {
				},
				
				initialize : function(){
								var me = this;
				},
				
				render : function(){
								var me = this;
								
								Myself.TemplateManager.loadTpl('main').done(function(template){
												me.$el.html(_.template(template, {}));			
												me.createComponents();
								});
								
								return me;
				},

				createComponents : function(){
								var topBar = new Myself.view.Topbar();
								this.$el.append(topBar.render().el);
				}
});