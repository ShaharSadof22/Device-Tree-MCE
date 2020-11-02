import React from 'react'
import { Slide } from "react-awesome-reveal";

import { deviceService } from '../services/deviceService'

export function DeviceDetails({ currProduct, devices }) {

    const currDevice = deviceService.getByProduct(currProduct, devices)
    console.log("DeviceDetails -> currDevice", currDevice.deviceDescriptor)

    return (
        <div className="device-details">
            <Slide triggerOnce direction={"down"}>

                <h4>Current Device</h4>
                <div className="flex">
                    <div className="data-row">
                        <p>Product ID: {currDevice.deviceDescriptor.idProduct}</p>
                        <p>Vendor ID: {currDevice.deviceDescriptor.idVendor}</p>
                        <p>Descriptor Type: {currDevice.deviceDescriptor.bDescriptorType}</p>
                    </div>
                    <div className="data-row">
                        <p>Device Class: {currDevice.deviceDescriptor.bDeviceClass}</p>
                        <p>bcd USBl: {currDevice.deviceDescriptor.bcdUSB}</p>
                        <p>Max Packet Size: {currDevice.deviceDescriptor.bMaxPacketSize0}</p>
                    </div>

                </div>
            </Slide>
        </div>
    )
}
