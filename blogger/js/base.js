var articleBuilder = {
    articleCatagoryTemplate: document.getElementById("articleCatagoryTemplate").innerHTML,

    articleTemplate: document.getElementById("articleTemplate").innerHTML,
    buildAllArticle: function() {
        var i, j, articleHtml = "",
            articleCatagoryHtml = "",
            articleTemplate, articleCatagoryTemplate, article, articleCatagory;


        for (i = 0; i < articleCatagorys.length; i++) {
            articleCatagory = articleCatagorys[i];
            articleHtml = "";
            for (j = 0; j < articleCatagory.articles.length; j++) {
                article = articleCatagory.articles[j];
                articleTemplate = this.articleTemplate;
                articleTemplate = articleTemplate.replace("{{iamge}}", "http://icodingclub.github.io/resource/image/" + article.image);
                articleTemplate = articleTemplate.replace("{{heading}}", article.heading);
                articleTemplate = articleTemplate.replace("{{desc}}", article.desc);
                articleTemplate = articleTemplate.replace("{{link}}", article.link).replace("{{link}}", article.link).replace("{{link}}", article.link);
                articleHtml += articleTemplate;
            }
            articleCatagoryTemplate = this.articleCatagoryTemplate;
            articleCatagoryTemplate = articleCatagoryTemplate.replace("{{articleSectionHeading}}", articleCatagory.displayName);
            articleCatagoryTemplate = articleCatagoryTemplate.replace("{{articles}}", articleHtml);
            articleCatagoryHtml += articleCatagoryTemplate;
        }
        document.getElementById("articlesContainer").innerHTML = articleCatagoryHtml;
    }
};


var codePrettify = {
    init: function() {
        var body = document.getElementsByTagName('body')[0];
        var script = document.createElement('script');
        script.type = 'text/javascript';
        script.src = 'https://google-code-prettify.googlecode.com/svn/loader/run_prettify.js?lang=css&skin=sunburst';
        body.appendChild(script);
    }
};
