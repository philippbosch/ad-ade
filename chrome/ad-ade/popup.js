var button = document.getElementById('theButton');
button.addEventListener('click', function() {
    chrome.extension.sendMessage({'action': 'reloadSelectors'}, function() {
        button.innerHTML = 'Reloaded.';
        button.disabled = true;
    });
});
