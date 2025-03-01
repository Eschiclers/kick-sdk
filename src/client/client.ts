import { IKickClientOptions } from './interfaces/kickClientOptions'
import { IKickClient } from './interfaces/kickClient'
import { IPublicKeyService } from './interfaces/publicKeyService'
import { PublicKeyService } from './publicKey'
import { ICategoryService } from '../category/interfaces/categoryService'
import { CategoryService } from '../category/category'
import { IUserService } from '../user/interfaces/userService'
import { UserService } from '../user/user'

export class KickClient implements IKickClient {
	private token: string
	readonly publicKey: IPublicKeyService
	readonly category: ICategoryService
	readonly user: IUserService

	constructor(options: IKickClientOptions) {
		this.token = options.token
		this.publicKey = new PublicKeyService(this)
		this.category = new CategoryService(this)
		this.user = new UserService(this)
	}

	getToken = (): string => this.token
}
