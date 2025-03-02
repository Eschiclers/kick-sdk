import { IApiResponseGetChannel } from './response/apiResponseGetChannel'

export interface IChannelService {
	getMyChannel(): Promise<IApiResponseGetChannel>,
	getChannels(id: number[]): Promise<IApiResponseGetChannel[]>,
	getChannelById(id: number): Promise<IApiResponseGetChannel>,
	setLiveStream(channelId: number, streamTitle: string): Promise<void>
}
