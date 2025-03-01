export enum EApiEndpoint {
	// Public key
	PUBLIC_KEY = '/public/v1/public-key',

	// Categories
	GET_CATEGORIES = '/public/v1/categories',
	GET_CATEGORY_BY_ID = '/public/v1/categories/',

	// Users
	TOKEN_INTROSPECT = '/public/v1/token/introspect',
	GET_USERS = '/public/v1/users'
}
