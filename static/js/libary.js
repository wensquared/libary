'use strict'
/* 
    TODO:
    - window.localStorage 
    - design
 */


class Libary {
    constructor() {
        // let list = JSON.parse(window.localStorage.getItem('books'))
        var that = this;

        $('#dlg_addBook').click(function(event) {
            event.preventDefault();

            $('#addBookForm').dialog('open')
            
        });

        $('#addBookForm').dialog({
            autoOpen: false,
            width:400,
            height:400,
            modal: true, 
            buttons: [
                {
                    text: 'Add Book',
                    click: function() {
                        // console.log($('#form').submit());
                        console.log('test')
                        that.addBook();
                        $(this).dialog('close')
                    }
                }
            ]
         });
    }   

    addBook() {
        console.log('u submitted')
        // let title = $('#read').val();
        // console.log(title)
        let read = 'unread';
        console.log($("form").serializeArray());

        let title = $("form").serializeArray()[0]['value'];
        let author = $("form").serializeArray()[1]['value'];
        let pages = $("form").serializeArray()[2]['value'];

        
        if($("form").serializeArray().length == 4) {
            read = 'read' //$("form").serializeArray()[3]['value'];
            // console.log(typeof read) // string
        }

        let tr = $('<tr>').appendTo('#libary')
        $('<td>').appendTo(tr).html(title);
        $('<td>').appendTo(tr).html(author);
        $('<td>').appendTo(tr).html(pages);
        let tdRead = $('<td>').appendTo(tr);
        var that = this;
        $('<button>').appendTo(tdRead).html(read).click( function() {
            if(read == 'unread') {
                read = 'read'
                $(this).html(read)
            }
            else {
                read = 'unread';
                $(this).html(read)
            }

            that.saveBook();
        });
        $('<button>').html('Delete').appendTo($('<td>').appendTo(tr)).click((event) =>{                        
            $(event.target).closest('tr').remove();
            this.saveBook();
        }); 

        this.saveBook();
        
        $('form').trigger('reset');
    }

    saveBook() {
        console.log('savebook fn')

    }
}

$(document).ready(function() {
    console.log('Hello')
    let libary = new Libary();
})