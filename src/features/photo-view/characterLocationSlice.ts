import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { addDoc, collection, getFirestore } from 'firebase/firestore';
import TCharacterLocation from './characterLocation.types';
import { buildSetCharacterLocations } from './thunks/setCharacterLocations';

const initialState = {
  locations: [] as TCharacterLocation[],
};

// onSnapshot(collection(getFirestore(), 'character-locations'), (snapshot) => {
//   const locations = snapshot.docs.map(
//     (doc) => doc.data() as TCharacterLocation
//   );
// });

const characterLocationSlice = createSlice({
  name: 'characterLocation',
  initialState,
  reducers: {
    add: (state, action: PayloadAction<TCharacterLocation>) => {
      addDoc(collection(getFirestore(), 'character-locations'), action.payload);
    },
  },
  extraReducers: (builder) => {
    buildSetCharacterLocations(builder);
  },
});

const characterLocationReducer = characterLocationSlice.reducer;
export default characterLocationReducer;
export const CharacterLocationActions = characterLocationSlice.actions;
