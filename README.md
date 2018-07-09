# egg-vue-typescript-boilerplate

基于 Egg + Vue + TypeScript + Element + Webpack4 多页面和单页面服务端客户端渲染同构工程骨架项目, Webpack3 构建请见 [webpack3](https://github.com/hubcarl/egg-vue-typescript-boilerplate/tree/webpack3).

## 1. 版本

- Egg 版本： ^2.x.x
- Node 版本: Node ^8.x.x+,
- Webpack 版本: ^4.0.0
- Vue 版本: ^2.5.0
- TypeScript: ^2.6.2
- Element UI

## 2. 文档

- http://hubcarl.github.io/easywebpack/vue/rule
- https://zhuanlan.zhihu.com/easywebpack


## 3. 特性

- 支持 Egg Node 端代码和前端代码 TypeScript 编写和构建

- 支持本地开发 ts-node 运行，本地开发无需运行 tsc 命令

- 支持 async 和 await 特性, Controller 采用 class 方式编写

- 支持 server 和 client 端代码修改, Webpack 时时编译和热更新, `npm run dev` 一键启动应用

- 基于 vue + vuex + vue-router + axios 单页面服务器客户端同构实现

- 支持开发环境, 测试环境，正式环境 Webpack 编译

- 支持 js/css/image 资源依赖, 内置支持CDN特性

- 支持 Webpack DLL 自动化构建

- 支持 Vue 组件服务端渲染异步加载
 

## 4. 依赖

- [easywebpack-vue](https://github.com/hubcarl/easywebpack) ^4.x.x
- [egg-view-vue-ssr](https://github.com/hubcarl/egg-view-vue-ssr) ^3.0.2
- [egg-webpack](https://github.com/hubcarl/egg-webpack) ^4.x.x
- [egg-webpack-vue](https://github.com/hubcarl/egg-webpack-vue) ^2.0.0

## 5. 使用

#### 5.1 安装依赖

```bash
npm install
```

#### 5.2 启动应用

```bash
npm run dev
```

应用访问: http://127.0.0.1:7001

![npm start启动](https://github.com/hubcarl/egg-vue-webpack-boilerplate/blob/master/docs/images/webpack-build.png)


#### 5.3 构建文件

- TypeScript Egg 构建

```bash
npm run tsc
```

- TypeScript 前端工程构建

```bash
npm run build
```

当在本地运行了 `npm run tsc` 之后，本地开发时，记得 `npm run clean` 清楚 js 文件。

#### 5.4 打包部署

1. 先运行 `npm run tsc` 和 `npm run build` 构建 TypeScript Egg 代码和 TypeScript 前端代码
2. 项目代码和构建代码一起打包代码
3. 应用部署后，通过 `npm start` 启动应用


## License

[MIT](LICENSE)
