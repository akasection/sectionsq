module.exports = {
  presets: [
    [
      '@babel/preset-env',
      {
        targets: {
          chrome: 59,
          node: 'current',
        },
        loose: true,
        modules: false,
        corejs: '3',
        useBuiltIns: 'usage',
      },
    ],
  ],
};
