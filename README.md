# therapy

AI based preliminary therapy/consultation

Setup:

- Install Node.js: Make sure you have Node.js 18 (https://nodejs.org/en) installed.
- Create a new react app
  - `npx create-react-app therapy`
  - `cd therapy`
- Setup Firebase
  - Firebase console link: (https://console.firebase.google.com) Use this projects google credentials to login everywhere.
  - `npm install firebase firebase-tools` (ignore the warnings)
  - `firebase login`
  - `npx firebase-tools init`
    - Select **"Realtime database"** for now. More functionalities can be added later.
    - Select **"Use an existing project"**
    - This will automatically show you the **"therapy-fc975"** project present in firebase.
- Run `npm run build` after every pull.
- To see your changes on firebases hosted domain: https://therapy-fc975.web.app/ run the following commands
  - `npm run build`
  - `firebase deploy`
  - Changes will be auto deployed on firebase hosted domain after the change is merged in main branch.
