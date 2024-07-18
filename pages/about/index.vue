<!-- pages/about.vue -->
<template>
    <main class="pt-56">
      <div class="bg-green-500 h-96 bg-hero">
        <!-- <h3>Text</h3>
        main -->
    </div>

    <section class="py-40 px-10 lg:px-2">
        <div class="max-w-4xl m-auto text-xl leading-10 text-gray-600 font-normal text-left">

          <div class="max-w-4xl mx-auto font-normal">
            <p class="font-normal">
              Iris Care Group is the largest independent health and social care provider operating across the South West of England and South Wales.

The Iris Care Group launched in May 2023 through the merging of two companies, Holmleigh Care (since 1999) and Ludlow Street Healthcare (since 2005).
            </p>
          </div>
           
        </div>
    </section>
    
    <section class="px-5 my-8">
      <div class="flex flex-col lg:flex-row max-w-[1600px] m-auto justify-between gap-">
          <div class="py-16 h-[560px]  flex-1 ">
              <div class="bg-ref h-96 lg:h-full">
                
                
             </div>
              
          </div>
          <div class="lg:max-w-[450px] w-full bg-theme border p-8 text-white rounded-2xl"> 
              <h2 class="text-3xl">  Make a Referral
              </h2>
              <p class="font-semibold my-6">
  We are experts in supporting those with complex needs and challenging behaviour. Our multi-disciplinary teams are able to operate across all service areas to provide dedicated therapeutic care as required.
  
  We take pride in offering safe, compassionate and empowering care and support in high quality environments.
  
              </p>
              <nuxt-link to="/contact" class="bg-white text-theme font-medium rounded-xl py-3 px-5 block w-max">
                  Contact us to discuss a referral now
  
              </nuxt-link>
          </div>
      </div>
  
      
      
  </section>
  <section class="bg-theme text-white py-20 px-10 mission-section" >
    <div class="mx-auto max-w-7xl flex justify-between text-center">
      <div>
        <div class="bg-yellow-600 w-16 mx-auto h-16 flex items-center justify-center rounded-full">
          <span>
            <svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 512 512" height="2rem" width="2rem" xmlns="http://www.w3.org/2000/svg"><path fill="none" stroke-linejoin="round" stroke-width="32" d="M408 64H104a56.16 56.16 0 0 0-56 56v192a56.16 56.16 0 0 0 56 56h40v80l93.72-78.14a8 8 0 0 1 5.13-1.86H408a56.16 56.16 0 0 0 56-56V120a56.16 56.16 0 0 0-56-56z"></path></svg>
          </span>

        </div>

        <h4 class="text-center my-4 text-3xl">
          Our Vision and Values

        </h4>
        <p class="max-w-xl m-auto px-4 text-base ">We are proud that everyone has worked together to define a vision and values that we are all proud to commit oursleves to.

        </p>
        <div class="relative">

        <a href="#" class="link relative  my-10 block  after:h-2 after:bg-gray-500 w-max m-auto py-4 ">Find Out More</a>
      </div>        </div>
      <div>
        <div class="bg-yellow-600 w-16 mx-auto h-16 flex items-center justify-center rounded-full">
          <span>
            <svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 24 24" height="2rem" width="2rem" xmlns="http://www.w3.org/2000/svg"><path d="M3.5 8a5.5 5.5 0 1 1 8.596 4.547 9.005 9.005 0 0 1 5.9 8.18.751.751 0 0 1-1.5.045 7.5 7.5 0 0 0-14.993 0 .75.75 0 0 1-1.499-.044 9.005 9.005 0 0 1 5.9-8.181A5.496 5.496 0 0 1 3.5 8ZM9 4a4 4 0 1 0 0 8 4 4 0 0 0 0-8Zm8.29 4c-.148 0-.292.01-.434.03a.75.75 0 1 1-.212-1.484 4.53 4.53 0 0 1 3.38 8.097 6.69 6.69 0 0 1 3.956 6.107.75.75 0 0 1-1.5 0 5.193 5.193 0 0 0-3.696-4.972l-.534-.16v-1.676l.41-.209A3.03 3.03 0 0 0 17.29 8Z"></path></svg>
          </span>

        </div>

        <h4 class="text-center my-4 text-3xl">
          Our Vision and Values

        </h4>
        <p class="max-w-xl m-auto px-4 text-base ">We are proud that everyone has worked together to define a vision and values that we are all proud to commit oursleves to.

        </p>
        <div class="relative">

        <a href="#" class="link relative  my-10 block  after:h-2 after:bg-gray-500 w-max m-auto py-4 ">Find Out More</a>
      </div>        </div>


      
    </div>
  </section>
    <!-- <section class="py-10 px-10 lg:px-2">
        <div class="max-w-4xl m-auto text-xl leading-10 text-gray-600 font-normal text-left">
            <img src="/assets//images/icg-care-pathways-3000px-2048x2048.jpg"  alt="">
        </div>
    </section> -->

    <socials-social-media-instruction/>
      

    <section class="bg-theme text-white py-44 text-center">
        <div class="text-center max-w-2xl m-auto">
            <h3 class="text-3xl">Talk to the Iris Care Group team
            </h3>
            <p class="">
                If you have any questions about our services including how to make a referral or the career opportunities with Iris Care Group please complete our Get in Touch form.


            </p>

            <a href="/contact_us" class="font-medium  my-6 block text-theme w-max m-auto bg-white py-3 px-5 rounded-3xl">Contact Us</a>
        </div>
    </section>

  </main>
  </template>
  
  <script>
  export default {
    // layout: 'default',
  }
  </script>

  
  <style scoped>

  .mission-section a.link::after{
    content: "";
    width: 100%;
    height: 3px;
    position: absolute;

    bottom: 0;
    left: 0;

  }
  /* Page-specific styles */
  </style>
  