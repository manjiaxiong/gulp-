/**
 * Gulp 提供了两个强大的组合方法： series() 和 parallel()，允许将多个独立的任务组合为一个更大的操作。这两个方法都可以接受任意数目的任务（task）函数或已经组合的操作。series() 和 parallel() 可以互相嵌套至任意深度。

  如果需要让任务（task）按顺序执行，请使用 series() 方法。\
  对于希望以最大并发来运行的任务（tasks），可以使用 parallel() 方法将它们组合起来。
  当 series() 或 parallel() 被调用时，任务（tasks）被立即组合在一起。这就允许在组合中进行改变，而不需要在单个任务（task）中进行条件判断。
  series() 和 parallel() 可以被嵌套到任意深度。
 */
  const { series, parallel } = require('gulp');

  function clean(cb) {
    // body omitted
    cb();
  }
  
  function cssTranspile(cb) {
    // body omitted
    cb();
  }
  
  function cssMinify(cb) {
    // body omitted
    cb();
  }
  
  function jsTranspile(cb) {
    // body omitted
    cb();
  }
  
  function jsBundle(cb) {
    // body omitted
    cb();
  }
  
  function jsMinify(cb) {
    // body omitted
    cb();
  }
  
  function publish(cb) {
    // body omitted
    cb();
  }
  
  exports.build = series(
    clean,
    parallel(
      cssTranspile,
      series(jsTranspile, jsBundle)
    ),
    parallel(cssMinify, jsMinify),
    publish
  );