import produce, {Draft} from 'immer';

import {LoadingStatus} from '../../types';
import {ListMembersActions, ListMembersActionsType} from './contracts/actionTypes';
import {ListMembersState} from './contracts/state';

const initialTagsState: ListMembersState = {
    members: [],
    suggested: [],
    membersLoadingState: LoadingStatus.LOADING,
    suggestedLoadingState: LoadingStatus.LOADING,
    loadingState: LoadingStatus.LOADING,
};

export const listMembersReducer = produce((draft: Draft<ListMembersState>, action: ListMembersActions) => {
    switch (action.type) {
        case ListMembersActionsType.SET_LIST_MEMBERS:
            draft.members = action.payload;
            draft.membersLoadingState = LoadingStatus.LOADED;
            break;

        case ListMembersActionsType.SET_LIST_SUGGESTED:
            draft.suggested = action.payload;
            draft.suggestedLoadingState = LoadingStatus.LOADED;
            break;

        case ListMembersActionsType.SET_USER_TO_LIST_MEMBERS:
            const suggestedIndex = draft.suggested.findIndex((member) => member.id === action.payload.userId);
            if (suggestedIndex !== -1) draft.suggested[suggestedIndex].isMemberInList = action.payload.isMember;
            draft.membersLoadingState = LoadingStatus.LOADED;
            break;

        case ListMembersActionsType.RESET_LIST_MEMBERS_STATE:
            draft.members = [];
            draft.membersLoadingState = LoadingStatus.LOADING;
            break;

        case ListMembersActionsType.RESET_LIST_SUGGESTED_STATE:
            draft.suggested = [];
            draft.suggestedLoadingState = LoadingStatus.LOADING;
            break;

        case ListMembersActionsType.RESET_LIST_MEMBERS:
            draft.members = [];
            break;

        case ListMembersActionsType.SET_LOADING_STATE:
            draft.loadingState = action.payload;
            break;

        case ListMembersActionsType.SET_LOADING_MEMBERS_STATE:
            draft.membersLoadingState = action.payload;
            break;

        case ListMembersActionsType.SET_LOADING_SUGGESTED_STATE:
            draft.suggestedLoadingState = action.payload;
            break;

        default:
            break;
    }
}, initialTagsState);
