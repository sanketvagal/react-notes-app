# react-notes-app

Markdown Notes web application created using React
<p float="left">
  <img src="https://github.com/sanketvagal/react-notes-app/assets/20254776/25a8eeb3-e7e6-41ff-8ffa-699d58d01b6b" width=40% />
  <img src="https://github.com/sanketvagal/react-notes-app/assets/20254776/1cf76ee4-6494-4c9a-a777-808cfcc548a5" width=40% /> 
</p>


🚀 Try it live!  https://react-notes-app-sv.netlify.app/

Uses localstorage to save notes even if the browser is closed.

## Features:
- Sync notes with localstorage or the Firestore database by providing Firebase config (refer below)
- Markdown editor
- Create, Read, Update, and Delete notes
- Sort the sidebar with recently updated noted first

## Firestore Setup:

To setup online Firestore sync, you will need a personal Firebase API config. 
To get the Firebase config:
1. Create a Firebase Project with
2. Register a web app instance
3. After registering, you will get Firebase config keys.

To setup the notes app using these keys 
1. Create a ```.env.local``` file with the following text, adding previously acquired Firebase config keys
```
VITE_REACT_APP_FIREBASE_API_KEY = 
VITE_REACT_APP_FIREBASE_AUTH_DOMAIN = 
VITE_REACT_APP_FIREBASE_PROJECT_ID = 
VITE_REACT_APP_FIREBASE_STORAGE_BUCKET = 
VITE_REACT_APP_FIREBASE_MESSAGING_SENDER_ID = 
VITE_REACT_APP_FIREBASE_APP_ID =
```
2. Save the file in the root of the project directory
