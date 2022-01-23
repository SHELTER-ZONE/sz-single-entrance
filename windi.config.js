import { defineConfig } from 'vite-plugin-windicss'

export default defineConfig({
  theme: {
    extend: {
      screens: {
        max: '540px',
      },
      colors: {
      },
      fontSize: {
        sm: '12px',
        sub: '14px',
        normal: '16px',
        md: '18px',
        lg: '20px',
      },
    },
  },
})
