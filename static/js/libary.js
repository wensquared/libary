'use strict'
/* 
    TODO:
    - btn:'Add Book' - opens a dialog window, to type in a form where fill out: author, title, number of pages and checkbox for read 
        - dialog window: btn 'Save' - writes to localStorage with fn AddBook
    - table: list of all the books that have been typed in + add 'Remove' 
    - btn: 'Remove Libary' - opens dialog window - ask if user really wants to delete libary

    - make class Libary
        - constructor: 
            check if there is a list of books - print it out - add tr to table - fn:addBook
            when 'Add Book' btn clicked, open dialog window
            when 'Save' btn clicked, save book - fn addBook -fn saveList
            when 'Remove Libary' btn clicked - clear localStorage
        - fn: addBook(form data):
            adds book to the table and save it local with fn saveList
            - plus add td 'Remove' (removes current tr)
            - plus add btn to change read-status
        - fn: saveList()
            get the data from table and save it local
 */

class Libary {
    constructor() {
        // let list = JSON.parse(window.localStorage.getItem('books'))

        $('#dlg_addBook').click(function(event) {
            event.preventDefault();

            $('#addBook').dialog('open')
            
        });
        
        $('#addBook').dialog({
            autoOpen: false,
            width:400,
            height:400,
            modal: true, 
         })

    }
}
$(document).ready(function() {
    console.log('Hello')
    let libary = new Libary();
})