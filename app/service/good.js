'use strict';

const Service = require('egg').Service;
const time = require('../utils/time');
class GoodService extends Service {
  async getGoodList(data) {
    // console.log(data);
    const { page, pageSize, searchName } = data;
    const limit = pageSize;
    const offset = (Number(page) - 1) * pageSize;
    const name = searchName ? 'WHERE name LIKE "%' + searchName + '%" ' : '';
    const sql = 'select * from goods ' + name + 'order by createTime desc LIMIT ' + offset + ',' + limit;
    const List = await this.app.mysql.query(sql);
    const totalList = await this.app.mysql.query('select count(*) from goods ' + name);
    const res = {
      code: 1,
      data: {
        list: List,
        page,
        pageSize,
        total: totalList[0]['count(*)'],
      },
      msg: '获取成功',
    };
    return res;
  }
  async addNewGood(data) {
    // console.log(data);
    const { name, stock, proid } = data;
    const good = { name, stock, proid, createTime: time.newTime(), status: 0 };
    const idList = await this.app.mysql.get('goods', { proid });
    let res = {};
    if (idList) {
      res = {
        code: 0,
        msg: '商品id已存在',
      };
    } else {
      const List = await this.app.mysql.insert('goods', good);
      res = {
        code: List.affectedRows === 1 ? 1 : 0,
        msg: List.affectedRows === 1 ? '添加成功' : '添加失败',
      };
    }
    return res;
  }
  async editGood(data) {
    // console.log(data);
    const { name, stock, proid, id, status } = data;
    const good = { name, stock, proid, id, status };
    const idList = await this.app.mysql.get('goods', { proid });
    let res = {};
    if (idList && idList.id !== id) {
      res = {
        code: 0,
        msg: '商品编号已存在',
      };
    } else {
      const List = await this.app.mysql.update('goods', good);
      res = {
        code: List.affectedRows === 1 ? 1 : 0,
        msg: List.affectedRows === 1 ? '修改成功' : '修改失败',
      };
    }
    return res;
  }
  async delGood(data) {
    // console.log(data);
    const { id } = data;
    const idList = await this.app.mysql.get('goods', { id });
    let res = {};
    // console.log(idList);
    if (idList) {
      const List = await this.app.mysql.delete('goods', { id });
      res = {
        code: List.affectedRows === 1 ? 1 : 0,
        msg: List.affectedRows === 1 ? '删除成功' : '删除失败',
      };
    } else {
      res = {
        code: 0,
        msg: '商品不存在',
      };
    }
    return res;
  }
}

module.exports = GoodService;
