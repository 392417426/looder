//���빤�߰� require('node_modules���Ӧģ��')
const gulp = require('gulp'); //���ذ�װgulp���õ��ĵط�
const jshint = require("gulp-jshint");//���JS�Ĵ��� npm install --save-dev jshint gulp-jshint
const less = require('gulp-less'); //����less
const sass = require('gulp-ruby-sass'); //����sass ��Ҫruby��������ruby�°�װsass
const autoprefixer = require('gulp-autoprefixer');//�Զ����css3ǰ׺
const minify = require('gulp-minify-css');//ѹ��css
const uglify = require('gulp-uglify');  //����jsѹ��
const htmlmini = require('gulp-minify-html'); //ѹ��html
const cache = require('gulp-cache');
const imagemin = require('gulp-imagemin');//ͼƬѹ�����
const pngquant = require('imagemin-pngquant'); //pngͼƬѹ�����
const concat = require("gulp-concat"); //�ļ��ϲ�
const watch = require("gulp-watch"); //����

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
);

gulp.task('default', ['less']);


