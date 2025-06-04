// hooks/useSauceSliderData.ts

import { useEffect, useState } from 'react';
import { request, gql } from 'graphql-request';

const SHOPIFY_ENDPOINT = 'https://27a7f7-2.myshopify.com/api/2023-10/graphql.json';
const SHOPIFY_TOKEN = '7dc5d26360bdce1b500242b2cab00316';

const PRODUCT_QUERY = gql`
  {
    products(first: 10) {
      edges {
        node {
          title
          description
          images(first: 1) {
            edges {
              node {
                url
              }
            }
          }
        }
      }
    }
  }
`;

type SauceProduct = {
  title: string;
  description: string;
  image: string;
};

type ShopifyProductResponse = {
  products: {
    edges: {
      node: {
        title: string;
        description: string;
        images: {
          edges: {
            node: {
              url: string;
            };
          }[];
        };
      };
    }[];
  };
};

export const useSauceSliderData = () => {
  const [sauceImages, setSauceImages] = useState<SauceProduct[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchSauceImages = async () => {
      try {
        const rawResponse = await request(
          SHOPIFY_ENDPOINT,
          PRODUCT_QUERY,
          {},
          { 'X-Shopify-Storefront-Access-Token': SHOPIFY_TOKEN }
        );

        const response = rawResponse as ShopifyProductResponse;

        const formatted = response.products.edges.map((edge) => ({
          title: edge.node.title,
          description: edge.node.description,
          image: edge.node.images.edges[0]?.node.url || '',
        })).filter((product) => product.image !== '');

        setSauceImages(formatted);
      } catch (error) {
        console.error('Error fetching sauce slider data:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchSauceImages();
  }, []);

  return { sauceImages, loading };
};
