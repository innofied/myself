Todo.view.TodoItem = Backbone.View.extend({
				tagName : 'li',
				
				className : 'todo-item',
				
				template : _.template(document.getElementById('tpl_todo_item').innerHTML),
				
				events : {
								'change .check input' : 'changeStatus',
								'click .delete' : 'removeItem'
				},		
				
				initialize : function(){
								this.listenTo(this.model, 'destroy', this.remove);
				},
				
				render : function(){
								$(this.el).html(this.template(this.model.toJSON()));								
								return this.el;
				},
				
				changeStatus : function(e){
								this.model.set({
												status : $(e.target).is(':checked') ? 'done' : ''
								});
								
								$(this.el).find('.todo').toggleClass('done');
				},
				
				removeItem : function(){
								this.model.destroy();
				}
});