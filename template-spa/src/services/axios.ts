import axios, { type AxiosInstance, type AxiosResponse, AxiosError } from 'axios'

/* ============================
Types
============================ */

type OnSuccess<T = any> = (response: AxiosResponse<T>) => void
type OnError = (error: AxiosError) => void

interface ApiClient {

/* HTTP methods */
get<T = any>(
	url: string,
	onSuccess?: OnSuccess<T>,
	onError?: OnError
): Promise<AxiosResponse<T>>

post<T = any>(
	url: string,
	data?: any,
	onSuccess?: OnSuccess<T>,
	onError?: OnError
): Promise<AxiosResponse<T>>

put<T = any>(
	url: string,
	data?: any,
	onSuccess?: OnSuccess<T>,
	onError?: OnError
): Promise<AxiosResponse<T>>

patch<T = any>(
	url: string,
	data?: any,
	onSuccess?: OnSuccess<T>,
	onError?: OnError
): Promise<AxiosResponse<T>>

delete<T = any>(
	url: string,
	onSuccess?: OnSuccess<T>,
	onError?: OnError
): Promise<AxiosResponse<T>>

/* Config */
setBaseURL(baseURL: string): void

}


/* ============================
Axios instance
============================ */

const axiosInstance: AxiosInstance = axios.create({
	headers: {
		'Content-Type': 'application/json'
	}
})


/* ============================
Handler
============================ */

function handle<T>(
	promise: Promise<AxiosResponse<T>>,
	onSuccess?: OnSuccess<T>,
	onError?: OnError
): Promise<AxiosResponse<T>> {
	return promise
		.then(response => {
			onSuccess?.(response)
			return response
		})
		.catch(error => {
			onError?.(error)
			throw error
		})
}


/* ============================
API implementation
============================ */

const api: ApiClient = {
	setBaseURL(baseURL: string) {
		if (!baseURL) {
			throw new Error('API baseURL cannot be empty')
		}
		axiosInstance.defaults.baseURL = baseURL
	},

	get(url, onSuccess?, onError?) {
		return handle(
			axiosInstance.get(url),
			onSuccess,
			onError
		)
	},

	post(url, data?, onSuccess?, onError?) {
		return handle(
			axiosInstance.post(url, data),
			onSuccess,
			onError
		)
	},

	put(url, data?, onSuccess?, onError?) {
		return handle(
			axiosInstance.put(url, data),
			onSuccess,
			onError
		)
	},

	patch(url, data?, onSuccess?, onError?) {
		return handle(
			axiosInstance.patch(url, data),
			onSuccess,
			onError
		)
	},

	delete(url, onSuccess?, onError?) {
		return handle(
			axiosInstance.delete(url),
			onSuccess,
			onError
		)
	}
}

export default api
