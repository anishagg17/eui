// specifically polyfill Object.entries for IE11 support (used by @elastic/charts)
import 'core-js/modules/es7.object.entries';
import 'core-js/modules/es6.number.is-finite';

import React, { createElement } from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { Router, Switch, Route } from 'react-router';

import configureStore, { history } from './store/configure_store';

import { AppContainer } from './views/app_container';
import { HomeView } from './views/home/home_view';
import { NotFoundView } from './views/not_found/not_found_view';
import { registerTheme } from './services';
import { PlaygroundView } from './views/playground_view';

import Routes from './routes';
import { childRoutes as playgrounds } from './playground_routes';

import themeLight from './theme_light.scss';
import themeDark from './theme_dark.scss';
import themeAmsterdamLight from './theme_amsterdam_light.scss';
import themeAmsterdamDark from './theme_amsterdam_dark.scss';
import { ThemeProvider } from './components/with_theme/theme_context';

registerTheme('light', [themeLight]);
registerTheme('dark', [themeDark]);
registerTheme('amsterdam-light', [themeAmsterdamLight]);
registerTheme('amsterdam-dark', [themeAmsterdamDark]);

// Set up app

const store = configureStore();

const childRoutes = [].concat(Routes.getAppRoutes());

const routes = [
  {
    path: '/',
    component: HomeView,
    name: 'Elastic UI',
  },
  ...childRoutes,
];

ReactDOM.render(
  <Provider store={store}>
    <ThemeProvider>
      <Router history={history}>
        <Switch>
          {routes.map(({ name, path, sections, isNew, component }, i) => {
            if (component)
              return (
                <Route key={i} exact path={`/${path}`}>
                  <AppContainer currentRoute={{ name, path, sections, isNew }}>
                    {createElement(component, {})}
                  </AppContainer>
                </Route>
              );
            return null;
          })}
          {playgrounds.map(({ name, path, component }, i) => {
            if (component)
              return (
                <Route key={`play__${i}`} exact path={`/playgrounds/${path}`}>
                  <PlaygroundView currentRoute={{ name, path }}>
                    {createElement(component, {})}
                  </PlaygroundView>
                </Route>
              );
            return null;
          })}
          <Route key="Page Not Found" exact path={'*'}>
            <AppContainer currentRoute={{ name: 'Page Not Found', path: '*' }}>
              {createElement(NotFoundView, {})}
            </AppContainer>
          </Route>
        </Switch>
      </Router>
    </ThemeProvider>
  </Provider>,
  document.getElementById('guide')
);
