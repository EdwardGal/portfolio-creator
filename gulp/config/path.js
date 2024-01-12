//Получаем имя папки проекта
import * as nodePath from 'path';
const rootFolder = nodePath.basename(nodePath.resolve())


const buildFolder = './dist'; //можно использовать rootFolder
const srcFolder = './src';


export const path = {
   build: {
      html: `${buildFolder}/`,
      js: `${buildFolder}/js/`,
      css: `${buildFolder}/css/`,
      images: `${buildFolder}/assets/`,
      fonts: `${buildFolder}/fonts/`,
      files: `${buildFolder}/files/`
   },
   src: {
      html: `${srcFolder}/*.html`,
      js: `${srcFolder}/js/main.js`,
      scss: `${srcFolder}/scss/main.scss`,
      images: `${srcFolder}/assets/**/*.{jpg,jpeg,png,gif,webp,avif}`,
      svg: `${srcFolder}/assets/**/*.svg`,
      files: `${srcFolder}/files/**/*.*`,
      svgicons: `${srcFolder}/svgicons/*.svg`,
   },
   watch: {
      js: `${srcFolder}/js/**/*.js`,
      scss: `${srcFolder}/scss/**/*.scss`,
      html: `${srcFolder}/**/*.html`,
      images: `${srcFolder}/assets/**/*.{jpg,jpeg,png,svg,gif,ico,webp,avif}`,
      files: `${srcFolder}/files/**/*.*`,
   },
   clean: buildFolder,
   buildFolder: buildFolder,
   srcFolder: srcFolder,
   rootFolder: rootFolder,
   ftp: `www/edotest.ru`
}