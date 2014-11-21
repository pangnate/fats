# 配置任务

任务配置定义在 Fatsfile.js 的 fats.taskConfig 方法中。配置主要是以任务命名的属性，也可以包含其他数据，但不能与任务所需的属性冲突。Fatsfile 的写法与 Gruntfile 近似，但更简易。

	module.exports = function (fats) {
		fats.taskConfig({
			// 读取项目基本信息
			pkg: fats.util.readJSON('package.json'),
			// 调用任务
			<TaskName>: {
				// 任务配置
			}	
		});
		fats.registerTask();
	};

Fatsfile.js 可用的 **`<TaskName>`** 有：
	
	clean       : 清理目录
	csslint     : 校验css
	jshint      : 校验js
	uglify      : 压缩合并js
	cleancss    : 压缩合并css

### clean / csslint / jshint 任务配置

	<TaskName>: {
		/*
		 * foo、bar 为用户自定义分组名
		 * 每个自定义任务分组需要一个配置项 files，必需
		 * files 的值可以使一个数组或字符串
		 * 数组项及字符串可以使用通配符匹配文件
		 * 分组的 options 会覆盖上一层的 options 设置
		 * clean 不支持 options 项
		 * csslint 及 jshint 的 options 项参见官方文档
		 */
		options: {...},
		foo: {
			src: ['css/*.css']  // 匹配css目录下的所有css文件
		},
		bar: {
			src: '**/*.css'  // 匹配任意目录下的所有css文件
		}
	}

或者使用简洁写法

	<TaskName>: {
		options: {...},
		src: ['css/*.css']
	}

### uglify / cleancss 任务配置

	<TaskName>: {

		/*
		 * options 为参数控制，可以设置压缩合并后的 banner 
		 * options 的 urlPrefix 项为 cleancss 特有，可以设置背景图前缀
		 * foo、bar 为用户自定义分组名，可以细粒度控制合并规则
		 * 分组的 options 会覆盖上一层的 options 设置
		 */
    	
		options: {
			banner: '/*! ' +
					'<%= pkg.name %> v<%= pkg.version %> ' +
					'<%= fats.template.today("YYYY-MM-DD hh:mm:ss") %> ' +
					'*/\n'
		},
		foo: {
			options: {
				urlPrefix: 'http://css.suning.cn'
			},
			src: 'js/(?!.*(jquery|min)).*.js',  // 合并所有非jquery及min文件
			dest: 'js/<%= pkg.name %>.min.js'
		}
		bar: {
			'js/test.min.js': 'js/test.js'
		}
	}
或者使用文件数组格式  

	<TaskName>: {  
		'dest/js/<%= pkg.name %>.min.js': ['js/*.js', '../static/js/app.js']  
	}


### 文件匹配的用法

1、单个文件（简洁格式）
	
	{
		'dest/js/test.min.js': 'js/test.js'
	}
	
2、多个文件合并

	{
		dest: 'dest/js/<%= pkg.name %>.min.js',
		src: 'js/*.js'  // js目录下的所有js文件
	}
	{
		dest: 'dest/js/<%= pkg.name %>.min.js',
		src: '**/*.js'  // 所有目录下的所有js文件
	}
	{
		dest: 'dest/js/<%= pkg.name %>.min.js',
		src: 'js/(?!.*(jquery|min)).*.js'  // 合并所有非jquery及min文件
	}
	{
		dest: 'dest/js/<%= pkg.name %>.min.js',
		src: ['js/file1.js', 'js/file2.js']
	}
	
3、逐个文件

	{
		dest: 'dest/js/$1.min.js',
		src: 'js/(*).js'
	}


uglify / cleancss 任务配置的所有文件格式都支持 src 和 dest 属性、"简洁格式" 与 "文件数组格式"


