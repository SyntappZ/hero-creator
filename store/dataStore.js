const state = () => ({
  currentSection: 0,
  currentSlide: 0,
  slides: [
    { title: "meta data", id: 0 },
    { title: "fonts", id: 1 },
    { title: "buttons", id: 2 },
    { title: "navigation", id: 3 },
    { title: "page wrapper", id: 4 },
    { title: "colors", id: 5 },

    { title: "background image", id: 6 },
    { title: "design", id: 7 },
    { title: "hero & call to action", id: 8 },
    { title: "colors", id: 9 },

    { title: "layout", id: 10 },
    { title: "design", id: 11 },
    { title: "colors", id: 12 },

    { title: "layout", id: 13 },
    { title: "design", id: 14 },
    { title: "colors", id: 15 },

    { title: "layout", id: 16 },
    { title: "design", id: 17 },
    { title: "colors", id: 18 },

    { title: "design", id: 19 },
    { title: "colors", id: 20 },
    { title: "name & contact", id: 21 },
    { title: "social media links", id: 22 },
    { title: "copyright", id: 23 }
  ],
  sections: [
    {
      id: 0,
      title: "setup",
      slideAmount: 6,
      slides: [0, 1, 2, 3, 4, 5]
    },
    {
      id: 1,
      title: "welcome",
      slideAmount: 4,
      slides: [6, 7, 8, 9]
    },
    {
      id: 2,
      title: "about",
      slideAmount: 3,
      slides: [10, 11, 12]
    },
    {
      id: 3,
      title: "skills",
      slideAmount: 3,
      slides: [13, 14, 15]
    },
    {
      id: 4,
      title: "projects",
      slideAmount: 3,
      slides: [16, 17, 18]
    },
    {
      id: 5,
      title: "contact",
      slideAmount: 5,
      slides: [19, 20, 21, 22, 23]
    }
  ]
});

const mutations = {
  updateSection(state, sectionId) {
    state.currentSection = sectionId;
  },
  updateSlide(state, value) {
    state.currentSlide = value;

    if (value < 6) {
      state.currentSection = 0;
    } else if (value < 10) {
      state.currentSection = 1;
    } else if (value < 13) {
      state.currentSection = 2;
    } else if (value < 16) {
      state.currentSection = 3;
    } else if (value < 19) {
      state.currentSection = 4;
    } else if (value >= 19) {
      state.currentSection = 5;
    }

   
  }
};

const actions = {
  changeSection({ commit }, sectionId) {
    commit("updateSection", sectionId);
  },
  changeSlide({ commit }, value) {
    commit("updateSlide", value);
  }
};

export { state, actions, mutations };
