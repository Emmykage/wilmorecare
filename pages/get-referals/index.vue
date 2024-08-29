<template>
  <main class="pt-64 md:pt-40">
    <div class="bg-gray-100 h-96 bg-hero relative">
      <div class="max-w-lg w-full text-center py-12 px-4 rounded-tl-3xl rounded-tr-3xl absolute bottom-0 md:left-20 bg-orange-600/60 text-white">
          <h3 class="text-3xl mb-3 font-semibold">  Make a Referral </h3>

          
      </div>
  </div>

  <section class="px-5 py-10">
    <div class="max-w-6xl m-auto bg-gray-100/40 p-8 border rounded-xl">
      <h4 class="text-lg text-gray-600 font-semibold mb-8">Please complete this form if you would like someone to contact you to discuss a referral.</h4>
        <form class="w-full" @submit.prevent="handleSubmit">
            <div class="flex flex-wrap -mx-3 mb-6">
              <div class="w-full md:w-1/2 px-3 mb-6 md:mb-0">
                <label class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="grid-first-name">
                  Name <span class="text-red-500">*</span>
                </label>
                <input v-model="form.name" required class="appearance-none block w-full bg-gray-50 text-gray-700 border border-cyan-500 rounded-full py-4 px-4 mb-3 leading-tight focus:outline-none focus:bg-white" id="grid-first-name" type="text" placeholder="Full Name">

              </div>
              <div class="w-full md:w-1/2 px-3">
                <label class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="grid-last-name">
                  Job Title <span class="text-red-500">*</span>
                </label>
                <input v-model="form.jobTitle" class="appearance-none block w-full bg-gray-50 text-gray-700 border border-cyan-500 rounded-full py-4 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="job-title" type="text" placeholder="Enter Job Title">
              </div>
            </div>
            <div class="flex flex-wrap -mx-3 mb-6">
              <div class="w-full md:w-1/2 px-3 mb-6 md:mb-0">
                <label class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="grid-first-name">
                  ORGANIZATION <span class="text-red-500">*</span> 
                </label>
                <input v-model="form.organization" class="appearance-none block w-full bg-gray-50 text-gray-700 border border-cyan-500 rounded-full py-4 px-4 mb-3 leading-tight focus:outline-none focus:bg-white" id="grid-first-name" type="text" placeholder="Organization Name">
              </div>
              <div class="w-full md:w-1/2 px-3">
                <label class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="grid-last-name">
                  EMAIL*
                </label>
                <input v-model="form.email" required class="appearance-none block w-full bg-gray-50 text-gray-700 rounded-full border border-cyan-600 py-4 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="email" type="text" placeholder="Enter Email">
              </div>
            </div>

            <div class="flex flex-wrap -mx-3 mb-6">
              <div class="w-full md:w-1/2 px-3 mb-6 md:mb-0">
                <label class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="grid-first-name">
                  CONTACT TELEPHONE NUMBER 1 <span class="text-red-500">*</span>
                </label>
                <input v-model="form.phone" class="appearance-none block w-full bg-gray-50 text-gray-700 border border-cyan-500 rounded-full py-4 px-4 mb-3 leading-tight focus:outline-none focus:bg-white" id="grid-first-name" type="text" placeholder="Contact Number">

              </div>
              <div class="w-full md:w-1/2 px-3">
                <label class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="contact-2">
                  CONTACT TELEPHONE NUMBER 2 <span class="text-red-500">*</span>
                </label>
                <input v-model="form.phone2" class="appearance-none block w-full bg-gray-50 text-gray-700 border border-cyan-600 rounded-full py-4 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="contact-2" type="text" placeholder="Enter Contact 2">
              </div>

              <div class="w-full px-3">
                <label class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="contact-2">
                  Message <span class="text-red-500">*</span>
                </label>
                <textarea v-model="form.message" class="appearance-none block w-full min-h-32 bg-gray-50 text-gray-700 border border-cyan-600 rounded-3xl py-4 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="contact-2" type="text" placeholder="Enter Contact 2"> </textarea>
              </div>
            </div>

            <button type="submit" class="bg-theme text-white px-8 hover:bg-theme/80 py-3 font-semibold rounded-full ">Submit Message</button>
            
            
          </form>
    </div>
