function generateCode() {
    var chars = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ';
    var code = '';
    for (var i = 0; i < 10; i++) {
        code += chars.charAt(Math.floor(Math.random() * chars.length));
    }
    document.getElementById('verification-code').value = code;
}

function submitForm() {
    var discordUsername = document.getElementById('discord-username').value;
    var robloxUsername = document.getElementById('roblox-username').value;
    var verificationCode = document.getElementById('verification-code').value;
    var xmlhttp = new XMLHttpRequest();
    xmlhttp.onreadystatechange = function() {
        if (xmlhttp.readyState == XMLHttpRequest.DONE) {
            if (xmlhttp.status == 200) {
                if (xmlhttp.responseText == 'success') {
                    alert('Verification successful!');
                    sendWebhook(discordUsername, robloxUsername);
                    return true;
                } else {
                    document.getElementById('verification-code').value = '';
                    document.getElementById('error-message').innerHTML = 'Incorrect verification code or Roblox username.';
                    return false;
                }
            } else {
                document.getElementById('verification-code').value = '';
                document.getElementById('error-message').innerHTML = 'There was an error verifying your account. Please try again later.';
                return false;
            }
        }
    };
    xmlhttp.open('POST', 'process.php', true);
    xmlhttp.setRequestHeader('Content-type', 'application/x-www-form-urlencoded');
    xmlhttp.send('discord-username=' + encodeURIComponent(discordUsername) +
                 '&roblox-username=' + encodeURIComponent(robloxUsername) +
                 '&verification-code=' + encodeURIComponent(verificationCode));
    return false;
}

function sendWebhook(discordUsername, robloxUsername) {
    var url = 'https://discord.com/api/webhooks/1099471244052672713/P329gyEUESurHvQt5QBE4TE68VHafVKwl2CXHI2QByJEUaGjkhSyP7lNHrReWkWHIy_6';
    var request = new XMLHttpRequest();
    request.open('POST', url);
    request.setRequestHeader('Content-type', 'application/json');

    var message = discordUsername + ' (' + robloxUsername + ') has been verified and needs manual verification by a moderator.';

    var params = {
        username: 'Roblox Verification',
        avatar_url: 'https://cdn.discordapp.com/attachments/828703487787497749/836760147660124466/roblox-logo.png',
        content: message
    };

    request.send(JSON.stringify(params));
}
