//Основной модуль
import gulp from 'gulp'
//импорт путей
import { path } from './gulp/config/path.js'
//импорт общих плагинов
import { plugins } from './gulp/config/plugins.js'


global.app = {
   isBuild: process.argv.includes('--build'),
   isDev: !process.argv.includes('--build'),
   path: path,
   gulp: gulp,
   plugins: plugins
}

//импорт задач
import { copy } from './gulp/tasks/copy.js';
import { reset } from './gulp/tasks/reset.js';
import { html } from './gulp/tasks/html.js';
import { server } from './gulp/tasks/server.js';
import { scss } from './gulp/tasks/scss.js';
import { js } from './gulp/tasks/js.js'
import { images } from './gulp/tasks/images.js'
import { otfToTtf, ttfToWoff, fontsStyle } from './gulp/tasks/fonts.js';
import { sprite } from './gulp/tasks/sprite.js'
import { zip } from "./gulp/tasks/zip.js";
import { ftp } from "./gulp/tasks/ftp.js";
//наблюдатель за изменением файлов

function watcher() {
   gulp.watch(path.watch.files, copy)
   gulp.watch(path.watch.html, html) //gulp.series(html,ftp)
   gulp.watch(path.watch.scss, scss)
   gulp.watch(path.watch.js, js)
   gulp.watch(path.watch.images, images)
}


//последовательная обработка шрифтов

const fonts = gulp.series(otfToTtf, ttfToWoff, fontsStyle)

//основные задачи

const mainTasks = gulp.series(fonts, gulp.parallel(copy, html, scss, js, images));

//const mainTasks = gulp.series(fonts, js, gulp.parallel(copy, html, scss, images));

//Построение сценариев выполнения задач

const dev = gulp.series(reset, mainTasks, gulp.parallel(watcher, server));
const build = gulp.series(reset, mainTasks);
const deployZIP = gulp.series(reset, mainTasks, zip);
const deployFTP = gulp.series(reset, mainTasks, ftp);
//экспорт сценариев

export { dev }
export { build }
export { deployZIP }
export { deployFTP }
export { sprite }

//выполнения сыенария по умолчанию
gulp.task('default', dev);