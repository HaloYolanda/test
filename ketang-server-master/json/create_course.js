let ary = [{
	"name": "Id",
	"pic": "https://wx4.sinaimg.cn/mw690/e9fbfa79gy1gerodl6krdj21c00u0h74.jpg",
	"date": "2019-11-01",
	"address": "深圳",
	"time": "2小时",
	"dec": "Id(InDesign),可以制作复杂的页面布局和链接的内容，收集内容工具，快速创建对象，主要适用于定期出版物，海报和其他印刷媒体，具有高级透明性能，图层样式，自定义裁切等功能。",
	"price": 3000,
	"type": "Id"
}, {
	"name": "Pr",
	"pic": "https://wx1.sinaimg.cn/mw690/e9fbfa79gy1gerodkb2cnj212w0obtgp.jpg",
	"date": "2019-10-01",
	"address": "深圳",
	"time": "1小时",
	"dec": "Pr(Premiere),由Adobe公司开发是一款常用的视频编辑软件，足以完成在编辑、制作、工作流上遇到的所有挑战，满足您创建高质量作品的要求。",
	"price": 1988,
	"type": "Pr"
}, {
	"name": "Ae",
	"pic": "https://wx2.sinaimg.cn/mw690/e9fbfa79gy1gerodl50csj21c00u07wh.jpg",
	"date": "2019-10-01",
	"address": "深圳",
	"time": "1小时",
	"dec": "Ae(After Effect),是一款制作动态影像设计不可或缺的辅助工具,是视频后期合成处理的专业非线性编辑软件。",
	"price": 2688,
	"type": "Ae"
}];

let aeN = 0;
let prN = 0;
let idN = 0;

let result = [];

// 循环生成300条数据
for (let i = 1; i < 300; i++) {
	// 生成随机索引n，供ary[n]使用
	let n = Math.round(Math.random() * 2);
	
	// 深度克隆从数组ary中随机得到的对象
	let item = JSON.parse(JSON.stringify(ary[n]));
	
	// 为每个随机对象加id属性，把原来对象的其他属性扩展到新对象item中
	item = {id: i, ...item};
	
	// 为标题的序号准备m变量
	let m = 0;
	switch (item.type) {
		case 'Ae':
			++aeN;
			m = aeN;
		case 'Pr':
			++prN;
			m = prN;
		default:
			++idN;
			m = idN;
	}
	// 数字补零
	m = (m < 100 && m >= 10) ? '0' + m : (m < 10 ? '00' + m : m);
	item.name = item.name + '[第' + m + '讲]';
	result.push(item);
}

// 通过promise版的FS方法，将生成的300条数据写入到course.json文件
require('../utils/promiseFS').writeFile('./course.json', result);