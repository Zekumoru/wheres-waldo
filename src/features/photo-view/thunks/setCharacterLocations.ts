import { ActionReducerMapBuilder, createAsyncThunk } from '@reduxjs/toolkit';
import { collection, getDocs, getFirestore } from 'firebase/firestore';
import TCharacterLocation from '../characterLocation.types';

const setCharacterLocations = createAsyncThunk(
  'characterLocation/setCharacterLocations',
  async () => {
    const collator = new Intl.Collator(undefined, { numeric: true });
    const snapshot = await getDocs(
      collection(getFirestore(), 'character-locations')
    );

    return snapshot.docs
      .map((doc) => doc.data() as TCharacterLocation)
      .sort((a, b) => collator.compare(a.name, b.name));
  }
);

const buildSetCharacterLocations = (
  builder: ActionReducerMapBuilder<{
    locations: TCharacterLocation[];
  }>
) => {
  builder.addCase(setCharacterLocations.fulfilled, (state, action) => {
    state.locations = action.payload;
  });

  builder.addCase(setCharacterLocations.rejected, (state, action) => {
    state.locations = [];
    throw new Error(
      `Failed to fetch character locations.\nError: ${action.error}`
    );
  });
};

export { setCharacterLocations, buildSetCharacterLocations };
