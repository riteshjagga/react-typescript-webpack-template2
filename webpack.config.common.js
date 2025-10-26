import path from 'path'
import { fileURLToPath } from 'url'
import HtmlWebpackPlugin from 'html-webpack-plugin'

const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)

export default {
  entry: './src/App.tsx',
  output: {
    module: true,
    environment: {
      module: true,
    },
    filename: 'app.js',
    path: path.resolve(__dirname, 'dist'),
    clean: {
      keep: 'index.html',
    },
  },
  experiments: {
    outputModule: true,
  },
  module: {
    rules: [
      {
        test: /.css$/,
        use: ['style-loader', 'css-loader'],
      },
      {
        test: /.[jt]sx?$/,
        use: 'ts-loader',
        exclude: /node_modules/,
      },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: path.resolve(__dirname, 'index-template.html'),
      scriptLoading: 'module',
    }),
  ],
  resolve: {
    extensions: ['.js', '.jsx', '.ts', '.tsx'],
  },
}
