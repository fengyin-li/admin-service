'use strict';

const Controller = require('egg').Controller;

class GoodController extends Controller {
  async getGoodList() {
    const { ctx } = this;
    const res = await ctx.service.good.getGoodList(ctx.request.body);
    ctx.body = res;
  }
  async addNewGood() {
    const { ctx } = this;
    const res = await ctx.service.good.addNewGood(ctx.request.body);
    ctx.body = res;
  }
  async editGood() {
    const { ctx } = this;
    const res = await ctx.service.good.editGood(ctx.request.body);
    ctx.body = res;
  }
  async delGood() {
    const { ctx } = this;
    const res = await ctx.service.good.delGood(ctx.request.body);
    ctx.body = res;
  }
}

module.exports = GoodController;
