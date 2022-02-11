import { Plugin } from '@nocobase/server';
import { resolve } from 'path';

export class SystemSettingsPlugin extends Plugin {
  async beforeLoad() {
    this.app.on('installing', async () => {
      await this.db.getRepository('systemSettings').create({
        values: {
          title: 'NocoBase',
          logo: {
            title: 'nocobase-logo',
            filename: '682e5ad037dd02a0fe4800a3e91c283b.png',
            extname: '.png',
            mimetype: 'image/png',
            url: 'https://nocobase.oss-cn-beijing.aliyuncs.com/682e5ad037dd02a0fe4800a3e91c283b.png',
          },
        },
      });
    });
  }

  async load() {
    await this.app.db.import({
      directory: resolve(__dirname, 'collections'),
    });
  }
}

export default SystemSettingsPlugin;