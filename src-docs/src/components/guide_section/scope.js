import {
  Fragment,
  Component,
  useState,
  useMemo,
  useCallback,
  useEffect,
  createContext,
  useReducer,
  useContext,
} from 'react';
import makeId from '../../../../src/components/form/form_row/make_id';
import SuperSelectComplexExample from '../../views/super_select/super_select_complex';
import HeaderSpacesMenu from '../../views/header/header_spaces_menu';
import HeaderUserMenu from '../../views/header/header_user_menu';
import EuiTabsExample from '../../views/tabs/tabbed_content';
import { createDataStore } from '../../views/tables/data_store';
import { DisplayToggles } from '../../views/form_controls/display_toggles';
import FormExample from '../../views/form_compressed/form_compressed';
import { makeList } from '../../views/drag_and_drop/helper';
import { VISUALIZATION_COLORS, formatDate } from '../../../../src/services';
import { fake } from 'faker';
import {
  EuiCode,
  EuiCodeBlock,
  EuiErrorBoundary,
  EuiSpacer,
  EuiTab,
  EuiTable,
  EuiTableBody,
  EuiTableHeader,
  EuiTableHeaderCell,
  EuiTableRow,
  EuiTableRowCell,
  EuiTabs,
  EuiText,
  EuiTextColor,
  EuiTitle,
  EuiLink,
  EuiFlexGroup,
  EuiFlexItem,
  EuiButton,
  EuiButtonEmpty,
  EuiButtonIcon,
  EuiFlexGrid,
  EuiPanel,
  EuiIcon,
  EuiButtonToggle,
  EuiAccordion,
  EuiForm,
  EuiFormRow,
  EuiFieldPassword,
  EuiFieldText,
  EuiTextArea,
  EuiFlyout,
  EuiFlyoutBody,
  EuiFlyoutHeader,
  EuiPopover,
  EuiCallOut,
  EuiHeader,
  EuiHeaderBreadcrumbs,
  EuiHeaderSection,
  EuiHeaderSectionItem,
  EuiHeaderSectionItemButton,
  EuiHeaderLogo,
  EuiHorizontalRule,
  EuiHeaderLinks,
  EuiSwitch,
  EuiHeaderLink,
  EuiFieldSearch,
  EuiModal,
  EuiConfirmModal,
  EuiOverlayMask,
  EuiModalHeader,
  EuiRange,
  EuiModalHeaderTitle,
  EuiModalFooter,
  EuiModalBody,
  EuiImage,
  EuiPageContentBody,
  EuiPageContentHeaderSection,
  EuiPageContentHeader,
  EuiPageContent,
  EuiFocusTrap,
  EuiShowFor,
  EuiPageHeader,
  EuiPageHeaderSection,
  EuiPageBody,
  EuiNavDrawer,
  EuiNavDrawerGroup,
  EuiPage,
  EuiPageSideBar,
  EuiPopoverTitle,
  EuiPopoverFooter,
  EuiInputPopover,
  EuiBreadcrumbs,
  EuiButtonGroup,
  EuiFieldNumber,
  EuiCheckbox,
  EuiCheckboxGroup,
  EuiRadio,
  EuiRadioGroup,
  EuiToolTip,
  EuiFormControlLayout,
  EuiFormControlLayoutDelimited,
  EuiFormFieldset,
  EuiSelect,
  EuiIconTip,
  EuiFormLabel,
  EuiAvatar,
  EuiContextMenuItem,
  EuiContextMenuPanel,
  EuiContextMenu,
  EuiControlBar,
  EuiFacetButton,
  EuiFacetGroup,
  EuiKeyPadMenu,
  EuiKeyPadMenuItem,
  EuiPagination,
  EuiTreeView,
  EuiToken,
  EuiSideNav,
  EuiSteps,
  EuiSubSteps,
  EuiStepsHorizontal,
  EuiTabbedContent,
  EuiDataGrid,
  EuiBasicTable,
  EuiHealth,
  EuiAspectRatio,
  EuiBadge,
  EuiBetaBadge,
  EuiBadgeGroup,
  EuiNotificationBadge,
  EuiCard,
  EuiCheckableCard,
  EuiDescriptionList,
  EuiDescriptionListDescription,
  EuiDescriptionListTitle,
  EuiDragDropContext,
  EuiDroppable,
  EuiDraggable,
  EuiCopy,
  EuiListGroup,
  EuiListGroupItem,
  EuiEmptyPrompt,
  EuiLoadingKibana,
  EuiLoadingElastic,
  EuiLoadingChart,
  EuiLoadingContent,
  EuiProgress,
  EuiStat,
  EuiLoadingSpinner,
  EuiTextAlign,
  EuiToast,
  EuiGlobalToastList,
  EuiKeyboardAccessible,
  EuiScreenReaderOnly,
  EuiSkipLink,
  EuiDelayHide,
} from '../../../../src/components';

