export default {
    presets: [
        ['@babel/preset-env', { targets: { node: 'current' } }],
        '@babel/preset-typescript',
        ['@babel/preset-react', { runtime: 'automatic' }],
    ],
    plugins: [['@babel/plugin-proposal-class-properties']],
    assumptions: {
        setPublicClassFields: false,
    },
};
