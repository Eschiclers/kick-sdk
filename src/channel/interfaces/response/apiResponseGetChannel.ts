export interface IApiResponseGetChannel {
	banner_picture: string,
	broadcaster_user_id: number,
	category: {
		id: number,
		name: string,
		thumbnail: string
	},
	channel_description: string,
	slug: string,
	stream: {
		key: string,
		url: string
	},
	stream_title: string
}
