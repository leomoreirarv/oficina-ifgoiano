var gulp        =   require("gulp"),
    connect     =   require("gulp-connect"),
    watch       =   require("gulp-watch");

var vetorHtml   =   [
    "exemplos/*.html",
    "exemplos/**/*.html"
];

var vetorJs   =   [
    "exemplos/*.js",
    "exemplos/**/*.js"
];

gulp.task("connect", function(){
    connect.server({
        livereload: true,
        port: 7788
    });
});

gulp.task("html", function(){
    gulp.src(vetorHtml)
        .pipe(connect.reload());
});

gulp.task("js", function(){
    gulp.src(vetorJs)
        .pipe(connect.reload());
});

gulp.task("watch", function(){
   gulp.watch(vetorHtml, ["html"]);
   gulp.watch(vetorJs, ["js"]);
});

gulp.task("default", ["connect", "html", "js", "watch"]);

