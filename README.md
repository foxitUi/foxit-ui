### 一、安装

#### 1、npm

```
npm i foxit-ui -S
```

#### 2、cnpm 

```
cnpm i foxit-ui -S
```

### 二、使用

你可以引入整个 foxit-ui ，或是根据需要仅引入部分组件。我们先介绍如何引入完整的 foxit-ui。

#### 1、完整引入

在 *main.js* 中写入以下内容：

```
import Vue from 'vue';
import FoxitUI from 'foxit-ui';
import 'foxit-ui/lib/style/index.css';
import App from './App.vue';

Vue.use(FoxitUI);

new Vue({
  el: '#app',
  render: h => h(App)
});
```

以上代码便完成了 foxit-ui 的引入。需要注意的是，样式文件需要单独引入。

#### 2、按需引入

借助 babel-plugin-component，我们可以只引入需要的组件，以达到减小项目体积的目的。

首先，安装 babel-plugin-component：

```
cnpm install babel-plugin-component -D
```

在项目根目录下创建 *.babelrc.js* 文件 或 *babel.config.js* 文件，然后在里面按如下配置：

```
module.exports = {
  presets: [
    '@vue/app'
  ],
  "plugins": [
    [
      "import",
      {
        "libraryName": "foxit-ui",//组件库名称
        "camel2DashComponentName": false,//关闭驼峰自动转链式
        "camel2UnderlineComponentName": false//关闭蛇形自动转链式
      }
    ],
  ]
}
```

接下来，如果你只希望引入部分组件，比如 Button 组件，那么需要在 *main.js* 中写入以下内容：

```
import Vue from 'vue'
import App from './App.vue'
import {fwButton} from 'foxit-ui'
Vue.use(fwButton);
new Vue({
  render: h => h(App)
}).$mount('#app')
```

完整组件列表和引入方式

```
import Vue from 'vue'
import {
  fwButton,
} from 'foxit-ui'
Vue.use(fwButton);
```