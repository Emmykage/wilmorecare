// plugins/google-maps.client.ts
export default defineNuxtPlugin(nuxtApp => {
    const apiKey = useRuntimeConfig().public.googleMapsApiKey;
  
    if (typeof window !== 'undefined') {
      // Check if Google Maps script already exists
      if (!document.querySelector(`script[src*="maps.googleapis.com/maps/api/js"]`)) {
        const script = document.createElement('script');
        script.src = `https://maps.googleapis.com/maps/api/js?key=${apiKey}`;
        script.async = true;
        script.defer = true;
        document.head.appendChild(script);
      }
    }
  });
  