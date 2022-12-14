// Code generated by wunderctl. DO NOT EDIT.

export interface GetUsersInput {
	limit: number;
}

export interface TracksByGenreInput {
	GenreId: number;
}

export interface DragonsResponse {
	data?: DragonsResponseData;
	errors?: ReadonlyArray<GraphQLError>;
}

export interface GetUsersResponse {
	data?: GetUsersResponseData;
	errors?: ReadonlyArray<GraphQLError>;
}

export interface TracksByGenreResponse {
	data?: TracksByGenreResponseData;
	errors?: ReadonlyArray<GraphQLError>;
}

export interface DragonsResponseData {
	spacex_dragons?: {
		name?: string;
		active?: boolean;
	}[];
}

export interface GetUsersResponseData {
	sample_findManyUser: {
		id: number;
		name?: string;
		email: string;
	}[];
}

export interface TracksByGenreResponseData {
	chinook_findManyTrack: {
		TrackId: number;
		Name: string;
		AlbumId?: number;
		Composer?: string;
	}[];
}

export type JSONValue = string | number | boolean | JSONObject | Array<JSONValue>;

export type JSONObject = { [key: string]: JSONValue };

export interface GraphQLError {
	message: string;
	path?: ReadonlyArray<string | number>;
}
