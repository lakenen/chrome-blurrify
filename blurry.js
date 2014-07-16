
var el = document.createElement('div');
el.classList.add('blurry', 'blurry-hide')
document.documentElement.appendChild(el);
// document.addEventListener('mousemove', takeScreenshot);
document.addEventListener('scroll', abort);
window.addEventListener('resize', abort);
window.addEventListener('mousedown', abort);

function takeScreenshot() {
    el.classList.remove('blurry-hide')
    // document.removeEventListener('mousemove', takeScreenshot);
    chrome.extension.sendRequest({}, function (data) {
        if (data) {
            el.style.background = 'url(' + data + ') 0 0 no-repeat';
        }
    });
}

var tid;
function abort() {
    el.classList.add('blurry-hide');
    clearTimeout(tid);
    tid = setTimeout(takeScreenshot, Math.random() * 30000 + 1000);
}
