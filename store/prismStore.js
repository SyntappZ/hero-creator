const state = () => ({
    documentTitle: '',
    description: '',
    author: '',
    keywords: '',

  });
  
  const mutations = {
    addMetaData(state, payload) {
        state.documentTitle = payload.documentTitle;
        state.description = payload.description;
        state.author = payload.author;
        state.keywords = payload.keywords;
    }
  };
  
  const actions = {
      updateMetaData({ commit }, payload) {
        commit("addMetaData", payload);
      }
  };
  
  export { state, actions, mutations };
  