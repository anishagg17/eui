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
import { keyPadMenuItemConfig } from './views/key_pad_menu/playground';
import { sideNavConfig } from './views/side_nav/playground';
import { suggestConfig } from './views/suggest/playground';
import { cardConfig } from './views/card/playground';
import { codeEditorConfig } from './views/code_editor/playground';
import { supperSelectConfig } from './views/super_select/playground';
import { expressionConfig } from './views/expression/playground';
import { rangeConfig, dualRangeConfig } from './views/range/playground';
import {
  colorPickerConfig,
  colorStopsConfig,
} from './views/color_picker/playground';
import { superDatePickerConfig } from './views/super_date_picker/playground';
import popoverConfig from './views/popover/playground';
import { tourConfig } from './views/tour/playground';
import {
  fieldTextConfig,
  fieldSearchConfig,
  fieldNumberConfig,
  selectConfig,
  fieldPasswordConfig,
  textAreaConfig,
  filePickerConfig,
  checkboxConfig,
  checkboxGroupConfig,
  radioConfig,
  radioGroupConfig,
  switchConfig,
} from './views/form_controls/playground';

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
    path: 'card',
    component: () => playground(cardConfig()),
    name: 'EuiCard',
  },
  {
    path: 'checkbox',
    component: () => playground(checkboxConfig()),
    name: 'EuiCheckbox',
  },
  {
    path: 'checkboxGroup',
    component: () => playground(checkboxGroupConfig()),
    name: 'EuiCheckboxGroup',
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
    path: 'codeEditor',
    component: () => playground(codeEditorConfig()),
    name: 'EuiCodeEditor',
  },
  {
    path: 'collapsibleNav',
    component: () => playground(collapsibleNavConfig()),
    name: 'EuiCollapsibleNav',
  },
  {
    path: 'colorPicker',
    component: () => playground(colorPickerConfig()),
    name: 'EuiColorPicker',
  },
  {
    path: 'colorStops',
    component: () => playground(colorStopsConfig()),
    name: 'EuiColorStops',
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
    path: 'dualRange',
    component: () => playground(dualRangeConfig()),
    name: 'EuiDualRange',
  },
  {
    path: 'emptyPrompt',
    component: () => playground(emptyPromptConfig()),
    name: 'EuiEmptyPrompt',
  },
  {
    path: 'expression',
    component: () => playground(expressionConfig()),
    name: 'EuiExpression',
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
    path: 'fieldNumber',
    component: () => playground(fieldNumberConfig()),
    name: 'EuiFieldNumber',
  },
  {
    path: 'fieldPassword',
    component: () => playground(fieldPasswordConfig()),
    name: 'EuiFieldPassword',
  },
  {
    path: 'fieldSearch',
    component: () => playground(fieldSearchConfig()),
    name: 'EuiFieldSearch',
  },
  {
    path: 'fieldText',
    component: () => playground(fieldTextConfig()),
    name: 'EuiFieldText',
  },
  {
    path: 'filePicker',
    component: () => playground(filePickerConfig()),
    name: 'EuiFilePicker',
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
    path: 'keyPadMenuItem',
    component: () => playground(keyPadMenuItemConfig()),
    name: 'EuiKeyPadMenuItem',
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
    path: 'radio',
    component: () => playground(radioConfig()),
    name: 'EuiRadio',
  },
  {
    path: 'radioGroup',
    component: () => playground(radioGroupConfig()),
    name: 'EuiRadioGroup',
  },
  {
    path: 'range',
    component: () => playground(rangeConfig()),
    name: 'EuiRange',
  },
  {
    path: 'sideNav',
    component: () => playground(sideNavConfig()),
    name: 'EuiSideNav',
  },
  {
    path: 'suggest',
    component: () => playground(suggestConfig()),
    name: 'EuiSuggest',
  },
  {
    path: 'supperSelect',
    component: () => playground(supperSelectConfig()),
    name: 'EuiSuperSelect',
  },
  {
    path: 'popover',
    component: () => playground(popoverConfig()),
    name: 'EuiPopover',
  },
  {
    path: 'select',
    component: () => playground(selectConfig()),
    name: 'EuiSelect',
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
    path: 'superDatePicker',
    component: () => playground(superDatePickerConfig()),
    name: 'EuiSuperDatePicker',
  },
  {
    path: 'switch',
    component: () => playground(switchConfig()),
    name: 'EuiSwitch',
  },
  {
    path: 'text',
    component: () => playground(textConfig()),
    name: 'EuiText',
  },
  {
    path: 'textArea',
    component: () => playground(textAreaConfig()),
    name: 'EuiTextArea',
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
    path: 'tourStep',
    component: () => playground(tourConfig()),
    name: 'EuiTourStep',
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
