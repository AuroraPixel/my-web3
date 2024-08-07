import * as path from 'path';
import { defineConfig } from 'rspress/config';

export default defineConfig({
  root: path.join(__dirname, 'docs'),
  title: 'My-Web3',
  description: 'Personal learning web3 record.',
  icon: '/galaxy.png',
  logo: {
    light: '/web3.png',
    dark: '/web3.png',
  },
  themeConfig: {
    socialLinks: [
      { icon: 'github', mode: 'link', content: 'https://github.com/web-infra-dev/rspress' },
    ],
  },
});
