import produce, {Draft} from 'immer';

import {LoadingStatus} from '../../types';
import {ListDetailActionsType, UserDetailActions} from "./contracts/actionTypes";
import {ListDetailState} from "./contracts/state";

const initialTagsState: ListDetailState = {
    item: undefined,
    loadingState: LoadingStatus.LOADING,
};

export const listDetailReducer = produce((draft: Draft<ListDetailState>, action: UserDetailActions) => {
    switch (action.type) {
        case ListDetailActionsType.SET_LIST_DETAIL:
            draft.item = action.payload;
            draft.loadingState = LoadingStatus.LOADED;
            break;

        case ListDetailActionsType.UPDATE_FOLLOW_LIST_DETAIL:
            if (draft.item !== undefined) {
                draft.item.isFollower = action.payload;
                draft.item.followersSize = action.payload ? draft.item.followersSize + 1 : draft.item.followersSize - 1;
                draft.loadingState = LoadingStatus.LOADING;
            }
            break;

        case ListDetailActionsType.RESET_LIST_DETAIL_STATE:
            draft.item = undefined;
            draft.loadingState = LoadingStatus.LOADING;
            break;

        case ListDetailActionsType.SET_LOADING_STATE:
            draft.loadingState = action.payload;
            break;

        default:
            break;
    }
}, initialTagsState);
