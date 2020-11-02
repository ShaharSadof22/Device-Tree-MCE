import React, { Component } from 'react'
import { connect } from 'react-redux'
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Switch from '@material-ui/core/Switch';
import Loader from 'react-loader';
import { Slide } from "react-awesome-reveal";

import { loadDevices, addDevice, removeDevice, setOrientation, setCurrDevice } from '../store/actions/deviceActions'
import socketService from '../services/socketService';
import { DeviceList } from '../cmps/DeviceList';
import { DeviceDetails } from '../cmps/DeviceDetails';

class _DeviceApp extends Component {

    componentDidMount() {
        socketService.setup();
        socketService.on('all devices', this.props.loadDevices);
        socketService.on('device add', this.props.addDevice);
        socketService.on('device remove', this.props.removeDevice);
    }
    componentWillUnmount() {
        socketService.terminate();
    }
    setOrientation = () => {
        this.props.setOrientation(!this.props.inVertical)
    }

    render() {
        const { devices, inVertical, currProduct } = this.props
        console.log("render -> currDevice", currProduct)
        if (devices.length === 0) return <Loader>There are no devices connected...</Loader>

        return (
            <div className="device-app">
                <Slide triggerOnce >
                    <div className="text-header">
                        <h3>Your USB connections</h3>
                        <p>Spliter - USB spliter.</p>
                        <p>Device - Can be any device.</p>
                    </div>
                </Slide>
                <FormControlLabel
                    value="Orientation"
                    control={<Switch color="primary" onChange={this.setOrientation} />}
                    label="Orientation"
                    labelPlacement="top"
                    className="btn-orientation"
                />
                <img alt="img" src="https://res.cloudinary.com/cloudinary-img/image/upload/v1604323675/Device-Tree/Gnome-computer.svg_wqml3x.png" />
                {currProduct &&
                    <DeviceDetails currProduct={currProduct} devices={devices} />
                }
                <DeviceList devices={devices} inVertical={inVertical} setCurrDevice={this.props.setCurrDevice} />
            </div>
        )
    }
}
const mapStateToProps = state => {
    return {
        devices: state.deviceReducer.devices,
        inVertical: state.deviceReducer.inVertical,
        currProduct: state.deviceReducer.currProduct
    }
}
const mapDispatchToProps = {
    loadDevices,
    addDevice,
    removeDevice,
    setOrientation,
    setCurrDevice
}
export const DeviceApp = connect(mapStateToProps, mapDispatchToProps)(_DeviceApp)