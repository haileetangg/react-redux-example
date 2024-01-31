## 1.求和案例_redux精简版

1. 去除count组件自身的state

2. src下建立：

   -- redux

      --store.js

   ​	--count_reducer.js

3. store.js：

   1）引入redux中的createStore函数，创建一个store

   2）createStore调用时要传入一个为其服务的reducer

   3）一定要暴露store对象

4. count_reducer.js

 	  1） reducer的本质是一个函数，接收：preState,action，返回加工后的状态

​		2）reducer有两个作用：初始化状态和加工状态

​		3）reducer被第一次调用时，是store自动触发的

​				传递的preState是undefined

​				传递的action是：{type:"@@REDUX/INIT_a.2.6.4"}

5. 在index.js中监测store中状态的改变，一旦发生改变重新渲染<App />

​		备注：redux只负责管理状态，至于状态的改变驱动着页面的展示，要靠我们自己写。

### 求和案例_redux完整版

新增文件：

 1）count_action.js 专门用于创建action对象

 2）constant.js 放置容易写错的type

### 求和案例_redux异步action版

1. 明确：延迟的动作不想交给组件本身，想交给action
2. 何时需要异步action：想要对状态进行操作，但是具体的数据靠异步任务返回
3. 具体编码：

​	1）npm install redux-thunk，并配置在store中

​	2）创建action的函数不再返回一般对象，而是一个函数，该函数中写异步任务

​	3）异步任务有结果后，分发一个同步的action去真正操作数据

4. 备注：异步action不是必须要写的，完全可以自己等待异步任务的结果了再去分发同步dispatch