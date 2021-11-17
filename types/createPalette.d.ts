import { PaletteColorOptions } from '@material-ui/core';

declare module '@material-ui/core/styles/createPalette' {
  interface PaletteOptions {
    neutral?: PaletteColorOptions;
  }
}
