import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import {
  collection,
  doc,
  getFirestore,
  onSnapshot,
  orderBy,
  query,
  setDoc,
} from 'firebase/firestore';
import store from '../../app/store';
import IHighScore from './highScore.types';

const initialState = {
  highScores: [] as IHighScore[],
};

const highScoreSlice = createSlice({
  name: 'highScore',
  initialState,
  reducers: {
    add: (_state, { payload: highScore }: PayloadAction<IHighScore>) => {
      setDoc(doc(getFirestore(), `high-scores/${highScore.id}`), highScore);
    },
    set: (state, action: PayloadAction<IHighScore[]>) => {
      state.highScores = action.payload;
    },
  },
});

const HighScoreActions = highScoreSlice.actions;

onSnapshot(
  query(collection(getFirestore(), 'high-scores'), orderBy('score', 'asc')),
  (snapshot) => {
    store.dispatch(
      HighScoreActions.set(snapshot.docs.map((doc) => doc.data() as IHighScore))
    );
  }
);

const highScoreReducer = highScoreSlice.reducer;
export default highScoreReducer;
export { HighScoreActions };
