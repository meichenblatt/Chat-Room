
var gulp = require('gulp');
var autoprefixer = require('gulp-autoprefixer');
var browserSync = require('browser-sync').create();
var eslint = require('gulp-eslint');
var uglify = require('gulp-uglify');
var pump = require('pump');
var cleanCSS = require('gulp-clean-css');
var concat = require('gulp-concat');
var clean = require('gulp-clean');
var browserify = require('browserify');
var source = require('vinyl-source-stream');
var babelify = require('babelify');

gulp.task('default', ['browserify'], function() {
	
	gulp.watch('**/*.html').on('change', browserSync.reload);
	//gulp.watch('./src/js/indexdb/indexdb.js', ['browserify']);
	
});

gulp.task('browserSync', function(cb){
	return browserSync.init({
		server: './src/'
	}, cb);
});

gulp.task('browserify', ['browserSync'], function(){
	return browserify('src/js/indexdb/indexdb.js')
	.transform(babelify, { presets: ["es2015"] })
	.bundle()
	.pipe(source('indexdb.js'))
	.pipe(gulp.dest('./src/js'))
})



gulp.task('serve:dist', ['concat'], function(){

	browserSync.init({
		server: './dist/'
	});

});


gulp.task('clean', function () {
	return gulp.src(['dist/tmpl','dist/css','dist/js','src/compressed'], {read: false})
        .pipe(clean());
});

gulp.task('tmpl',['clean'], function () {
	return gulp.src('src/tmpl/*/')
    .pipe(gulp.dest('dist/tmpl/'));
});

gulp.task('minify-css', ['tmpl'], function() {
  return gulp.src('src/css/*.css')
    .pipe(cleanCSS({compatibility: 'ie8'}))
    .pipe(gulp.dest('dist/css'));
});

gulp.task('compress', ['minify-css'], function (cb) {
  
  pump([
        gulp.src(['src/js/*.js', 'src/controllers/*.js', 'src/app.js']),
        uglify({mangle:false}),
        gulp.dest('src/compressed')
    ],
    cb
  );
  
});


gulp.task('concat', ['compress'], function() {
  return gulp.src(['./src/compressed/angular.min.js',
  	'./src/compressed/angular-route.min.js',
  	'./src/compressed/firebase.js',
  	'./src/compressed/angularfire.js',
  	'./src/compressed/jquery-3.1.1.min.js',
  	'./src/compressed/bootstrap.min.js',
  	'./src/compressed/app.js',
  	'./src/compressed/indexdb.js',
  	'./src/compressed/chat.js',
  	'./src/compressed/about.js',
  	'./src/compressed/contact.js'])
    .pipe(concat('all.js'))
    .pipe(gulp.dest('./dist/js'));
});