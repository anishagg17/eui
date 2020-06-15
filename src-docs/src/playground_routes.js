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
import horizontalRuleConfig from './views/horizontal_rule/playground';
import bottomBarConfig from './views/bottom_bar/playground';
import panelConfig from './views/panel/playground';
import paginationConfig from './views/pagination/playground';
import treeViewConfig from './views/tree_view/playground';
import stepsConfig from './views/steps/playground';
import emptyPromptConfig from './views/empty_prompt/playground';
import toastConfig from './views/toast/playground';
import { flexGroupConfig, flexGridConfig } from './views/flex/playground';
import { facetButtonConfig, facetLayoutConfig } from './views/facet/playground';
import {
  badgeConfig,
  notificationBadgeConfig,
  betaBadgeConfig,
} from './views/badge/playground';
import { iconConfig, tokenConfig } from './views/icon/playground';
import {
  loadingConfig,
  loadingContentConfig,
} from './views/loading/playground';
import { textConfig, textColorConfig } from './views/text/playground';
import { toolTipConfig } from './views/tool_tip/playground';
import { codeConfig, codeBlockConfig } from './views/code/playground';
import { commentConfig } from './views/comment/playground';
import { descriptionListConfig } from './views/description_list/playground';
import { collapsibleNavConfig } from './views/collapsible_nav/playground';

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
    path: 'badge',
    component: () => playground(badgeConfig()),
    name: 'EuiBadge',
  },
  {
    path: 'betaBadge',
    component: () => playground(betaBadgeConfig()),
    name: 'EuiBetaBadge',
  },
  {
    path: 'notificationBadge',
    component: () => playground(notificationBadgeConfig()),
    name: 'EuiNotificationBadge',
  },
  {
    path: 'beacon',
    component: () => playground(beaconConfig()),
    name: 'EuiBeacon',
  },
  {
    path: 'bottomBar',
    component: () => playground(bottomBarConfig()),
    name: 'EuiBottomBar',
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
    path: 'code',
    component: () => playground(codeConfig()),
    name: 'EuiCode',
  },
  {
    path: 'codeBlock',
    component: () => playground(codeBlockConfig()),
    name: 'EuiCodeBlock',
  },
  {
    path: 'collapsibleNav',
    component: () => playground(collapsibleNavConfig()),
    name: 'EuiCollapsibleNav',
  },
  {
    path: 'comment',
    component: () => playground(commentConfig()),
    name: 'EuiComment',
  },
  {
    path: 'descriptionList',
    component: () => playground(descriptionListConfig()),
    name: 'EuiDescriptionList',
  },
  {
    path: 'emptyPrompt',
    component: () => playground(emptyPromptConfig()),
    name: 'EuiEmptyPrompt',
  },
  {
    path: 'facetButton',
    component: () => playground(facetButtonConfig()),
    name: 'EuiFacetButton',
  },
  {
    path: 'facetLayout',
    component: () => playground(facetLayoutConfig()),
    name: 'EuiFacetGroup',
  },
  {
    path: 'flexGrid',
    component: () => playground(flexGridConfig()),
    name: 'EuiFlexGrid',
  },
  {
    path: 'flexGroup',
    component: () => playground(flexGroupConfig()),
    name: 'EuiFlexGroup',
  },
  {
    path: 'icon',
    component: () => playground(iconConfig()),
    name: 'EuiIcon',
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
    path: 'horizontalRule',
    component: () => playground(horizontalRuleConfig()),
    name: 'EuiHorizontalRule',
  },
  {
    path: 'link',
    component: () => playground(linkConfig()),
    name: 'EuiLink',
  },
  {
    path: 'loading',
    component: () => playground(loadingConfig()),
    name: 'EuiLoading',
  },
  {
    path: 'loadingContent',
    component: () => playground(loadingContentConfig()),
    name: 'EuiLoadingContent',
  },
  {
    path: 'pagination',
    component: () => playground(paginationConfig()),
    name: 'EuiPagination',
  },
  {
    path: 'panel',
    component: () => playground(panelConfig()),
    name: 'EuiPanel',
  },
  {
    path: 'stat',
    component: () => playground(statConfig()),
    name: 'EuiStat',
  },
  {
    path: 'steps',
    component: () => playground(stepsConfig()),
    name: 'EuiSteps',
  },
  {
    path: 'spacer',
    component: () => playground(spacerConfig()),
    name: 'EuiSpacer',
  },
  {
    path: 'text',
    component: () => playground(textConfig()),
    name: 'EuiText',
  },

  {
    path: 'textColor',
    component: () => playground(textColorConfig()),
    name: 'EuiTextColor',
  },
  {
    path: 'title',
    component: () => playground(titleConfig()),
    name: 'EuiTitle',
  },
  {
    path: 'toast',
    component: () => playground(toastConfig()),
    name: 'EuiToast',
  },
  {
    path: 'toggle',
    component: () => playground(toggleConfig()),
    name: 'EuiToggle',
  },
  {
    path: 'token',
    component: () => playground(tokenConfig()),
    name: 'EuiToken',
  },
  {
    path: 'toolTip',
    component: () => playground(toolTipConfig()),
    name: 'EuiToolTip',
  },
  {
    path: 'treeView',
    component: () => playground(treeViewConfig()),
    name: 'EuiTreeView',
  },
  {
    path: '*',
    component: () => <div>Not Found</div>,
    name: 'Page Not Found',
  },
];
