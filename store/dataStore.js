const state = () => ({
  currentSection: 1,
  sections: [
    {
      id: 1,
      title: "setup",
      slideAmount: 5,
      slides: [
        { title: "meta data", id: 0 },
        { title: "colors", id: 1 },
        { title: "fonts", id: 2 },
        { title: "layout", id: 3 },
        { title: "navigation", id: 4 },
        { title: "page wrapper", id: 5 }
      ]
    },
    {
      id: 2,
      title: "welcome",
      slideAmount: 4,
      slides: [
        { title: "background image", id: 0 },
        { title: "colors", id: 1 },
        { title: "hero & call to action", id: 2 },
        { title: "design", id: 3 }
      ]
    },
    {
      id: 3,
      title: "about",
      slideAmount: 3,
      slides: [
        { title: "layout", id: 0 },
        { title: "design", id: 1 },
        { title: "colors", id: 2 }
      ]
    },
    {
      id: 4,
      title: "skills",
      slideAmount: 3,
      slides: [
        { title: "layout", id: 0 },
        { title: "design", id: 1 },
        { title: "colors", id: 2 }
      ]
    },
    {
      id: 5,
      title: "projects",
      slideAmount: 3,
      slides: [
        { title: "layout", id: 0 },
        { title: "design", id: 1 },
        { title: "colors", id: 2 }
      ]
    },
    {
      id: 6,
      title: "contact",
      slideAmount: 5,
      slides: [
        { title: "design", id: 0 },
        { title: "colors", id: 1 },
        { title: "name & contact", id: 2 },
        { title: "social media links", id: 3 },
        { title: "footer", id: 4 }
      ]
    }
  ]
});

const mutations = {
  updateSection(state, payload) {
    state.currentSection = payload;
  }
};

const actions = {
  changeSection({ commit }, payload) {
    commit("updateSection", payload);
  }
};

export { state, actions, mutations };
