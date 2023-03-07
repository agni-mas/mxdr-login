import React, { FC } from 'react';
import Skeleton from '@mui/material/Skeleton';
import { Stack } from '@mui/material';

interface LoadingSkeleton {
    height: number,
    // rows: number
}

const LoadingSkeleton: FC<LoadingSkeleton> = ({ height }) => {
    return (
        <Stack spacing={.25}>
            <Skeleton variant="rectangular" animation="wave" height={height} />
            <Skeleton variant="rectangular" animation="wave" height={height} />
            <Skeleton variant="rectangular" animation="wave" height={height} />
            <Skeleton variant="rectangular" animation="wave" height={height} />
        </Stack>
    )
}

export default LoadingSkeleton;
