/**
 * @author rik
 */
import frontend from 'frontend-framework';
import main from './main';

main.env = 'dev';
window.app = frontend(main);