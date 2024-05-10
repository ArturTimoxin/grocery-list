module.exports = {
  presets: ['module:@react-native/babel-preset'],
  plugins: [
    [
      'module-resolver',
      {
        extensions: [
          '.ios.js',
          '.android.js',
          '.ios.jsx',
          '.android.jsx',
          '.js',
          '.jsx',
          '.ts',
          '.tsx',
        ],
        root: ['.'],
        alias: {
          '@components': './src/components',
          '@screens': './src/screens',
          '@navigation': './src/navigation',
          '@assets': './src/assets',
          '@store': './src/store',
          '@utils': './src/utils',
          '@hooks': './src/hooks',
          '@services': './src/services',
          '@types': './src/types',
          '@constants': './src/constants',
          '@features': './src/features',
        },
      },
    ],
  ],
};
