
import { ApiURL, axios } from "./NetworkContants"

let number = 0

const ApiManager = {
    fetch(api, parameters, onReponse, onError) {
        // let dispatch = useDispatch();
        console.log("calling api", ApiURL + api.url, parameters)
        axios({
            method: api.method,
            url: ApiURL + api.url,
            data: api.method == "GET" ? undefined : parameters,
            params: api.method != "GET" ? undefined : parameters,
            headers: api.headers || { "Content-Type": "application/json" },
            timeout: 30 * 1000,
            timeoutErrorMessage: "No response from server",
            redirect: "follow"
        })
            .then(function (response) {
                console.log("api response", response)
                onReponse(response)
            })
            .catch(function (error) {
                console.log("api error", error, error.response)
                ApiManager.handleApiError(error, api, parameters, onReponse, onError)
            })
    },

    handleApiError(error, api, parameters, onReponse, onError) {
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
                    ApiManager.fetch(api, parameters, onReponse, onError)
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

export default ApiManager;