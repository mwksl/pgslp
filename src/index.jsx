import ReactDOM from 'react-dom';
import routes from './routes';

require('../node_modules/bulma/css/bulma.min.css');

ReactDOM.render(
  routes,
  document.getElementById('app')
);
