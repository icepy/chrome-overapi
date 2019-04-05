export function createTab(url: string): Promise<chrome.tabs.Tab> {
  return new Promise((resolve) => {
    chrome.tabs.create({
      url,
    }, (tab: chrome.tabs.Tab) => {
      resolve(tab);
    });
  });
}

export const getMessage = (key: string): string => {
  return chrome.i18n.getMessage(key);
};