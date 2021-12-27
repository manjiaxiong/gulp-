/**
 * Node 库以多种方式处理异步功能。最常见的模式是 error-first callbacks，但是你还可能会遇到 streams、promises、event emitters、child processes,
 * 或 observables。gulp 任务（task）规范化了所有这些类型的异步功能。
 * 任务（task）完成通知: 当从任务（task）中返回 stream、promise、event emitter、child process 或 observable 时，成功或错误值将通知 gulp 是否继续执行或结束。如果任务（task）出错，gulp 将立即结束执行并显示该错误。
 * 当使用 series() 组合多个任务（task）时，任何一个任务（task）的错误将导致整个任务组合结束，并且不会进一步执行其他任务。当使用 parallel() 组合多个任务（task）时，一个任务的错误将结束整个任务组合的结束，但是其他并行的任务（task）可能会执行完，也可能没有执行完。
 */

 const { src, dest } = require('gulp');

 function streamTask() {
   return src('*.js')
     .pipe(dest('output'));
 }
 function promiseTask() {
    return Promise.resolve('the value is ignored');
  }
  
exports.default = promiseTask;
exports.default = streamTask;