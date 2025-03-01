import { IKickClientOptions } from './interfaces/kickClientOptions'
import { IKickClient } from './interfaces/kickClient'
import { IPublicKeyService } from './interfaces/publicKeyService'
import { PublicKeyService } from './publicKey'
import { ICategoryService } from '../category/interfaces/categoryService'
import { CategoryService } from '../category/category'

export class KickClient implements IKickClient {
	private token: string
	readonly publicKey: IPublicKeyService
	readonly category: ICategoryService

	constructor(options: IKickClientOptions) {
		this.token = options.token
		this.publicKey = new PublicKeyService(this)
		this.category = new CategoryService(this)
	}

	getToken = (): string => this.token
}
