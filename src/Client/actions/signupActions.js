import axios from "axios";

// export function userSignupRequest(userData) {
//     return dispatch => {
//         return axios.post('/api/users', userData);
//     }
// }

export function userSignupRequest(userData) {
    return dispatch => {
        return axios({
            method: 'post',
            url:'/api/users',
            data: {
                userData
            },
            validateStatus: (status) => {
                return true;
            },
        }).catch(error => {

        }).then(response => {
            console.log('this is now called');
        })
    }
}