import { IKickClient } from '../client/interfaces/kickClient'
import { EApiEndpoint } from '../utils/models/enumerations/apiEndpoint'
import { api } from '../utils/services/api'
import { IChatService } from './interfaces/chatService'
import { IApiResponseSendChatMessage } from './interfaces/response/apiResponseSendChatMessage'

export class ChatService implements IChatService{
	readonly client: IKickClient

	constructor(client: IKickClient) {
		this.client = client
	}

	async sendChatMessage(content: string, type: 'user' | 'bot', broadcasterUserId?: number): Promise<IApiResponseSendChatMessage> {
		return await api<IApiResponseSendChatMessage>(EApiEndpoint.SEND_CHAT_MESSAGE, this.client.getToken(), {
			method: 'POST',
			body: JSON.stringify({
				content,
				type,
				broadcaster_user_id: broadcasterUserId
			})
		})
	}
}
