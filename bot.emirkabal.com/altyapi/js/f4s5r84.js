document.addEventListener('DOMContentLoaded', init, false);

function init() {
    adsBlocked(function (blocked) {
        if (blocked) {
            $('#a-modal').modal('show');
        }
    })
}

function adsBlocked(callback) {
    var testURL = 'https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js'

    var myInit = {
        method: 'HEAD',
        mode: 'no-cors'
    };

    var myRequest = new Request(testURL, myInit);

    fetch(myRequest).then(function (response) {
        return response;
    }).then(function (response) {
        console.log(response);
        callback(false)
    }).catch(function (e) {
        console.log(e)
        callback(true)
    });
}