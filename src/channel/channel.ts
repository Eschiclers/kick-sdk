import { IKickClient } from '../client/interfaces/kickClient'
import { EApiEndpoint } from '../utils/models/enumerations/apiEndpoint'
import { api } from '../utils/services/api'
import { IChannelService } from './interfaces/channelService'
import { IApiResponseGetChannel } from './interfaces/response/apiResponseGetChannel'

export class ChannelService implements IChannelService {
	private readonly client: IKickClient

	constructor(client: IKickClient) {
		this.client = client
	}

	async getMyChannel(): Promise<IApiResponseGetChannel> {
		return await api<IApiResponseGetChannel>(EApiEndpoint.GET_CHANNELS, this.client.getToken())
	}

	async getChannels(ids: number[]): Promise<IApiResponseGetChannel[]> {
		const params = new URLSearchParams()
		ids.forEach(id => params.append('broadcaster_user_id', id.toString()))

		return await api<IApiResponseGetChannel[]>(`${EApiEndpoint.GET_CHANNELS}?${params}`, this.client.getToken())
	}

	async getChannelById(id: number): Promise<IApiResponseGetChannel> {
		return await api<IApiResponseGetChannel>(`${EApiEndpoint.GET_CHANNELS}?broadcaster_user_id=${id}`, this.client.getToken())
	}

	async setLiveStream(categoryId: number, streamTitle: string): Promise<void> {
		return await api<void>(EApiEndpoint.GET_CHANNELS, this.client.getToken(), {
			method: 'PATCH',
			body: JSON.stringify({
				category_id: categoryId,
				stream_title: streamTitle
			})
		})
	}
}
