import {defineConfig} from 'vite';
import react from '@vitejs/plugin-react';
export default defineConfig({plugins:[react()],build:{rollupOptions:{input:{home:'index.html',about:'about/index.html',contact:'contact/index.html',enquiry:'start-project/index.html',invoice:'projects/invoice-generator/index.html',neat:'projects/neat-and-co/index.html',serein:'projects/serein-studio/index.html',forma:'projects/forma/index.html'}}}});
