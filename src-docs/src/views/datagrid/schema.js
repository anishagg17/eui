import React, { Component } from 'react';
import { fake } from 'faker';

import {
  EuiDataGrid,
  EuiButtonIcon,
  EuiImage,
  EuiTitle,
  EuiSpacer,
} from '../../../../src/components/';

const iconTypes = [
  'accessibility',
  'aggregate',
  'alert',
  'annotation',
  'apmTrace',
  'apps',
  'arrowDown',
  'arrowLeft',
  'arrowRight',
  'arrowUp',
  'asterisk',
  'beaker',
  'bell',
  'bellSlash',
  'bolt',
  'boxesHorizontal',
  'boxesVertical',
  'branch',
  'broom',
  'brush',
  'bug',
  'bullseye',
  'calendar',
  'check',
  'checkInCircleFilled',
  'cheer',
  'clock',
  'cloudDrizzle',
  'cloudStormy',
  'cloudSunny',
  'compute',
  'console',
  'controlsHorizontal',
  'controlsVertical',
  'copy',
  'copyClipboard',
  'cross',
  'crosshairs',
  'crossInACircleFilled',
  'currency',
  'cut',
  'database',
  'document',
  'documentEdit',
  'documents',
  'dot',
  'email',
  'empty',
  'exit',
  'expand',
  'expandMini',
  'exportAction',
  'eye',
  'eyeClosed',
  'faceHappy',
  'faceNeutral',
  'faceSad',
  'filter',
  'flag',
  'folderCheck',
  'folderClosed',
  'folderExclamation',
  'folderOpen',
  'fullScreen',
  'gear',
  'glasses',
  'globe',
  'grab',
  'grabHorizontal',
  'grid',
  'heart',
  'heatmap',
  'help',
  'home',
  'iInCircle',
  'image',
  'importAction',
  'indexClose',
  'indexEdit',
  'indexFlush',
  'indexMapping',
  'indexOpen',
  'indexSettings',
  'inputOutput',
  'inspect',
  'invert',
  'ip',
  'keyboardShortcut',
  'kqlField',
  'kqlFunction',
  'kqlOperand',
  'kqlSelector',
  'kqlValue',
  'link',
  'list',
  'listAdd',
  'lock',
  'lockOpen',
  'logstashFilter',
  'logstashIf',
  'logstashInput',
  'logstashOutput',
  'logstashQueue',
  'magnifyWithMinus',
  'magnifyWithPlus',
  'magnet',
  'mapMarker',
  'memory',
  'merge',
  'menu',
  'menuLeft',
  'menuRight',
  'minimize',
  'minusInCircle',
  'minusInCircleFilled',
  'moon',
  'nested',
  'node',
  'number',
  'offline',
  'online',
  'package',
  'pageSelect',
  'pagesSelect',
  'paperClip',
  'partial',
  'pause',
  'pencil',
  'pin',
  'pinFilled',
  'play',
  'plusInCircle',
  'plusInCircleFilled',
  'popout',
  'push',
  'questionInCircle',
  'quote',
  'refresh',
  'reporter',
  'save',
  'scale',
  'search',
  'securitySignal',
  'securitySignalDetected',
  'securitySignalResolved',
  'shard',
  'share',
  'snowflake',
  'sortable',
  'sortDown',
  'sortLeft',
  'sortRight',
  'sortUp',
  'starEmpty',
  'starEmptySpace',
  'starFilled',
  'starFilledSpace',
  'starMinusEmpty',
  'starMinusFilled',
  'starPlusEmpty',
  'starPlusFilled',
  'stats',
  'stop',
  'stopFilled',
  'storage',
  'string',
  'submodule',
  'symlink',
  'tableOfContents',
  'tableDensityExpanded',
  'tableDensityCompact',
  'tableDensityNormal',
  'tag',
  'tear',
  'temperature',
  'timeline',
  'training',
  'trash',
  'user',
  'users',
  'vector',
  'videoPlayer',
  'visArea',
  'visAreaStacked',
  'visBarHorizontal',
  'visBarHorizontalStacked',
  'visBarVertical',
  'visBarVerticalStacked',
  'visGauge',
  'visGoal',
  'visLine',
  'visMapCoordinate',
  'visMapRegion',
  'visMetric',
  'visPie',
  'visTable',
  'visTagCloud',
  'visText',
  'visTimelion',
  'visVega',
  'visVisualBuilder',
  'wrench',
];

const columns = [
  {
    id: 'default',
  },
  {
    id: 'boolean',
    isExpandable: false,
  },
  {
    id: 'numeric',
  },
  {
    id: 'currency',
  },
  {
    id: 'datetime',
    schema: 'datetime',
  },
  {
    id: 'json',
  },
  {
    id: 'custom',
    schema: 'favoriteFranchise',
  },
];

const data = [];

