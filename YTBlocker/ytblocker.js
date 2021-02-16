function cancel(requestDetails) {
    let respo = false;
    let regex = /ads|_ad|ad_/g;
    if(requestDetails.url.match(regex))
    {
        console.log("blocked address: "+requestDetails.url);
        respo = true;
    }
    return {cancel: respo};
  }
  
  browser.webRequest.onBeforeRequest.addListener(
    cancel,
    {urls: ["<all_urls>"]},
    ["blocking"]
  );