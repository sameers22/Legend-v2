import { useEffect } from 'react';
import { useRouter } from 'expo-router';

export default function Index() {
  const router = useRouter();

  useEffect(() => {
    // Redirect to HomeScreen on load
    router.replace('/HomeScreen');
  }, []);

  return null; // Nothing to render visually
}
