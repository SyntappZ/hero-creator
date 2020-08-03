import formatter from "html-formatter";

const state = () => ({
  body: "",
  documentTitle: "",
  description: "",
  author: "",
  keywords: "",
  darkMode: false,
  mainPrimaryColor: "#5F1735",
  mainSecondaryColor: "#5F1735",
  mainFont: "Arial",
  linkColor: "#333",
  uppercase: false,
  headerCenter: false,
  pageWrapper: "1900px",
  buttonFill: false,
  buttonRadius: 0,
  buttonUpperCase: false
});

const setStyleProperty = (style, payload) => {

  const root = document.documentElement;
  root.style.setProperty(style, payload);
};

const darkMode = (darkmode, primaryColor) => {
  if (darkmode) {
    setStyleProperty("--sectionBackground", "#333");
    setStyleProperty("--headerBackground", primaryColor || "#222");
    setStyleProperty("--linkColor", "white");
    setStyleProperty("--textColor", "white");
  } else {
    setStyleProperty("--headerBackground", "white");
    setStyleProperty("--linkColor", "#333");
    setStyleProperty("--sectionBackground", "white");
    setStyleProperty("--textColor", "#333");
  }
};

const checkboxProperties = (state, name) => {

}

const mutations = {
  setMetaData(state, { id, input }) {
    state[id] = input;
  },
  toggleCheckbox(state, name) {
    
    state[name] = !state[name];

    if(name === "buttonUpperCase") {
      setStyleProperty("--buttonUpperCase", state[name] ? "uppercase" : "capitalize")
    }

    if (name === "darkMode") {
      darkMode(state.darkMode, state.mainPrimaryColor);
    }
  },
  setColor(state, { name, color }) {
    state[name] = color;
    const styleName = `--${name}`;
    if (state.darkMode) {
      setStyleProperty("--headerBackground", state.mainPrimaryColor);
    }

    setStyleProperty(styleName, color);
  },
  setFont(state, font) {
    state.mainFont = font;
    setStyleProperty("--templateFont", font);
  },
  setPreviewBody(state, payload) {
    state.body = payload;
  },
  setPageWrapper(state, payload) {
    const width = 1900 - payload * 7 + "px";
    state.pageWrapper = width;
    setStyleProperty("--wrapperWidth", width);
  },
  setButtonRadius(state, payload) {
    const radius = Math.floor(payload / 4) + "px";
    state.buttonRadius = radius;
    setStyleProperty("--buttonRadius", radius);
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
  },
  updateHtmlBody({ commit }, payload) {
    commit("setPreviewBody", payload);
  },
  updatePageWrapper({ commit }, payload) {
    commit("setPageWrapper", payload);
  },
  updateButtonRadius({ commit }, payload) {
    commit("setButtonRadius", payload)
  }
};

const getters = {
  previewHtml(state) {
    const html = formatter.render(
      `<!DOCTYPE html><html lang="en"><head><meta charset="UTF-8"><meta name="viewport" content="width=device-width, initial-scale=1.0"><meta name="keywords" content="${state.keywords}"><meta name="author" content="${state.author}"><meta name="description" content="${state.description}"><title>${state.documentTitle}</title></head><body>${state.body}</body></html>`
    );
    return html;
  }
};

export { state, actions, mutations, getters };
