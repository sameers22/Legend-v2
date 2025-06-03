import React from 'react';
import {
  ScrollView,
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Linking,
  Image,
} from 'react-native';

import { menuData } from '../data/menuData';

const TakeOutScreen = () => {
  const handleOrder = (platform: string) => {
    let url = '';
    switch (platform) {
      case 'uber': url = 'https://www.ubereats.com/store/legend-cookhouse-south-ozone-park/TofQ_IA8RHu4DoykbiQjhg?srsltid=AfmBOop1E_ENtxFGoqHUa-A3K2tymMp1XK4LBYVPgbyp7G4V8CBgH_5Y'; break;
      case 'grubhub': url = 'https://www.grubhub.com/restaurant/legend-cookhouse-13511-rockaway-blvd-s-ozone-park/384500'; break;
      case 'doordash': url = 'https://www.doordash.com/store/legend-cookhouse-south-ozone-park-194451/685686/?srsltid=AfmBOopyfOWA76ZtlQPD5v1xaOMoU6UxMnhOwnUS4msYFGL7XFP8F10m'; break;
    }
    Linking.openURL(url);
  };

  return (
    <ScrollView style={styles.container}>
      {menuData.map((section, index) => (
        <View key={index} style={styles.section}>
          <Text style={styles.category}>{section.category}</Text>
          {section.items.map((item, itemIndex) => (
            <View key={itemIndex} style={styles.itemCard}>
              {item.image && (
                <Image source={item.image} style={styles.image} resizeMode="cover" />
              )}
              <View style={styles.row}>
                <Text style={styles.itemName}>{item.name}</Text>
                <Text style={styles.price}>{item.price}</Text>
              </View>
              <Text style={styles.description}>{item.description}</Text>
              <View style={styles.buttonRow}>
                <TouchableOpacity
                  style={styles.button}
                  onPress={() => handleOrder('uber')}
                >
                  <Text style={styles.buttonText}>Uber Eats</Text>
                </TouchableOpacity>
                <TouchableOpacity
                  style={styles.button}
                  onPress={() => handleOrder('grubhub')}
                >
                  <Text style={styles.buttonText}>Grubhub</Text>
                </TouchableOpacity>
                <TouchableOpacity
                  style={styles.button}
                  onPress={() => handleOrder('doordash')}
                >
                  <Text style={styles.buttonText}>DoorDash</Text>
                </TouchableOpacity>
              </View>
            </View>
          ))}
        </View>
      ))}
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: { padding: 16, backgroundColor: '#fff' },
  section: { marginBottom: 28 },
  category: {
    fontSize: 42,
    fontWeight: 'bold',
    marginBottom: 12,
    color: '#e67e22',
  },
  itemCard: {
    marginBottom: 16,
    backgroundColor: '#fdfdfd',
    borderRadius: 10,
    padding: 12,
    elevation: 2,
    shadowOpacity: 0.05,
    shadowOffset: { width: 0, height: 2 },
  },
  image: {
    width: '100%',
    height: 160,
    borderRadius: 8,
    marginBottom: 10,
    backgroundColor: '#eee',
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 6,
  },
  itemName: {
    fontSize: 16,
    fontWeight: '600',
    color: '#2c3e50',
    flex: 1,
    marginRight: 10,
  },
  price: {
    fontSize: 16,
    fontWeight: '600',
    color: '#e67e22',
  },
  description: {
    fontSize: 14,
    color: '#555',
    marginBottom: 8,
  },
  buttonRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    gap: 6,
  },
  button: {
    flex: 1,
    backgroundColor: '#FFD700',
    paddingVertical: 8,
    borderRadius: 8,
    alignItems: 'center',
    marginHorizontal: 2,
  },
  buttonText: {
    color: '#000',
    fontWeight: 'bold',
  },
});

export default TakeOutScreen;
