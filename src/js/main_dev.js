/**
 * @author rik
 */
import frontend from 'frntnd-framework';
import main from './main';

main.env = 'dev';
window.app = frontend(main);

export default window.app;