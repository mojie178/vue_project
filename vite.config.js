import { fileURLToPath, URL } from 'node:url'
import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import basicSsl from '@vitejs/plugin-basic-ssl'
import postCssPxToRem from 'postcss-pxtorem'
import autoprefixer from 'autoprefixer'

// https://vitejs.dev/config/
export default defineConfig({
  base: './', // 一级域名：'./' 二级域名：'/xxxx'
  build: {
    outDir: 'vue-project', // 输出文件名
    assetsInlineLimit: '4096', // 引入文件小于此阈值，转成base64
  },
  plugins: [
    vue(), // vue
    basicSsl(), // 本地https请求
  ],
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url)) // 引用中@标签解析
    },
    extensions: ['.js', '.json', '.css', '.vue'] // 文件引入忽略扩展名列表
  },
  css: {
    postcss: {
      plugins: [
        postCssPxToRem({ // 自适应 px > rem 转换
          rootValue: 37.5, // 1rem的大小
          propList: ['*'], // 全部属性转换
        }),
        autoprefixer({ // 自动添加前缀
          overrideBrowserslist: [
            'Android 4.1',
            'iOS 7.1',
            'Chrome > 31',
            'ff > 31',
            'ie >= 8'
          ],
          grid: true
        })
      ]
    },
  },
  server: {
    host: '0.0.0.0', // ip
    port: 9999, // 端口号
    https: true, // 启用https
    proxy: { // 本地代理
      '/rng': {
        target: 'https://testidentity.ahggwl.com',
        changeOrigin: true, //
        rewrite: path => path.replace(/^\/rng/, '')
      },
    }
  }
})
