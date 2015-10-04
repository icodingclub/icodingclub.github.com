module.exports = function(grunt) {

    grunt.initConfig({

        uglify: {
            options: {
                beautify: false,
                mangle: false,
                compress: {
                    sequences: false, // join consecutive statemets with the “comma operator”
                    properties: false, // optimize property access: a["foo"] → a.foo
                    dead_code: false, // discard unreachable code
                    drop_debugger: false, // discard “debugger” statements
                    unsafe: false, // some unsafe optimizations (see below)
                    conditionals: false, // optimize if-s and conditional expressions
                    comparisons: true, // optimize comparisons
                    evaluate: true, // evaluate constant expressions
                    booleans: true, // optimize boolean expressions
                    loops: true, // optimize loops
                    unused: false, // drop unused variables/functions
                    hoist_funs: false, // hoist function declarations
                    hoist_vars: false, // hoist variable declarations
                    if_return: true, // optimize if-s followed by return/continue
                    join_vars: false, // join var declarations
                    cascade: true, // try to cascade `right` into `left` in sequences
                    side_effects: true, // drop side-effect-free statements
                    warnings: true, // warn about potentially dangerous optimizations/code
                },
                sourceMap: false,
                banner: "/*icodingclub - praveen singh*/\n"

            },
            target: {
                files: {
                    'dist/main.min.js': ['app/js/libs/handlebars2.0.min.js','app/js/templates.js', 'app/js/articles.js', "app/js/ArticleBuilder.js"]
                }
            },
            target_advert: {
                src: "app/advert/*.js",
                dest: "dist/advert.js"
            }
        },
        jshint: {
            options: {
                jshintrc: ".jshintrc"
            },
            target: {
                src: "app/*.js"
            }
        },
        watch: {
            scripts: {
                files: ["app/js/**/*.js", "app/js/**/*.hbs", "app/sass/*.scss"],
                tasks: ["sass", "handlebars", "uglify"]
            }
        },
        connect: {
            server: {
                options: {
                    port: 9001,
                    base: 'app'
                }
            }
        },
        handlebars: {
            compile: {

                options: {
                    namespace: 'JST',
                    processName: function(filePath) {
                        return filePath.replace(/^app\/js\/templates\//, '').replace(/\.hbs$/, '');
                    }
                },

                files: {
                    'app/js/templates.js': 'app/js/templates/**/*.hbs'
                }
            }
        },
        sass: {
            dist: {
                options: {
                    style: 'compressed',
                    sourcemap: "none"
                },
                files: {
                    'dist/main.min.css': ['app/sass/base.scss']
                }
            },
            dev: {
                options: {
                    style: 'expanded',
                    sourcemap: "none"
                },
                files: {
                    'app/css/main.css': ['app/sass/base.scss']
                }
            }
        }

    });
    grunt.loadNpmTasks('grunt-contrib-uglify');
    grunt.loadNpmTasks('grunt-contrib-jshint');
    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.loadNpmTasks('grunt-contrib-handlebars');
    //grunt.loadNpmTasks('grunt-contrib-compass');
    grunt.loadNpmTasks('grunt-contrib-sass');

    grunt.registerTask("default", ["sass", "handlebars", "uglify"]);
    grunt.registerTask("build", ["sass", "handlebars", "uglify"]);
};
