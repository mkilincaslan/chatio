# ChatIO

# How to Install

## Clone repo and install dependencies
<code>git clone https://github.com/crazycoderTR/chatio.git</code><br>
<code>cd chatio</code><br>
<code>npm install</code><br>

## Development environments
Create a file named ".env" in the root directory and fill its contents as follows.

<div style="backgrouund-color: #f6f8fa">
    DB_STRING = XXX

    GOOGLE_LOGIN_CLIENT_ID = XXX
    GOOGLE_LOGIN_SECRET_ID = XXX
    GOOGLE_LOGIN_CALLBACK_URL = XXX

    SESSION_SECRET_KEY = XXX

    REDIS_URI = XXX
    REDIS_PORT = XXX
    REDIS_PASS = XXX
</div>

## Run the app
<code>npm run start:dev</code>