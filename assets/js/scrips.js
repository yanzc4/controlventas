function home() {
    $.ajax({
        type: "GET",
        url: "layouts/home.php",
        success: function(data) {
            $('#contenedor').html(data);
        },
    });
}
home();

function ventas() {
    $.ajax({
        type: "GET",
        url: "layouts/ventas.php",
        success: function(data) {
            $('#contenedor').html(data);
        },
    });
}

function registros() {
    $.ajax({
        type: "GET",
        url: "layouts/registros.php",
        success: function(data) {
            $('#contenedor').html(data);
        },
    });
}

function ajustes() {
    $.ajax({
        type: "GET",
        url: "layouts/ajustes.php",
        success: function(data) {
            $('#contenedor').html(data);
        },
    });
}

$('#home').click(function() {
    home();
});

$('#ventas').click(function() {
    ventas();
});

$('#registro').click(function() {
    registros();
});

$('#ajustes').click(function() {
    ajustes();
});