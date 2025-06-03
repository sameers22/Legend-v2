import React from 'react';
import { View, StyleSheet, Dimensions } from 'react-native';
import { WebView } from 'react-native-webview';

const HTML_CONTENT = `
  <!DOCTYPE html>
  <html>
    <head>
      <meta charset="utf-8" />
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <script src="https://static.elfsight.com/platform/platform.js" defer></script>
    </head>
    <body>
      <div class="elfsight-app-8c5dbbf2-548b-46d4-ab01-13f1cf46406e" data-elfsight-app-lazy></div>
    </body>
  </html>
`;

export default function DineInScreen() {
  return (
    <View style={styles.container}>
      <WebView
        originWhitelist={['*']}
        source={{ html: HTML_CONTENT }}
        style={styles.webview}
        javaScriptEnabled={true}
        domStorageEnabled={true}
        startInLoadingState={true}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  webview: {
    flex: 1,
    width: Dimensions.get('window').width,
  },
});
