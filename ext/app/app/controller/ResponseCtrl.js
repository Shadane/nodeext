/* ------------------------------------------------------------
 ' ResponseCtrl
 ' ------------------------------------------------------------
 ' Следит за прокси, обрабатывает ответ от сервера,
 ' выводит toast-сообщения в зависимости от него
 ' ------------------------------------------------------------
 */
Ext.define('MyApp.controller.ResponseCtrl', {
      extend: 'Ext.app.ViewController',
      alias: 'controller.responsectrl',
      requires: [
          'Ext.window.Toast'
      ],
              /* -------------------------------------------------
               * init
               * -------------------------------------------------
               * При запуске компонента - добавляем 
               * прослушку прокси наших хранилищ.
               * -------------------------------------------------
               */
      init: function() {
         this.getStore('ads').getProxy().on({'responseCtrl':this.respHandle, scope:this});
         this.getStore('authors').getProxy().on({'responseCtrl':this.respHandle, scope:this});
             },
              /* -------------------------------------------------------------------------
               * respHandle
               * -------------------------------------------------------------------------
               * Получаем название проиводимого действия. Если операция вернула статус
               * ошибки, то устанавливаем класс - 'error', декодируем текст ошибки.
               * Если этот текст есть, то будем выводить его, если нет, то стати-
               * ческое сообщение об ошибке подключения к серверу. Если статус 
               * успешный и действие - не read(нас ведь интересует только 
               * показ тостеров при создании, обновлении, удалении), 
               * то декодируем ответ и в зависимости от действия 
               * подставляем нужный класс, и выводим сообщение
               * -------------------------------------------------------------------------
               */             
      respHandle: function(request, success){
            var showMsg;
            var rawData;
            var action = request.getAction();
            var cls;
                  if (!success){
                        cls = 'error';
                        rawData = Ext.decode(request.getOperation().getError().response.responseText);
                        
                        if (rawData){
                             showMsg = rawData.message;
                        }else{
                             showMsg = 'Ошибка подключения к серверу';
                        }
                        this.showToast(showMsg,cls);
                }else if (action !== 'read'){
                      rawData =Ext.decode(request.getOperation().getResponse().responseText);
                      showMsg = rawData.message;
                      switch(action){
                            case 'update':
                                  cls = 'info';
                                  break;
                            case 'create':
                                  cls ='success';
                                  break;
                            case 'destroy':
                                  cls = 'warning';
                                  break;
                      }
                        this.showToast(showMsg,cls);
                      
                        
                        
                }
      },
              /* ----------------------------------
               * showToast
               * ----------------------------------
               * Метод по выводу тостеров, на входе
               * получает сообщение и класс
               * ----------------------------------
               */
      showToast: function (msg, cls) {
            Ext.toast({
                  html: msg,
                  width: 300,
                  align: 'br',
                  bodyCls: cls,
                  closable: false,
                  slideInDuration: 400,
                  shadow: true,
                  animateShadow: true,
                  bodyStyle: 'text-align:center'
            });
      }
});





