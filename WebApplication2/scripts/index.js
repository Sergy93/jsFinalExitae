(function () {

    setTimeout(function () {
        alert("Bienvenido!");
    }, 4000);


    //The toggle the showing of comments
    $("#comLink").click(function () {
        $("#comentarios").slideToggle();
    });

    //Get the submenu elements we are gonna turn into ajax calls
    $("#right > .text:first-of-type").load("Submenu1.html");

    var linksOfSubmenu = document.querySelector("#right > h4");

    for (var key in linksOfSubmenu.children) {
        var anchor = linksOfSubmenu.children[key];

        anchor.href = "#";

        anchor.onclick = function (event) {
            event.preventDefault();
            var fileToLoad;
            switch (event.target.innerHTML) {
                case "Metodología":
                    fileToLoad = "Submenu2.html";
                    break;
                case "Historia":
                    fileToLoad = "Submenu3.html";
                    break;
                case "Personal":
                    fileToLoad = "Submenu4.html";
                    break;
                default:
                    fileToLoad = "Submenu1.html";
                    break;
            }
            $("#right > .text:first-of-type").load(fileToLoad);
        };
    };



})();
