this["JST"] = this["JST"] || {};

this["JST"]["article"] = Handlebars.template({"1":function(depth0,helpers,partials,data) {
    var stack1, helper, alias1=helpers.helperMissing, alias2="function", alias3=this.escapeExpression;

  return "    <section class=\"article\">\n\n        <a href=\""
    + alias3(((helper = (helper = helpers.link || (depth0 != null ? depth0.link : depth0)) != null ? helper : alias1),(typeof helper === alias2 ? helper.call(depth0,{"name":"link","hash":{},"data":data}) : helper)))
    + "\"><h1>"
    + alias3(((helper = (helper = helpers.heading || (depth0 != null ? depth0.heading : depth0)) != null ? helper : alias1),(typeof helper === alias2 ? helper.call(depth0,{"name":"heading","hash":{},"data":data}) : helper)))
    + "</h1></a>\n          <div class=\"article-img hideOnMobile\">\n                <img class=\"hideOnMobile\" src=\"http://icodingclub.github.io/resource/image/"
    + alias3(((helper = (helper = helpers.image || (depth0 != null ? depth0.image : depth0)) != null ? helper : alias1),(typeof helper === alias2 ? helper.call(depth0,{"name":"image","hash":{},"data":data}) : helper)))
    + "\" alt=\""
    + alias3(((helper = (helper = helpers.image || (depth0 != null ? depth0.image : depth0)) != null ? helper : alias1),(typeof helper === alias2 ? helper.call(depth0,{"name":"image","hash":{},"data":data}) : helper)))
    + "\">\n             </div>\n\n        <p>\n          "
    + ((stack1 = ((helper = (helper = helpers.desc || (depth0 != null ? depth0.desc : depth0)) != null ? helper : alias1),(typeof helper === alias2 ? helper.call(depth0,{"name":"desc","hash":{},"data":data}) : helper))) != null ? stack1 : "")
    + "\n\n             </p>\n        <div class=\"tags\">\n"
    + ((stack1 = helpers.each.call(depth0,(depth0 != null ? depth0.tags : depth0),{"name":"each","hash":{},"fn":this.program(2, data, 0),"inverse":this.noop,"data":data})) != null ? stack1 : "")
    + "\n        </div>\n        <div class='clear-fix'></div>\n\n    </section>\n\n";
},"2":function(depth0,helpers,partials,data) {
    return "            <span>"
    + this.escapeExpression(this.lambda(depth0, depth0))
    + "</span> ";
},"compiler":[6,">= 2.0.0-beta.1"],"main":function(depth0,helpers,partials,data) {
    var stack1;

  return "<section class='articleSection'>\n\n"
    + ((stack1 = helpers.each.call(depth0,(depth0 != null ? depth0.articles : depth0),{"name":"each","hash":{},"fn":this.program(1, data, 0),"inverse":this.noop,"data":data})) != null ? stack1 : "")
    + "\n</section>\n";
},"useData":true});