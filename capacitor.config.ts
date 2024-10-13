import type { CapacitorConfig } from '@capacitor/cli';

const config: CapacitorConfig = {
  appId: 'com.am.app',
  appName: 'Project01',
  webDir: 'dist/project01/browser',
  bundledWebRuntime: false,
  server: {
    url: ' http://192.168.1.7:4200/',
    cleartext: true,
  },
};

export default config;
