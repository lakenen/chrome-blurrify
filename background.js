var opts = {format: 'png'};

chrome.extension.onRequest.addListener(function(request, sender, callback) {
    chrome.tabs.captureVisibleTab(null, opts, function(dataURI) {
        if (dataURI) {
            callback(dataURI);
        }
    });
});
