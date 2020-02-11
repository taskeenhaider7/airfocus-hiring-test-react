module.exports = ({ config }) => {
  config.module.rules.push({
    test: /\.(ts|tsx)$/,
    use: [require.resolve('awesome-typescript-loader')],
  })
  config.resolve.extensions.push('.ts', '.tsx')
  return config
}
