module.exports = connectSockets
var usb = require('usb')
const logger = require('../../services/logger.service')

function connectSockets(io) {
    io.on('connection', socket => {
        logger.info('Socket connect')

        var devices = usb.getDeviceList()
        socket.emit('all devices', devices) //send all devices

        // device connection
        usb.on('attach', function (device) {
            socket.emit('device add', device)
            logger.info('attach device idProduct: ' + device.deviceDescriptor.idProduct)
        });
        
        // device disconnection
        usb.on('detach', function (device) {
            socket.emit('device remove', device.deviceDescriptor.idProduct)
            logger.info('detach device idProduct: ' + device.deviceDescriptor.idProduct)
        });
    })
}