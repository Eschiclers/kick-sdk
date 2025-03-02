import { IApiResponseGetCategory } from './response/apiResponseGetCategory'

export interface ICategoryService {
	getCategories(): Promise<IApiResponseGetCategory[]>,
	getCategoryById(id: number): Promise<IApiResponseGetCategory>
}
