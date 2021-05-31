
export default class{

	constructor(){
        if(navigator.userAgent.match(/Trident\/7\./)) {
            document.body.addEventListener("mousewheel", function() {
                event.preventDefault();
                const wd = event.wheelDelta;
                const csp = window.pageYOffset;
                window.scrollTo(0, csp - wd);
            });
        }
	}
}