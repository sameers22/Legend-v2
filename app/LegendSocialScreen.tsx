import React from 'react';
import { View, StyleSheet, Dimensions } from 'react-native';
import { WebView } from 'react-native-webview';

export default function LegendSocialScreen() {
  return (
    <View style={styles.container}>
      <WebView
        source={{
          uri: 'https://apps.elfsight.com/widget/27ea73d1-8a22-4a3f-8f94-7a1854e72833/'
        }}
        originWhitelist={['*']}
        javaScriptEnabled
        domStorageEnabled
        startInLoadingState
        style={styles.webview}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  webview: {
    flex: 1,
    width: Dimensions.get('window').width,
    height: Dimensions.get('window').height
  }
});
