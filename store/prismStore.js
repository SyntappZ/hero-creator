import formatter from "html-formatter";

const state = () => ({
  root: "",
  documentTitle: "",
  description: "",
  author: "",
  keywords: "",
  darkMode: false,
  mainPrimaryColor: "",
  mainSecondaryColor: "",
  mainFont: "Arial",
  linkColor: '#333',
  body: ''
});

const setStyleProperty = (style, payload) => {
  const root = document.documentElement
  root.style.setProperty(style, payload);
}

const darkMode = (darkmode) => {
  if(darkmode) {
    setStyleProperty('--sectionBackground', '#333')
    setStyleProperty('--headerBackground', '#222')
    setStyleProperty('--linkColor', 'white')
    setStyleProperty('--textColor', 'white')
  }else{
    setStyleProperty('--headerBackground', 'white')
    setStyleProperty('--linkColor', '#333')
    setStyleProperty('--sectionBackground', 'white')
    setStyleProperty('--textColor', '#333')

  }
}

const mutations = {
  setMetaData(state, { id, input }) {
    state[id] = input;
  },
  toggleCheckbox(state, name) {
    
    state[name] = !state[name];
    console.log(state.darkMode)
    darkMode(state.darkMode)
  
  },
  setColor(state, { name, color }) {
    const root = document.documentElement
    
    state[name] = color;
    const styleName = `--${name}`
    console.log(root)
    root.style.setProperty(styleName, color);
  },
  setFont(state, font) {
    const root = document.documentElement
    state.mainFont = font;
    root.style.setProperty('--templateFont', font);
  },
  setPreviewBody(state, payload) {
    
    state.body = payload
  },
  // setRoot(state, payload) {
  //   state.root = payload
  //   console.log(payload)
  // }
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
    commit('setPreviewBody', payload)
  },
  // updateRoot({commit}, payload) {
  //   commit('setRoot', payload)
  // }
};

const getters = {
    previewHtml(state) {
      const html = formatter.render( `<!DOCTYPE html><html lang="en"><head><meta charset="UTF-8"><meta name="viewport" content="width=device-width, initial-scale=1.0"><meta name="keywords" content="${state.keywords}"><meta name="author" content="${state.author}"><meta name="description" content="${state.description}"><title>${state.documentTitle}</title></head><body>${state.body}</body></html>`);
      return html
    }
}

export { state, actions, mutations,
 getters };
