//导入工具包 require('node_modules里对应模块')
const gulp = require('gulp'); //本地安装gulp所用到的地方
const jshint = require("gulp-jshint");//检查JS的代码 npm install --save-dev jshint gulp-jshint
const less = require('gulp-less'); //编译less
const sass = require('gulp-ruby-sass'); //编译sass 需要ruby环境并在ruby下安装sass
const autoprefixer = require('gulp-autoprefixer');//自动添加css3前缀
const minify = require('gulp-minify-css');//压缩css
const uglify = require('gulp-uglify');  //加载js压缩
const htmlmini = require('gulp-minify-html'); //压缩html
const cache = require('gulp-cache');
const imagemin = require('gulp-imagemin');//图片压缩插件
const pngquant = require('imagemin-pngquant'); //png图片压缩插件
const concat = require("gulp-concat"); //文件合并
const watch = require("gulp-watch"); //监听

const paths = {
    dist: {
        "js": "dist/js",
        "css": "dist/css",
        "image":"dist/images",
        "html":"dist/html"
    },
    static:{
        "js":"src/js/",
        "css":"src/css/",
        "image":"src/images/",
        "html":"src/html",
        "less":"src/less/",
        "sass":"src/sass/"
    }
};

gulp.task('jsLint', function () {
    gulp.src([paths.static.js + '*.js', '!'+ paths.static.js + '*.min.js'])
        .pipe(jshint())
        .pipe(jshint.reporter('default')); // 输出检查结果
});

//编译less
gulp.task('less', function () {
    gulp.src(paths.static.less + '*.less') //该任务针对的文件
        .pipe(less()) //该任务调用的模块
        .pipe(gulp.dest(paths.static.css)); //将会在src/css下生成index.css
});

//编译sass
gulp.task('sass', function () {
    return sass(paths.static.sass + '*.scss')
        .on('error', function (err) {
            console.error('Error!', err.message);
        })
        .pipe(gulp.dest(paths.static.css));
});

//监听sass文件发生变化
gulp.task('sassWatch', function () {
    var watcher = gulp.watch([paths.static.sass + '*.scss',paths.static.less + '*.less'], ['sass','less']);
    watcher.on('change',function(ev){
        console.log("flie:" + ev.path);
    })
});

//编译css
gulp.task('cssmini', function () {
    gulp.src([paths.static.css + '*.css', '!' + paths.static.css +'*.min.css'])
        .pipe(minify())
        .pipe(gulp.dest(paths.dist.css));
});

// 压缩js
gulp.task('compass', function () {
    gulp.src([paths.static.js + '*.js', '!'+ paths.static.js +'*.min.js'])
        .pipe(uglify())
        .pipe(gulp.dest(paths.dist.js));
});

//压缩html
gulp.task('htmlmini', function () {
    gulp.src(paths.static.html + '*.html')
        .pipe(htmlmini())
        .pipe(gulp.dest(paths.dist.html));
});

//图片压缩
gulp.task('imagemini', function () {
    gulp.src(paths.static.image + '*.{png,jpg,gif,ico}')
        .pipe(cache(imagemin({
            progressive: true,
            svgoPlugins: [{removeViewBox: false}],
            use: [pngquant()]
        })))
        .pipe(gulp.dest(paths.dist.image));
});

//js文件压缩并合并
gulp.task('jsConcat', function () {
    gulp.src([paths.static.js + '*.js','!' + paths.static.js + '*.min.js'])
        .pipe(uglify())
        .pipe(concat('all.min.js'))
        .pipe(gulp.dest(paths.dist.js));
});

//css文件压缩并合并
gulp.task('cssConcat', function () {
    gulp.src([paths.static.css + '*.css','!'+ paths.static.css +'*.min.css'])
        .pipe(minify())
        .pipe(concat('all.min.css'))
        .pipe(gulp.dest(paths.dist.css));
});

//less文件压缩并合并
gulp.task('lessConcat', function () {
    gulp.src(paths.static.less + '*.less')
        .pipe(less())
        .pipe(minify())
        .pipe(concat('all.min.css'))
        .pipe(gulp.dest(paths.dist.css));
});

//sass文件压缩并合并
gulp.task('sassConcat', function () {
    gulp.src(paths.static.sass + '*.scss')
        .pipe(less())
        .pipe(minify())
        .pipe(concat('all.min.css'))
        .pipe(gulp.dest(paths.dist.css));
});

//自动在css3加入前缀
gulp.task('autoCss3', function() {
        gulp.src([paths.static.css + '*.css','!'+ paths.static.css +'*.min.css'])
            .pipe(autoprefixer({
                browsers: ['last 10 versions'],
                cascade: false
            }))
            .pipe(gulp.dest(paths.static.css))
    }
);

gulp.task('default', ['less']);


