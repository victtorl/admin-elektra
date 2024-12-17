/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
    "./node_modules/flowbite/**/*.js",
    'node_modules/flowbite-vue/**/*.{js,jsx,ts,tsx,vue}',
    'node_modules/flowbite/**/*.{js,jsx,ts,tsx}'
  ],
  theme: {
    screens:{
      'pek':'250px',
      'xxs':'280px',
      'xs':'350px',
      'prevsm':'400px',
      'sm': '640px',
      // => @media (min-width: 640px) { ... }
      'md': '768px',
      // => @media (min-width: 768px) { ... }
      'lg': '1024px',
      // => @media (min-width: 1024px) { ... }
      'xl': '1280px',
      // => @media (min-width: 1280px) { ... }
      '2xl': '1536px',
      '3xl': '1700px',
      '4xl': '2000px',
      '5xl': '2560px',
      '6xl': '3440px',
    },
    extend: {
      fontFamily: {
        popi: ['Poppins'],
      },
      colors:{
        elecktraamarillo:"#ffcc03",
        elecktranegro:"#000000",
        elektraplomo:"#9d9d9c",
        primaryport:'#1A1A29',
      },
    },

  },
  plugins: [
    require('flowbite/plugin')
  ],
}

