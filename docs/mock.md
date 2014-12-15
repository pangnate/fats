# 数据及接口模拟

通过 `fats init` 初始化的项目，会在项目根目录下面生成一个 `.mock` 目录，这就下面是模拟数据用到的所有文件了。

`.mock` 目录初始状态如下

	./.mock
		./conf.json
		./test.js


`conf.json` 是接口及数据的配置文件，其内容如下：

	{
		"cookie": {},
		"/mock/test": "./test.js"
	}


> 配置文件必须是一个标准的 json 文件，不能出现单引号及注释等，否则会解析失败  
> 普通接口的 key 必须使用 /mock 作为开始  
> cookie 可以是字符串、json 对象或数组  

## cookie 配置

	// 字符串，仅适用于单个cookie
	"cookie": "myKey=myValue"

	// 对象
	"cookie": {
		"name": "pangnate",
		"job": "fed"
	}

	// 数组
	"cookie": [
		"name=pangnate",
		"job=fed"
	]

## 接口配置

接口的 key 必须使用 /mock 作为开始，对应的值是一个js或json文件。
当请求 key 定义的 url 时，server 会首先尝试执行该 key 对应的文件，如果不能执行，则直接返回该文件的文本内容。


接口模拟文件可以使用以下写法

**1、文本或文本格式数据**
	
	This is a text
或者

	{
		"key": "value"
	}
	
	
**2、js自执行函数**
	
	(function(){
		var str = 'some text';
		return str;
	})();
	

**3、js模块**

	module.exports = function (req, res, fats) {
		var a = [];
		for(var i=0; i<10; i++){
			a.push(i);
		}
		return JSON.stringify(a);
	};


**注意：在可执行的文件中，必须返回一个字符串；**


### **[Q&A]**

**Q: 如何模拟不同域下面的接口？**

A: 有些情况我们需要测试跨域的jsonp接口，很简单：

在 hosts 中增加一条规则

	127.0.0.1  mockapi.cnsuning.com

比如我们的 server 监听的是 3000 端口，则可以使用
	
	http://mockapi.cnsuning.com:3000/mock/api-name

来模拟不同域下面的接口。

**Q: 如何模拟接口延时返回？**

A: 有些情况我们需要模拟网络状况很差的情况下的接口，这也很简单：
比如我们需要延时3秒返回结果，只需要在接口的 return 之前使用一个 `fats.sleep(3000);` 即可，完整代码如下：

	module.exports = function (req, res, fats) {
		var a = [];
		for(var i=0; i<10; i++){
			a.push(i);
		}
		fats.sleep(3000);
		return JSON.stringify(a);
	};

注意延时返回只能采用模块化写法书写接口模拟文件；

