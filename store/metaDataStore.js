import formatter from "html-formatter";

const state = () => ({
  body: "",
  bodyBackground: '#fff',
  documentTitle: "",
  description: "",
  author: "",
  keywords: "",
  darkMode: false,
  mainPrimaryColor: "",
  mainSecondaryColor: "#fff",
  mainFont: "Arial",
  linkColor: "#333",
  textColor: '#333',
  uppercase: false,
  headerCenter: false,
  headerBackground: '#fff',
  headerFontWeight: '500',
  headerTextTransform: 'capitalize',
  pageWrapper: "1900px",
  buttonFill: false,
  buttonRadius: 0,
  buttonUpperCase: false,
  sectionBackground: '#fff'
});


const checkboxProperties = (state, name) => {

}

const mutations = {
  setMetaData(state, { id, input }) {
    state[id] = input;
  },
  toggleCheckbox(state, name) {

  
    
    state[name] = !state[name];

    

    if (state.darkMode && name === 'darkMode') {
      state.sectionBackground = "#333"
      state.headerBackground = state.mainPrimaryColor || "#444"
      state.linkColor = '#fff'
      state.textColor = '#fff'
     
    } else {
      state.sectionBackground = "#fff"
      state.headerBackground = state.mainPrimaryColor || "#fff"
      state.linkColor = '#333'
      state.textColor = '#333'
    }

   

    
  },
  setColor(state, { name, color }) {
    state[name] = color;
    
    if(name === 'mainPrimaryColor') {
      state.headerBackground = state.mainPrimaryColor
    }
      
    
  },
  setFont(state, font) {
    state.mainFont = font;
  },
  setPreviewBody(state, payload) {
    state.body = payload;
  },
  setPageWrapper(state, payload) {
    const width = 1900 - payload * 7 + "px";
    state.pageWrapper = width;
   
  },
  setButtonRadius(state, payload) {
    const radius = Math.floor(payload / 3) + "px";
    state.buttonRadius = radius;
  
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
