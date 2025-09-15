import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface hoverState {
    isHovered: boolean;
};

const initialState: hoverState = {
    isHovered: false,
};

const hoverSlice = createSlice({
    name: 'hover',
    initialState,
    reducers: {
        setHoverState(state, action: PayloadAction<boolean>) {
            state.isHovered = action.payload;
        },
    },
});

export const { setHoverState } = hoverSlice.actions;
export default hoverSlice.reducer;