## ETCM-weapp-B06140122

> 项目名称: 工程训练中心管理 Engineering Training Center Management(ETCM)  
> 课程号: B06140122

### **前情说明**:

这个是 `移动应用开发(B06140122)` 课程设计, 因为是课程设计, 用到的工程知识不是很多, 主要还是 `JavaScript` 基础. 学了 `微信小程序` 就可以来看看这个项目, 在看项目前, 我希望你有扎实的:

* `ES6` (包括当不限于 1. `Promise` 2. 解构赋值 3. `class` 类 4. 模块导入导出 可移步 [ES6 菜鸟教程](https://www.runoob.com/w3cnote/es6-tutorial.html) ) 

>  

* 小程序云开发 (项目使用云开发, 免费版适用于用户量比较小小程序, 云开发相比再来一个后端是非常值得的)

* ColorUI (可移步 [ColorUI 官网](https://www.color-ui.com/) 学习)

* CSS3 (transition: 渐变, flex: 弹性盒子)

### 或许, 无法运行

在 `@/project.config.demo.json` 中, 需要对下面几个参数配置: 

``` json
{
    "cloudfunctionRoot": "云开发路径, 示例路径为: /cloud",
    "miniprogramRoot": "小程序路径, 默认为: /pages, 示例路径为: src/",
    "appid": "这里填写小程序 AppID 配合云开发使用, 示例: wx77xxxxaxxxx9xxxx",
    "projectname": "这里填写项目名称, 后面需要使用到, 示例: ETCM-weapp-B06140122",
    "libVersion": "依赖库版本号 >= 2.9.2, 示例: 2.9.2",
    "miniprogram": {
        "current": 0,
        "list": [
            {
                "id": 0,
                "name": "首页页面, 示例: index",
                "pathName": "示例: pages/index/index",
                "query": "",
                "scene": null
            }
        ]
    }
}
```

> 注意: 最后需要将 `@/project.config.demo.json` => `@/project.config.json` 

在 `@/app.demo.js` 中, 需要对下面几个参数配置:

``` js
async onLaunch() {
    const config = new Config({
        cloudDevConfig: {
            isCloudDev: true,
            cloudDevId: '这里填写云开发ID, 在微信开发工具云开发中申请'
        }
    })
}
```

