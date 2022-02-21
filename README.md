# RuralAddressDemoRNApp

## Details

### Checking if the osmand app is already installed.

We make it with the `react-native-check-app-install` package that is distributed containing only common apps.
To add osman, go to `react-native-check-app-install\app-list.js` than add the line.
`"osmand": {pkgName: "net.osmand", urlScheme: "osmand", urlParams: "app"}`

### Notes

The AWS AppSync API Key has the max allowed expiration of one year
