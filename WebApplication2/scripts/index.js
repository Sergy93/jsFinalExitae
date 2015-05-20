(function () {
    google.load("feeds", "1");

    function initialize() {

        //We load the first 2 elements
        var feed = new google.feeds.Feed("http://www.digg.com/rss/index.xml");
        feed.setNumEntries(2);

        feed.load(function (result) {
            if (!result.error) {
                var container = document.getElementById("categories");

                //Set some white space at the left of the box
                container.style.paddingLeft = "10px";

                for (var i = 0; i < result.feed.entries.length; i++) {
                    var entry = result.feed.entries[i];

                    var h4 = document.createElement("h4");
                    h4.appendChild(document.createTextNode(entry.title));

                    var span = document.createElement("span");
                    span.appendChild(document.createTextNode(entry.content));

                    container.appendChild(h4);
                    container.appendChild(span);
                    //We leave a blank space between elements
                    container.appendChild(document.createElement("br"));
                    container.appendChild(document.createElement("br"));

                }
            }
        });
    }
    google.setOnLoadCallback(initialize);


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
