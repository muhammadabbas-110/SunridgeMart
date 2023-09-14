import { Dimensions } from "react-native";

export const vw = Dimensions.get('screen').width * 0.01
export const vh = Dimensions.get('screen').height * 0.01
export const ImagePickerErrorCodes = {
    permissionMissing: 'E_PERMISSION_MISSING',
    cameraPermission: 'E_PICKER_NO_CAMERA_PERMISSION',
}