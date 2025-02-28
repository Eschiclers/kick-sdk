import { IApiResponse } from '../interfaces/apiResponse'
import { EApiEndpoint } from '../models/enumerations/apiEndpoint'

const BASE_URL = 'https://api.kick.com'

export const api = async <T>(url: EApiEndpoint, token: string, options: RequestInit = {}): Promise<T> => {
	const headers = {
		'Content-Type': 'application/json',
		'Authorization': `Bearer ${token}`,
		...options.headers,
	}

	const response = await fetch(`${BASE_URL}${url}`, {
		...options,
		headers,
	}) as Response & IApiResponse<T>

	return response.data
}
