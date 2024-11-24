const cfcExpress = require('aws-serverless-express');
const Application = require('@waline/vercel');
const app = Application({
  async postSave(comment) {
    // do what ever you want after save comment
  },
});

const server = cfcExpress.createServer(app);
exports.handler = (event, context) => {
  cfcExpress.proxy(server, event, context);
};