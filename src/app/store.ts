import { configureStore } from '@reduxjs/toolkit';
import { TypedUseSelectorHook, useDispatch, useSelector } from 'react-redux';
import characterLocationReducer from '../features/photo-view/characterLocationSlice';
import highScoreReducer from '../features/high-score/highScoreSlice';
import { setCharacterLocations } from '../features/photo-view/thunks/setCharacterLocations';

const store = configureStore({
  reducer: {
    characterLocationReducer,
    highScoreReducer,
  },
});

store.dispatch(setCharacterLocations());

export default store;
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;
export const useAppDispatch = () => useDispatch<AppDispatch>();
