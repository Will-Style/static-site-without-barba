
import viewportUnitsBuggyfill from 'viewport-units-buggyfill';

export default class{

	constructor(){
        viewportUnitsBuggyfill.init({force: true});
	}
}