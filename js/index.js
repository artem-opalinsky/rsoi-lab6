let id = 0
$( '#first-btn' ).on('click', function (event) {
    $( 'p.second' ).animate({ opacity: "hide" }, "slow")
    $( 'img#id2' ).css({outline: "0px solid green"}).animate({outlineWidth: '7px'}, 'slow')
})
$( '#second-btn' ).on('click', function (event) {
    $( 'p.first' ).each(function() {
        id++
        $(this).after($('<input>', {
            type: 'text',
            id: id
        }))
    })
    $( '#first-btn' ).animate({ opacity: "hide" }, "slow")
    $('p').each(function() {
        var text = $(this).text();
        $(this).text(text.replace('LONDON', 'PARIS')); 
    })
})