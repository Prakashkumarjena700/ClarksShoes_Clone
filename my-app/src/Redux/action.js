import { CHANGE_LOGGRE, GET_LOGGER } from './actionType'


export const getLogger = () => ({
    type: GET_LOGGER
})

export const changeLogger = () => ({
    type: CHANGE_LOGGRE
})