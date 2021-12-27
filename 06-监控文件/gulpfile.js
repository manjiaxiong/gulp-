/***
 * gulp api 中的 watch() 方法利用文件系统的监控程序（file system watcher）将 globs 与 任务（task） 进行关联。它对匹配 glob 的文件进行监控，如果有文件被修改了就执行关联的任务（task）。如果被执行的任务（task）没有触发 异步完成 信号，它将永远不会再次运行了。
 * 此 API 的默认设置是基于通常的使用场景的，而且提供了内置的延迟和排队机制。
 */
 const { watch, series } = require('gulp');

 function clean(cb) {
   // body omitted
   cb();
 }
 
 function javascript(cb) {
   // body omitted
   cb();
 }
 
 function css(cb) {
   // body omitted
   cb();
 }
 
 // 可以只关联一个任务
 watch('src/*.css', css);
 // 或者关联一个任务组合
 watch('src/*.js', series(clean, javascript));