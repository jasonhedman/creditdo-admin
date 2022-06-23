import React from 'react'

import Stack from '@mui/material/Stack';

import DonutChart from './DonutChart';

const data = [
  {
    label: 'Not Started',
    value: 60,
  },
  {
    label: 'Past Due',
    value: 4,
  },
  {
    label: 'In Progress',
    value: 16,
  },
  {
    label: 'Completed',
    value: 20,
  },
];

const colors = [
  '#dcdcdc',
  '#de483a',
  '#f3df67',
  '#9fc440',
];

interface Props {
  compact?: boolean;
}

const DonutView : React.FC<Props> = ({ compact }) => {
  return (
    <Stack 
      direction="row"
      justifyContent="center"
    >
      <DonutChart
        data={data}
        colors={colors}
        strokeColor={null}
        formatValues={(value) => `${value}%`}
        height={compact ? 150 : 200}
        width={compact ? 150 : 200}
        legend={false}
      />
    </Stack>
  )
}

export default DonutView