for (let i = 1; i < 5; i++) {
  let json;
  let franchise;
  if (i < 3) {
    franchise = 'Star Wars';
    json = JSON.stringify([
      {
        default: fake('{{name.lastName}}, {{name.firstName}} {{name.suffix}}'),
        boolean: fake('{{random.boolean}}'),
        numeric: fake('{{finance.account}}'),
        currency: fake('${{finance.amount}}'),
        date: fake('{{date.past}}'),
        custom: fake('{{date.past}}'),
      },
    ]);
  } else {
    franchise = 'Star Trek';
    json = JSON.stringify([
      {
        name: fake('{{name.lastName}}, {{name.firstName}} {{name.suffix}}'),
      },
    ]);
  }

  data.push({
    default: fake('{{name.lastName}}, {{name.firstName}} {{name.suffix}}'),
    boolean: fake('{{random.boolean}}'),
    numeric: fake('{{finance.account}}'),
    currency: fake('${{finance.amount}}'),
    datetime: fake('{{date.past}}'),
    json: json,
    custom: franchise,
  });
}

const Franchise = props => {
  return (
    <div>
      <EuiTitle size="s">
        <h3>{props.name} is the best!</h3>
      </EuiTitle>
      <EuiSpacer size="s" />
      {props.name === 'Star Wars' ? (
        <EuiImage
          allowFullScreen
          size="m"
          hasShadow
          caption="Random star wars image"
          alt="Random star wars image"
          url="https://source.unsplash.com/600x600/?starwars"
        />
      ) : (
        <EuiImage
          allowFullScreen
          size="m"
          hasShadow
          caption="Random star trek image"
          alt="Random trek image"
          url="https://source.unsplash.com/600x600/?startrek"
        />
      )}
    </div>
  );
};

export default class DataGridSchema extends Component {
  constructor(props) {
    super(props);

    this.state = {
      data,
      sortingColumns: [{ id: 'contributions', direction: 'asc' }],

      pagination: {
        pageIndex: 0,
        pageSize: 10,
      },

      visibleColumns: columns.map(({ id }) => id),
    };
  }

  setSorting = sortingColumns => {
    const data = [...this.state.data].sort((a, b) => {
      for (let i = 0; i < sortingColumns.length; i++) {
        const column = sortingColumns[i];
        const aValue = a[column.id];
        const bValue = b[column.id];

        if (aValue < bValue) return column.direction === 'asc' ? -1 : 1;
        if (aValue > bValue) return column.direction === 'asc' ? 1 : -1;
      }

      return 0;
    });

    this.setState({ data, sortingColumns });
  };

  setPageIndex = pageIndex =>
    this.setState(({ pagination }) => ({
      pagination: { ...pagination, pageIndex },
    }));

  setPageSize = pageSize =>
    this.setState(({ pagination }) => ({
      pagination: { ...pagination, pageSize, pageIndex: 0 },
    }));

  setVisibleColumns = visibleColumns => this.setState({ visibleColumns });

  dummyIcon = () => (
    <EuiButtonIcon
      aria-label="dummy icon"
      iconType={iconTypes[Math.floor(Math.random() * iconTypes.length)]}
    />
  );

  render() {
    const { data, pagination, sortingColumns } = this.state;

    return (
      <EuiDataGrid
        aria-label="Top EUI contributors"
        columns={columns}
        columnVisibility={{
          visibleColumns: this.state.visibleColumns,
          setVisibleColumns: this.setVisibleColumns,
        }}
        rowCount={data.length}
        inMemory={{ level: 'sorting' }}
        renderCellValue={({ rowIndex, columnId, isDetails }) => {
          const value = data[rowIndex][columnId];

          if (columnId === 'custom' && isDetails) {
            return <Franchise name={value} />;
          }

          return value;
        }}
        sorting={{ columns: sortingColumns, onSort: this.setSorting }}
        pagination={{
          ...pagination,
          pageSizeOptions: [5, 10, 25],
          onChangeItemsPerPage: this.setPageSize,
          onChangePage: this.setPageIndex,
        }}
        schemaDetectors={[
          {
            type: 'favoriteFranchise',
            detector(value) {
              return value.toLowerCase() === 'star wars' ||
                value.toLowerCase() === 'star trek'
                ? 1
                : 0;
            },
            comparator(a, b, direction) {
              const aValue = a.toLowerCase() === 'star wars';
              const bValue = b.toLowerCase() === 'star wars';
              if (aValue < bValue) return direction === 'asc' ? 1 : -1;
              if (aValue > bValue) return direction === 'asc' ? -1 : 1;
              return 0;
            },
            sortTextAsc: 'Star wars-Star trek',
            sortTextDesc: 'Star trek-Star wars',
            icon: 'starFilled',
            color: '#800080',
          },
        ]}
        popoverContents={{
          numeric: ({ cellContentsElement }) => {
            // want to process the already-rendered cell value
            const stringContents = cellContentsElement.textContent;

            // extract the groups-of-three digits that are right-aligned
            return stringContents.replace(/((\d{3})+)$/, match =>
              // then replace each group of xyz digits with ,xyz
              match.replace(/(\d{3})/g, ',$1')
            );
          },
        }}
      />
    );
  }
}
