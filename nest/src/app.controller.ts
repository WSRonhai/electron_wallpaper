import { Controller, Get, Res } from '@nestjs/common';
import { AppService } from './app.service';
import { readdir, readFile } from 'fs/promises';
import { resolve } from 'path';
import _ from 'lodash';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  async getHello() {
    //读取文件
    const files = await readdir(resolve(__dirname, '..', 'wallpaper'));

    // const file = await readFile(
    //   resolve(__dirname, '../wallpaper', files[_.random(files.length - 1)]),
    // );
    // new Promise((resolve, reject) => {
    //   res.type('image/jpeg'); //不设置会直接下载
    //   resolve(res.send(file));
    // });
    //获取随机数_.random(files.length - 1)
    return (
      'http://localhost:3000/wallpaper/' + files[_.random(files.length - 1)]
    );
  }
}
