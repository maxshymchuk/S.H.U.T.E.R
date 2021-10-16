import * as actions from './actions';
import { Actions, IState } from './interfaces';
import { RepoStatuses } from '../repo/interfaces';

const defaultState: IState = {
  gameState: null,
  repoStatus: RepoStatuses.LOADING,
  isGameStarted: false,
  isGameRunning: false,
};

type InferValueTypes<T> = T extends { [key: string]: infer U } ? U : never;
type ActionTypes = ReturnType<InferValueTypes<typeof actions>>;

export function reducer(state = defaultState, action: ActionTypes): IState {
  switch (action.type) {
    case Actions.CHANGE_REPO_STATUS:
      return {
        ...state,
        repoStatus: action.payload,
      };
    case Actions.CHANGE_GAME_STARTED_STATUS:
      return {
        ...state,
        isGameStarted: action.payload,
      };
    case Actions.CHANGE_GAME_RUNNING_STATUS:
      return {
        ...state,
        isGameRunning: action.payload,
      };
    case Actions.UPDATE_GAME_STATE:
      return {
        ...state,
        gameState: action.payload,
      };
    default:
      return state;
  }
}
