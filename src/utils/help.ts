import { Platform, ViewStyle } from 'react-native';

// BASIC
export const generateShadow = (p?: GenerateShadowProps): ViewStyle =>
  Platform.OS === 'android'
    ? { elevation: p?.shadowRadius || 4 }
    : {
      shadowColor: p?.shadowColor || '#123',
      shadowRadius: p?.shadowRadius || 4,
      shadowOpacity: p?.shadowOpacity || 0.2,
      shadowOffset: {
        width: p?.shadowOffsetW || 0,
        height: p?.shadowOffsetH || 0,
      },
    };

// NAVIGATION
export const navBarStyle = (theme: Theme = 'light') => ({
  headerLargeTitle: true,
  headerStyle: {
    backgroundColor: theme === 'light' ? 'white' : 'black',
  },
  headerTintColor: theme === 'light' ? 'black' : 'white',
});