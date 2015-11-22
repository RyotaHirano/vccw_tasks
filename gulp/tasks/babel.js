import gulp from 'gulp';
import { plumber, notify, babel, rename } from '../plugins';
import { babel as conf } from '../conf';

gulp.task('babel', () => {
  return gulp.src(conf.src)
    .pipe(plumber({
      errorHandler: notify.onError('<%= error.message %>')
    }))
    .pipe(babel())
    .pipe(rename(path => {
      path.dirname = path.dirname.replace('js', '.');
    }))
    .pipe(gulp.dest(conf.dst));
});
