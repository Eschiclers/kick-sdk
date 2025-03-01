import { IApiResponseGetUser } from './response/apiResponseGetUser'
import { IApiResponseTokenIntrospect } from './response/apiResponseTokenIntrospect'

export interface IUserService {
	tokenIntrospect(): Promise<IApiResponseTokenIntrospect>,
	getUserById(id: number): Promise<IApiResponseGetUser>,
	getUsersByIds(ids: number[]): Promise<IApiResponseGetUser[]>
}
