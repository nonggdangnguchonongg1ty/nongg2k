

$(document).ready(function() {
    // process bar
    setTimeout(function() {
        firstQuestion();
        $('.spinner').fadeOut();
        $('#preloader').delay(350).fadeOut('slow');
        $('body').delay(350).css({
            'overflow': 'visible'
        });
    }, 600);
})
function firstQuestion(){
    
    $('.content').hide();
    Swal.fire({
        title: 'He luu cậu!',
        text: 'Tớ có điều này muốn hỏi cậu nhớ phải trả lời thật lòng nhaaa.',
        imageUrl: './images/cuteCat.jpg',
        imageWidth: 300,
        imageHeight: 300,
        background: '#fff url("./images/OIP.jpg")',
        imageAlt: 'Custom image',
      }).then(function(){
        $('.content').show(200);
      })
}
