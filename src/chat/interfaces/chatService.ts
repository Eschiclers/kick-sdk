import { IApiResponseSendChatMessage } from './response/apiResponseSendChatMessage'

export interface IChatService {
	sendChatMessage(content: string, type: 'user' | 'bot', broadcasterUserId?: number): Promise<IApiResponseSendChatMessage>
}
