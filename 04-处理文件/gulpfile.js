/**
 * gulp 暴露了 src() 和 dest() 方法用于处理计算机上存放的文件。

  src() 接受 glob 参数，并从文件系统中读取文件然后生成一个 Node 流（stream）。它将所有匹配的文件读取到内存中并通过流（stream）进行处理。

  由 src() 产生的流（stream）应当从任务（task）中返回并发出异步完成的信号，就如 创建任务（task） 文档中所述。
 */
  const { src, dest } = require('gulp');
  const babel = require('gulp-babel');
  
  exports.default = function() {
    return src('src/*.js')
      .pipe(babel())
      .pipe(dest('output/'));
  }