<template>
  <main class="pt-80 sm:pt-52 md:pt-56">
    <div class="bg-gray-100 h-[500px] bg-hero relative">
        <div class="max-w-lg w-full text-center py-10 px-4 rounded-tl-3xl rounded-tr-3xl absolute bottom-0 md:left-20 bg-orange-600/60 text-white">
            <h3 class="text-3xl mb-3 font-semibold"> Services</h3>
  
            
        </div>

    </div>    

    <section class="py-20">
        <div class="m-auto max-w-3xl text-lg text-gray-500">
            <p class="px-10">
                At Wilmore Care, we ensure our services are personalized to meet the unique needs and goals of each individual, promoting a high quality of life and community integration            </p>
            </div>

     </section>
     <!-- <section class="py-20 px-5 lg:px-2">
        <div class="max-w-4xl lg:max-w-4xl lg:h-[800px] border m-auto text-xl leading-10 text-gray-600 font-normal text-left">
            <img src="/assets//images/icg-care-pathways-3000px-2048x2048.jpg"  alt="" class="w-full h-full">
        </div>
        <div class="max-w-4xl m-auto py-10">
            <p class="leading-7 text-lg text-gray-600">
                Supported by our in-house multidisciplinary teams all our services operate within the framework of Positive Behavioural Support and detailed care, support, recovery and rehabilitation pathways tailored to each individual.
            </p>
        </div>
    </section> -->
    

    <section class="py-20 px-5 bg-gray-100 shadow border">
        <div class="grid grid-cols md:grid-cols-2 lg:grid-cols-4 m-auto gap-6 px-0 max-w-7xl">
            <!-- <div> -->
            <div class="bg-themeVariant/10 p-2 flex flex-col text-white rounded-3xl overflow-hidden">
                <img src="/assets/images/supported-living-friends-having-fun-together_23-2149315655.avif" alt=""  class="h-40 border w-full object-cover object-top rounded-t-3xl">
                <div class="px-4 flex-1 py-4 bg-gray-100 text-gray-800">
                    <h3 class="text-lg md:text-xl whitespace-normal font-semibold">Supported Living</h3>
                    <p class="my-4 text-base font-medium leading-7">
                        Tailored, person-centred care to support individuals to live as independently as possible. We provide 24-hour assistance, shared accommodation, and private spaces.
                    </p>
                </div>
                <nuxt-link href="/supported-living" class="flex mt-auto items-center gap-5 hover:gap-2 transition-all ease-out duration-300 relative text-lg bg-themeVariant hover:bg-themeVariant/80 p-4 rounded-b-2xl">
                    Discover More 
                    <svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 512 512" height="1rem" width="1rem" xmlns="http://www.w3.org/2000/svg"><path d="M470.6 278.6c12.5-12.5 12.5-32.8 0-45.3l-160-160c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L402.7 256 265.4 393.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0l160-160zm-352 160l160-160c12.5-12.5 12.5-32.8 0-45.3l-160-160c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L210.7 256 73.4 393.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0z"></path></svg>
                </nuxt-link>

            </div>

            <div class="bg-themeVariant/10 h-full p-2 flex flex-col text-white rounded-3xl overflow-hidden">
                <img src="/assets/images/10-advantages-of-hc.jpg" alt=""  class="h-40 border w-full object-cover object-top rounded-t-3xl">
                <div class="px-4 py-4 flex-grow bg-gray-100/80 text-gray-800">
                    <h3 class="text-lg md:text-xl whitespace-normal font-semibold">Home Care</h3>
                    <p class="my-4 text-base font-medium leading-7">
                        Comprehensive in-home care for adults with various needs, including age-related issues, learning disabilities, physical disabilities, mental health conditions, and complex behaviours. Our goal is to maintain independence, respect, and quality of life                    </p>
                </div>
                <nuxt-link href="/home-care" class="flex  mt-auto items-center gap-5 hover:gap-2 transition-all ease-out duration-300 relative text-lg bg-themeVariant hover:bg-themeVariant/80 p-4 rounded-b-2xl ">
                    Discover More 
                    <svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 512 512" height="1rem" width="1rem" xmlns="http://www.w3.org/2000/svg"><path d="M470.6 278.6c12.5-12.5 12.5-32.8 0-45.3l-160-160c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L402.7 256 265.4 393.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0l160-160zm-352 160l160-160c12.5-12.5 12.5-32.8 0-45.3l-160-160c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L210.7 256 73.4 393.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0z"></path></svg>
                </nuxt-link>

            </div>
            
            <div class="bg-themeVariant/10 p-2 flex flex-col text-white rounded-3xl overflow-hidden">
                <img src="/assets/images/Residential-care-home-provides-personal-care.jpg" alt=""  class="h-40 border w-full object-cover rounded-t-3xl">
                <div class="px-4 flex-1 py-4 bg-gray-100 text-gray-800">
                    <h3 class="text-lg md:text-xl whitespace-normal font-semibold">Residential Care</h3>
                    <p class="my-4 text-base font-medium leading-7">Comprehensive round-the-clock support in a safe, comfortable, full of sensory and life-enriching home environment. We offer small group residential and solo placements.
                    </p>
                </div>
                <nuxt-link href="/residential-care" class="flex items-center gap-5 hover:gap-2 transition-all ease-out duration-300 relative text-lg bg-theme hover:bg-theme/80 p-4 rounded-b-2xl ">
                    Discover More 
                    <svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 512 512" height="1rem" width="1rem" xmlns="http://www.w3.org/2000/svg"><path d="M470.6 278.6c12.5-12.5 12.5-32.8 0-45.3l-160-160c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L402.7 256 265.4 393.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0l160-160zm-352 160l160-160c12.5-12.5 12.5-32.8 0-45.3l-160-160c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L210.7 256 73.4 393.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0z"></path></svg>
                </nuxt-link>

            </div>
            <div class="bg-themeVariant/10 p-2 flex flex-col text-white rounded-3xl overflow-hidden">
                <img src="/assets/images/respite-How-Many-TImes-Can-I-Use-Respite-Care_-1024x683.jpeg" alt=""  class="h-40 border w-full object-cover rounded-t-3xl">
                <div class="px-4 flex-1 py-4 bg-gray-100 text-gray-800">
                    <h3 class="text-lg md:text-xl whitespace-normal font-semibold">Respite Care</h3>
                    <p class="my-4 text-base font-medium leading-7">
                        Short-term, temporary care solutions designed to give primary caregivers a break while ensuring continuity of care for the individual.
                    </p>
                </div>
                <nuxt-link href="/respited-care" class="flex mt-auto items-center gap-5 hover:gap-2 transition-all ease-out duration-300 relative text-lg bg-themeVariant hover:bg-themeVariant/80 p-4 rounded-b-2xl ">
                    Discover More 
                    <svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 512 512" height="1rem" width="1rem" xmlns="http://www.w3.org/2000/svg"><path d="M470.6 278.6c12.5-12.5 12.5-32.8 0-45.3l-160-160c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L402.7 256 265.4 393.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0l160-160zm-352 160l160-160c12.5-12.5 12.5-32.8 0-45.3l-160-160c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L210.7 256 73.4 393.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0z"></path></svg>
                </nuxt-link>

            </div>
            
           
            <!-- </div> -->
        </div>
    </section>
    <!-- <section class="text-center">
        <h3 class="md:text-4xl text-3xl text-theme py-5 font-semibold my-7">WilmoreCare Group Services</h3>
        <div class="h-[600px] bg-blue-400">
            Map
        </div>

    </section> -->

    <cta/>

    <socials-social-media-instruction/>
    <CTA/>

</main>
</template>

<script>
import CTA from '~/components/call_to_action/CTA.vue'
export default {
  components: { CTA },

    
    data() {
    return {
    //   dataProperties
    }
  },
  methods: {
    // methods
  }
}
</script>

<style scoped>
main{
    background: url('/public/background/back-column-3-1-2.png');
}

 a.link::after{
    content: "";
    width: 100%;
    height: 3px;
    position: absolute;
    background-color: gray;
    bottom: 0;
    left: 0;

  }
  .bg-hero{
    background: linear-gradient(290deg, #57c0af70, #445ba7ab ), url('/public/background/BSH-01_226-1-40ov.jpg');
    background-size: cover;
    background-repeat: no-repeat;
    background-position: top;
  
  } 

</style>