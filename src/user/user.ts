import { IKickClient } from '../client/interfaces/kickClient'
import { EApiEndpoint } from '../utils/models/enumerations/apiEndpoint'
import { api } from '../utils/services/api'
import { IApiResponseGetUser } from './interfaces/response/apiResponseGetUser'
import { IApiResponseTokenIntrospect } from './interfaces/response/apiResponseTokenIntrospect'
import { IUserService } from './interfaces/userService'

export class UserService implements IUserService {
	private readonly client: IKickClient

	constructor(client: IKickClient) {
		this.client = client
	}

	async tokenIntrospect(): Promise<IApiResponseTokenIntrospect> {
		return await api<IApiResponseTokenIntrospect>(EApiEndpoint.TOKEN_INTROSPECT, this.client.getToken(), {
			method: 'POST'
		})
	}

	async getUserById(id: number): Promise<IApiResponseGetUser> {
		return await api<IApiResponseGetUser>(`${EApiEndpoint.GET_USERS}?id=${id}`, this.client.getToken())
	}

	async getUsersByIds(ids: number[]): Promise<IApiResponseGetUser[]> {
		const params = new URLSearchParams()
		ids.forEach(id => params.append('id', id.toString()))

		return await api<IApiResponseGetUser[]>(`${EApiEndpoint.GET_USERS}?${params}`, this.client.getToken())
	}
}
