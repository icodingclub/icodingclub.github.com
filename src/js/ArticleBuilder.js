class ArticleBuilder {

    constructor({ articles }) {
        this.groups = articles;
    }

    render() {
        const groupTemplate = this.groups.map(group => {
            return this.renderGroups(group);
        });

        return (
            `<div class="articles">
                ${groupTemplate.join("")} 
            </div>`
        );
    }

    renderGroups(article) {
        const { groupHeading, articles, logo } = article;
        return (
            `
            <h1 class="section-heading">${groupHeading}<span class="arrow"></span></h1>
            <div class="article">
                <div class="article-container">
                    ${this.renderArticles(articles, logo)}
                </div>
            </div>
            <div class="separator">&nbsp;</div>
            `
        );
    }

    renderArticles(articles, groupLogo) {
        const template = articles.map((article) => {
            const { heading, link, logo = groupLogo } = article;
            return (`
                    <a href="${link}"> 
                        <div class="table">
                            <div class="table-row">
                                <div class="table-cell logo">
                                       <img class="hideOnMobile" src="http://icodingclub.github.io/resource/image/${logo}" alt="logo">
                                </div>
                                <div class="table-cell heading">
                                    <span>${heading}</span>
                                </div>
                            </div>
                        </div>
                    </a>
                <div class="separator">&nbsp;</div>
            `);
        });
        return template.join("");
    }
}

export default ArticleBuilder;