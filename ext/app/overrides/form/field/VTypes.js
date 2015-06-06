/* -----------------------------------------
 ' Vtypes
 ' -----------------------------------------
 ' Дописал сюда проверку Телефона, и пару 
 ' сообщений на русской языке.
 ' -----------------------------------------
 */


Ext.define('Override.form.field.VTypes', {
    override: 'Ext.form.field.VTypes',

    // vtype validation function
    phone: function(value) {
        return this.phoneRe.test(value);
    },
    // RegExp for the value to be tested against within the validation function
    phoneRe: /^([7-8]{1}[-]?){0,1}([0-9]{3}[-]?){1,2}([0-9]{4})$/,
    // vtype Text property: The error text to display when the validation functiasdon returns false
    // vtype Mask property: The keystroke filter mask
    phoneMask: /\d/,
    phoneText: 'Введите правильный телефонный номер',
    
    
    emailText: 'Введите почту в формате example@mail.com'
});