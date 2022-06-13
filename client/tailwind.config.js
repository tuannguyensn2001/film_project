module.exports = {
    content: ['./src/**/*.{js,jsx,ts,tsx}'],
    theme: {
        extend: {},
    },
    plugins: [],
    corePlugins: {
        preflight: true,
    },
    // prefix: 'tw-',
    plugins: [require('daisyui')],
};
