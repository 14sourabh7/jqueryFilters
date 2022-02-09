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
    {
      id: "104",
      name: "Google Nexus",
      brand: "ASUS",
      os: "Android",
    },
    {
      id: "105",
      name: "Surface",
      brand: "Microsoft",
      os: "Windows",
    },
  ];
  var selectElement =
    "   <div class='filters'>" +
    " <select name='Operating System' id='os'>" +
    " <option value=''>ALL</option>" +
    "<option value='android'>Android</option>" +
    "<option value='ios'>IOS</option>" +
    "<option value='windows'>Windows</option>" +
    "</select>" +
    "<select id='brand' name='brand'>" +
    " <option value=''>ALL</option>" +
    "<option value='Apple'>Apple</option>" +
    "<option value='Samsung'>Samsung</option>" +
    "<option value='motorola'>Motorola</option>" +
    "<option value='asus'>ASUS</option>" +
    "</select>" +
    "</div>";

  table =
    "<table id='myTable'> <thead thead ><tr><th>ID</th><th>Name</th><th>Brand</th><th>Operating System</th><th>Remove</th></tr></thead>";

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

  var searchBar =
    "<label for='searchInput'>" +
    "<input id='searchInput' type='text' placeholder='Search..' />" +
    "</label>";

  // adding html
  $("#wrapper").append(selectElement);
  $("#wrapper").append(table + "</table");
  $("#wrapper").append(searchBar);

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

  // function to search element
  $("#wrapper").on("keyup", "#searchInput", function () {
    var value = $(this).val().toLowerCase();
    $("#myTable tr").filter(function () {
      $(this).toggle($(this).text().toLowerCase().indexOf(value) > -1);
    });
  });
});
