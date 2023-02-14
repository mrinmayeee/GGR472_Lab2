mapboxgl.accessToken = 'pk.eyJ1IjoibXJpbm1heWVlZSIsImEiOiJjbGRtMHNobWkwMnRhM25teTJ6Y3poYWY3In0.7jz_b3HAoeEVcCmXB3qCKA'; //Add default public map token from your Mapbox account  
 
const map = new mapboxgl.Map({ 
    container: 'map', // Adding div container ID from index.html file for my map 
    style: 'mapbox://styles/mrinmayeee/cle37p2v2001a01mu0e9w46ww', // link to my style from Mapbox 
    center: [-79.444135, 43.743110], // starting position for map [longitude, latitude] 
    zoom: 10, // starting zoom 
});

map.addControl(new mapboxgl.FullscreenControl()); // adds a button in top-right corner to toggel betewen fullscreen and regular view

map.on('load', () => { // loads vector tileset from my Mapbox studio
    map.addSource('toronto-renewables',{ // sets the unique source name
        type: 'vector', // specifies the data type
        url: 'mapbox://mrinmayeee.2kpnir4n', //url for the tileset in Mpabox studio using the tileset ID
    });

    map.addLayer( //allows me to add how I want the layer to show up
        { 
            'id': 'renewables_locations', // unique id for each layer
            'type': 'circle', // circle since the data is individual points
            'source': 'toronto-renewables',
            'source-layer': 'renewable-energy-installation-do3oc3', // name of the layer in my mapbox studio
            'paint':  { // gives the specific atrributes of the marker circles
                'circle-radius': 6, 
                'circle-color': '#efd215',
                'circle-stroke-colour': '#1d1b1b' 
            } 
        },
    );
});

map.on('load', () => { // adding a second data source for the outline of GTA
    map.addSource('toronto-outline',{
        type: 'vector',
        url: 'mapbox://mrinmayeee.49wo0i57',
    });

    map.addLayer( // same as above but for the 2nd layer
        { 
            'id': 'toronto', 
            'type': 'fill', 
            'source': 'toronto-outline',
            'source-layer': 'toronto-boundary-wgs84-31cf5b',
            'paint':  {  // different attributes since this layer is a polygon 
                'fill-color': '#c19149',
            } 
        },
    );

});


