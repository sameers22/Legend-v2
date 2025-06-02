import React, { useEffect, useState } from 'react';
import {
  View,
  Text,
  StyleSheet,
  Image,
  ScrollView,
  ActivityIndicator,
  Dimensions,
  Button,
} from 'react-native';
import { request, gql } from 'graphql-request';
import { useCart } from '../context/CartContext'; // ✅ Added import

const SHOPIFY_ENDPOINT = 'https://27a7f7-2.myshopify.com/api/2023-10/graphql.json';
const SHOPIFY_TOKEN = '7dc5d26360bdce1b500242b2cab00316';

type ProductResponse = {
  products: {
    edges: {
      node: {
        id: string;
        title: string;
        description: string;
        images: {
          edges: {
            node: {
              url: string;
            };
          }[];
        };
        variants: {
          edges: {
            node: {
              id: string;
              price: {
                amount: string;
                currencyCode: string;
              };
            };
          }[];
        };
      };
    }[];
  };
};

const PRODUCT_QUERY = gql`
  {
    products(first: 10) {
      edges {
        node {
          id
          title
          description
          images(first: 1) {
            edges {
              node {
                url
              }
            }
          }
          variants(first: 1) {
            edges {
              node {
                id
                price {
                  amount
                  currencyCode
                }
              }
            }
          }
        }
      }
    }
  }
`;

export default function SauceScreen() {
  const [products, setProducts] = useState<ProductResponse['products']['edges']>([]);
  const [loading, setLoading] = useState(true);

  const { addToCart } = useCart(); // ✅ Access cart context

  useEffect(() => {
    const fetchShopifyProducts = async () => {
      try {
        const data = await request<ProductResponse>(
          SHOPIFY_ENDPOINT,
          PRODUCT_QUERY,
          {},
          { 'X-Shopify-Storefront-Access-Token': SHOPIFY_TOKEN }
        );
        setProducts(data.products.edges);
      } catch (err) {
        console.error('Error fetching products:', err);
      } finally {
        setLoading(false);
      }
    };

    fetchShopifyProducts();
  }, []);

  const summarize = (desc: string, length = 100) =>
    desc.length > length ? desc.slice(0, length) + '...' : desc;

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.title}>Shop Our Signature Sauces</Text>

      {loading ? (
        <ActivityIndicator size="large" color="#ff9900" />
      ) : (
        products.map(({ node }) => (
          <View key={node.id} style={styles.card}>
            <Image
              source={{ uri: node.images.edges[0]?.node.url }}
              style={styles.image}
              resizeMode="contain"
            />
            <Text style={styles.productTitle}>{node.title}</Text>
            <Text style={styles.description}>{summarize(node.description)}</Text>
            <Text style={styles.price}>
              ${node.variants.edges[0]?.node.price.amount}{' '}
              {node.variants.edges[0]?.node.price.currencyCode}
            </Text>

            {/* ✅ Add to Cart Button */}
            <Button
              title="Add to Cart"
              onPress={() =>
                addToCart({
                  id: node.id,
                  variantId: node.variants.edges[0].node.id, // ✅ This is required for Shopify
                  title: node.title,
                  price: node.variants.edges[0]?.node.price.amount,
                  currency: node.variants.edges[0]?.node.price.currencyCode,
                  image: node.images.edges[0]?.node.url,
                  quantity: 1,
                })
              }
            />
          </View>
        ))
      )}
    </ScrollView>
  );
}

const screenWidth = Dimensions.get('window').width;

const styles = StyleSheet.create({
  container: {
    padding: 16,
    alignItems: 'center',
    backgroundColor: '#FFD700',
  },
  title: {
    fontSize: 26,
    fontWeight: 'bold',
    marginBottom: 20,
    color: '#ffffff',
  },
  card: {
    width: screenWidth - 32,
    backgroundColor: '#fff',
    padding: 16,
    marginBottom: 20,
    borderRadius: 16,
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowOffset: { width: 0, height: 2 },
    elevation: 4,
  },
  image: {
    width: '100%',
    height: 220,
    borderRadius: 12,
    marginBottom: 12,
    backgroundColor: '#f7f7f7',
  },
  productTitle: {
    fontSize: 20,
    fontWeight: '700',
    marginBottom: 4,
    color: '#2c3e50',
  },
  description: {
    fontSize: 14,
    color: '#555',
    marginBottom: 10,
  },
  price: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#e67e22',
  },
});
