import GraphikWOFF from './graphik/Graphik-Regular.woff';
import GraphikSemiboldWOFF from './graphik/Graphik-Semibold.woff';
import GraphikBoldWOFF from './graphik/Graphik-Bold.woff';

import DeadStockTTF from './dead-stock/Dead-Stock.ttf';

export const Graphik = {
  fontFamily: 'Graphik',
  fontWeight: '100',
  fontStyle: 'normal',
  fontDisplay: 'swap',
  src: `url(${GraphikWOFF}) format('woff')`,
  unicodeRange:
    'U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF',
};

export const GraphikSemibold = {
  fontFamily: 'Graphik',
  fontWeight: '400',
  fontStyle: 'normal',
  fontDisplay: 'swap',
  src: `url(${GraphikSemiboldWOFF}) format('woff')`,
  unicodeRange:
    'U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF',
};

export const GraphikBold = {
  fontFamily: 'Graphik',
  fontWeight: '600',
  fontStyle: 'normal',
  fontDisplay: 'swap',
  src: `url(${GraphikBoldWOFF}) format('woff')`,
  unicodeRange:
    'U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF',
};

export const DeadStock = {
  fontFamily: 'Dead Stock',
  fontStyle: 'normal',
  fontDisplay: 'swap',
  src: `url(${DeadStockTTF}) format('ttf')`,
  unicodeRange:
    'U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF',
};
