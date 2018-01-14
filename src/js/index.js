import articles from "./articles";
import ArticleBuilder from "./ArticleBuilder";



$(document).ready(function () {
    const articleBuilder = new ArticleBuilder({ articles });
    document.getElementById("articlesContainer").innerHTML = articleBuilder.render();

    setTimeout(function () {
        null == document.getElementById("tester") && $("#bannerMsg").slideDown("slow")
    }, 3e3)
});
