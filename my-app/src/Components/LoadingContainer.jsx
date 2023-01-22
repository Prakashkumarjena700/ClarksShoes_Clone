import React from 'react'
import { Skeleton, Stack } from '@chakra-ui/react'

import "../Css/SearchPage.css"

export default function LoadingContainer() {
    return (
        <div className='loadingContainer' >
            <Stack>
                <Skeleton height='50px' />
                <Skeleton height='50px' />
                <Skeleton height='50px' />
                <Skeleton height='50px' />
                <Skeleton height='50px' />
                <Skeleton height='50px' />
                <Skeleton height='50px' />
            </Stack>
        </div>
    )
}
