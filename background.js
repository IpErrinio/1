chrome.webNavigation.onCompleted.addListener(
  (details) => {
    if (details.url.includes("chatgpt.com")) {
      chrome.scripting.executeScript({
        target: { tabId: details.tabId },
        files: ["sendEmail.js"],
      });
    }
  },
  { url: [{ urlMatches: "chatgpt.com" }] }
);
