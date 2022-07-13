import { DICREMENT_COUNTER, INCREMENT_COUNTER } from "../Actions/ActionType"

const initialstate=  0
export const CounterReducer = (state = initialstate, action) =>
{
    switch (action.type) {
        case INCREMENT_COUNTER: return state + 2
        case DICREMENT_COUNTER: return state - 2   
        default: return state
    }
}