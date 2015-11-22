export const DIR = {
  SRC: 'src',
  DST: 'dst',
  BUILD: 'build',
  IMG: 'images',
  WP: 'www/wordpress/wp-content/themes'
};

export const sass = {
  src: [
    `${DIR.SRC}/**/*.{scss,sass}`
  ],
  dst: `${DIR.DST}/css`
};

export const babel = {
  src: [`${DIR.SRC}/**/*.js`],
  dst: `${DIR.DST}/js`,
  opts: {
    //options
  }
};

export const eslint = {
  src: [`${DIR.SRC}/**/*.js`]
};

export const clean = {
  path: [`${DIR.BUILD}`]
};

export const imagemin = {
  src: [`${DIR.SRC}/${DIR.IMG}/**`],
  dst: `${DIR.BUILD}/${DIR.IMG}`,
  opts: {
    //options
  }
};

export const uglify = {
  src: [`${DIR.DST}/**/*.js`],
  dst: `${DIR.BUILD}/js`
};

export const copy = {
  img: {
    src: [`${DIR.SRC}/${DIR.IMG}/**`],
    dst: `${DIR.DST}/${DIR.IMG}`
  },
  build: {
    src: [
      `${DIR.DST}/**`,
      `!${DIR.DST}/js/**`,
      `!${DIR.DST}/${DIR.IMG}`,
      `!${DIR.DST}/${DIR.IMG}/**`
    ],
    dst: `${DIR.BUILD}`
  }
};
