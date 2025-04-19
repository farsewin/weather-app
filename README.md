# Enhanced Webpack Starter

A modern, feature-rich webpack starter template with Babel, SASS, optimization, and more.

## Features

- **Modern JavaScript** - ES6+ support via Babel
- **SASS/SCSS Support** - Write stylesheets with SASS
- **Asset Management** - Easily include images, fonts, and other assets
- **Hot Module Replacement** - Instantly see changes without page refresh
- **Code Splitting** - Optimized bundles for better performance
- **Production Optimization** - Minification, source maps, and more
- **PWA Support** - Service worker generation with Workbox
- **Environment Variables** - Easy configuration with .env files
- **ESLint & Prettier** - Code quality and formatting
- **Bundle Analysis** - Visualize your bundle size

## Getting Started

### Prerequisites

- Node.js (v14.0.0 or higher recommended)
- npm or yarn

### Installation

1. Clone the repository:
```bash
git clone https://github.com/yourusername/webpack-starter.git
cd webpack-starter
```

2. Install dependencies:
```bash
npm install
# or
yarn install
```

### Development

Start the development server:
```bash
npm run dev
# or
yarn dev
```

This will:
- Start webpack-dev-server at http://localhost:8080
- Enable Hot Module Replacement
- Provide source maps for easier debugging

### Production Build

Create a production build:
```bash
npm run build
# or
yarn build
```

This will:
- Generate optimized assets in the `dist` folder
- Minify JavaScript and CSS
- Create hashed filenames for cache busting
- Generate a service worker for offline support

### Analyzing Bundle Size

To analyze your bundle size:
```bash
cross-env ANALYZE=true npm run build
```

This will open a visualization of your bundle contents.

### Deployment

Deploy to GitHub Pages:
```bash
npm run deploy
# or
yarn deploy
```

## Project Structure

```
webpack-starter/
├── dist/                   # Production build files
├── src/                    # Source files
│   ├── assets/             # Static assets (images, fonts, etc.)
│   ├── styles/             # SCSS stylesheets
│   ├── index.js            # Application entry point
│   └── index.html          # HTML template
├── .babelrc                # Babel configuration
├── .env                    # Environment variables
├── .eslintrc.js            # ESLint configuration
├── .prettierrc             # Prettier configuration
├── webpack.common.js       # Common webpack configuration
├── webpack.dev.js          # Development configuration
├── webpack.prod.js         # Production configuration
└── package.json            # Project dependencies and scripts
```

## Customization

### Adding New Entry Points

To add additional entry points, modify the `entry` field in `webpack.common.js`:

```javascript
entry: {
  main: './src/index.js',
  another: './src/another-entry.js'
},
```

### Adding Loaders

To support additional file types, add new rules to the `module.rules` array in `webpack.common.js`.

### Environment Variables

Add your environment variables to the `.env` file:

```
API_URL=https://api.example.com
FEATURE_FLAG=true
```

Access them in your code:

```javascript
console.log(process.env.API_URL);
```

## License

This project is licensed under the MIT License - see the LICENSE file for details.

## Acknowledgments

- [Webpack Documentation](https://webpack.js.org/)
- [Babel Documentation](https://babeljs.io/)
- [SASS Documentation](https://sass-lang.com/)
