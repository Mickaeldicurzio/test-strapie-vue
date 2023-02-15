/**
 *
 * @param state
 * @param payload
 * @constructor
 */
const SET_COUNT = (state, payload) => {
    state.count = payload
};

/**
 *
 * @param state
 * @constructor
 */
const SET_MODIFIED = (state) => {
    !state.isModified ? state.isModified = true : false;
};

export default {
    SET_COUNT,
    SET_MODIFIED
};

