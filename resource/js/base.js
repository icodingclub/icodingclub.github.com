var articleCatagorys = [{
    type: "uiJavaArticle",
    displayName: "UI + JAVA Article",
    articles: [{
        heading: "HTML5 AJAX File upload (Image or HTML5 Canvas data) to Java backend",
        desc: "Let you crop image with flexibility to select any area.",
        link: "/fileupload/file-upload-ajax.html",
        image: "image-upload.png"

    }, {
        heading: "Pass-by-Value vs Pass-by-refrence: Javascript and Java",
        desc: "This article explanation, what happen when you create an Object and refrences in Javascript or Java.<br>How pass by value vs pass by refrence in Javascript and Java.<br>Its take you back in History in C language world and explain how's this concept started and evolved.",
        link: "/passByValVsRef/Pass-By-Value-Vs-pass-by-refrence.html",
        image: "passByValRef.png"

    }, {
        heading: "Tiles 3 with Spring 3 with JSP or FTL view",
        desc: "Step by step tutorial of tiles3 using Spring3, with option of both JSP and FTL view.",
        link: "http://icodingclub.blogspot.in/2013/12/tutorial-tiles-3-with-spring-3-with-jsp.html",
        image: "tiles3.png"

    }]
}, {
    type: "uiArticle",
    displayName: "UI Article",
    articles: [{
        heading: "HTML5 Canvas Image cropper: Flexible selection approch",
        desc: "Let you crop image with flexibility to select any area.",
        link: "/imagecropper/imagecropper-flex-sel.html",
        image: "image_flex_crop.png"

    }, {
        heading: "HTML5 Canvas Image cropper: Fixed selection approch",
        desc: "Let you crop image, but with restriction of aspect ratio.",
        link: "/imagecropper/imagecropper-fixed-sel.html",
        image: "image_crop_fixed.png"

    }, {
        heading: "Simple tree widget using JQuery",
        desc: "A very simple tree widget, made out of JQuery.",
        link: "/treewidget/treewidget.html",
        image: "tree-widget.png"

    }, {
        heading: "Accordion widget using JQuery",
        desc: "A very simple Accordion widget built out of Javascript and JQuery",
        link: "/accordionwidget/accordion-single-pane.html",
        image: "accodion-pane.png"

    }]
}, {
    type: "javaArticle",
    displayName: "java Article",
    articles: [{
        heading: "Introduction of Spring JMS with ActiveMQ: Point to Point",
        desc: "Step by step tutorial of JMS with Spring 3 and ActiveMQ, in point to point model.",
        link: "http://icodingclub.blogspot.in/2011/07/introduction-of-spring-jms-with.html",
        image: "jms_activemq.png"

    }, {
        heading: "Spring JMS with Apache ActiveMQ in embedded mode in tomcat",
        desc: "Step by step tutorial of JMS with Spring 3 and ActiveMQ, in embeded model model.",
        link: "http://icodingclub.blogspot.in/2011/09/spring-jms-with-embeded-activemq-in.html",
        image: "jms_activemq.png"

    }, {
        heading: "Spring JMS with Jboss HornetQ in embedded mode in tomcat",
        desc: "Step by step tutorial of JMS with Spring 3 and HornetQ, in embeded model model.",
        link: "http://icodingclub.blogspot.in/2011/09/spring-jms-with-embeded-hornetq-in.html",
        image: "jms_activemq.png"

    }, {
        heading: "Using JaxB/Jackson: POJO &lt; - &gt; XML &lt; - &gt; JSON",
        desc: "Step by step tutorial of how to conver a java pojo to XML or JSON.",
        link: "http://icodingclub.blogspot.in/2011/04/pojo-xml-json.html",
        image: "pojo_xml_json.png"

    }, {
        heading: "Hibernate Search: Google like search in Java",
        desc: "Step by step tutorial of Google like search in java using Hibernate search api.",
        link: "http://icodingclub.blogspot.in/2011/03/google-like-search-in-java-hibernate.html",
        image: "hiber-serach.png"

    }, {
        heading: "Introducing EhCache",
        desc: "Step by step tutorial of EHCache.",
        link: "http://icodingclub.blogspot.in/2010/10/introducing-ehcache.html",
        image: "ehcache.png"

    }]
}];

