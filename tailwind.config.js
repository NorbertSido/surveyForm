/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,ts}",
  ],
  theme: {
    // screens: {
    //   'mobile': {'min': '375px', 'max': '767px'},
    //   'tablet': {'min': '768px', 'max': '1023px'},
    //   'laptop': {'min': '1024px', 'max': '1280px'},
    // },
    extend: {
      colors: {
        "form-color": "rgba(42, 41, 72, 0.9)",
        "btn-default": "#1a73e8",
      },
      fontSize: {
        "4xl": "2rem",
      },
      width: {
        'form-width': '60vh'
      },
      minWidth: {
        "custom-min": "300px"
      },
      maxWidth: {
        "custom-max": "500px",
      }
    },
  },
  plugins: [],
}

