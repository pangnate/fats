# fats

fats 是一套前端自动化工具系统（Front-end automation tools system）。它立足实际，主要解决前端开发过程中的工程化问题。

fats 的安装与管理都是通过 [npm](https://npmjs.org)，npm 是 [Node.js](http://nodejs.org) 的包管理器。    
fats 要求 Node.js 版本 >= 0.8.0。

## 安装
在全局环境中安装 fats。

	npm install -g fats

> 部分操作系统在安装 `fats` 时可能会出现 `(node-gyp rebuild 2> builderror.log) || (exit 0)` 等错误信息，这是由 `ws` 模块内部导致，并不影响最终的安装结果。

安装完成后查看是否安装成功

	fats -v

## 新建项目

1. 切换到工作目录；
2. 运行 `fats init` 初始化项目，此时 `fats` 会要求输入部分项目基本信息，确认后会在工作目录下产生一个以项目名称命名的文件夹，这就是接下来使用的项目目录；

## 启动web服务器

1. 进入到项目目录 `cd /dir/to/project`；
2. 运行 `fats server start --watch`，此时会自动启动默认浏览器，打开项目首页；
3. 如果浏览器没有自动启动，可以打开 `http://localhost:3000` 访问项目；

OK，现在就可以随便编辑代码，保存看一下会发生什么吧！  

详细文档请阅读

1. [项目初始化（fats init）](./fats-init.md)
2. [开发调试（fats server）](./fats-server.md)
3. [数据及接口模拟](./mock.md)
4. [编译与发布（fats release）](./fats-release.md)
5. [任务配置（Fatsfile.js）](./Fatsfile.md)