var articleBuilder = {
    articleCatagoryTemplate: "<h1 class='section-heading'>{{articleSectionHeading}}<span class='arrow'></span></h1><br><section class='articleSection'>{{articles}}</section>",
    articleTemplate: " <article><div class='articleImg'><a href='{{link}}'><img src='{{iamge}}'></a></div><div class='articleBody'><a href='{{link}}'><h1>{{heading}}</h1></a><p class='desc'>{{desc}}</p><a href='{{link}}'><span class='readMore'>tutorial</span></a></div></article>",

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
                articleTemplate = articleTemplate.replace("{{iamge}}", "/resource/image/" + article.image);
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

function doGet(url, callback) {
    var xhr;
    if (typeof XMLHttpRequest !== 'undefined') xhr = new XMLHttpRequest();
    else {
        var versions = ["MSXML2.XmlHttp.5.0",
            "MSXML2.XmlHttp.4.0",
            "MSXML2.XmlHttp.3.0",
            "MSXML2.XmlHttp.2.0",
            "Microsoft.XmlHttp"
        ];
        for (var i = 0, len = versions.length; i < len; i++) {
            try {
                xhr = new ActiveXObject(versions[i]);
                break;
            } catch (e) {}
        }
    }
    xhr.onreadystatechange = ensureReadiness;

    function ensureReadiness() {
        if (xhr.readyState < 4) {
            return;
        }
        if (xhr.status !== 200) {
            return;
        }
        if (xhr.readyState === 4) {
            callback(xhr);
        }
    }
    xhr.open('GET', url, true);
    xhr.send('');
}

var demoBuilder = {

    outputBlock: null,

    url: null,

    init: function(url, outputBlock) {
        this.url = url;
        this.outputBlock = outputBlock;
        this.buildDemoBlock();
    },

    buildDemoBlock: function() {
        var outputBlock = "codeBox";
        if (this.outputBlock) {
            outputBlock = this.outputBlock;
        }
        doGet(this.url, function(xhr) {
            document.getElementById(outputBlock).innerHTML = this.htmlEscape(xhr.responseText);
            this.addCodePretifyer();
        }.bind(this));
    },

    htmlEscape: function(str) {
        return String(str)
            .replace(/&/g, '&amp;')
            .replace(/"/g, '&quot;')
            .replace(/'/g, '&#39;')
            .replace(/</g, '&lt;')
            .replace(/>/g, '&gt;');
    },

    addCodePretifyer: function() {

        var body = document.getElementsByTagName('body')[0];
        var script = document.createElement('script');
        script.type = 'text/javascript';
        script.src = 'https://google-code-prettify.googlecode.com/svn/loader/run_prettify.js?lang=css&skin=sunburst';
        body.appendChild(script);
    }
};

var addMgr = {
    init: function() {
        doGet("/adds.html", function(xhr) {
            document.getElementById("addContainer").innerHTML = xhr.responseText;
            this.pullGoogleAddScripts();
        }.bind(this));

    },
    pullGoogleAddScripts: function() {
        var noOfAddsOnPage = 5;
        window.adsbygoogle = [];
        for (var i = 0; i < noOfAddsOnPage; i++) {
            window.adsbygoogle.push({});
        }
        var addScript = document.createElement('script');
        addScript.type = 'text/javascript';
        addScript.src = '//pagead2.googlesyndication.com/pagead/js/adsbygoogle.js';
        (document.getElementsByTagName('head')[0] || document.getElementsByTagName('body')[0]).appendChild(addScript);
    }

};

var disqMgr = {
    init: function(disqus_shortname) {
        var dsq = document.createElement('script');
        dsq.type = 'text/javascript';
        dsq.async = true;
        dsq.src = '//' + disqus_shortname + '.disqus.com/embed.js';
        (document.getElementsByTagName('head')[0] || document.getElementsByTagName('body')[0]).appendChild(dsq);

    }

};

(function() {
    doGet("/footer.html", function(xhr) {
        document.getElementById('footer').innerHTML = xhr.responseText;

    });
})();