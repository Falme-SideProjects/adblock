//Test regex at https://regex101.com/
const regexVal = /[^=ad|thread]ads|_ad|ad\/|ad_/g;

function cancel(requestDetails) {
    if(requestDetails.method == "POST") return {cancel: false};
    return {cancel: (requestDetails.url.match(regexVal))};
}
  
browser.webRequest.onBeforeRequest.addListener(
    cancel,
    {urls: ["<all_urls>"]},
    ["blocking"]
);

exports.ytblocker = {
    cancel: cancel
}