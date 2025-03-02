import { IKickClientOptions } from './interfaces/kickClientOptions'
import { IKickClient } from './interfaces/kickClient'
import { IPublicKeyService } from './interfaces/publicKeyService'
import { PublicKeyService } from './publicKey'
import { ICategoryService } from '../category/interfaces/categoryService'
import { CategoryService } from '../category/category'
import { IUserService } from '../user/interfaces/userService'
import { UserService } from '../user/user'
import { IChannelService } from '../channel/interfaces/channelService'
import { ChannelService } from '../channel/channel'

export class KickClient implements IKickClient {
	private token: string
	readonly publicKey: IPublicKeyService
	readonly category: ICategoryService
	readonly user: IUserService
	readonly channel: IChannelService

	constructor(options: IKickClientOptions) {
		this.token = options.token
		this.publicKey = new PublicKeyService(this)
		this.category = new CategoryService(this)
		this.user = new UserService(this)
		this.channel = new ChannelService(this)
	}

	getToken = (): string => this.token
}
