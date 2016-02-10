var s = Snap("#svg");
Snap.load("/assets/motox.svg", onSVGLoaded ) ;


function onSVGLoaded( svg ){ 
	var back = s.group('#g3589');
	back.animate({transform: "r360,100,100" }, 1000, mina.linear );
	var body = svg.select ('#g3453');
		body.animate({transform: "r360,100,100" }, 1000, mina.linear );

	/*	body.animate({width: 500}, 1000);*/
	    s.append( svg );

}
