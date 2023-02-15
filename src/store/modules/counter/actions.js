const setCount = (state, payload) => {
    state.commit('SET_COUNT', payload)
    state.commit('SET_MODIFIED', payload)
}

export default {
    setCount
};
