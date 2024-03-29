import * as dartSass from 'sass'
import gulpSass from 'gulp-sass';
import rename from 'gulp-rename';


import cleanCss from 'gulp-clean-css';//сжатие css
import webpcss from 'gulp-webpcss'//вывод webp изображений
import autoPrefixer from 'gulp-autoprefixer';// добавление префиксов
import groupCssMediaQueries from 'gulp-group-css-media-queries'//групировка медиа запросов




const sass = gulpSass(dartSass)


export const scss = () => {
   return app.gulp.src(app.path.src.scss, { sourcemaps: app.isDev })
      .pipe(app.plugins.plumber(
         app.plugins.notify.onError({
            title: 'SCSS',
            message: 'Error:<%= error.message %>'
         })))
      .pipe(app.plugins.replace(/@assets\//g, '../assets/'))
      .pipe(sass({
         outputStyle: 'expanded'
      }))

      .pipe(
         app.plugins.if(
            app.isBuild,
            groupCssMediaQueries()
         )
      )
      .pipe(
         app.plugins.if(
            app.isBuild,
            webpcss({
               webpClass: '.webp',
               noWebpClass: '.no-webp'
            })
         )
      )
      .pipe(
         app.plugins.if(
            app.isBuild,
            autoPrefixer({
               grid: true,
               overrideBrowserslist: ['last 3 versions'],
               cascade: true
            })
         )
      )
      //раскоментировать если не нужен сжатый дубль файла стилей
      //.pipe(app.gulp.dest(app.path.build.css))
      .pipe(
         app.plugins.if(
            app.isBuild,
            cleanCss()
         )
      )
      .pipe(rename({
         extname: '.min.css'
      }))
      .pipe(app.gulp.dest(app.path.build.css))
      .pipe(app.plugins.browsersync.stream());
}