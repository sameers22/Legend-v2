import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  Image,
  FlatList,
  TouchableOpacity,
  Alert,
  Linking,
} from 'react-native';
import { useCart } from '../context/CartContext';
import { request, gql } from 'graphql-request';

// ✅ Updated constants
const SHOPIFY_ENDPOINT = 'https://27a7f7-2.myshopify.com/api/2023-10/graphql.json';
const SHOPIFY_TOKEN = '7dc5d26360bdce1b500242b2cab00316';

// ✅ Define new cartCreate response type
type CartCreateResponse = {
  cartCreate: {
    cart: {
      id: string;
      checkoutUrl: string;
    };
    userErrors: {
      message: string;
    }[];
  };
};

export default function CartScreen() {
  const { cartItems, removeFromCart, clearCart } = useCart();

  const subtotal = cartItems.reduce(
    (total, item) => total + parseFloat(item.price) * item.quantity,
    0
  );

  const handleCheckout = async () => {
    if (cartItems.length === 0) {
      Alert.alert('Cart is empty', 'Please add some items before checkout.');
      return;
    }

    try {
      const CART_CREATE_MUTATION = gql`
        mutation cartCreate($input: CartInput!) {
          cartCreate(input: $input) {
            cart {
              id
              checkoutUrl
            }
            userErrors {
              field
              message
            }
          }
        }
      `;

      const variables = {
        input: {
          lines: cartItems.map(item => ({
            merchandiseId: item.variantId, // ✅ renamed from 'variantId' to 'merchandiseId'
            quantity: item.quantity,
          })),
        },
      };

      const response = await request<CartCreateResponse>(
        SHOPIFY_ENDPOINT,
        CART_CREATE_MUTATION,
        variables,
        {
          'X-Shopify-Storefront-Access-Token': SHOPIFY_TOKEN,
          'Content-Type': 'application/json',
        }
      );

      const checkoutUrl = response.cartCreate.cart.checkoutUrl;
      if (checkoutUrl) {
        Linking.openURL(checkoutUrl); // ✅ opens checkout
        clearCart(); // ✅ optional: clear cart after placing order
      } else {
        Alert.alert('Error', 'Could not create cart or checkout URL.');
      }
    } catch (err) {
      console.error('Checkout error:', err);
      Alert.alert('Checkout Error', 'Something went wrong during checkout.');
    }
  };

  const renderItem = ({ item }: any) => (
    <View style={styles.itemCard}>
      <Image source={{ uri: item.image }} style={styles.image} />
      <View style={styles.details}>
        <Text style={styles.title}>{item.title}</Text>
        <Text style={styles.price}>
          {item.quantity} x ${item.price} {item.currency}
        </Text>
      </View>
      <TouchableOpacity onPress={() => removeFromCart(item.id)}>
        <Text style={styles.removeBtn}>Remove</Text>
      </TouchableOpacity>
    </View>
  );

  return (
    <View style={styles.container}>
      <Text style={styles.heading}>Your Cart</Text>

      <FlatList
        data={cartItems}
        keyExtractor={(item) => item.id}
        renderItem={renderItem}
        ListEmptyComponent={
          <Text style={styles.emptyText}>Your cart is empty.</Text>
        }
      />

      <View style={styles.footer}>
        <Text style={styles.subtotal}>Subtotal: ${subtotal.toFixed(2)}</Text>
        <TouchableOpacity style={styles.checkoutBtn} onPress={handleCheckout}>
          <Text style={styles.checkoutText}>Place Order</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    padding: 16,
  },
  heading: {
    fontSize: 24,
    fontWeight: '700',
    marginBottom: 20,
    color: '#2c3e50',
  },
  itemCard: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#fdfdfd',
    marginBottom: 12,
    padding: 12,
    borderRadius: 10,
    shadowOpacity: 0.1,
    shadowOffset: { width: 0, height: 2 },
    elevation: 2,
  },
  image: {
    width: 70,
    height: 70,
    marginRight: 12,
    borderRadius: 8,
    backgroundColor: '#eee',
  },
  details: {
    flex: 1,
  },
  title: {
    fontSize: 16,
    fontWeight: '600',
    marginBottom: 4,
  },
  price: {
    fontSize: 14,
    color: '#555',
  },
  removeBtn: {
    color: '#e74c3c',
    fontWeight: '600',
  },
  emptyText: {
    textAlign: 'center',
    marginTop: 50,
    fontSize: 16,
    color: '#888',
  },
  footer: {
    marginTop: 20,
    borderTopWidth: 1,
    borderColor: '#ddd',
    paddingTop: 16,
  },
  subtotal: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 12,
  },
  checkoutBtn: {
    backgroundColor: '#FFD700',
    paddingVertical: 12,
    borderRadius: 10,
    alignItems: 'center',
  },
  checkoutText: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#000',
  },
});
