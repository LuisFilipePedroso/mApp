import { Archivo_400Regular, Archivo_500Medium, useFonts as useArchivoFonts } from '@expo-google-fonts/archivo';
import { Inter_400Regular, Inter_500Medium, Inter_600SemiBold, Inter_700Bold, useFonts as useInterFonts } from '@expo-google-fonts/inter';
import { Box, NativeBaseProvider } from 'native-base';
import React from 'react';
import { theme } from '../native-base.theme';
import Home from './pages/Home';


// Unit Measure: 1 = 4px

export default function App() {
  useInterFonts({
    Inter_400Regular,
    Inter_500Medium,
    Inter_600SemiBold,
    Inter_700Bold
  });

  useArchivoFonts({
    Archivo_400Regular,
    Archivo_500Medium,
  });

  return (
    <NativeBaseProvider theme={theme}>
      <Box
        flex={1}
        safeArea
        backgroundColor="primary.500"
        pl={8}
        pr={8}
        pt={1}>
        <Home />
      </Box>
    </NativeBaseProvider>
  );
}
