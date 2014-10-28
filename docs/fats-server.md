# fats server

该命令可以启动一个静态web服务器，用于预览本地项目。

	cd /workspace/myProject    
	fats server start --watch on --port 3000

此时系统会自动启动浏览器，打开项目的默认首页。


该web服务器有以下特点：

* 代码修改保存后多浏览器自动刷新（类似LiveReload免刷功能，支持IE6+，支持刷新远程浏览器）；
* 可以在html页面中include子模板（基于 [artTemplate](https://github.com/aui/artTemplate)，使用[简洁版语法](https://github.com/aui/artTemplate/wiki/syntax:simple)）；

未来还将支持以下功能：

* 使用静态文件模拟数据接口；
* 模板支持SSI语法；


## 命令行参数

	fats server <command> [option]

Commands:
	
**start**  

	fats server start
	fats server start --port 3000 --root /path/to/dir --watch off

**restart**  

	fats server restart

**stop**  

	fats server stop

Options

**--root, -r**  : web服务器指向的根目录 `--root /path/to/dir`，如果不传递该参数，则使用当前执行目录作为根目录  
**--hostname, -n**  : 服务器使用的主机名，如果不传递该参数，则使用 `ip` 作为主机名。使用前需要在 `hosts` 文件中添加相应规则   
**--port, -p**  : web服务器使用的端口 `--port 8080`，`(default 3000)`   
**--watch, -w**  : 修改代码后浏览器自动刷新 `--watch on`，`(default off)`
