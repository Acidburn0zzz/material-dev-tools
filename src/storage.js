export const SETTINGS = 'devtools-settings';
export const DEVTOOLS_THEME = 'devtools-theme';
export const DEVTOOLS_FONT = 'devtools-font';
export const DEVTOOLS_SIZE = 'devtools-size';

const fakeStorage = {

  async get(property, fn = () => {}) {
    let item = await localStorage.getItem(SETTINGS);
    try {
      const settings = item ? JSON.parse(item) : {};
      fn(settings);
    } catch (e) {
      fn({});
    }
  },

  async set(settings, fn = () => {}) {
    let oldItem = await localStorage.getItem(SETTINGS);
    let newSettings = {...oldItem, settings};
    await localStorage.setItem(SETTINGS, JSON.stringify(newSettings));
    fn(settings);
  },
};

// export const storage = chrome.storage.sync;
export const storage = fakeStorage;
