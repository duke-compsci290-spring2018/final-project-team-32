
// export default function ({ store, redirect, route }) {
//     store.state.user != null && route.name == '/account/login' ? redirect('/donate') : ''
//     store.state.user == null && isAdminRoute(route) ? redirect('/account/login') : ''
//   }
  
//   function isAdminRoute(route) {
//     if (route.matched.some(record => record.path == '/donate')) {
//       return true
//     }
//   }