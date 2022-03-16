#Poketest
Welcome to the Pokédex app.

## Prerequisites

- [Node.js > 12](https://nodejs.org) and npm (Recommended: Use [nvm](https://github.com/nvm-sh/nvm))
- [Watchman](https://facebook.github.io/watchman)
- [Xcode 12](https://developer.apple.com/xcode)
- [Cocoapods 1.10.1](https://cocoapods.org)
- [JDK > 11](https://www.oracle.com/java/technologies/javase-jdk11-downloads.html)
- [Android Studio and Android SDK](https://developer.android.com/studio)

## Base dependencies

- [react-navigation](https://reactnavigation.org/) navigation library.
- [react-query](https://react-query.tanstack.com/) for networking.
- [jest](https://facebook.github.io/jest/) and [react-native-testing-library](https://callstack.github.io/react-native-testing-library/) for testing.

### Using scripts from console

Before running the scripts, install the dependecies with `npm install`
and for ios: `cd ios && pod install`

Make sure your environnement is setup following this guide:
[environment-setup](https://reactnative.dev/docs/environment-setup)

- To start the app : `npm run ios` or `npm run android`

- To run the tests : `npm run test`
