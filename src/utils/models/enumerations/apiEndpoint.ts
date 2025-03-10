export enum EApiEndpoint {
	// Public key
	PUBLIC_KEY = '/public/v1/public-key',

	// Categories
	GET_CATEGORIES = '/public/v1/categories',

	// Users
	TOKEN_INTROSPECT = '/public/v1/token/introspect',
	GET_USERS = '/public/v1/users',

	// Channels
	GET_CHANNELS = '/public/v1/channels',

	// Chat
	SEND_CHAT_MESSAGE = '/public/v1/chat'
}
