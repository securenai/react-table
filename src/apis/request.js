import axios from 'axios';

const request = async (method, url, options) => {
	return axios({
		method,
		url,
		...options
	})
		.then((response) => ({
			status: response.status,
			data: response.data,
			headers: response.headers
		}))
		.catch(async (error) => {
			if (!error.response) {
				return {
					status: 500
				};
			}
			return {
				status: error.response.status
			};
		});
};

export default request;
