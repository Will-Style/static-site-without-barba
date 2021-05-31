
import Headroom from "headroom.js";

export default class{

    constructor(){
        this.init()
    }

	init(){
        const header = document.getElementById('l-header');
        if(header){
            const headroom  = new Headroom(header);
            headroom.init(); 
        }
	}
}