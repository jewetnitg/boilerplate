/**
 * @author rik
 */
import frontend from 'frontend-framework';
import main from './main';

main.env = 'prod';
frontend(main);