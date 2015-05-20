(function () {

    setTimeout(function () {
        alert("Bienvenido!");
    }, 4000);

    //There's only one text to display so it's always displayed the same,
    //but in case we need to change we would separate the text in different html files and load them separately
    $("#right > .text:first-of-type").load("SubmenuContent.html");

    //Get the submenu elements we are gonna turn into ajax calls
    var linksOfSubmenu = document.querySelector("#right > h4");

    for (var key in linksOfSubmenu.children) {
        var a = linksOfSubmenu.children[key];

        a.href = "#";
        a.onclick = function (event) {
            event.preventDefault();
            $("#right > .text:first-of-type").load("SubmenuContent.html");

        }
    };
})();
