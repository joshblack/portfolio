'use strict';

const routes = {
  path: '/',
  text: 'Home',
  childRoutes: [
    {
      path: 'projects',
      text: 'Projects',
      childRoutes: [],
    },
    {
      path: 'work',
      text: 'Work',
      childRoutes: [
        {
          path: 'watson-virtual-agent',
          text: 'Watson Virtual Agent',
        },
        // {
        // path: 'watson-company-profiler',
        // },
        // {
        // path: 'watson-company-analyzer',
        // },
        // {
        // path: 'graph',
        // },
        // {
        // path: 'biginsights-on-cloud',
        // },
        // {
        // path: 'myibm-for-mobile',
        // },
      ],
    },
  ],
};

const getRoutes = (routes, root = '') => {
  const {path, childRoutes, ...rest} = routes;
  const route = root === '' ? '/' : `${root}${path}`;
  const routeConfig = {
    [route]: {
      page: route,
      ...rest,
    },
  };

  if (Array.isArray(childRoutes) && childRoutes.length > 0) {
    const childRouteConfig = childRoutes.reduce(
      (acc, childRoute) => ({
        ...acc,
        ...getRoutes(childRoute, route === '/' ? '/' : route + '/'),
      }),
      {}
    );
    return {
      ...routeConfig,
      ...childRouteConfig,
    };
  }

  return routeConfig;
};

module.exports = getRoutes(routes);
exports.routes = routes;
