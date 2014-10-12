var articleBuilder = {
    articleCatagoryTemplate: "<h1 class='section-heading'>{{articleSectionHeading}}" +
        "<span class='arrow'></span>" +
        "</h1>" +
        "<br>" +
        "<section class='articleSection'>{{articles}}</section>",

    articleTemplate: "<article>" +
        "<div class='articleImg'>" +
        "<a href='{{link}}'>" +
        "<img src='{{iamge}}'>" +
        "</a>" +
        "</div>" +
        "<div class='articleBody'>" +
        "<a href='{{link}}'>" +
        "<h1>{{heading}}</h1>" +
        "</a>" +
        "<p class='desc'>{{desc}}</p>" +
        "<a href='{{link}}'>" +
        "<span class='readMore'>tutorial</span>" +
        "</a>" +
        "</div>" +
        "</article>",
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
    },

    getArticlesByTag: function(tagName, heading) {
        var i, j, articleHtml = "",
            articleTemplate, articleCatagoryTemplate, article, articleCatagory;

        articleCatagoryTemplate = this.articleCatagoryTemplate;
        articleCatagoryTemplate = articleCatagoryTemplate.replace("{{articleSectionHeading}}", heading);

        for (i = 0; i < articleCatagorys.length; i++) {
            articleCatagory = articleCatagorys[i];
            for (j = 0; j < articleCatagory.articles.length; j++) {
                article = articleCatagory.articles[j];
                if (article.tag.indexOf(tagName) > -1) {
                    articleTemplate = this.articleTemplate;
                    articleTemplate = articleTemplate.replace("{{iamge}}", "http://icodingclub.github.io/resource/image/" + article.image);
                    articleTemplate = articleTemplate.replace("{{heading}}", article.heading);
                    articleTemplate = articleTemplate.replace("{{desc}}", article.desc);
                    articleTemplate = articleTemplate.replace("{{link}}", article.link).replace("{{link}}", article.link).replace("{{link}}", article.link);
                    articleHtml += articleTemplate;
                }

            }



        }

        articleCatagoryTemplate = articleCatagoryTemplate.replace("{{articles}}", articleHtml);


        document.getElementById("articlesContainer").innerHTML = articleCatagoryTemplate;
    }
};
