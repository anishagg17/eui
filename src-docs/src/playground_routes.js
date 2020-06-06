import React from 'react';
import playground from './playground';
import buttonConfig from './views/button/playground';
import accordionConfig from './views/accordion/playground';
import avatarConfig from './views/avatar/playground';
import beaconConfig from './views/beacon/playground';
import calloutConfig from './views/call_out/playground';
import healthConfig from './views/health/playground';
import statConfig from './views/stat/playground';
import titleConfig from './views/title/playground';
import imageConfig from './views/image/playground';
import spacerConfig from './views/spacer/playground';
import linkConfig from './views/link/playground';
import breadcrumbsConfig from './views/breadcrumbs/playground';
import aspectRatioConfig from './views/aspect_ratio/playground';
import toggleConfig from './views/toggle/playground';

export const childRoutes = [
  {
    path: 'accordion',
    component: () => playground(accordionConfig()),
    name: 'EuiAccordion',
  },
  {
    path: 'aspectRatio',
    component: () => playground(aspectRatioConfig()),
    name: 'EuiAspectRatio',
  },
  {
    path: 'avatar',
    component: () => playground(avatarConfig()),
    name: 'EuiAvatar',
  },
  {
    path: 'beacon',
    component: () => playground(beaconConfig()),
    name: 'EuiBeacon',
  },
  {
    path: 'breadcrumbs',
    component: () => playground(breadcrumbsConfig()),
    name: 'EuiBreadcrumbs',
  },
  {
    path: 'button',
    component: () => playground(buttonConfig()),
    name: 'EuiButton',
  },
  {
    path: 'callout',
    component: () => playground(calloutConfig()),
    name: 'EuiCallOut',
  },
  {
    path: 'image',
    component: () => playground(imageConfig()),
    name: 'EuiImage',
  },
  {
    path: 'health',
    component: () => playground(healthConfig()),
    name: 'EuiHealth',
  },
  {
    path: 'link',
    component: () => playground(linkConfig()),
    name: 'EuiLink',
  },
  {
    path: 'stat',
    component: () => playground(statConfig()),
    name: 'EuiStat',
  },
  {
    path: 'spacer',
    component: () => playground(spacerConfig()),
    name: 'EuiSpacer',
  },
  {
    path: 'title',
    component: () => playground(titleConfig()),
    name: 'EuiTitle',
  },
  {
    path: 'toggle',
    component: () => playground(toggleConfig()),
    name: 'EuiToggle',
  },
  {
    path: '*',
    component: () => <div>Not Found</div>,
    name: 'Page Not Found',
  },
];
