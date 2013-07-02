Myself.TemplateManager = {
				_tplPromises : {},
				
				loadTpl : function(tplName){
								if(!tplName){
												throw new Error('Template name not supplied.');
								}
								
								var me = this;
									
								if(!me._tplPromises[tplName]){
												me._tplPromises[tplName] = $.get('tpl/' + tplName + '.html');												
								}	
								
								return me._tplPromises[tplName];
				}
};