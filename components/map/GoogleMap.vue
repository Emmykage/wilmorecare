<template>
    <div ref="map" style="width: 100%; height: 400px;"></div>
  </template>
  
  <script>
  export default {
    mounted() {
      if (typeof window !== 'undefined' && window.google) {
        const { googleMapsApiKey } = this.$config.public;
        
        // Check if the Google Maps API script has already been added
        const existingScript = document.querySelector(`script[src*="maps.googleapis.com/maps/api/js"]`);
        if (!existingScript) {
          const script = document.createElement('script');
          script.src = `https://maps.googleapis.com/maps/api/js?key=${googleMapsApiKey}`;
          script.async = true;
          script.defer = true;
          document.head.appendChild(script);
          script.onload = this.initMap.bind(this);
        } else {
          this.initMap();
        }
      }
    },
    methods: {
      initMap() {
        if (typeof window !== 'undefined' && window.google) {
          const mapOptions = {
            center: new google.maps.LatLng(10.0, 10.0),
            zoom: 7,
          };
          new google.maps.Map(this.$refs.map, mapOptions);
        }
      }
    }
  };
  </script>
  