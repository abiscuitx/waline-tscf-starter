const cfcExpress = require('aws-serverless-express');
const Application = require('@waline-tscf/server');
const app = Application({
  async postSave(comment) {
    console.log('开始保存评论:', comment);
    // 你的处理逻辑
    console.log('评论保存完成');
  },
});

// 在 server 创建之前添加日志
console.log('正在初始化服务器...');
const server = cfcExpress.createServer(app);
console.log('服务器初始化完成');

exports.main_handler = (event, context) => {
  return new Promise((resolve, reject) => {
    cfcExpress.proxy(server, event, context, (err, result) => {
      if (err) {
        reject(err);
      } else {
        resolve(result);
      }
    });
  });
}; 