
import { ApiURL, axios } from './NetworkConstants'
let number = 0

const ApiManager = {
 
    fetch(api, parameters, onResponse, onError) {
        console.log('ckkkkkkkk',api, parameters, onResponse, onError)
        // let dispatch = useDispatch();
        
        console.log("calling api", ApiURL + api.url, parameters)
        axios({
            method: api.method,
            url: ApiURL + api.url,
            data: api.method == "get" ? undefined : parameters,
            params: api.method != "get" ? undefined : parameters,
            headers: api.headers || { "Content-Type": "application/json" },
            timeout: 30 * 1000,
            timeoutErrorMessage: "No response from server",
            redirect: "follow"
        })
            .then(function (response) {
                console.log("api response", response)
                onResponse(response)
            })
            .catch(function (error) {
                console.log("api error", error, error.response)
                ApiManager.handleApiError(error, api, parameters, onResponse, onError)
            })
    },

    handleApiError(error, api, parameters, onResponse, onError) {
        console.log('errorrrrr',error.message)
        if (error.message == "Network Error") {
            onError({
                title: "No internet",
                message: "Please check your internet connection",
                isNetworkError: true,
                executeIfNetworkError: parm => {
                    if (typeof parm == "function") {
                        parm()
                    } else {
                        return parm
                    }
                },
                retryAction: () => {
                    ApiManager.fetch(api, parameters, onResponse, onError)
                },
                alertActionButton: "Retry",
                response: error.response
            })
        } else {
            const message = error.response?.data?.message
            onError({
                title: "Server response",
                message: message || error.message || "Something went wrong",
                alertActionButton: "Ok",
                response: error.response,
                isNetworkError: false,
                executeIfNetworkError: () => { }
            })
        }
    },
    setUpRequestTokenAxios(token) {
        axios.defaults.headers.common["Authorization"] = "Token " + token
    },
    removeRequestTokenAxios() {
        axios.defaults.headers.common["Authorization"] = null
    },
   
}

export default ApiManager