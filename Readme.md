(react-native-debugger) React Native Debugger
    1.brew update && brew cask install react-native-debugger
    2.npm i --save-dev react-native-debugger-open # or -g
    3.package.json:
      "scripts": {
        "postinstall": "rndebugger-open"
      } //It will be run after npm install. (You can run npm run postinstall first)
    5.npm run postinstall
    6.REACT_DEBUGGER="rndebugger-open --open --port 8081"
    7.react-native start

(redux-connect) ReduxConnect for React Route
    This package consist of 2 parts:
    1.one part allows you to delay containers rendering until some async actions are happening.
    2.Another stores your data to redux state and connect your loaded data to your container.