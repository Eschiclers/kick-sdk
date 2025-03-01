import { IApiResponseGetCategory } from './response/apiResponseGetCategories'

export interface ICategoryService {
	getCategories(): Promise<IApiResponseGetCategory[]>,
	getCategoryById(id: number): Promise<IApiResponseGetCategory>
}
