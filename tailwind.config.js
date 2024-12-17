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

