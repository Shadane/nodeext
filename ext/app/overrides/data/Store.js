/* --------------------------------------------------
 ' Store
 ' --------------------------------------------------
 ' Этот оверрайд служит для того, чтобы при неудачном
 ' завершении запроса к серверу хранилище отменяло
 ' изменения, которые мы готовы были сохранить.
 ' --------------------------------------------------
 */

Ext.define('MyApp.overrides.data.Store',{
  override: 'Ext.data.Store',

    onCreateRecords: function(records, operation, success) {
        console.log('record added '+success);
        if (!success){
              this.rejectChanges();
        }
    },

    onUpdateRecords: function(records, operation, success) {
        console.log('record updated ' +success);
        if (!success){
              this.rejectChanges();
        }
    },

    onDestroyRecords: function(records, operation, success) {
        console.log('record deleted '+ success);
        if (!success){
              this.rejectChanges();
        }
    }
});

