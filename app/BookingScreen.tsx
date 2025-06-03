import React, { useState } from 'react';
import {
  View,
  StyleSheet,
  Dimensions,
  TouchableOpacity,
  Text,
} from 'react-native';
import { WebView } from 'react-native-webview';

const TABLE_BOOKING_HTML = `
  <!DOCTYPE html>
  <html>
    <head>
      <meta charset="utf-8" />
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <script src="https://static.elfsight.com/platform/platform.js" defer></script>
    </head>
    <body>
      <div class="elfsight-app-f601f47a-8895-4c01-961a-01d50bbfde6a" data-elfsight-app-lazy></div>
    </body>
  </html>
`;

const EVENT_BOOKING_HTML = `
  <!DOCTYPE html>
  <html>
    <head>
      <meta charset="utf-8" />
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <script src="https://static.elfsight.com/platform/platform.js" defer></script>
    </head>
    <body>
      <div class="elfsight-app-8fa7df82-c57e-447b-b3d1-e8649e5a9ce1" data-elfsight-app-lazy></div>
    </body>
  </html>
`;

export default function BookingScreen() {
  const [selectedForm, setSelectedForm] = useState<'table' | 'event'>('table');

  const renderWebViewContent = () => {
    return selectedForm === 'table' ? TABLE_BOOKING_HTML : EVENT_BOOKING_HTML;
  };

  return (
    <View style={styles.container}>
      <View style={styles.toggleContainer}>
        <TouchableOpacity
          style={[
            styles.toggleButton,
            selectedForm === 'table' && styles.activeButton,
          ]}
          onPress={() => setSelectedForm('table')}
        >
          <Text
            style={[
              styles.toggleText,
              selectedForm === 'table' && styles.activeText,
            ]}
          >
            Book Table
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={[
            styles.toggleButton,
            selectedForm === 'event' && styles.activeButton,
          ]}
          onPress={() => setSelectedForm('event')}
        >
          <Text
            style={[
              styles.toggleText,
              selectedForm === 'event' && styles.activeText,
            ]}
          >
            Book Event
          </Text>
        </TouchableOpacity>
      </View>

      <WebView
        originWhitelist={['*']}
        source={{ html: renderWebViewContent() }}
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
  toggleContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    paddingVertical: 10,
    backgroundColor: '#f7f7f7',
  },
  toggleButton: {
    paddingHorizontal: 20,
    paddingVertical: 8,
    borderRadius: 20,
    marginHorizontal: 10,
    backgroundColor: '#e0e0e0',
  },
  activeButton: {
    backgroundColor: '#FFD700',
  },
  toggleText: {
    fontSize: 16,
    fontWeight: '600',
    color: '#555',
  },
  activeText: {
    color: '#000',
  },
  webview: {
    flex: 1,
    width: Dimensions.get('window').width,
  },
});
