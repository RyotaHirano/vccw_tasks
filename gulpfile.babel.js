import gulp from 'gulp';
import requireDir from 'require-dir';
import runSequence from 'run-sequence';
import { reload } from 'browser-sync';
import { DIR } from './gulp/conf';

requireDir('./gulp/tasks');

gulp.task('predefault', cb => {
  runSequence(
    ['sass', 'eslint'],
    'babel',
    cb
  );
});

gulp.task('babel-with-eslint', cb => {
  runSequence(
    'eslint',
    'babel',
    cb
  );
});

gulp.task('build', cb => {
  runSequence(
    ['eslint', 'clean'],
    ['sass', 'babel', 'imagemin'],
    'uglify',
    'copy:build',
    cb
  );
});

gulp.task('default', ['predefault'], () => {
  // wp環境の起動はここで行う
  runSequence('browser-sync');

  gulp.watch(
    [`./${DIR.SRC}/**/*.{scss,sass}`],
    ['sass', reload]
  );
  gulp.watch(
    [`./${DIR.SRC}/**/*.js`],
    ['babel-with-eslint', reload]
  );
  gulp.watch(
    [`./${DIR.WP}/**/*.php`],
    reload
  );
});
