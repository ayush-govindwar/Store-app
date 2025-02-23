'use client';
import { ThemeProvider } from './theme-provider';
//import { Toaster } from '@/components/ui/toaster';
function Providers({ children }: { children: React.ReactNode }) {
  return (
    <>
      
      <ThemeProvider
        attribute='class'
        defaultTheme='system'
        enableSystem
        
      >
        {children}
      </ThemeProvider>
    </>
  );
}
export default Providers;
