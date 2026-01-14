export const createLoadingReducers = (builder,comThunk) => {
    builder
        .addCase(comThunk.pending,(state) => {
            state.loading = true;
            state.error = null;
        })
        .addCase(comThunk.rejected,(state,action) => {
            state.loading = false;
            state.error = action.error.message;
        })
}//loginThunk,memberThunk 공통적으로 관리(로딩,에러부분)