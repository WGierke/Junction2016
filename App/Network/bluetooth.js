import { NativeAppEventEmitter } from 'react-native'
import { addDevice } from '../Reducers/action'
import BleManager from 'react-native-ble-manager'

let dispatch = null

// Setup Bluetooth Connection
export const setup = (_dispatch) => {
  dispatch = _dispatch
  BleManager.start({showAlert: true})

  NativeAppEventEmitter
      .addListener('BleManagerDiscoverPeripheral', handleDiscoverPeripheral)
}

export const scanDevices = () => {
  return new Promise((resolve, reject) => {
    console.log('Start scanning -----------------------------')
    let scanning = setInterval(() => {
      BleManager.scan([], 30, true)
            .then((results) => console.log('Scanning...'))
    }, 3000)

    setTimeout(() => {
      clearInterval(scanning)
      resolve()
    }, 30000)
  })
}

const handleDiscoverPeripheral = (device) => {
  dispatch(addDevice(device))
}
