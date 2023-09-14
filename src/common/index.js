import { Alert } from "react-native";
import { openSettings } from "react-native-permissions";

export const showCommonErrorAlert = (error, onRetryPressed) => {
    let alertActions = error.isNetworkError ? [{
        text: 'Cancel'
    }] : [];
    alertActions.push({
        text: error.alertActionButton,
        onPress: () => error.executeIfNetworkError(() => {
            onRetryPressed();
            error.retryAction();
        })
    });
    Alert.alert(error.title, error.message, alertActions);
};

export const showConfirmationAlert = (title, message, onConfirm) => {
    Alert.alert(title,message, [{
        text: 'cancel',
        style: 'cancel'
    }, {
        text: 'Confirm',
        style: 'destructive',
        onPress: onConfirm
    }])
};

export const PermissionType = {
    camera: 'camera',
    photos: 'photos'
}

export const showSettingsAlertForPermission = (permission) => {
    let message = '';
    switch (permission) {
        case PermissionType.camera:
            message = Platform.OS === 'ios' ?
                'Please enable Camera from Settings' : 'Please enable Camera permission.';
            break;
        case PermissionType.photos:
            message = Platform.OS === 'ios' ?
                'Please enable Photos from Settings' : 'Please enable Files permission.';
            break;
    }
    Alert.alert('Permission Denied', message, [
        {
            text: 'Cancel',
            style: 'cancel'
        },
        {
            text: 'Setting',
            onPress: () => openSettings().catch(err => console.log(err))
        },
    ])
}