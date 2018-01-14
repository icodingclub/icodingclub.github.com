import articles from "./articles";
import ArticleBuilder from "./ArticleBuilder";
const articleBuilder = new ArticleBuilder({ articles });
//window.articleBuilder = articleBuilder;
//document.getElementById("articlesContainer").innerHTML = articleBuilder.render();


$(document).ready(function () {
    const articleBuilder = new ArticleBuilder({ articles });
    window.articleBuilder = articleBuilder;
    document.getElementById("articlesContainer").innerHTML = articleBuilder.render();
    // setTimeout(function () {
    //     null == document.getElementById("tester") && $("#bannerMsg").slideDown("slow")
    // }, 3e3)
});
