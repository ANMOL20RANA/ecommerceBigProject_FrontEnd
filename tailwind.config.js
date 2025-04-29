module.exports = {
    content: [
      "./src/**/*.{js,jsx,ts,tsx}",  // This ensures Tailwind CSS purges unused styles in production.
    ],
    theme: {
      extend: {
        colors:{
          "primary-color":"#00927c",
          "secondary-color":"#EAF0F1"
        }
      },
    },
    plugins: [],
  };
  