const state = () => ({
  currentSection: 0,
  currentSlideNumber: 0,
  slides: [
    { title: "meta data", id: 0 },
    { title: "fonts", id: 1 },
    { title: "colors", id: 2 },
    { title: "buttons", id: 3 },
    { title: "navigation", id: 4 },

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
      slideAmount: 5,
      slides: [0, 1, 2, 3, 4]
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

  nextSlide(state) {
    if (state.currentSlideNumber < 22) {
      state.currentSlideNumber++;
    }
  },
  previousSlide(state) {
    if (state.currentSlideNumber > 0) {
      state.currentSlideNumber--;
    }
  },
  checkSlideNumber(state, slideNumber) {
    if (slideNumber < 6) {
      state.currentSection = 0;
    } else if (slideNumber < 10) {
      state.currentSection = 1;
    } else if (slideNumber < 13) {
      state.currentSection = 2;
    } else if (slideNumber < 16) {
      state.currentSection = 3;
    } else if (slideNumber < 19) {
      state.currentSection = 4;
    } else if (slideNumber >= 19) {
      state.currentSection = 5;
    }
  },
  sectionJump(state, sectionId) {
   switch(sectionId) {
     case 0: state.currentSlideNumber = 0;
     break;
     case 1: state.currentSlideNumber = 6;
     break;
     case 2: state.currentSlideNumber = 10;
     break;
     case 3: state.currentSlideNumber = 13;
     break;
     case 4: state.currentSlideNumber = 16;
     break;
     case 5: state.currentSlideNumber = 19;
     break;
     default: state.currentSlideNumber = 0;
   }
  }
 
};

const actions = {
  changeSection({ commit }, sectionId) {
    commit("updateSection", sectionId);
    commit("sectionJump", sectionId)
  },
  changeSlide({ commit }, value) {
    commit("updateSlide", value);
  },
  pagination({ commit, state }, forward) {
    if (forward) {
      commit("nextSlide");
    } else {
      commit("previousSlide");
    }
    commit("checkSlideNumber", state.currentSlideNumber);
  }
};

const getters = {
  currentSlide(state) {
    return state.slides[state.currentSlideNumber];
  }
};

export { state, actions, mutations, getters };
