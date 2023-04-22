<?php
// Retrieve form data
$discordUsername = $_POST['discord-username'];
$robloxUsername = $_POST['roblox-username'];
$verificationCode = $_POST['verification-code'];

// TODO: Implement your own verification logic here
// For testing purposes, we'll just check if the verification code matches the string "testcode"
if ($verificationCode === 'testcode') {
    // Verification successful
    echo 'success';
} else {
    // Verification failed
    echo 'error';
}
?>
