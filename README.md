# therapy

AI based preliminary therapy/consultation

Setup:

- Install Node.js: Make sure you have Node.js 18 (https://nodejs.org/en) installed.
- Setup Firebase
  - Firebase console link: (https://console.firebase.google.com) Use this projects google credentials to login everywhere.
  - `npm install firebase firebase-tools` (ignore the warnings)
  - `firebase login`
  - `npx firebase-tools init`
    - Select **"Realtime database"** for now. More functionalities can be added later.
    - Select **"Use an existing project"**
    - This will automatically show you the **"therapy-fc975"** project present in firebase.
- Run `npm start` to start the local server.
