
export const deviceService = {
    getByProduct
}

function getByProduct(productId, devices) {
    return devices.find(device => device.deviceDescriptor.idProduct === productId)
}
