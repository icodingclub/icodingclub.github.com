$("pre.encodeCodeblock").text($("pre.encodeCodeblock").html());
$('<script/>', {
    type:    'text/javascript',
    src:     'https://google-code-prettify.googlecode.com/svn/loader/run_prettify.js?skin=sunburst'
}).appendTo(document.body);
