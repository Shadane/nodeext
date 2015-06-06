        /* -------------------------------------
         ' MyRest proxy
         ' -------------------------------------
         ' Используется для моделей Ad и Author,
         ' после каждого запроса запускает
         ' евент responseCtrl, который
         ' ловится с помощью контро-
         ' ллера ResponseCtrl.
         ' -------------------------------------
         */
Ext.define('MyApp.ux.data.proxy.MyRest', {
  extend: 'Ext.data.proxy.Rest',
  alias: 'proxy.myrest',
            afterRequest:function(request,success){
                  this.fireEvent('responseCtrl',request,success);
          }
    
  
});