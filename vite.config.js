// vite.config.js
export default {
    server: {
      port: process.env.PORT || 3000,
      host: '0.0.0.0',  // Asegurarse de que escuche en 0.0.0.0
    },
    build: {
      outDir: 'dist'
    }
  };
  