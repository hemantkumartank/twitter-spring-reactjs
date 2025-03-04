import produce, {Draft} from 'immer';

import {LoadingStatus} from '../../types';
import {FollowerRequestsState} from './contracts/state';
import {FollowerRequestsActions, FollowerRequestsActionsType} from "./contracts/actionTypes";

const initialTagsState: FollowerRequestsState = {
    items: [],
    loadingState: LoadingStatus.LOADING,
};

export const followerRequestsReducer = produce((draft: Draft<FollowerRequestsState>, action: FollowerRequestsActions) => {
    switch (action.type) {
        case FollowerRequestsActionsType.SET_FOLLOWER_REQUESTS:
            draft.items = action.payload;
            draft.loadingState = LoadingStatus.LOADED;
            break;

        case FollowerRequestsActionsType.PROCESS_FOLLOW_REQUEST:
            draft.items = draft.items.filter((user) => user.id !== action.payload);
            draft.loadingState = LoadingStatus.LOADED
            break;

        case FollowerRequestsActionsType.RESET_FOLLOWER_REQUESTS_STATE:
            draft.items = [];
            draft.loadingState = LoadingStatus.LOADING;
            break;

        case FollowerRequestsActionsType.SET_LOADING_STATE:
            draft.loadingState = action.payload;
            break;

        default:
            break;
    }
}, initialTagsState);
