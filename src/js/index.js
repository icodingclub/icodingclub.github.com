import articles from "./articles";
import ArticleBuilder from "./ArticleBuilder";
import "../sass/main.scss";
const articleBuilder = new ArticleBuilder({ articles });
window.articleBuilder = articleBuilder;
const articlesContainer =  document.getElementById("articlesContainer");
if(articlesContainer){
    articlesContainer.innerHTML = articleBuilder.render();
}
