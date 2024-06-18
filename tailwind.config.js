/** @type {import('tailwindcss').Config} */
export default {
   content: [
      "./index.html",
      "./src/**/*.js",
   ],
   theme: {
      extend: {
         animation: {
				fade: 'fadeIn .5s ease-in-out',
            'fade-short': 'fadeIn 1s ease-in-out',
            'fade-long': 'fadeIn 1.5s ease-in-out',
			},

			keyframes: {
				fadeIn: {
					from: { opacity: 0 },
					to: { opacity: 1 },
				},
			},
      },
   },
   plugins: [
      require("daisyui")
   ],
   daisyui: {
      themes: [
         {
            light: {
               ...require("daisyui/src/theming/themes")["light"],
               "primary": "#F47822",
               "primary-content": "#FFFFFF",
               "secondary": "#f4e322",
               "secondary-content": "#000000",
               "neutral-content": "#000000",
               "accent": "#22f479",
               "neutral": "#9df422",
               "base-100": "#ffffff",
               "info": "#0000ff",
               "success": "#00ff00",
               "warning": "#00ff00",
               "error": "#ff0000",
            }
         }]
   }

}

