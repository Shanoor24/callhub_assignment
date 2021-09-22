import Axios from "axios";
import { GET_DATA_FAILURE, GET_DATA_REQUEST, GET_DATA_SUCCESS } from "./actionTypes";


const axios = Axios.create({
    baseURL: "https://json-server-mocker-shanoor.herokuapp.com/"
})

const getDataRequest = () => {
    return {
        type: GET_DATA_REQUEST
    }
}

const getDataSuccess = (payload) => {
    return {
        type: GET_DATA_SUCCESS,
        payload
    }
}

const getDataFailure = (error) => {
    return {
        type: GET_DATA_FAILURE,
        error
    }
}

// const postDataRequest = () => {
//     return {
//         type: POST_DATA_REQUEST
//     }
// }

// const postDataSuccess = (payload) => {
//     return {
//         type: POST_DATA_SUCCESS,
//         payload
//     }
// }

// const postDataFailure = (error) => {
//     return {
//         type: POST_DATA_FAILURE,
//         error
//     }
// }


const getData = (payload) => (dispatch) => {
    dispatch(getDataRequest());

    const config = {
        url: "/callhub_data",
        method: "get"
    }

    return axios(config)
    .then((res) => {
        dispatch(getDataSuccess(res.data));
        console.log(res.data);
    })
    .catch((err) => {
        dispatch(getDataFailure(err));
        console.log(err)
    })
}

const postData = (payload) => (dispatch) => {
    dispatch(getDataRequest());

    const config = {
        url: "/callhub_data",
        method: "post",
        data: payload
    }

    return axios(config)
    .then((res) => {
        // dispatch(postDataSuccess);
        dispatch(getData());
    })
    .catch((err) => {
        dispatch(getDataFailure(err))
        console.log(err)
    })
}

export {getData, postData}
