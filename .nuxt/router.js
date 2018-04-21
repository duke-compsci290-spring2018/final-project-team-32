import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

const _7827f517 = () => import('../pages/why.vue' /* webpackChunkName: "pages/why" */).then(m => m.default || m)
const _14e77dbb = () => import('../pages/projects.vue' /* webpackChunkName: "pages/projects" */).then(m => m.default || m)
const _2f094536 = () => import('../pages/faq.vue' /* webpackChunkName: "pages/faq" */).then(m => m.default || m)
const _48c4109c = () => import('../pages/about.vue' /* webpackChunkName: "pages/about" */).then(m => m.default || m)
const _a5c6f920 = () => import('../pages/donate.vue' /* webpackChunkName: "pages/donate" */).then(m => m.default || m)
const _a005cb5a = () => import('../pages/test.vue' /* webpackChunkName: "pages/test" */).then(m => m.default || m)
const _687beb61 = () => import('../pages/index.vue' /* webpackChunkName: "pages/index" */).then(m => m.default || m)



if (process.client) {
  window.history.scrollRestoration = 'manual'
}
const scrollBehavior = function (to, from, savedPosition) {
  // if the returned position is falsy or an empty object,
  // will retain current scroll position.
  let position = false

  // if no children detected
  if (to.matched.length < 2) {
    // scroll to the top of the page
    position = { x: 0, y: 0 }
  } else if (to.matched.some((r) => r.components.default.options.scrollToTop)) {
    // if one of the children has scrollToTop option set to true
    position = { x: 0, y: 0 }
  }

  // savedPosition is only available for popstate navigations (back button)
  if (savedPosition) {
    position = savedPosition
  }

  return new Promise(resolve => {
    // wait for the out transition to complete (if necessary)
    window.$nuxt.$once('triggerScroll', () => {
      // coords will be used if no selector is provided,
      // or if the selector didn't match any element.
      if (to.hash) {
        let hash = to.hash
        // CSS.escape() is not supported with IE and Edge.
        if (typeof window.CSS !== 'undefined' && typeof window.CSS.escape !== 'undefined') {
          hash = '#' + window.CSS.escape(hash.substr(1))
        }
        try {
          if (document.querySelector(hash)) {
            // scroll to anchor by returning the selector
            position = { selector: hash }
          }
        } catch (e) {
          console.warn('Failed to save scroll position. Please add CSS.escape() polyfill (https://github.com/mathiasbynens/CSS.escape).')
        }
      }
      resolve(position)
    })
  })
}


export function createRouter () {
  return new Router({
    mode: 'history',
    base: '/final-project-team-32/dist/',
    linkActiveClass: 'nuxt-link-active',
    linkExactActiveClass: 'nuxt-link-exact-active',
    scrollBehavior,
    routes: [
		{
			path: "/why",
			component: _7827f517,
			name: "why"
		},
		{
			path: "/projects",
			component: _14e77dbb,
			name: "projects"
		},
		{
			path: "/faq",
			component: _2f094536,
			name: "faq"
		},
		{
			path: "/about",
			component: _48c4109c,
			name: "about"
		},
		{
			path: "/donate",
			component: _a5c6f920,
			name: "donate"
		},
		{
			path: "/test",
			component: _a005cb5a,
			name: "test"
		},
		{
			path: "/",
			component: _687beb61,
			name: "index"
		}
    ],
    
    
    fallback: false
  })
}
