import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { getMessage, getMessages,updateMessage,deleteMessage,createMessage, getRandomMessage } from '../../api/messages/messagesApi';

export const getMessageThunk = createAsyncThunk('message/getMessage', async (id) => {
    const response = await getMessage(id);
    return response;
});

export const getMessagesThunk = createAsyncThunk('messages/getMessages', async () => {
    const response = await getMessages();
    return response;
});

export const createMessageThunk = createAsyncThunk('message/createMessage', async (message) => {
    const response = await createMessage(message);
    return response;
});

export const updateMessageThunk = createAsyncThunk('message/updateMessage', async (message) => {
    const id = message.id;
    const {header, content} = message;
    const response = await updateMessage(id, {header, content});
    return response;
});

export const deleteMessageThunk = createAsyncThunk('message/deleteMessage', async (id) => {
    const response = await deleteMessage(id);
    return response;
});

export const getRandomMessageThunk =  createAsyncThunk('message/getRandomMessage', async () => {
    const response = await getRandomMessage();
    return response;
});

const messagesSlice = createSlice({
  name: 'messages',
  initialState: {
    message: null,
    messages: [],
    errors: [],
  },
  reducers: {},
  extraReducers: (builder) => {
        builder.addCase(getMessageThunk.fulfilled, (state, action) => ({
            ...state, message: action.payload
        }));
        builder.addCase(getMessagesThunk.fulfilled, (state, action) => ({
            ...state, messages: action.payload
        }));
      builder.addCase(createMessageThunk.fulfilled, (state, action) => ({
            ...state, message: action.payload
      }));
      builder.addCase(updateMessageThunk.fulfilled, (state, action) => ({
            ...state, message: action.payload
      }));
      builder.addCase(deleteMessageThunk.fulfilled, (state, action) => ({
            ...state, message: action.payload
      }));
      builder.addCase(getRandomMessageThunk.fulfilled, (state, action) => ({
            ...state, message: action.payload
      }));
        builder.addCase(getMessageThunk.rejected, (state, action) => ({
            ...state, errors: action.payload
        }));
        builder.addCase(getMessagesThunk.rejected, (state, action) => ({
            ...state, errors: action.payload
        }));
      builder.addCase(createMessageThunk.rejected, (state, action) => ({
            ...state, errors: action.payload
      }));
      builder.addCase(updateMessageThunk.rejected, (state, action) => ({
            ...state, errors: action.payload
      }));
      builder.addCase(deleteMessageThunk.rejected, (state, action) => ({
            ...state, errors: action.payload
      }));
      builder.addCase(getRandomMessageThunk.rejected, (state, action) => ({
            ...state, errors: action.payload
      }));
    }
});

export default messagesSlice.reducer;
