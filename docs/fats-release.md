# fats release

该命令可以根据项目目录下 `Fatsfile.js` 的配置对本地项目进行编译操作。

	cd /workspace/myProject    
	fats release

release 命令执行后会对每一步操作给出结果提示，常见的如css及js校验信息。如果存在 error 级别信息，编译进程会终止并给出提示，需要开发人员处理。

**特别说明的是：`csslint`、`jshint`会生成详细的问题报告，文件位于 `/.report` 目录下。**


