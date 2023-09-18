import { Dimensions } from "react-native";

export const vw = Dimensions.get('screen').width * 0.01
export const vh = Dimensions.get('screen').height * 0.01
export const ImagePickerErrorCodes = {
    permissionMissing: 'E_PERMISSION_MISSING',
    cameraPermission: 'E_PICKER_NO_CAMERA_PERMISSION',
}
export const AppRegex = {
    email: "^[A-Z0-9a-z\\._%+-]+@([A-Za-z0-9-]+\\.)+[A-Za-z]{2,4}$",
    password: "^(?=.*[a-z])(?=.*[A-Z])(?=.*\\d)(?=.*[$@$!%*?&])[A-Za-z\\d$@$!%*?&]{8,}",
    numberOnly: '^[0-9]+$',
    alphabetOnly: '^[A-Za-z]+$',
    name: '^([a-zA-Z\-\_]+(\ |\')?)+$',
    validate(text, regex) {
        return new RegExp(regex).exec(text) != null;
    },
    isInvalidate(text, regex) {
        return new RegExp(regex).exec(text) == null;
    }
}