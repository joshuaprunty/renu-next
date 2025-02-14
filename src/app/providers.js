'use client';

import { Provider as StyletronProvider } from 'styletron-react';
import { LightTheme, BaseProvider } from 'baseui';
import { styletron } from '@/styletron';

export default function Providers({ children }) {
  return (
    <StyletronProvider value={styletron}>
      <BaseProvider theme={LightTheme}>
        {children}
      </BaseProvider>
    </StyletronProvider>
  );
}