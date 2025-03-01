import { ICategoryService } from '../../category/interfaces/categoryService'
import { IPublicKeyService } from './publicKeyService'

export interface IKickClient {
	publicKey: IPublicKeyService,
	category: ICategoryService,
	getToken(): string
}
