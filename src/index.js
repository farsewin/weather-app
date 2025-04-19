import './styles/main.scss';

// Check if service workers are supported and we're in production mode
if ('serviceWorker' in navigator && process.env.NODE_ENV === 'production') {
  window.addEventListener('load', () => {
    navigator.serviceWorker
      .register('/service-worker.js')
      .then(registration => {
        console.log('SW registered: ', registration);
      })
      .catch(registrationError => {
        console.log('SW registration failed: ', registrationError);
      });
  });
}

// DOM Content
document.addEventListener('DOMContentLoaded', () => {
  const app = document.getElementById('app');
  
  if (app) {
    app.innerHTML = `
      <header>
        <h1>Webpack Starter</h1>
      </header>
      <div class="container">
        <div class="content">
          <div class="card">
            <h2>Welcome to Your Enhanced Webpack Starter</h2>
            <p>This starter includes SASS, asset management, code optimization, and more!</p>
            <button class="btn" id="testButton">Click Me</button>
          </div>
        </div>
      </div>
      <footer>
        <p> ${new Date().getFullYear()} Webpack Starter</p>
      </footer>
    `;

    // Event Listeners
    document.getElementById('testButton').addEventListener('click', () => {
      alert('Button clicked! Everything is working correctly.');
    });
  }
});

console.log('Webpack starter template ready with enhanced features!');
