$(document).ready(function () {    

    //Slider
if(window.location.href.indexOf('index') > -1){ 
    $('.bxslider').bxSlider({
      mode: 'fade',
      captions: true,
      slideWidth: 1200
    });
};    
    // Posts
if(window.location.href.indexOf('index') > -1){    
    var posts = [
        {
            title: 'Prueba de Titulo 1',
            date:'Publicado el dia  ' +moment().date()+ ' del mes '+moment().format("MMMM")+ ' del año '+moment().format("YYYY"),
            content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi vulputate neque magna, ac ultrices enim facilisis et. Maecenas malesuada porttitor nibh sit amet suscipit. Morbi id tincidunt nisi. Sed efficitur felis a metus dignissim, ac placerat justo imperdiet. Nulla aliquam laoreet lacus, sit amet posuere dui venenatis in. Sed eget pulvinar ipsum. Fusce tincidunt elit nec iaculis lacinia. Donec porttitor, leo vel vehicula tincidunt, erat mi tempor risus, at facilisis quam nisl sed tortor. Nam viverra a urna ac congue. Quisque luctus egestas molestie. Sed eu ante urna. Maecenas aliquam consequat nibh, sit amet gravida nibh pulvinar ut. Donec dapibus venenatis lectus. In posuere nisl eu euismod aliquam. Nam nec mattis nisl. Sed eu velit eget mi malesuad'
        },
        {
            title: 'Prueba de Titulo 2',
            date:'Publicado el dia  ' +moment().date()+ ' del mes '+moment().format("MMMM")+ ' del año '+moment().format("YYYY"),
            content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi vulputate neque magna, ac ultrices enim facilisis et. Maecenas malesuada porttitor nibh sit amet suscipit. Morbi id tincidunt nisi. Sed efficitur felis a metus dignissim, ac placerat justo imperdiet. Nulla aliquam laoreet lacus, sit amet posuere dui venenatis in. Sed eget pulvinar ipsum. Fusce tincidunt elit nec iaculis lacinia. Donec porttitor, leo vel vehicula tincidunt, erat mi tempor risus, at facilisis quam nisl sed tortor. Nam viverra a urna ac congue. Quisque luctus egestas molestie. Sed eu ante urna. Maecenas aliquam consequat nibh, sit amet gravida nibh pulvinar ut. Donec dapibus venenatis lectus. In posuere nisl eu euismod aliquam. Nam nec mattis nisl. Sed eu velit eget mi malesuad'
        },
        {
            title: 'Prueba de Titulo 3',
            date:'Publicado el dia  ' +moment().date()+ ' del mes '+moment().format("MMMM")+ ' del año '+moment().format("YYYY"),
            content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi vulputate neque magna, ac ultrices enim facilisis et. Maecenas malesuada porttitor nibh sit amet suscipit. Morbi id tincidunt nisi. Sed efficitur felis a metus dignissim, ac placerat justo imperdiet. Nulla aliquam laoreet lacus, sit amet posuere dui venenatis in. Sed eget pulvinar ipsum. Fusce tincidunt elit nec iaculis lacinia. Donec porttitor, leo vel vehicula tincidunt, erat mi tempor risus, at facilisis quam nisl sed tortor. Nam viverra a urna ac congue. Quisque luctus egestas molestie. Sed eu ante urna. Maecenas aliquam consequat nibh, sit amet gravida nibh pulvinar ut. Donec dapibus venenatis lectus. In posuere nisl eu euismod aliquam. Nam nec mattis nisl. Sed eu velit eget mi malesuad'
        },
        {
            title: 'Prueba de Titulo 4',
            date:'Publicado el dia  ' +moment().date()+ ' del mes '+moment().format("MMMM")+ ' del año '+moment().format("YYYY"),
            content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi vulputate neque magna, ac ultrices enim facilisis et. Maecenas malesuada porttitor nibh sit amet suscipit. Morbi id tincidunt nisi. Sed efficitur felis a metus dignissim, ac placerat justo imperdiet. Nulla aliquam laoreet lacus, sit amet posuere dui venenatis in. Sed eget pulvinar ipsum. Fusce tincidunt elit nec iaculis lacinia. Donec porttitor, leo vel vehicula tincidunt, erat mi tempor risus, at facilisis quam nisl sed tortor. Nam viverra a urna ac congue. Quisque luctus egestas molestie. Sed eu ante urna. Maecenas aliquam consequat nibh, sit amet gravida nibh pulvinar ut. Donec dapibus venenatis lectus. In posuere nisl eu euismod aliquam. Nam nec mattis nisl. Sed eu velit eget mi malesuad'
        },
        {
            title: 'Prueba de Titulo 5',
            date:'Publicado el dia  ' +moment().date()+ ' del mes '+moment().format("MMMM")+ ' del año '+moment().format("YYYY"),
            content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi vulputate neque magna, ac ultrices enim facilisis et. Maecenas malesuada porttitor nibh sit amet suscipit. Morbi id tincidunt nisi. Sed efficitur felis a metus dignissim, ac placerat justo imperdiet. Nulla aliquam laoreet lacus, sit amet posuere dui venenatis in. Sed eget pulvinar ipsum. Fusce tincidunt elit nec iaculis lacinia. Donec porttitor, leo vel vehicula tincidunt, erat mi tempor risus, at facilisis quam nisl sed tortor. Nam viverra a urna ac congue. Quisque luctus egestas molestie. Sed eu ante urna. Maecenas aliquam consequat nibh, sit amet gravida nibh pulvinar ut. Donec dapibus venenatis lectus. In posuere nisl eu euismod aliquam. Nam nec mattis nisl. Sed eu velit eget mi malesuad'
        },
    ]; 

    posts.forEach((item, index) =>{
        var post=`
        <article class="post">
            <h2>
                ${item.title} 
            </h2>
            <span class="date">
                ${item.date}
            </span>
            <p>
                ${item.content}
            </p>
            <a href="#" class="button-more">Leer mas</a>
        </article>
        `;
        $('#posts').append(post);
    });  
};
    //selector de temas
    var theme=$("#theme");
    $("#to-green").click(function (){
        theme.attr("href", "css/green.css");
    });
    $("#to-red").click(function (){
        theme.attr("href", "css/red.css");
    });
    $("#to-blue").click(function (){
        theme.attr("href", "css/blue.css");
    });
    
    $('.subir').click(function (e){
        e.preventDefault()

        $('html, body').animate({
            scrollTop: 0,
        }, 1000);

        return false;
    });

    //Login falso
    $("#login form").submit(function (){ 
        var form_name = $("#form_name").val();
        localStorage.setItem("form_name", form_name);
    });
    var form_name = localStorage.getItem("form_name");
    if (form_name != null && form_name != "undefined"){
        var about_parrafo = $("#about p");
        about_parrafo.html("<br><hr><br><strong>Bienvenido, "+form_name+"</strong>");
        about_parrafo.append("<a href='' id='logout'>Cerrar Secion</a>");
        
        $("#login").hide();
        
        $('#logout').click(function () { 
            localStorage.clear();
            location.reload()
        });
    }
//Acordeon
    if(window.location.href.indexOf('about') > -1){
        $('#acordeon').accordion();
    };    
    //reloj
    if(window.location.href.indexOf('reloj') > -1){
 
        setInterval(function(){
            var reloj = moment().format(" hh:mm:ss");
            $('#reloj').html(reloj);
            },1000);
    }   
    //Validacion

    if(window.location.href.indexOf('contact') > -1){
        $("form input[name='date']").datepicker({
            dateFormat:'dd-mm-yy'
        });
        $.validate({
            lang: 'es'
        });
    };
});