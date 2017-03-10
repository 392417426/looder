//���빤�߰� require('node_modules���Ӧģ��')
const gulp = require('gulp'); //���ذ�װgulp���õ��ĵط�
const jshint = require("gulp-jshint");//���JS�Ĵ��� npm install --save-dev jshint gulp-jshint
const less = require('gulp-less'); //����less
const sass = require('gulp-ruby-sass'); //����sass ��Ҫruby��������ruby�°�װsass
const autoprefixer = require('gulp-autoprefixer');
const minify = require('gulp-minify-css');//ѹ��css
const uglify = require('gulp-uglify');  //����jsѹ��
const htmlmini = require('gulp-minify-html'); //ѹ��html
const cache = require('gulp-cache');
const imagemin = require('gulp-imagemin');//ͼƬѹ�����
const pngquant = require('imagemin-pngquant'); //pngͼƬѹ�����
const concat = require("gulp-concat"); //�ļ��ϲ�
const watch = require("gulp-watch"); //����

gulp.task('jsLint', function () {
    gulp.src(['src/js/*.js', '!src/js/*.min.js'])
        .pipe(jshint())
        .pipe(jshint.reporter('default')); // ��������
});

//����less
gulp.task('less', function () {
    gulp.src('src/less/*.less') //��������Ե��ļ�
        .pipe(less()) //��������õ�ģ��
        .pipe(gulp.dest('src/css')); //������src/css������index.css
});

//����sass
gulp.task('sass', function () {
    return sass('src/sass/*.scss')
        .on('error', function (err) {
            console.error('Error!', err.message);
        })
        .pipe(gulp.dest('dist/css'));
});

//����sass�ļ������仯
gulp.task('sassWatch', function () {
    var watcher = gulp.watch(['src/sass/*.scss','src/less/*.less'], ['sass','less']);
    watcher.on('change',function(ev){
        console.log("flie:" + ev.path);
    })
});

//����css
gulp.task('cssmini', function () {
    gulp.src(['src/css/*.css', '!src/css/*.min.css'])
        .pipe(minify())
        .pipe(gulp.dest('dist/css'));
});

// ѹ��js
gulp.task('compass', function () {
    gulp.src(['src/js/*.js', '!src/js/*.min.js'])
        .pipe(uglify())
        .pipe(gulp.dest('dist/js'));
});

//ѹ��html
gulp.task('htmlmini', function () {
    gulp.src('src/html/*.html')
        .pipe(htmlmini())
        .pipe(gulp.dest('dist/html'));
});

//ͼƬѹ��
gulp.task('imagemini', function () {
    gulp.src('src/images/*.{png,jpg,gif,ico}')
        .pipe(cache(imagemin({
            progressive: true,
            svgoPlugins: [{removeViewBox: false}],
            use: [pngquant()]
        })))
        .pipe(gulp.dest('dist/images'));
});

//js�ļ�ѹ�����ϲ�
gulp.task('jsConcat', function () {
    gulp.src(['src/js/*.js','!src/js/*.min.js'])
        .pipe(uglify())
        .pipe(concat('all.min.js'))
        .pipe(gulp.dest('dist/js'));
});

//css�ļ�ѹ�����ϲ�
gulp.task('cssConcat', function () {
    gulp.src(['src/css/*.css','!src/js/*.min.css'])
        .pipe(minify())
        .pipe(concat('all.min.css'))
        .pipe(gulp.dest('dist/css'));
});

//less�ļ�ѹ�����ϲ�
gulp.task('lessConcat', function () {
    gulp.src('src/less/*.less')
        .pipe(less())
        .pipe(minify())
        .pipe(concat('all.min.css'))
        .pipe(gulp.dest('dist/css'));
});

//sass�ļ�ѹ�����ϲ�
gulp.task('sassConcat', function () {
    gulp.src('src/sass/*.scss')
        .pipe(less())
        .pipe(minify())
        .pipe(concat('all.min.css'))
        .pipe(gulp.dest('dist/css'));
});

//�Զ���css3����ǰ׺
gulp.task('autoCss3', function() {
        gulp.src(['src/css/*.css','!src/css/*.min.css'])
            .pipe(autoprefixer({
                browsers: ['last 10 versions'],
                cascade: false
            }))
            .pipe(gulp.dest('src/css'))
    }
);

gulp.task('default', ['less']);

