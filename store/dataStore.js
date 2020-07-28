const state = () => ({
  currentSection: 1,
  sections: [
    {
      id: 1,
      title: "setup",
      sectionAmout: 5,
      sections: [
        "meta data",
        "colors",
        "fonts",
        "layout",
        "navigation",
        "page wrapper"
      ]
    },
    {
      id: 2,
      title: "welcome",
      sectionAmout: 4,
      sections: [
        "background image",
        "colors",
        "hero & call to action",
        "design"
      ]
    },
    {
      id: 3,
      title: "about",
      sectionAmout: 3,
      sections: ["design", "colors", "layout"]
    },
    {
      id: 4,
      title: "skills",
      sectionAmout: 3,
      sections: ["design", "colors", "layout"]
    },
    {
      id: 5,
      title: "projects",
      sectionAmout: 3,
      sections: ["design", "colors", "layout"]
    },
    {
      id: 6,
      title: "contact",
      sectionAmout: 5,
      sections: [
        "design",
        "colors",
        "name & contact",
        "social media links",
        "footer"
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
