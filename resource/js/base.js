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

        // all is well  
        if (xhr.readyState === 4) {
            callback(xhr);
        }
    }

    xhr.open('GET', url, true);
    xhr.send('');
}



// document.getElementById('codeFrame').onload = function() {
//             var codeText = document.getElementById("codeFrame").contentDocument.body.innerHTML;
//             document.getElementById('codeBox').innerHTML = this.htmlEscape(codeText);
//             this.addCodePretifyer();

//         }.bind(this);

//         this.addGoogleAddBlock();

var demoBuilder = {
    showAdd: true,

    init: function(url) {
       
        this.buildDemoBlock(url);
        this.addGoogleAddBlock();
    },

    buildDemoBlock: function(url) {

        doGet(url, function(xhr) {
          

                 
            document.getElementById('codeBox').innerHTML = this.htmlEscape(xhr.responseText);
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

    },

    addGoogleAddBlock: function() {

        if (this.showAdd) {
            var body = document.getElementsByTagName('body')[0];
            var script = document.createElement('script');
            script.type = 'text/javascript';
            script.src = '//pagead2.googlesyndication.com/pagead/js/adsbygoogle.js';
            body.appendChild(script);
        }
    }


};