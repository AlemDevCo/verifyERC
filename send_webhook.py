import requests
import json

def send_webhook(discord_username, roblox_username):
    url = 'https://discord.com/api/webhooks/1099471244052672713/P329gyEUESurHvQt5QBE4TE68VHafVKwl2CXHI2QByJEUaGjkhSyP7lNHrReWkWHIy_6'

    message = f"{discord_username} ({roblox_username}) has been verified and needs manual verification by a moderator."

    payload = {
        "username": "Roblox Verification",
        "avatar_url": "https://cdn.discordapp.com/attachments/828703487787497749/836760147660124466/roblox-logo.png",
        "content": message
    }

    headers = {
        "Content-Type": "application/json"
    }

    response = requests.post(url, data=json.dumps(payload), headers=headers)

    if response.status_code == 204:
        print('Webhook sent successfully.')
    else:
        print(f'Error sending webhook. Status code: {response.status_code}')
