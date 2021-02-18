new Splide( '.splide' ).mount();

document.addEventListener( 'DOMContentLoaded', function () {
    new Splide( '.splide' ),{
        perPage: 3,
	    rewind : true,
    }.mount();
} );
