<template>
  <main class="pt-64 md:pt-40 wrapper">
    <div class="bg-green-500 h-[500px] bg-hero relative">
        <div class="max-w-lg w-full text-center py-10 px-4 rounded-tl-3xl rounded-tr-3xl absolute bottom-0 md:left-20 bg-orange-600/60 text-white">
            <h3 class="text-3xl mb-3 font-semibold"> Contact Us</h3>
  
            
        </div>
    </div>    
   
<section class="px-5 py-10">
  <div class="max-w-[1600px] flex gap-10 flex-col lg:flex-row m-auto bg-gray-100/40 p-8 rounded-xl">
    <div class="flex-1 ">

    <h4 class="text-lg text-gray-600 font-semibold mb-8">Please complete our contact form and we will endeavour to reply to you within 1 working day</h4>
      <form class="w-full ">
          <div class="flex flex-wrap -mx-3 mb-6">
            <div class="w-full md:w-1/2 px-3 mb-6 md:mb-0">
              <label class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="grid-first-name">
                Name <span class="text-red-500">*</span>
              </label>
              <input class="appearance-none block w-full bg-gray-50 text-gray-700 border border-cyan-500 rounded-full py-4 px-4 mb-3 leading-tight focus:outline-none focus:bg-white" id="grid-first-name" type="text" placeholder="Full Name">

            </div>
            <div class="w-full md:w-1/2 px-3">
              <label class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="grid-last-name">
                Job Title <span class="text-red-500">*</span>
              </label>
              <input class="appearance-none block w-full bg-gray-50 text-gray-700 border border-cyan-500 rounded-full py-4 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="job-title" type="text" placeholder="Enter Job Title">
            </div>
          </div>
          <div class="flex flex-wrap -mx-3 mb-6">
            <div class="w-full md:w-1/2 px-3 mb-6 md:mb-0">
              <label class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="grid-first-name">
                ORGANIZATION <span class="text-red-500">*</span> 
              </label>
              <input class="appearance-none block w-full bg-gray-50 text-gray-700 border border-cyan-500 rounded-full py-4 px-4 mb-3 leading-tight focus:outline-none focus:bg-white" id="grid-first-name" type="text" placeholder="Organization Name">
            </div>
            <div class="w-full md:w-1/2 px-3">
              <label class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="grid-last-name">
                EMAIL*
              </label>
              <input class="appearance-none block w-full bg-gray-50 text-gray-700 rounded-full border border-cyan-600 py-4 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="email" type="text" placeholder="Enter Email">
            </div>
          </div>

          <div class="flex flex-wrap -mx-3 mb-6">
            <div class="w-full md:w-1/2 px-3 mb-6 md:mb-0">
              <label class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="grid-first-name">
                CONTACT TELEPHONE NUMBER 1 <span class="text-red-500">*</span>
              </label>
              <input class="appearance-none block w-full bg-gray-50 text-gray-700 border border-cyan-500 rounded-full py-4 px-4 mb-3 leading-tight focus:outline-none focus:bg-white" id="grid-first-name" type="text" placeholder="Contact Number">

            </div>
            <div class="w-full md:w-1/2 px-3">
              <label class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="contact-2">
                CONTACT TELEPHONE NUMBER 2 <span class="text-red-500">*</span>
              </label>
              <input class="appearance-none block w-full bg-gray-50 text-gray-700 border border-cyan-600 rounded-full py-4 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="contact-2" type="text" placeholder="Enter Contact 2">
            </div>
          </div>

          <div class="flex flex-wrap -mx-3 mb-6">
            <div class="w-full px-3 mb-6 md:mb-0">
              <label class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="grid-first-name">
                ENQUIRY TYPE <span class="text-red-500">*</span>
              </label>
              <select
              :value="null"
              class="appearance-none block w-full bg-gray-50 text-gray-700 border border-cyan-500 rounded-full py-4 px-4 mb-3 leading-tight focus:outline-none focus:bg-white" id="grid-first-name" type="text" placeholder="Contact Number">
              <option :value="null">Please Select</option>
              <option value="I'm a commissioner and would like todiscuss a client referral">I'm a commissioner and would like todiscuss a client referral</option>
              <option value="looking for a job">i'm looking for a job</option>
                <option value="other">Other Enquiry</option>
              </select>
            </div>
          </div>

          <button type="submit" class="bg-theme text-white px-8 hover:bg-theme/80 py-3 font-semibold rounded-full ">Submit Message</button>
          
          
        </form>
      </div>
      <div class="border max-w-md w-full">
        <div class="bg-theme rounded-xl mb-10 p-10 text-white">
          <h2 class="text-3xl my-6">Contact Us</h2>
          <h3 class="text-3xl font-semibold">Tel: 0000000000000</h3>
        </div>

        <div class="rounded-xl bg-theme text-white p-10">
          <h1 class="text-3xl font-medium">Follow Us</h1>
          <div class="flex max-w-xl m-auto justify-center gap-10 my-10 items-center text-white">
            <span class="p-4 rounded-full border hover:bg-theme hover:text-white">
                <svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 512 512" height="1rem" width="1rem" xmlns="http://www.w3.org/2000/svg"><path d="M389.2 48h70.6L305.6 224.2 487 464H345L233.7 318.6 106.5 464H35.8L200.7 275.5 26.8 48H172.4L272.9 180.9 389.2 48zM364.4 421.8h39.1L151.1 88h-42L364.4 421.8z"></path></svg>

            </span>
            <span class="p-4 rounded-full border hover:bg-theme  hover:text-white">
                <svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 320 512" height="1rem" width="1rem" xmlns="http://www.w3.org/2000/svg"><path d="M80 299.3V512H196V299.3h86.5l18-97.8H196V166.9c0-51.7 20.3-71.5 72.7-71.5c16.3 0 29.4 .4 37 1.2V7.9C291.4 4 256.4 0 236.2 0C129.3 0 80 50.5 80 159.4v42.1H14v97.8H80z"></path></svg>                    </span>
            <span class="p-4 rounded-full border hover:bg-theme  hover:text-white">
                <svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 448 512" height="1rem" width="1rem" xmlns="http://www.w3.org/2000/svg"><path d="M224.1 141c-63.6 0-114.9 51.3-114.9 114.9s51.3 114.9 114.9 114.9S339 319.5 339 255.9 287.7 141 224.1 141zm0 189.6c-41.1 0-74.7-33.5-74.7-74.7s33.5-74.7 74.7-74.7 74.7 33.5 74.7 74.7-33.6 74.7-74.7 74.7zm146.4-194.3c0 14.9-12 26.8-26.8 26.8-14.9 0-26.8-12-26.8-26.8s12-26.8 26.8-26.8 26.8 12 26.8 26.8zm76.1 27.2c-1.7-35.9-9.9-67.7-36.2-93.9-26.2-26.2-58-34.4-93.9-36.2-37-2.1-147.9-2.1-184.9 0-35.8 1.7-67.6 9.9-93.9 36.1s-34.4 58-36.2 93.9c-2.1 37-2.1 147.9 0 184.9 1.7 35.9 9.9 67.7 36.2 93.9s58 34.4 93.9 36.2c37 2.1 147.9 2.1 184.9 0 35.9-1.7 67.7-9.9 93.9-36.2 26.2-26.2 34.4-58 36.2-93.9 2.1-37 2.1-147.8 0-184.8zM398.8 388c-7.8 19.6-22.9 34.7-42.6 42.6-29.5 11.7-99.5 9-132.1 9s-102.7 2.6-132.1-9c-19.6-7.8-34.7-22.9-42.6-42.6-11.7-29.5-9-99.5-9-132.1s-2.6-102.7 9-132.1c7.8-19.6 22.9-34.7 42.6-42.6 29.5-11.7 99.5-9 132.1-9s102.7-2.6 132.1 9c19.6 7.8 34.7 22.9 42.6 42.6 11.7 29.5 9 99.5 9 132.1s2.7 102.7-9 132.1z"></path></svg>                  
              </span>
          

            </div>
        </div>
      </div>

  </div>
</section>
<CTA />

</main>
</template>

<script>
import CTA from '~/components/call_to_action/CTA.vue'
export default {
  components: { CTA },
  name: 'ComponentName',
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
.wrapper{
  background-image: url("/public/background/back-column-3-1-2.png");
}
.bg-hero{
  background: linear-gradient(290deg, #57c0af70, #445ba7ab ), url('/public/background/iStock-1200583427-e1715614469710.jpg');;

}

</style>