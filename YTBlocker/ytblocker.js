const regexVal = /ads|_ad|ad_/g;

function cancel(requestDetails) {
    return {cancel: (requestDetails.url.match(regexVal))};
}
  
browser.webRequest.onBeforeRequest.addListener(
    cancel,
    {urls: ["<all_urls>"]},
    ["blocking"]
);