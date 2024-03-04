module.exports = function (api) {
  api.cache(true)
  return {
    presets: ['babel-preset-expo'],
    env: {
      production: {
        plugins: ['react-native-paper/babel']
      }
    },
    plugins: [
      [
        'module-resolver',
        {
          root: ['.'],
          extensions: ['.tsx', '.ts', '.js', '.json'],
          alias: {
            '@components': './src/components',
            '@assets': './assets',
            '@utils': './src/utils',
            '@constants': './src/constants',
            '@views': './src/views',
            '@styles': './src/styles',
            '@routes': './src/routes'
          }
        }
      ],
      'react-native-paper/babel',
      'react-native-reanimated/plugin'
    ]
  }
}
