import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axios from 'axios';

import { getPublicApi } from '@app/util/env';

interface ServerLangState {
  [Key: string]: string;
}

interface ServerLangType {
  state: 'loading' | 'loaded' | 'initial';
  data: { [key: string]: ServerLangState };
  error: string | Error;
}

const initialState: ServerLangType = {
  state: 'initial',
  data: {},
  error: '',
};

export const serverLangAsyncAction = createAsyncThunk(
  'serverLang/asyncAction',
  async (lang: string) => {
    const res = await axios.get<string, { data: ServerLangState }>(
      `${getPublicApi()}/api/lang?lang=${lang}`,
    );
    return { [lang]: res.data };
  },
);

export const serverLangSlice = createSlice({
  name: 'serverLang',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(serverLangAsyncAction.pending, (state) => {
        state.state = 'loading';
      })
      .addCase(serverLangAsyncAction.rejected, (state, action) => {
        state.state = 'loaded';
        state.error = action.payload as string | Error;
      })
      .addCase(serverLangAsyncAction.fulfilled, (state, action) => {
        state.state = 'loaded';
        state.data = { ...state.data, ...action.payload };
      });
  },
});
