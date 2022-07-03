

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

### `npm run dev`

Runs the docker image for the application


### `npm test`
Launches the test runner in the interactive watch mode.\

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

### `npm run lint`
For checking all typescript-eslint linter warning and error to follow best code writing approach

## Authorization

We have used Graph Query Language to call the github service. This needs authorization and we need to pass bearer token in headers.
Please generate your own token by your logged in github account using this link https://github.com/settings/tokens
Create .env file in root directory such as REACT_APP_GITHUB_KEY = xxxxxxxxxxxxxxxxxxxxxxxx

You should really only save API keys or secrets in your backend such as Node / Express. You can have your client send a request to your backend API, which can then make the actual API call with the API key and send the data back to your client. 

## BaseAPI
Base API URI is - https://api.github.com/graphql