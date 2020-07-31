const state = () => ({
  documentTitle: "",
  description: "",
  author: "",
  keywords: "",
  darkMode: false,
  mainPrimaryColor: "",
  mainSecondaryColor: "",
  mainFont: "Arial"
});

const mutations = {
  setMetaData(state, { id, input }) {
    state[id] = input;
  },
  toggleCheckbox(state, name) {
    state[name] = !state[name];
  
  },
  setColor(state, { name, color }) {
    state[name] = color;
  },
  setFont(state, font) {
    state.mainFont = font;
  }
};

const actions = {
  updateInputData({ commit }, payload) {
    commit("setMetaData", payload);
  },
  updateCheckbox({ commit }, payload) {
    commit("toggleCheckbox", payload);
  },
  updateColor({ commit }, payload) {
    commit("setColor", payload);
  },
  updateFont({ commit }, font) {
    commit("setFont", font);
  }
};

export { state, actions, mutations };
