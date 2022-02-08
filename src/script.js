$(document).ready(function () {
    // array
    var products = [
        {
            id: "100",
            name: "iPhone 4S",
            brand: "Apple",
            os: "iOS",
        },
        {
            id: "101",
            name: "Moto X",
            brand: "Motorola",
            os: "Android",
        },
        {
            id: "102",
            name: "iPhone 6",
            brand: "Apple",
            os: "iOS",
        },
        {
            id: "103",
            name: "Samsung Galaxy S",
            brand: "Samsung",
            os: "Android",
        },
    ];

    // table element start
    table =
        "<table id='myTable'> <thead thead ><tr><th>ID</th><th>Name</th><th>Brand</th><th>Operating System</th><th>Remove</th></tr></thead>";
    // table columns
    for (let i = 0; i < products.length; i++) {
        table +=
            "<tr><td>" +
            products[i].id +
            "</td><td>" +
            products[i].name +
            "</td><td>" +
            products[i].brand +
            "</td><td>" +
            products[i].os +
            "</td><td id='hide'>X</td></tr>";
    }

    $("#table").html(table + "</table"); //table end here

    // function to search element
    $("#wrapper").on("keyup", "#myInput", function () {
        var value = $(this).val().toLowerCase();
        $("#myTable tr").filter(function () {
            $(this).toggle($(this).text().toLowerCase().indexOf(value) > -1);
        });
    });

    // function to hide element
    $("#wrapper").on("click", "#hide", function () {
        $(this).parent().hide();
    });

    // function to filter OS
    $("#wrapper").on("click", "#os", function () {
        var value = $(this).val().toLowerCase();
        $("#myTable tr").filter(function () {
            $(this).toggle($(this).text().toLowerCase().indexOf(value) > -1);
        });
    });

    // function to filter brand
    $("#wrapper").on("click", "#brand", function () {
        var value = $(this).val().toLowerCase();
        $("#myTable tr").filter(function () {
            $(this).toggle($(this).text().toLowerCase().indexOf(value) > -1);
        });
    });
});
