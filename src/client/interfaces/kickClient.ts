import { ICategoryService } from '../../category/interfaces/categoryService'
import { IUserService } from '../../user/interfaces/userService'
import { IPublicKeyService } from './publicKeyService'

export interface IKickClient {
	publicKey: IPublicKeyService,
	category: ICategoryService,
	user: IUserService,
	getToken(): string
}
