import React from 'react';

import { EuiDescriptionList } from '../../../../src/components';

export default () => {
  const favoriteVideoGame = [
    {
      title: 'Name',
      description: 'The Elder Scrolls: Morrowind',
    },
    {
      title: 'Game style',
      description: 'Open-world, fantasy, action role-playing',
    },
    {
      title: 'Release date',
      description: '2002',
    },
  ];

  return (
    <EuiDescriptionList textStyle="reverse" listItems={favoriteVideoGame} />
  );
};
