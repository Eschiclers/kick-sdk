import { IKickClientOptions } from './interfaces/kickClientOptions'
import { IKickClient } from './interfaces/kickClient'
import { IPublicKeyService } from './interfaces/publicKeyService'
import { KickPublicKeyService } from './services/publicKey'

export class KickClient implements IKickClient {
	private token: string
	publicKeyService: IPublicKeyService

	constructor(options: IKickClientOptions) {
		this.token = options.token
		this.publicKeyService = new KickPublicKeyService(this)
	}

	getToken = (): string => this.token
}
