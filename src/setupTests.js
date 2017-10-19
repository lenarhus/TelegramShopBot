import requestAnimationFrame from './tempPolyfills';
 
import { configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import Note from './components/Note.js';
 
configure({ adapter: new Adapter(), disableLifecycleMethods: true });