const scope = {
  EuiDelayHide,
  EuiScreenReaderOnly,
  EuiSkipLink,
  EuiGlobalToastList,
  EuiToast,
  EuiKeyboardAccessible,
  EuiTextAlign,
  EuiLoadingKibana,
  EuiLoadingElastic,
  EuiLoadingChart,
  EuiLoadingContent,
  EuiProgress,
  EuiStat,
  EuiLoadingSpinner,
  EuiListGroup,
  EuiListGroupItem,
  EuiCopy,
  EuiEmptyPrompt,
  EuiDraggable,
  EuiDroppable,
  EuiNotificationBadge,
  EuiDragDropContext,
  EuiCard,
  EuiCheckableCard,
  EuiDescriptionList,
  EuiDescriptionListDescription,
  EuiDescriptionListTitle,
  EuiBadgeGroup,
  EuiBetaBadge,
  EuiBadge,
  EuiAspectRatio,
  EuiHealth,
  EuiBasicTable,
  EuiDataGrid,
  EuiTabbedContent,
  EuiStepsHorizontal,
  EuiSubSteps,
  EuiSteps,
  EuiSideNav,
  EuiToken,
  EuiTreeView,
  EuiPagination,
  EuiFacetGroup,
  EuiKeyPadMenu,
  EuiKeyPadMenuItem,
  VISUALIZATION_COLORS,
  EuiFacetButton,
  EuiControlBar,
  EuiContextMenu,
  EuiContextMenuPanel,
  EuiContextMenuItem,
  EuiAvatar,
  EuiFormLabel,
  EuiIconTip,
  EuiSelect,
  EuiToolTip,
  EuiFormControlLayout,
  EuiFormControlLayoutDelimited,
  EuiFormFieldset,
  EuiFieldNumber,
  EuiCheckbox,
  EuiCheckboxGroup,
  EuiRadio,
  EuiRadioGroup,
  EuiBreadcrumbs,
  EuiButtonGroup,
  DisplayToggles,
  EuiInputPopover,
  EuiPopoverTitle,
  EuiPopoverFooter,
  EuiPageSideBar,
  EuiNavDrawer,
  EuiNavDrawerGroup,
  EuiPage,
  EuiPageContentBody,
  HeaderSpacesMenu,
  HeaderUserMenu,
  EuiPageContentHeaderSection,
  EuiPageContentHeader,
  EuiPageContent,
  EuiShowFor,
  EuiFocusTrap,
  EuiPageHeader,
  EuiPageHeaderSection,
  EuiPageBody,
  EuiImage,
  SuperSelectComplexExample,
  EuiRange,
  EuiModalHeaderTitle,
  EuiModalFooter,
  EuiModalBody,
  EuiModalHeader,
  EuiModal,
  makeId,
  EuiConfirmModal,
  EuiOverlayMask,
  EuiSwitch,
  EuiHeaderLink,
  EuiFieldSearch,
  EuiHeaderLinks,
  EuiHorizontalRule,
  EuiHeader,
  EuiHeaderBreadcrumbs,
  EuiHeaderSection,
  EuiHeaderSectionItem,
  EuiHeaderSectionItemButton,
  EuiHeaderLogo,
  EuiPopover,
  EuiCallOut,
  EuiFlyout,
  EuiFlyoutBody,
  EuiFlyoutHeader,
  EuiFieldPassword,
  EuiFieldText,
  EuiTextArea,
  EuiFormRow,
  EuiForm,
  EuiAccordion,
  EuiButtonToggle,
  Component,
  useState,
  EuiCode,
  EuiCodeBlock,
  EuiErrorBoundary,
  EuiSpacer,
  EuiTab,
  EuiTable,
  EuiTableBody,
  EuiTableHeader,
  EuiTableHeaderCell,
  EuiTableRow,
  EuiTableRowCell,
  EuiTabs,
  EuiText,
  EuiTextColor,
  EuiTitle,
  EuiLink,
  EuiFlexGroup,
  EuiFlexItem,
  EuiButton,
  Fragment,
  EuiButtonEmpty,
  EuiButtonIcon,
  EuiFlexGrid,
  EuiPanel,
  EuiIcon,
  EuiTabsExample,
  fake,
  useMemo,
  useCallback,
  useEffect,
  createContext,
  useReducer,
  useContext,
  createDataStore,
  formatDate,
  makeList,
  FormExample,
};

export default scope;
