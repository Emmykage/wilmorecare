<template>
  <main class="pt-64 md:pt-56 ">
    <!-- Your content here -->
    <div class="bg-gray-100 h-96 bg-hero relative">
        <div class="max-w-lg w-full text-center py-12 px-4 rounded-tl-3xl rounded-tr-3xl absolute bottom-0 left-20 bg-orange-600/60 text-white">
            <h3 class="text-3xl mb-3 font-semibold">  Residential Care</h3>
  
            
        </div>
    </div>

    <section class="py-20 px-5 bg-gray-100/70">

        <div class="max-w-7xl m-auto grid grid-cols-2 gap-8">
            <div class="px-10">
                <img src="/assets//images/residential-Bedford-England-_1-2.webp" alt="residential images" class="border-3 border-orange-600 rounded overflow-hidden">
            </div>

            <div>
                <h2 class="text-3xl text-gray-600"> Residential Care Services
                </h2>
                <p class="leading-8">
                    Wilmore Care’s residential care services provide a safe, comfortable, and life-enriching environment for individuals with various support needs. Our homes are designed to offer a sociable and stimulating setting where residents can thrive.
                </p>

            </div>
           

        </div>
    </section>
    <section class="bg-gray-100/70 py-20 px-5">
        <div  class="max-w-7xl m-auto my-20">
            <h2 class="my-4 text-4xl text-center text-gray-600">What We Offer
            </h2>

            <ul class="grid grid-cols-3 gap-3">
                <li class="text-center border shadow rounded-2xl p-5 bg-white">
                    <span class="m-auto flex bg-theme/80 text-white w-max p-4 rounded-full">
                        <svg stroke="currentColor" fill="none" stroke-width="2" viewBox="0 0 24 24" stroke-linecap="round" stroke-linejoin="round" height="2rem" width="2rem" xmlns="http://www.w3.org/2000/svg"><path d="M16 18m-2 0a2 2 0 1 0 4 0a2 2 0 1 0 -4 0"></path><path d="M8 18m-2 0a2 2 0 1 0 4 0a2 2 0 1 0 -4 0"></path><path d="M4 8l2.1 2.8a3 3 0 0 0 2.4 1.2h11.5"></path><path d="M10 6h4"></path><path d="M12 4v4"></path><path d="M12 12v2l-2.5 2.5"></path><path d="M14.5 16.5l-2.5 -2.5"></path></svg></span>
                    <h4 class="text-2xl text-theme mt-4">
                        Small Group and Solo Placements
                    </h4>	
                    <p class="mt-5">
                        Flexible living arrangements to suit individual needs.
                    </p> 
                </li>

                <li  class="text-center border shadow rounded p-5 bg-white">
                    <span class="m-auto flex bg-theme/80 text-white w-max p-4 rounded-full"><svg stroke="currentColor" fill="none" stroke-width="2" viewBox="0 0 24 24" stroke-linecap="round" stroke-linejoin="round" height="2rem" width="2rem" xmlns="http://www.w3.org/2000/svg"><path d="M16 18m-2 0a2 2 0 1 0 4 0a2 2 0 1 0 -4 0"></path><path d="M8 18m-2 0a2 2 0 1 0 4 0a2 2 0 1 0 -4 0"></path><path d="M4 8l2.1 2.8a3 3 0 0 0 2.4 1.2h11.5"></path><path d="M10 6h4"></path><path d="M12 4v4"></path><path d="M12 12v2l-2.5 2.5"></path><path d="M14.5 16.5l-2.5 -2.5"></path></svg></span>

                    <h4 class="text-2xl text-theme mt-4">Personalized and Flexible Care
                    
                    </h4>
                    <p class="mt-5">
                        Adapting support to overcome barriers and promote independence.

                    </p>
                </li>
                <li  class="text-center border shadow rounded p-5 bg-white">
                    <span class="m-auto flex bg-theme/80 text-white w-max p-4 rounded-full"><svg stroke="currentColor" fill="none" stroke-width="2" viewBox="0 0 24 24" stroke-linecap="round" stroke-linejoin="round" height="2rem" width="2rem" xmlns="http://www.w3.org/2000/svg"><path d="M16 18m-2 0a2 2 0 1 0 4 0a2 2 0 1 0 -4 0"></path><path d="M8 18m-2 0a2 2 0 1 0 4 0a2 2 0 1 0 -4 0"></path><path d="M4 8l2.1 2.8a3 3 0 0 0 2.4 1.2h11.5"></path><path d="M10 6h4"></path><path d="M12 4v4"></path><path d="M12 12v2l-2.5 2.5"></path><path d="M14.5 16.5l-2.5 -2.5"></path></svg></span>

                    <h4 class="text-2xl text-theme mt-4">Outreach Support</h4>
                    <p class="mt-5">
                        Facilitating community engagement and social activities
                    </p>

                </li>
            </ul>

            <div class="grid gap-5 grid-cols-2 py-40">
                <div class="border">
                    <img src="/assets/images/about-us/benefits_istockphoto-1395533815-612x612.jpg" alt="">
                </div>
                <div>


            <h3 class="text-justify mt-0 text-2xl">Why Choose Our Residential Care?
            </h3>
            <ul class="p-4">
                <li class="text-justify leading-8"><strong>Quality Living Environments: </strong> Homely settings with stimulating environments
                </li>
                <li class="text-justify leading-8">
                    <strong>	Personalized Approach: </strong>
                    Tailored care plans for each resident.

                </li>
                <li class="text-justify leading-8">
                    <strong>
                        Attention to Detail:
                    </strong>
                    Focus on creating a supportive and enriching living experience
                </li>
            </ul>
        </div>
    </div>

    </div>



    </section>

</main>
</template>

<script>
export default {
  name: 'ComponentName',
  data() {
    return {

    }
  },
  methods: {
  }
}
</script>

<style scoped>
main{
    background: url('/public/background/back-column-3-drk-2.png');
}
.bg-hero{
    background: linear-gradient(290deg, #57c0af70, #445ba7ab ), url('/public/background/ocs_introduction_banner_1000px.jpg');
    background-size: cover;
    background-repeat: no-repeat;
    background-position: center;
  
  } 

</style>