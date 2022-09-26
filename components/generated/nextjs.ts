import type {
	DragonsResponse,
	DragonsResponseData,
	GetUsersResponse,
	GetUsersInput,
	GetUsersResponseData,
	TracksByGenreResponse,
	TracksByGenreInput,
	TracksByGenreResponseData,
} from "./models";
import { createContext } from "react";
import { hooks, WunderGraphContextProperties } from "@wundergraph/nextjs";
import { QueryArgsWithInput, SubscriptionArgs, SubscriptionArgsWithInput } from "@wundergraph/sdk/client";
export type Role = "admin" | "user";

export enum AuthProvider {
	"github" = "github",
}

export const AuthProviders = {
	github: AuthProvider.github,
};

const defaultWunderGraphContextProperties: WunderGraphContextProperties<Role> = {
	ssrCache: {},
	client: null,
	clientConfig: {
		applicationHash: "3a4b6c5f",
		applicationPath: "app/main",
		baseURL: "http://localhost:9991",
		sdkVersion: "0.109.0",
		authenticationEnabled: true,
	},
	user: null,
	setUser: (value) => {},
	isWindowFocused: "pristine",
	setIsWindowFocused: (value) => {},
	refetchMountedOperations: 0,
	setRefetchMountedOperations: (value) => {},
};

export const WunderGraphContext = createContext<WunderGraphContextProperties<Role>>(
	defaultWunderGraphContextProperties
);

export const withWunderGraph = hooks.withWunderGraphContextWrapper(
	WunderGraphContext,
	defaultWunderGraphContextProperties
);

export const useWunderGraph = hooks.useWunderGraph<Role, AuthProvider>(WunderGraphContext);

export const useQuery = {
	GetUsers: (args: QueryArgsWithInput<GetUsersInput>) =>
		hooks.useQueryWithInput<GetUsersInput, GetUsersResponseData, Role>(WunderGraphContext, {
			operationName: "GetUsers",
			requiresAuthentication: false,
		})(args),
	TracksByGenre: (args: QueryArgsWithInput<TracksByGenreInput>) =>
		hooks.useQueryWithInput<TracksByGenreInput, TracksByGenreResponseData, Role>(WunderGraphContext, {
			operationName: "TracksByGenre",
			requiresAuthentication: false,
		})(args),
	Dragons: hooks.useQueryWithoutInput<DragonsResponseData, Role>(WunderGraphContext, {
		operationName: "Dragons",
		requiresAuthentication: false,
	}),
};

export const useMutation = {};

export const useSubscription = {};

export const useLiveQuery = {
	GetUsers: (args: SubscriptionArgsWithInput<GetUsersInput>) =>
		hooks.useSubscriptionWithInput<GetUsersInput, GetUsersResponseData, Role>(WunderGraphContext, {
			operationName: "GetUsers",
			requiresAuthentication: false,
			isLiveQuery: true,
		})(args),
	TracksByGenre: (args: SubscriptionArgsWithInput<TracksByGenreInput>) =>
		hooks.useSubscriptionWithInput<TracksByGenreInput, TracksByGenreResponseData, Role>(WunderGraphContext, {
			operationName: "TracksByGenre",
			requiresAuthentication: false,
			isLiveQuery: true,
		})(args),
	Dragons: (args?: SubscriptionArgs) =>
		hooks.useSubscriptionWithoutInput<DragonsResponseData, Role>(WunderGraphContext, {
			operationName: "Dragons",
			requiresAuthentication: false,
			isLiveQuery: true,
		})(args),
};
