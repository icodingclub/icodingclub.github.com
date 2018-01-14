class ArticleBuilder {

    constructor({articles}){
        articles = this.sortArticlesByRank(articles);
    }

    sortArticlesByRank(articles) {
        return articles.sort(function(ob1, ob2) {
            return (ob2.rank - ob1.rank);
        });
    }

    renderTags(tags) {
        return tags.reduce((reducedTag, tag) => ` <span>${tag}</span>`, "");
    }

    renderArticle(article) {
        const { heading, desc, link, image, tags, rank } = article;
        return (
            `
                <section class="article">
                        <a href="${link}"><h1>${heading}</h1></a>
                        <div class="table">
                            <div class="tableRow">
                                <div class="tableCell article-img hideOnMobile">
                                    <img class="hideOnMobile" src="http://icodingclub.github.io/resource/image/${image}" alt="${image}">
                                </div>
                                <div class="tableCell">
                                    <p>
                                        ${desc}
                                    </p>
                                    <div class="tags">
                                       ${renderTags(tags)}
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>
            `
        );
    }


    render() {
        let template = "";
        console.log(articles);

        return articles.reduce((template, article) => {
            return template + renderArticle(article);
        }, "");
    }
}

export default ArticleBuilder;