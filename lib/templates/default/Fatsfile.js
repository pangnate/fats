/*
 * 此文件为fats系统自动化构建时读取的配置文件
 * 配置参数见：https://github.com/pangnate/fats/blob/master/docs/Ftasfile.md
 * */
module.exports = function (fats) {

	fats.taskConfig({

		// 读取项目基本信息
		pkg: fats.util.readJSON('package.json'),

		// 清理目录
		clean: {
			foo: {
				src: '/dest'
			},
			bar: {
				src: '/.report'
			}
		},

		// 校验css文件
		csslint: {
			foo: {
				files: 'css/*.css'
			}
		},

		// 校验js文件
		jshint: {
			foo: {
				files: 'js/*.js'
			}
		},

		// 合并、压缩css文件
		cleancss: {
			foo: {
				options: {
					banner: '/*! ' +
						'<%= pkg.name %> v<%= pkg.version %> ' +
						'<%= fats.template.today("YYYY-MM-DD hh:mm:ss") %> ' +
						'*/\n'
				},
				group: {
					'css/<%= pkg.name %>.min.css': 'css/*.css'
				}
			}
		},

		// 合并、压缩js文件
		uglify: {
			foo: {
				options: {
					banner: '/*! ' +
						'<%= pkg.name %> v<%= pkg.version %> ' +
						'<%= fats.template.today("YYYY-MM-DD hh:mm:ss") %> ' +
						'*/\n'
				},
				bar: {
					src: 'js/(?!.*(jquery|min)).*.js',  // 合并所有非jquery及min文件
					dest: 'js/<%= pkg.name %>.min.js'
				}
			}
		}

	});

	fats.registerTask();

};