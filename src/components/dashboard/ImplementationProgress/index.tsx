import React, { useEffect, useState } from 'react'

import Skeleton from '@mui/material/Skeleton'

import SectionContainer from '../utility/SectionContainer';
import DonutView from './DonutView';
import ToDos from '../ToDos';

import useToDos, { statuses } from '../../../hooks/useToDos';

interface Props {
  compact?: boolean;
  classId: string;
}
const ImplementationProgress : React.FC<Props> = ({ compact, classId }) => {

  const { toDoBuckets, loading, check, uncheck } = useToDos(classId);

  const [activeBucket, setActiveBucket] = useState<typeof statuses[number]>('Not Started');

  const onClick = (status: typeof statuses[number]) => {
    if(status !== activeBucket){
      setActiveBucket(status);
    }
  }

  return (
    <SectionContainer
        title='Implementation Progress'
        compact={compact}
        navigateTo='/learn'
    >
      {
        loading ? (
          <Skeleton
            variant="rectangular"
          />
        ) : (
          <>
            <DonutView
              compact={compact}
              statusCount={{
                'Not Started': toDoBuckets['Not Started'].length,
                'Past Due': toDoBuckets['Past Due'].length,
                'Completed': toDoBuckets['Completed'].length
              }}
              setActiveBucket={onClick}
            />
            {
              !compact && (
                <ToDos
                  activeBucket={activeBucket}
                  toDos={toDoBuckets[activeBucket]}
                  check={check}
                  uncheck={uncheck}
                />
              )
            }
          </>
        )
      }
    </SectionContainer>
  )
}

export default ImplementationProgress