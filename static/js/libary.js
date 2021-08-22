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
        let list = JSON.parse(window.localStorage.getItem('libary'));

        if(list) {
            list.forEach(element => {
                this.addBook(element.title,element.author,element.pages,element.status);
            });
        }
        

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

    addBook(title = '', author = '', pages = '', status = '') {
        console.log('u submitted')
        // let title = $('#read').val();
        // console.log(title)

        if(title && author && pages && status){
            console.log('books avaiable to put on table')
            let row = $('<tr>').appendTo($('#libary'));

            $('<td>').appendTo(row).html(title);
            $('<td>').appendTo(row).html(author);
            $('<td>').appendTo(row).html(pages);
            let tdRead = $('<td>').appendTo(row);
            var that = this;
            $('<button>').appendTo(tdRead).html(status).click( function() {
                if(status == 'unread') {
                    status = 'read'
                    $(this).html(status)
                }
                else {
                    status = 'unread';
                    $(this).html(status)
                }

                that.saveBook();
            });
            $('<button>').html('Delete').appendTo($('<td>').appendTo(row)).click((event) =>{                        
                $(event.target).closest('tr').remove();
                this.saveBook();
            });              
                                
            this.saveBook();

        }
        else {
            console.log('adding new book')
            status = 'unread';
            console.log($("form").serializeArray());

            title = $("form").serializeArray()[0]['value'];
            author = $("form").serializeArray()[1]['value'];
            pages = $("form").serializeArray()[2]['value'];

            
            if($("form").serializeArray().length == 4) {
                status = 'read' //$("form").serializeArray()[3]['value'];
                // console.log(typeof read) // string
            }

            let tr = $('<tr>').appendTo('#libary')
            $('<td>').appendTo(tr).html(title);
            $('<td>').appendTo(tr).html(author);
            $('<td>').appendTo(tr).html(pages);
            let tdRead = $('<td>').appendTo(tr);
            var that = this;
            $('<button>').appendTo(tdRead).html(status).click( function() {
                if(status == 'unread') {
                    status = 'read'
                    $(this).html(status)
                }
                else {
                    status = 'unread';
                    $(this).html(status)
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
        
    }

    saveBook() {
        console.log('savebook fn')
        let listOfBooks = [];
        let pos = 0;

        $('#libary tr').each(function() {
            if(pos++ > 0) {
                listOfBooks.push({
                    title: $(this).children().eq(0).html(),
                    author: $(this).children().eq(1).html(),
                    pages: $(this).children().eq(2).html(),
                    status: $(this).children().children().eq(0).html()
                })
                // console.log($(this).children().eq(0).html())
                // console.log($(this).children().eq(1).html())
                // console.log($(this).children().eq(2).html())
                // console.log($(this).children().children().eq(0).html())
            }
            
        })
        window.localStorage.setItem('libary',JSON.stringify(listOfBooks));
    }
}

$(document).ready(function() {
    console.log('Hello')
    let libary = new Libary();
})