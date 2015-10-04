var articleBuilder = {

    render: function(tag) {
        var _articles = articles,
            template, htmlText;

        if (tag) {
            _articles = this._filterBYTag(articles, tag);
        }

        template = JST["article"];
        htmlText = template({
            "articles": _articles
        });
        $("#articlesContainer").html(htmlText);
    },

    _sortArticlesByRank: function() {

    },

    _filterBYTag: function(articles, tag) {
        var i, filteredArray = [];

        for (i = 0; i < articles.length; i++) {
            if (articles[i].tags && articles[i].tags.indexOf(tag) >= 0) {

                filteredArray.push(articles[i]);
            }
        }
        return filteredArray;
    }
};



$(document).ready(function() {
   setTimeout(function() {
        null == document.getElementById("tester") && $("#bannerMsg").slideDown("slow")
    }, 3e3)
});
