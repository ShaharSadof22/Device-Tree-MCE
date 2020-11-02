const initialState = {
    devices: [],
    inVertical: true,
    currProduct: null
}

export function deviceReducer(state = initialState, action) {
    switch (action.type) {
        case 'SET_DEVICES':
            return {
                ...state,
                devices: action.devices
            }
        case 'ADD_DEVICE':
            return {
                ...state,
                devices: [...state.devices, action.device]
            }
        case 'REMOVE_DEVICE':
            return {
                ...state,
                devices: state.devices.filter(device => device.deviceDescriptor.idProduct !== action.idProduct)
            }
            case 'SET_ORIENTATION':
                return {
                    ...state,
                    inVertical: action.inVertical
                }
            case 'SET_CURR_DEVICE':
                return {
                    ...state,
                    currProduct: action.currProduct
                }
        default:
            return state
    }
}