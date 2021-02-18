document.addEventListener( 'DOMContentLoaded', function () {
    new Splide( '.splide',{
        type: 'loop',
        perPage: 3,
        perMove:1,
    //     height     : '30rem',
	// cover      : true,
        // focus: 'center',
        // height   : '29rem',
	    // autoWidth: true,
        rewind : true,
        autoplay:true,
        interval:2000,
        // focus    : 'center',
        gap: 15,
        easing: 'ease',
        arrows: false,
        pauseOnHover: true,
        keyboard:true,
        // direction  : 'ttb',
        // heightRatio: 0.6,
        cover: false,
        breakpoints: {
            640: {
                perPage: 2,
            },
            480:{
                perPage:1
            }
        }
    } ).mount();
} );

