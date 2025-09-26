// Copyright (c) 2025 coze-dev Authors
// SPDX-License-Identifier: Apache-2.0
import { createRsbuildConfig } from '@cozeloop/rsbuild-config';

export type RsbuildConfig = ReturnType<typeof createRsbuildConfig>;

const port = 8090;

export default createRsbuildConfig({
  server: { port ,    proxy: {
      '/api': {
        target: 'http://192.168.43.7:8082', // 你的后端服务地址
        changeOrigin: true,              // 改变源，用于跨域
        secure: false,                   // 如果是 https 服务，设为 true
        // 可选：重写路径（如去掉 /api 前缀）
        // rewrite: (path) => path.replace(/^\/api/, ''),
      },
    },
   },
  dev: {
    assetPrefix: `http://localhost:${port}`,
    client: {
      port: `${port}`,
      host: 'localhost',
      protocol: 'ws',
    },
  },
  html: {
    title: 'Coze Loop',
    template: './src/assets/template.html',
    favicon: './src/assets/images/coze.svg',
    crossorigin: 'anonymous',
  },
}) as RsbuildConfig;
