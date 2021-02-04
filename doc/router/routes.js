import navConfig from 'config/nav.config';
function load(component) {
  return resolve => require([`views/${component}.vue`], resolve);
}
function loadDocs(component) {
  return resolve => require([`docs/${component}.md`], resolve);
}
function registerRoute(navConfig) {
  let route = [];
  Object.keys(navConfig).forEach((lang, index) => {
    let navs = navConfig[lang];
    route.push({
      path: '/home',
      redirect: '/alert',
      component: load('home'),
      children: []
    });
    navs.forEach(nav => {
      if (nav.href) return;
      if (nav.groups) {
        nav.groups.forEach(group => {
          group.list.forEach(nav => {
            addRoute(nav, index);
          });
        });
      } else if (nav.children) {
        nav.children.forEach(nav => {
          addRoute(nav, index);
        });
      } else {
        addRoute(nav, index);
      }
    });
  });
  function addRoute(page, index) {
    let child = {
      path: page.path,
      meta: {
        title: page.title || page.name,
        description: page.description,
      },
      name: 'component-' + (page.title || page.name),
      component: loadDocs(page.path.substr(1))
    };
    route[index].children.push(child);
  }
  console.log(route)
  return route;
};

let routes = registerRoute(navConfig);
routes = routes.concat(
  [
    {
      path: '/',
      component: load('index')
    },
    {
      path: '*',
      redirect: '/home',
    }
  ]
);

export default routes