<template>
  <div class="pt-56">
    <div class="bg-green-500 h-96 bg-hero">

    </div>    

    <section class="py-20">
        <div class="m-auto max-w-7xl text-lg text-gray-500">
            <p class="px-10">At Iris Care Group we provide the full pathway of services for people with learning disabilities, Autism, mental health issues and personality disorder, along with neurodegenerative conditions and Acquired Brain Injury.</p></div>

     </section>
     <section class="py-20 px-5 lg:px-2 bg-red-300">
        <div class="max-w-4xl lg:max-w-[600px] lg:h-[600px] border m-auto text-xl leading-10 text-gray-600 font-normal text-left">
            <img src="/assets//images/icg-care-pathways-3000px-2048x2048.jpg"  alt="" class="w-full h-full">
        </div>
        <div class="max-w-4xl m-auto py-10">
            <p class="leading-7 text-lg text-gray-600">
                Supported by our in-house multidisciplinary teams all our services operate within the framework of Positive Behavioural Support and detailed care, support, recovery and rehabilitation pathways tailored to each individual.
            </p>
        </div>
    </section>

    <section class="py-20 px-5 bg-yellow-500">
        <div class="grid sm:grid-cols-3 lg:grid-cols-5 m-auto gap-6 px-0 bg-green-100 max-w-[1600px]">
            <!-- <div> -->
            <div class="bg-red-700 text-white rounded-3xl overflow-hidden">
                <img src="" alt="" class="h-40 border">
                <div class="px-8 py-20 bg--200">
                    <h3 class="text-3xl font-semibold">Supported Living</h3>
                    <a href=" " class="link relative text-lg py-4 block w-max ">Discover More</a>
                </div>
            </div>

            <div class="bg-red-700 text-white rounded-3xl overflow-hidden">
                <img src="" alt="" class="h-40 border">
                <div class="px-8 py-20 bg--200">
                    <h3 class="text-3xl font-semibold">Supported Living</h3>
                    <a href=" " class="link relative text-lg py-4">Discover More</a>
                </div>
            </div>

            <div class="bg-red-700 text-white rounded-3xl overflow-hidden">
                <img src="" alt="" class="h-40 border">
                <div class="px-8 py-20 bg--200">
                    <h3 class="text-3xl font-semibold">Supported Living</h3>
                    <a href=" " class="link relative text-lg py-4">Discover More</a>
                </div>
            </div>


            <div class="bg-red-700 text-white rounded-3xl overflow-hidden">
                <img src="" alt="" class="h-40 border">
                <div class="px-8 py-20 bg--200">
                    <h3 class="text-3xl font-semibold">Supported Living</h3>
                    <a href=" " class="link relative text-lg py-4">Discover More</a>
                </div>
            </div>

            <div class="bg-red-700 text-white rounded-3xl overflow-hidden">
                <img src="" alt="" class="h-40 border">
                <div class="px-8 py-20 bg--200">
                    <h3 class="text-3xl font-semibold">Supported Living</h3>
                    <a href=" " class="link relative text-lg py-4">Discover More</a>
                </div>
            </div>
           
            <!-- </div> -->
        </div>
    </section>
    <section class="text-center">
        <h3>WilmoreCare</h3>
        <div class="h-[600px] bg-blue-400">
            Map
        </div>

    </section>

    <cta/>

    <socials-social-media-instruction/>
    <CTA/>

  </div>
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
 a.link::after{
    content: "";
    width: 100%;
    height: 3px;
    position: absolute;
    background-color: gray;
    bottom: 0;
    left: 0;

  }


</style>