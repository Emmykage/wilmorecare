<template>
  <main class="pt-64 md:pt-40">
    <div class="bg-green-500 h-96 bg-hero relative">
        <div class="max-w-lg w-full text-center py-20 px-4 rounded-tl-3xl rounded-tr-3xl absolute bottom-0 md:left-20 bg-orange-600/60 text-white">
            <h3 class="text-3xl mb-3 font-semibold"> Contact Us</h3>
  
            
        </div>
    </div>

    <section class="py-40 px-10 lg:px-2">
        <div class="max-w-4xl m-auto text-xl leading-10 text-gray-600 font-normal text-left">
            <p class=" my-6">At Iris Care Group we provide the full portfolio of services for people with learning disabilities, Autism, mental health issues and personality disorder, along with neurodegenerative conditions and Acquired Brain Injury.

                Our domiciliary care, supported living, residential and nursing services allow people to live independent and meaningful lives in the community, whilst our specialist hospitals provide, assessment, care and treatment. Our Special Educational Needs college provides residential and day placements to young people and adults.
            </p>

                <p class=" my-4">
                    The people we support may move between our services if this is beneficial to their care and treatment.

                </p>
                <p class=" my-4" >
                    We believe that being able to access the right care in the right setting at the right time is essential for the people we support and that care should always be provided in the least restrictive setting.</p>

                
        </div>
    </section>
    <section class="py-10 px-10 lg:px-2">
        <div class="max-w-4xl m-auto text-xl leading-10 text-gray-600 font-normal text-left">
            <img src="/assets//images/icg-care-pathways-3000px-2048x2048.jpg"  alt="">
        </div>
    </section>

    <section class="bg-theme text-white py-44 text-center">
        <div class="text-center max-w-2xl m-auto">
            <h3 class="text-3xl">Talk to the Iris Care Group team
            </h3>
            <p class="">
                If you have any questions about our services including how to make a referral or the career opportunities with Iris Care Group please complete our Get in Touch form.


            </p>

            <nuxt-link to="/contact-us" class="font-medium  my-6 block text-theme w-max m-auto bg-white py-3 px-5 rounded-3xl">Contact Us</nuxt-link>
        </div>
    </section>

  </main>

</template>

<script>
export default {
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
.bg-hero{

    background: linear-gradient(rgba(128, 128, 128, 0.103), rgba(255, 255, 255, 0.404)), url("/background/istock-1013268708-e1682870425842-1280x853.jpg");

}
</style>