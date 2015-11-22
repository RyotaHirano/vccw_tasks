import gulp from 'gulp';
import browserSync from 'browser-sync';
const ip = '192.168.33.10';

gulp.task('browser-sync', cd => {
  browserSync.init({
    proxy: ip
  });
});
