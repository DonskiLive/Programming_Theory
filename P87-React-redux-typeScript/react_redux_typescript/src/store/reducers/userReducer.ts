import { UserAction, UserActionType, UserState } from "../../types/user"

/* interface UserState {
	users: any;
	loading: boolean;
	error: null | string;
}

enum UserActionType{
	FETCH_USERS = "FETCH_USERS",
	FETCH_USERS_SUCCESS = "FETCH_USERS_SUCCESS",
	FETCH_USERS_ERROR = "FETCH_USERS_ERROR"
}

interface FetchUsersAction {
	type: UserActionType.FETCH_USERS
}
interface FetchUsersSuccessAction {
	type: UserActionType.FETCH_USERS_SUCCESS;
	payload: any[]
}
interface FetchUsersErrorAction {
	type: UserActionType.FETCH_USERS_ERROR;
	payload: string
}

type UserAction = FetchUsersAction | FetchUsersSuccessAction | FetchUsersErrorAction
 */
const initialState: UserState = {
	users: [],
	loading: false,
	error: null
}

export const userReducer = (state = initialState, action: UserAction): UserState => { // here : UserState specify which type of data must be returned
	switch (action.type) {
		case UserActionType.FETCH_USERS:
			return { loading: true, error: null, users: [] }
		case UserActionType.FETCH_USERS_SUCCESS:
			return { loading: false, error: null, users: action.payload }
		case UserActionType.FETCH_USERS_ERROR:
			return { loading: false, error: action.payload, users: [] }
		default:
			return state
	}

}