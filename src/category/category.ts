import { IKickClient } from '../client/interfaces/kickClient'
import { EApiEndpoint } from '../utils/models/enumerations/apiEndpoint'
import { api } from '../utils/services/api'
import { ICategoryService } from './interfaces/categoryService'
import { IApiResponseGetCategory } from './interfaces/response/apiResponseGetCategories'

export class CategoryService implements ICategoryService {
	private readonly client: IKickClient

	constructor(client: IKickClient) {
		this.client = client
	}

	async getCategories(): Promise<IApiResponseGetCategory[]> {
		return await api<IApiResponseGetCategory[]>(EApiEndpoint.GET_CATEGORIES, this.client.getToken())
	}

	async getCategoryById(id: number): Promise<IApiResponseGetCategory> {
		return await api<IApiResponseGetCategory>(`${EApiEndpoint.GET_CATEGORY_BY_ID}${id}`, this.client.getToken())
	}
}