</section>

  <section class="bg-themeVariant px-5">
    <div class="grid md:grid-cols-2 m-auto py-10 max-w-7xl border-b border-gray-500">
      <div class="max-w-[500px]">
        <img src="/assets/images/about-us/Care-home-image-line-yellow-15.webp" alt="step 1">
      </div>
         <div>
          <div class="flex items-center gap-10">
            <h1 class="text-4xl text-white">Step </h1>
            <div class="h-20 w-20 bg-red-50 step flex justify-center items-center font-bold text-white">
              <span class="text-4xl"> 1</span>

            </div>


          </div>

          <h4 class="text-3xl text-white underline">Referral  and Assessment</h4>
          <ul class="text-white leading-8">
            <li>
              Contact our dedicated Referrals Team who'll take a patient history and review their needs
            </li>
            <li>
              Assessment with one of our clinical Assessors or Home Managers, usually within 24-48 hours

            </li>
            <li>
              Community fit review with Home Manager
            </li>

            <li>
              Formal Assessment reort and costing shared with founders
            </li>

          </ul>
         </div>
    </div>
    <div class="grid md:grid-cols-2 m-auto py-10 max-w-7xl border-b border-gray-500">
      
         <div>
          <div class="flex items-center gap-10">
            <h1 class="text-4xl text-white">Step </h1>
            <div class="h-20 w-20 bg-red-50 step flex justify-center items-center font-bold text-white">
              <span class="text-4xl"> 2</span>

            </div>


          </div>

          <h4 class="text-3xl text-white underline">Admission and placement</h4>
          <ul class="text-white leading-8">
            <li>
              Agree goals and timescales in a detailed personalised care plan.            </li>
            <li>
              Review care plan after six weeks to ensure desired outcomes are on track.
            </li>
            <li>
              Review of progress against care plan every six months.            </li>

            <li>
              Formal Assessment reort and costing shared with founders
            </li>

          </ul>
         </div>
         <div class="max-w-[500px]">
          <img src="/assets/images/about-us/Care-home-image-line-yellow-7.webp" alt="step 1">
        </div>
    </div>
    <div class="grid md:grid-cols-2 m-auto py-10 max-w-7xl">
      <div class="max-w-[500px]">
        <img src="/assets/images/about-us/Careers-line-yellow10.webp" alt="step 1">
      </div>
         <div>
          <div class="flex items-center gap-10">
            <h1 class="text-4xl text-white">Step </h1>
            <div class="h-20 w-20 bg-red-50 step flex justify-center items-center font-bold text-white">
              <span class="text-4xl"> 3</span>

            </div>


          </div>

          <h4 class="text-3xl text-white underline">Discharge and pathway planning</h4>
          <ul class="text-white leading-8">
            <li>
              Review progress against expected outcome and plan discharge.            </li>
            <li>
              Explore options including transition to OneCare services and discharge into the community.
            </li>
            <li>
              Working with service users, families and funders, agree a discharge and transition plan.            
            </li>

          </ul>
         </div>
    </div>
    <!-- #0066b3 -->
  </section>
   

</main>
</template>

<script>
export default {
  name: 'referals',
  data() {
    return {
      form: {
        name: "",
        jobTitle: "",
        email: "",
        organization: '',
        email: '',
        phone1: "",
        phone2: ""

      },
      submissionStatus: ""

    }
  },
  methods: {
    async handleSubmit(){
      try {

       const response =  await fetch("http://formspree.io/f/mwpeozry", {
          method: "POST",
          headers: {
            "Accept": "application/json",
            "Content-type": "application/json"
          },
          body: JSON.stringify(this.form)
        });
        if(response.ok){
          this.submissionStatus = "success",
          this.resetForm()
        }
        else{
          this.submissionStatus = "error"
        }
        
      } catch (error) {
        console.error('Form submission error:', error);
        this.submissionStatus = 'error';
      }
    },

    resetForm() {
      this.form = {
        name: '',
        jobTitle: '',
        organization: '',
        email: '',
        contact1: '',
        contact2: '',
        enquiryType: ''
      };
    }

    
  }
}
</script>

<style scoped>
.step{
  background: url('/public/background/pentagon-orange.svg');
}
.main{

}
.bg-hero{
  background: linear-gradient(290deg, #57c0af70, #445ba7ab ), url('/public/background/about-us.jpg');
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;

} 
</style>