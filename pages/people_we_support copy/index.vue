<template>
  <main class="pt-64 md:pt-40 ">
    <div class="bg-gray-100 h-96  bg-hero">
      <!-- <h3>Text</h3>
      main -->
  </div>
  <section class="py-32 px-5 md:px-20">
    <div class="lg:grid-cols-layout-styles  layout-styles  gap-3 md:gap-10 grid">
      <div>
        <div class=" mx-auto max-w-[1700px]  gap-6 ">
            <div class="max-w-3xl">

            <p class="mb-10 font-semibold text-gray-700">
              At Iris Care Group every person is treated as an individual with his or her own beliefs and needs. With your involvement we will draw up an individualised plan of care for you, enabling you to be actively involved in your own recovery, rehabilitation or care action plan.
            </p>

            <p class="mb-10 text-gray-600 font-medium">
              Where some individuals may find it difficult to take a personal involvement in developing their own care plan, we actively involve families, care co-ordinators and advocates.
            </p>
            <p class="font-medium text-gray-600">
              Whichever service they are at, we aim to provide all the people we support with a high quality of life by respecting six basic values and setting ourselves six clear aims:
            </p>

          </div>
        </div>
        <div class="max-w-3xl border">
          <img src="/assets/images/kdj1258.2-lsh-ourvaluesinfographic-148x148mm-081019-01-1024x1024.png" alt="" srcset="">
        </div>
        <div class="py-10">

          <h2 class="text-4xl my-3">Frequently asked questions </h2>
          <p class=" leading-7 text-lg" >We have listed some of the questions we get asked most frequently by the people we support and their families. If there is anything else you would like to know, just email us at info@iriscaregroup.uk.
            
          </p>

          <ul class="max-w-3xl my-10">
            <li class="border my-5 overflow-hidden w-full rounded-tl-[35px] pl-10 rounded-bl-[35px] rounded-tr-3xl rounded-br-3xl bg-gray-200">
              <div class="my-auto px-6 border-b border-gray-600 h-16 flex items-center"><p class="w-full font-semibold text-black">Will i have my own room</p><div><svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 320 512" height="1rem" width="1rem" xmlns="http://www.w3.org/2000/svg"><path d="M31.3 192h257.3c17.8 0 26.7 21.5 14.1 34.1L174.1 354.8c-7.8 7.8-20.5 7.8-28.3 0L17.2 226.1C4.6 213.5 13.5 192 31.3 192z"></path></svg></div> </div>
              <div class="px-5 py-10"><p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Voluptatem id iste quas facere ea. Dolore tempore nulla similique, aperiam molestiae magni id ipsam reprehenderit doloribus aut est facilis consequatur quaerat! Debitis quis facilis expedita laudantium, incidunt tenetur cum ipsam. Exercitationem!</p>
                All our staff join us because they care passionately about helping the individuals we suppprt to get the most out of their lives. They are a funny, diverse bunch as you might expect.

                Depending on the service location, the people we care for may have their own primary care team or be buddied up with a key worker.
                
                With your help (or the help of your family, care co-ordinator or Advocate) the care team or key worker will draw up an individualised recovery, rehabilitation or care plan for you. This will enable you (or them) to be actively involved in your own personalized programme.
                
                Additionally, we have a large team of other specialist staff who are available as needed such as Psychologists and Psychiatrists, Education Specialists, Occupational Therapists and Dietitians.
                
                All our staff are fully trained, receive a comprehensive two-week long induction when they join us and attend regular additional training courses.
              </div>
            </li>
            <li class="border overflow-hidden w-full rounded-tl-[35px] pl-10 rounded-bl-[35px] rounded-tr-3xl rounded-br-3xl bg-gray-200">
              <div class="my-auto px-6 border-b border-gray-600 h-16 flex items-center"><p class="w-full font-semibold text-black">Do you put anyone in seclusion?</p><div><svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 320 512" height="1rem" width="1rem" xmlns="http://www.w3.org/2000/svg"><path d="M31.3 192h257.3c17.8 0 26.7 21.5 14.1 34.1L174.1 354.8c-7.8 7.8-20.5 7.8-28.3 0L17.2 226.1C4.6 213.5 13.5 192 31.3 192z"></path></svg></div> </div>
              <div class="px-5 py-10"><p>We never use seclusion. Although some of the people we support can have very challenging behaviour, we prefer to train our staff to spot these incidents early and use techniques to avoid or diffuse potential incidents.
                </p>
              </div>
            </li>
          </ul>
        </div>
       </div>

    <div class="border px-2">
      <div class="rounded-xl w-full h-96 max-w-xl p-5 bg-theme">
        <img src="/assets/images/kdj129-lshg-a3-poster-humanrights-230215.jpg" alt="certification" class="h-full w-full"/>

      </div>
    </div>

  </div>

  </section>

  <section>

    
  </section>
  
  <social-media-instruction/>
  <CTA/>

    </main>
   
</template>

<script>
import CTA from '~/components/call_to_action/CTA.vue'
import SocialMediaInstruction from '~/components/socials/social-media-instruction.vue'
export default {
  components: { CTA, SocialMediaInstruction },
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
  background: linear-gradient(290deg, #57c0af70, #445ba7ab ), url('/public/background/about-us.jpg');
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;

} 

</style>