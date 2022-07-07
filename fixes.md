# Commen issues
# Currently we have fixes for these issues/errors! More will be added soon!
## 1. Intents is not allowed [ERROR]
```js
'Client Missing Intents' or 'Disallowed Intents'
```
```fix
Fixes:
```
step 1: head to this site [click here to head to that site](https://discord.com/developers/applications)
step 2: select you'r application
step 3: head to the bot's tab
step 4: enable all the intents
![it should look like this](https://user-images.githubusercontent.com/94511889/177829672-6b59bd88-26d7-47b2-b830-1853a7bd085f.png)
***
## 2. Code is correct but still getting errors?
Something like this one? Below?
```js
internal/modules/cjs/loader.js:818
  throw err;
  ^

Error: Cannot find module 'node:events'
Require stack:
- /home/runner/Chronium-BOT/node_modules/discord.js/src/client/BaseClient.js
- /home/runner/Chronium-BOT/node_modules/discord.js/src/index.js
- /home/runner/Chronium-BOT/index.js
    at Function.Module._resolveFilename (internal/modules/cjs/loader.js:815:15)
    at Function.Module._load (internal/modules/cjs/loader.js:667:27)
    at Module.require (internal/modules/cjs/loader.js:887:19)
    at require (internal/modules/cjs/helpers.js:74:18)
    at Object.<anonymous> (/home/runner/Chronium-BOT/node_modules/discord.js/src/client/BaseClient.js:3:22)
    at Module._compile (internal/modules/cjs/loader.js:999:30)
    at Object.Module._extensions..js (internal/modules/cjs/loader.js:1027:10)
    at Module.load (internal/modules/cjs/loader.js:863:32)
    at Function.Module._load (internal/modules/cjs/loader.js:708:14)
    at Module.require (internal/modules/cjs/loader.js:887:19) {
  code: 'MODULE_NOT_FOUND',
  requireStack: [
    '/home/runner/Chronium-BOT/node_modules/discord.js/src/client/BaseClient.js',
    '/home/runner/Chronium-BOT/node_modules/discord.js/src/index.js',
    '/home/runner/Chronium-BOT/index.js'
  ]
}
exit status 1
```
```fix
FIXES
```
Update node.js version
To update paste this in console *this script installs node.js v16 and also starts the bot!*
```js
npm init -y && npm i --save-dev node@16 && npm config set prefix=$(pwd)/node_modules/node && export PATH=$(pwd)/node_modules/node/bin:$PATH && npm start
```
***
## 3. MongoDB is troubling
```fix
Error
```
MongoParseError: options  useFindAndModify are not supported
```fix
Reason
```
Mongoose v6 dont support useFindAndModify 
```fix
Fix
```
Switch to Mongoose v5
***
## 4. Emoji's are the troubles
```fix
ERROR
```
are you getting a error like this (see attachment below!)
```fix
FIXES
```
- Then Change emojis 
- It is happeing because the bot cannot read emojis. If emojis are valid and still getting error, try adding the bot to that server.. The discord bot must be added to the server with these emojis or you will get that error
![the error](https://user-images.githubusercontent.com/94511889/177830968-4915ee1b-0a59-4298-8aab-661e3269412f.png)
***
## 5. Unable to copy bot token from discord developers portal 
```fix
ERROR
```
Unable to copy the discord bot token the `copy` button is not available pls help!
```fix
FIX
```
see the attached file
![image](https://user-images.githubusercontent.com/94511889/177831289-8797e466-4444-4cd6-b79e-7f51828fab62.png)
***
# 6. [OLD] My bot is not working? I use d.js v13 [discord.js v13]
![image](https://user-images.githubusercontent.com/94511889/177831647-02a8922e-d0b9-4171-ae6e-f75695c9814f.png)
***
## 7. You're IP Adress is not whitelisted [MONGO DB]
![image](https://user-images.githubusercontent.com/94511889/177831862-b8f66080-675a-42af-a978-8232ba34ba84.png)
***
## 8. Missing scripts 'start'
![image](https://user-images.githubusercontent.com/94511889/177832519-a6632c3c-0653-4960-a737-e72f63c01bdf.png)
***
## 9. Better SqLite issue
![image](https://user-images.githubusercontent.com/94511889/177833146-f5a3a417-8537-42ec-821f-8dc9ac3b7a78.png)
***
