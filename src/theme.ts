import { extendTheme } from '@chakra-ui/react';

export const theme = extendTheme({
  colors: {
    border: '#B0B0B0',
    lightest: '#FBF5FF',
    white: '#FFF',
    gray10: '#CDCFD0',
    gray20: '#F2F2F2',
    gray50: '#F5F5F5',
    gray100: '#F8F8F8',
    gray200: '#595161',
    gray300: '#DEDEDE',
    gray400: '#C4C4C4',
    gray500: '#928F9C',
    gray600: '#7D7D7D',
    gray700: '#E0E0E0',
    gray900: '#65636B',
    black40: 'rgba(0, 0, 0, 0.4)',
    black60: 'rgba(0, 0, 0, 0.6)',
    black: '#000000',
    purple400: '#9E00FF',
    purpleLight: '#EBE1F5',
    purpleDark: '#5A2DA0',
    primaryDark: '#1C0333',
    green: '#5AE69C',
    error: '#B10017',
    errorLight: '#F3D1D4',
    successLight: '#E9FFF5',
    alert: '#F7DD72',
    alertLight: '#FFF9E1',
  },

  fonts: {
    html: 'DM Sans',
    heading: 'DM Sans',
    body: 'DM Sans',
  },
});
