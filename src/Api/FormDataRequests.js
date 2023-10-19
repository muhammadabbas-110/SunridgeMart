import axios from 'axios';

export  function sendMultipartFormDataRequest(apiURL,formData, onResponse, onError) {
  console.log('formDataaaaa',formData);
  axios({
    method: 'POST',
    url: "http://localhost:7104/api/Account/register",
    data: formData,
    headers: {
      'Content-Type': 'multipart/form-data',
        'Accept': 'application/json',
    },
    timeout: 30000,
  })
    .then(function (response) {
      onResponse(response);
    })
    .catch(function (error) {
      console.log('error',error)
      onError(error);
    });
}