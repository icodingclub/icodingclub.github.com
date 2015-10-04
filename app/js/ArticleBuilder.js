var articleBuilder = {

    render: function(tag) {
        var articles = App.articles,
            template, htmlText;
console.log("Before: ", articles);
        articles = this._sortArticlesByRank(articles);
console.log("After: ", articles);
        if (tag) {
            articles = this._filterBYTag(articles, tag);
        }

        template = JST["article"];
        htmlText = template({
            "articles": articles
        });
        $("#articlesContainer").html(htmlText);
    },

    _sortArticlesByRank: function(arr) {
        var arr = arr.sort(function(ob1, ob2) {
            return (ob2.rank - ob1.rank);
        });

        return arr;
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
