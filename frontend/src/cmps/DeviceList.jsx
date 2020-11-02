import React from 'react'
import Tree from 'react-d3-tree';

export function DeviceList({ devices, inVertical, setCurrDevice }) {

    const portIdxs = [];
    var translate;
    const treeData = [
        {
            name: 'Your PC',
            children: [],
        },
    ];
    devices.forEach(device => {
        if (device.portNumbers?.length >= 2) {
            portIdxs.push(device.portNumbers[0])
            device.isConnectToSplitter = true
        }
    })
    devices.forEach(device => {
        portIdxs.forEach(portIdx => {
            if (device.portNumbers?.length === 1 && device.portNumbers[0] === portIdx) {
                device.isSplitter = true
            }
        })
    })

    devices.forEach(device =>{
        if (!device.isConnectToSplitter) {
            const children = []
            if (device.isSplitter) {
                const portIdx = device.portNumbers[0]
                devices.forEach(device =>{
                    if (device.portNumbers?.length >= 2 && device.portNumbers[0] === portIdx) {
                        children.push({
                            name: 'Device',
                            attributes: {
                                Vendor: device.deviceDescriptor.idVendor,
                                Product: device.deviceDescriptor.idProduct,
                            },
                        })
                    }
                })
            }
            treeData[0].children.push({
                name: device.isSplitter ? 'Spliter' : 'Device',
                    attributes: {
                        Vendor: device.deviceDescriptor.idVendor,
                        Product: device.deviceDescriptor.idProduct,
                    },
                    children
            })
        }
    }) 
    
    const { innerWidth: width, innerHeight: height } = window;
    if (inVertical) {
        translate = { x: width/2, y: 40 }
    } else {
        translate = { x: width/3, y: height/3 }
    }

    return (
        <div className="device-list-wrapper flex">
            <Tree data={treeData} orientation={inVertical ? 'vertical' : 'horizontal'} translate={translate} onClick={(ev) => setCurrDevice(ev.attributes.Product)}/>
        </div>
    )
}
