var gulp = require('gulp');
var spsync = require('gulp-spsync-creds').sync;
var creds = require('./sync.config.json');

gulp.task("upload",function () {
    return gulp.src('./src/**/*')
    .pipe(spsync({
        "username": creds.username,
        "password": creds.password,
        "site": creds.site,
    }))
});
