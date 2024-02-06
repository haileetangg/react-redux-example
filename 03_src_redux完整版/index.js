import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import store from './redux/store'

//React 18是这样的写法，只创建一次根结点，在redux订阅里面只是更新App组件
const root = ReactDOM.createRoot(document.getElementById('root'))
const appRender = ()=>{
  root.render(
    <React.StrictMode>
      <App/>
    </React.StrictMode>
  )
}
appRender()
store.subscribe(appRender)

// store.subscribe(()=>{
//     ReactDOM.createRoot(document.getElementById('root'))
//     .render(
//       <React.StrictMode>
//         <App/>
//       </React.StrictMode>
//     )
// })
