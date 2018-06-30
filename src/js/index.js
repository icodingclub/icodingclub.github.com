import articles from "./articles";
import ArticleBuilder from "./ArticleBuilder";
import "../sass/main.scss";

//$(document).ready(function () {
    const articleBuilder = new ArticleBuilder({ articles });
    window.articleBuilder = articleBuilder;
    const articlesContainer =  document.getElementById("articlesContainer");
    if(articlesContainer){
        articlesContainer.innerHTML = articleBuilder.render();
    }
    setTimeout(function () {
       // null == document.getElementById("tester") && $(".banner-msg").slideDown("slow");
        PR.prettyPrint && PR.prettyPrint();

    }, 5000);
//});
