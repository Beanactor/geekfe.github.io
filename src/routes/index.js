export default [{
  path: '/',
  component: resolve => require(['../views/home/home'], resolve),
  meta: {
    title: '主页'
  }
}, {
  path: '/home',
  component: resolve => require(['../views/home/home'], resolve),
  meta: {
    title: '主页'
  }
}];