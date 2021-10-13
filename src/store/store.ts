import { reducer } from './reducers';

export default reducer;

export type IRootState = ReturnType<typeof reducer>;
