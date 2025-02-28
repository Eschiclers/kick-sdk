import { EApiEndpoint } from '../../utils/models/enumerations/apiEndpoint'
import { api } from '../../utils/services/api'
import { IKickClient } from '../interfaces/kickClient'
import { IPublicKeyService } from '../interfaces/publicKeyService'

export class KickPublicKeyService implements IPublicKeyService {
	private readonly client: IKickClient

	constructor(client: IKickClient) {
		this.client = client
	}

	async getPublicKey(): Promise<string> {
		return await api<string>(EApiEndpoint.PUBLIC_KEY, this.client.getToken())
	}
}
