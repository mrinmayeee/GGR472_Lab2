mapboxgl.accessToken = 'pk.eyJ1IjoibXJpbm1heWVlZSIsImEiOiJjbGRtMHNobWkwMnRhM25teTJ6Y3poYWY3In0.7jz_b3HAoeEVcCmXB3qCKA'; //Add default public map token from your Mapbox account  
 
const map = new mapboxgl.Map({ 
    container: 'map', // Add div container ID for your map 
    style: 'mapbox://styles/mrinmayeee/cle37p2v2001a01mu0e9w46ww', // Add link to style URL 
    center: [-79.444135, 43.743110], // starting position [longitude, latitude] 
    zoom: 9, // starting zoom 
});

map.addControl(new mapboxgl.FullscreenControl());

map.on('load', () => {
    map.addSource('toronto-renewables',{
        type: 'vector',
        url: 'mapbox://mrinmayeee.2kpnir4n',
    });

    map.addLayer(
        { 
            'id': 'renewables_locations', 
            'type': 'circle', 
            'source': 'toronto-renewables',
            'source-layer': 'renewable-energy-installation-do3oc3',
            'paint':  { 
                'circle-radius': 6, 
                'circle-color': '#efd215',
                'circle-stroke-colour': '#1d1b1b' 
            } 
        },
    );
});

map.on('load', () => {
    map.addSource('toronto-outline',{
        type: 'vector',
        url: 'mapbox://mrinmayeee.49wo0i57',
    });

    map.addLayer(
        { 
            'id': 'toronto', 
            'type': 'fill', 
            'source': 'toronto-outline',
            'source-layer': 'toronto-boundary-wgs84-31cf5b',
            'paint':  { 
                'fill-colour': 6, 
                'fill-color': '#c19149',
                'circle-stroke-colour': '#1d1b1b' 
            } 
        },
    );

});


