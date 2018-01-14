import articles from "./articles";
import ArticleBuilder from "./ArticleBuilder";

const articleBuilder = new ArticleBuilder({articles});

document.getElementById("articlesContainer").innerHTML =articleBuilder.render();

$(document).ready(function() {
    setTimeout(function() {
        null == document.getElementById("tester") && $("#bannerMsg").slideDown("slow")
    }, 3e3)
});
