
export function loadDevices(devices) {
    return async dispatch => {
        dispatch({ type: 'SET_DEVICES', devices })
    }
}

export function addDevice(device) {
    return dispatch => {
        dispatch({ type: 'ADD_DEVICE', device })
    }
}
export function removeDevice(idProduct) {
    return dispatch => {
        dispatch({ type: 'REMOVE_DEVICE', idProduct })
    }
}
export function setOrientation(inVertical) {
    return dispatch => {
        dispatch({ type: 'SET_ORIENTATION', inVertical })
    }
}
export function setCurrDevice(currProduct) {
    return dispatch => {
        dispatch({ type: 'SET_CURR_DEVICE', currProduct })
    }
}