import { CHECK_LOGGER } from './actionType'

const initialState = {
    logger: 'Hello'
}

export const loggerReducer = (state = initialState, { type }) => {
    switch (type) {
        case CHECK_LOGGER: {
            return{
                ...state,
                logger:"Hi"
            }
        }
        default: {
            return state
        }
    }
}