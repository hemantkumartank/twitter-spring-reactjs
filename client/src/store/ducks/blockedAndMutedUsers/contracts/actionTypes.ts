import {Action} from "redux";

import {LoadingStatus} from "../../../types";
import {BlockedUserResponse, MutedUserResponse} from "../../../types/user";

export enum BlockedAndMutedUsersActionsType {
    SET_BLOCKED_USERS = 'blockedAndMutedUsers/SET_BLOCKED_USERS',
    SET_MUTED_USERS = 'blockedAndMutedUsers/SET_MUTED_USERS',
    SET_BLOCKED_USER = 'blockedAndMutedUsers/SET_BLOCKED_USER',
    SET_MUTED_USER = 'blockedAndMutedUsers/SET_MUTED_USER',
    FETCH_BLOCKED_USERS = 'blockedAndMutedUsers/FETCH_TAGS',
    FETCH_MUTED_USERS = 'blockedAndMutedUsers/FETCH_TAGS',
    RESET_TAGS_STATE = 'blockedAndMutedUsers/RESET_TRENDS_STATE',
    SET_LOADING_STATE = 'blockedAndMutedUsers/SET_LOADING_STATE',
}

export interface SetBlockedUsersActionInterface extends Action<BlockedAndMutedUsersActionsType> {
    type: BlockedAndMutedUsersActionsType.SET_BLOCKED_USERS;
    payload: BlockedUserResponse[];
}

export interface SetMutedUsersActionInterface extends Action<BlockedAndMutedUsersActionsType> {
    type: BlockedAndMutedUsersActionsType.SET_MUTED_USERS;
    payload: MutedUserResponse[];
}

export interface SetBlockedUserActionInterface extends Action<BlockedAndMutedUsersActionsType> {
    type: BlockedAndMutedUsersActionsType.SET_BLOCKED_USER;
    payload: { userId: number; isUserBlocked: boolean };
}

export interface SetMutedUserActionInterface extends Action<BlockedAndMutedUsersActionsType> {
    type: BlockedAndMutedUsersActionsType.SET_MUTED_USER;
    payload: { userId: number; isUserMuted: boolean };
}

export interface FetchBlockedUsersActionInterface extends Action<BlockedAndMutedUsersActionsType> {
    type: BlockedAndMutedUsersActionsType.FETCH_BLOCKED_USERS;
}

export interface FetchMutedUsersActionInterface extends Action<BlockedAndMutedUsersActionsType> {
    type: BlockedAndMutedUsersActionsType.FETCH_MUTED_USERS;
}

export interface ResetBlockedAndMutedUsersStateActionInterface extends Action<BlockedAndMutedUsersActionsType> {
    type: BlockedAndMutedUsersActionsType.RESET_TAGS_STATE;
}

export interface SetBlockedAndMutedUsersLoadingStateActionInterface extends Action<BlockedAndMutedUsersActionsType> {
    type: BlockedAndMutedUsersActionsType.SET_LOADING_STATE;
    payload: LoadingStatus;
}

export type BlockedAndMutedUsersActions =
    | SetBlockedUsersActionInterface
    | SetMutedUsersActionInterface
    | SetBlockedUserActionInterface
    | SetMutedUserActionInterface
    | ResetBlockedAndMutedUsersStateActionInterface
    | SetBlockedAndMutedUsersLoadingStateActionInterface;
