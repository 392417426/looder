//���빤�߰� require('node_modules���Ӧģ��')
const gulp = require('gulp'); //���ذ�װgulp���õ��ĵط�
const jshint = require("gulp-jshint");//���JS�Ĵ��� npm install --save-dev jshint gulp-jshint
const less = require('gulp-less'); //����less
const sass = require('gulp-ruby-sass'); //����sass ��Ҫruby��������ruby�°�װsass
const autoprefixer = require('gulp-autoprefixer');//�Զ����css3ǰ׺
const minify = require('gulp-minify-css');//ѹ��css
const uglify = require('gulp-uglify');  //ѹ��js
const htmlmini = require('gulp-minify-html'); //ѹ��html
const cache = require('gulp-cache');
const imagemin = require('gulp-imagemin');//ͼƬѹ�����
const pngquant = require('imagemin-pngquant'); //pngͼƬѹ�����
const concat = require("gulp-concat"); //�ļ��ϲ�
const watch = require("gulp-watch"); //����
const connect = require('gulp-connect'); //���ط�����
const htmlreplace = require('gulp-html-replace'); //�ű���cssע��
const inject = require('gulp-inject'); //�ű���cssע��
const path = require("path");

const paths = {
    build: {
        "js": "dist/js",
        "css": "dist/css",
        "image":"dist/images",
        "html":"dist/html"
    },
    dev:{
        "js":"src/js/",
        "css":"src/css/",
        "image":"src/images/",
        "html":"src/html/",
        "less":"src/less/",
        "sass":"src/sass/"
    }
};

/*gulp.task('jsLint', function () {
    gulp.src([paths.static.js + '*.js', '!'+ paths.static.js + '*.min.js'])
        .pipe(jshint())
        .pipe(jshint.reporter('default')); // ��������
});

//����less
gulp.task('less', function () {
    gulp.src(paths.static.less + '*.less') //��������Ե��ļ�
        .pipe(less()) //��������õ�ģ��
        .pipe(gulp.dest(paths.static.css)); //������src/css������index.css
});

//����sass
gulp.task('sass', function () {
    return sass(paths.static.sass + '*.scss')
        .on('error', function (err) {
            console.error('Error!', err.message);
        })
        .pipe(gulp.dest(paths.static.css));
});

//����sass�ļ������仯
gulp.task('sassWatch', function () {
    var watcher = gulp.watch([paths.static.sass + '*.scss',paths.static.less + '*.less'], ['sass','less']);
    watcher.on('change',function(ev){
        console.log("flie:" + ev.path);
    })
});

//����css
gulp.task('cssmini', function () {
    gulp.src([paths.static.css + '*.css', '!' + paths.static.css +'*.min.css'])
        .pipe(minify())
        .pipe(gulp.dest(paths.dist.css));
});

// ѹ��js
gulp.task('compass', function () {
    gulp.src([paths.static.js + '*.js', '!'+ paths.static.js +'*.min.js'])
        .pipe(uglify())
        .pipe(gulp.dest(paths.dist.js));
});

//ѹ��html
gulp.task('htmlmini', function () {
    gulp.src(paths.static.html + '*.html')
        .pipe(htmlmini())
        .pipe(gulp.dest(paths.dist.html));
});

//ͼƬѹ��
gulp.task('imagemini', function () {
    gulp.src(paths.static.image + '*.{png,jpg,gif,ico}')
        .pipe(cache(imagemin({
            progressive: true,
            svgoPlugins: [{removeViewBox: false}],
            use: [pngquant()]
        })))
        .pipe(gulp.dest(paths.dist.image));
});

//js�ļ�ѹ�����ϲ�
gulp.task('jsConcat', function () {
    gulp.src([paths.static.js + '*.js','!' + paths.static.js + '*.min.js'])
        .pipe(uglify())
        .pipe(concat('all.min.js'))
        .pipe(gulp.dest(paths.dist.js));
});

//css�ļ�ѹ�����ϲ�
gulp.task('cssConcat', function () {
    gulp.src([paths.static.css + '*.css','!'+ paths.static.css +'*.min.css'])
        .pipe(minify())
        .pipe(concat('all.min.css'))
        .pipe(gulp.dest(paths.dist.css));
});

//less�ļ�ѹ�����ϲ�
gulp.task('lessConcat', function () {
    gulp.src(paths.static.less + '*.less')
        .pipe(less())
        .pipe(minify())
        .pipe(concat('all.min.css'))
        .pipe(gulp.dest(paths.dist.css));
});

//sass�ļ�ѹ�����ϲ�
gulp.task('sassConcat', function () {
    gulp.src(paths.static.sass + '*.scss')
        .pipe(less())
        .pipe(minify())
        .pipe(concat('all.min.css'))
        .pipe(gulp.dest(paths.dist.css));
});

//�Զ���css3����ǰ׺
gulp.task('autoCss3', function() {
        gulp.src([paths.static.css + '*.css','!'+ paths.static.css +'*.min.css'])
            .pipe(autoprefixer({
                browsers: ['last 10 versions'],
                cascade: false
            }))
            .pipe(gulp.dest(paths.static.css))
    }
);*/

gulp.task('connect', function() {
    connect.server({
        root: 'src',
        livereload: true
    });
});

/*gulp.task('htmlreplace', function () {
    gulp.src('src/html/!*.html')
        .pipe(htmlreplace({
            'css': 'src/css/a.css',
            'js': 'src/js/test.js'
        })) .pipe(gulp.dest('src')).pipe(connect.reload());
});*/

gulp.task('reload', function () {
    gulp.src('src/*.html').pipe(connect.reload());
});

gulp.task('htmlreplace', function () {
  /*  var json = [
        {html:'src/html/index.html',css:['src/a.css'],js:['js/test.js']},
        {html:'src/html/index2.html',css:['src/b.css'],js:['js/test.js']}
    ]*/
    gulp.src('./src/html/index.html')
        .pipe(inject(gulp.src(['./src/js/test.js','./src/js/test2.js'], {read: false}), {relative: true}))
        .pipe(gulp.dest('./src'));
  /*  for(var i = 0; i < json.length; i++){
        gulp.src(json[i].html)
            .pipe(inject(gulp.src(json[i].js, {read: false}), {relative: true}))
            .pipe(gulp.dest('src'));
    }*/
});



gulp.task('watch', function () {
    gulp.watch(['src/html/*.html','src/*.html'], ['htmlreplace','reload']);
});

gulp.task('default', ['connect', 'watch']);


