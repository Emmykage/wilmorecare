<!-- layouts/default.vue -->
<template>
     
      <main class="relative"> 
        <header class="fixed w-full z-50">
          <div class="py-7 px-10 bg-gray-100 flex justify-between w-full items-center">
              <!-- Header content -->
                 <nuxt-link to="/" class="text-3xl font-semibold text-white h-20 logo ">
                  <img src="/assets/images/logos/Full Logo Coloured PNG_rework.png" alt="wilmorecare logo" class="w-full h-full"/>
                </nuxt-link>

  <ul :class="isShowMenu ? mobileViewOn : mobileViewOff " class=" text-gray-800 bg-themeVariant/90 lg:bg-transparent flex-1 px-2 left-0 max-w-sm w-full lg:min-w-max fixed top-0  h-full lg:static lg:w-full lg:flex flex-wrap font-semibold text-sm gap-8 items-center  lg:py-0 lg:px-5 navigation">
    <span @click="toggleMenu" class="block md:hidden ml-auto w-max cursor-pointer text-white">
      <svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 512 512" height="2.5rem" width="2.5rem" xmlns="http://www.w3.org/2000/svg"><path d="m289.94 256 95-95A24 24 0 0 0 351 127l-95 95-95-95a24 24 0 0 0-34 34l95 95-95 95a24 24 0 1 0 34 34l95-95 95 95a24 24 0 0 0 34-34z"></path></svg>    
          </span>

      <li class="list whitespace-nowrap mb-3 py-0 lg:mb-0 relative"><nuxt-link @click="toggleMenu" to="/services" class="whitespace-nowrap mb-3 flex items-center justify-between gap-3 py-2 px-2">
        Our Services 

      <svg class="transition-all duration-300 ease-in-out" stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 320 512" height="1rem" width="1rem" xmlns="http://www.w3.org/2000/svg"><path d="M143 352.3L7 216.3c-9.4-9.4-9.4-24.6 0-33.9l22.6-22.6c9.4-9.4 24.6-9.4 33.9 0l96.4 96.4 96.4-96.4c9.4-9.4 24.6-9.4 33.9 0l22.6 22.6c9.4 9.4 9.4 24.6 0 33.9l-136 136c-9.2 9.4-24.4 9.4-33.8 0z"></path></svg></nuxt-link >
        <ul class="static lg:absolute md:py-10 md:px-4 lg:px-0 bg-themeVariant border border-gray-50/30 rounded sub-list">
          <li class="hover:bg-theme/50 px-5 "><nuxt-link @click="toggleMenu" to="/supported-living" class="whitespace-nowrap mb-3  block py-2 px-2 text-white">Supported Living</nuxt-link></li>
          <li class="hover:bg-theme/50 px-5 "><nuxt-link @click="toggleMenu" to="/home-care" class="whitespace-nowrap mb-3  block py-2 px-2 text-white">Home Care</nuxt-link></li>
          <li class="hover:bg-theme/50 px-5 "><nuxt-link @click="toggleMenu" to="/respite-care" class="whitespace-nowrap mb-3  block py-2 px-2 text-white">Respite Care</nuxt-link></li>
          <li class="hover:bg-theme/50 px-5 "><nuxt-link @click="toggleMenu" to="/residential-care" class="whitespace-nowrap mb-3  block py-2 px-2 text-white">Residential Care</nuxt-link></li>
        </ul>
    </li>
    <!-- <li class="whitespace-nowrap mb-3 lg:mb-0 py-3"><nuxt-link @click="toggleMenu" to="/professional" class="whitespace-nowrap mb-3  block py-2 px-2">Professionals</nuxt-link></li> -->
    <li class="list whitespace-nowrap mb-3 lg:mb-0 py-0  relative"><nuxt-link @click="toggleMenu" to="/people_we_support" class="whitespace-nowrap mb-3  block py-2 px-2">Peeople we support</nuxt-link></li>
    <li class="list whitespace-nowrap py-0 mb-3 lg:mb-0   relative">
      <nuxt-link @click="toggleMenu" to="/about" class="whitespace-nowrap mb-3 flex items-center justify-between gap-3 py-2 px-2">About Us
      <svg class="transition-all duration-300 ease-in-out" stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 320 512" height="1rem" width="1rem" xmlns="http://www.w3.org/2000/svg"><path d="M143 352.3L7 216.3c-9.4-9.4-9.4-24.6 0-33.9l22.6-22.6c9.4-9.4 24.6-9.4 33.9 0l96.4 96.4 96.4-96.4c9.4-9.4 24.6-9.4 33.9 0l22.6 22.6c9.4 9.4 9.4 24.6 0 33.9l-136 136c-9.2 9.4-24.4 9.4-33.8 0z"></path></svg>
    </nuxt-link>
      <ul class="static lg:absolute md:py-10 md:px-4 lg:px-0 bg-themeVariant border border-gray-500/30 border-t-0  rounded sub-list">
        <li class="hover:bg-theme/50 px-5 "><nuxt-link @click="toggleMenu" to="/about#Who-We-Are" class="whitespace-nowrap mb-3  block py-2 px-2 text-white">Who we are</nuxt-link></li>
        <li class="hover:bg-theme/50 px-5 "><nuxt-link @click="toggleMenu" to="/about#core-values" class="whitespace-nowrap mb-3  block py-2 px-2 text-white">Core Values</nuxt-link></li>

        
      </ul>
       
     </li>

    <li class="list whitespace-nowrap mb-3 lg:mb-0 py-0 relative"><nuxt-link @click="toggleMenu" to="/careers" class="whitespace-nowrap mb-3 block py-2 px-2">Work for us</nuxt-link></li>
    <li class="list whitespace-nowrap mb-3 lg:mb-0 py-0 relative"><nuxt-link @click="toggleMenu" to="/contact-us" class="whitespace-nowrap mb-3 block py-2 px-2">Contact us</nuxt-link></li>
    <li class="list whitespace-nowrap mb-3 lg:mb-0 py-0 relative"><nuxt-link @click="toggleMenu" to="/get-referals" class="whitespace-nowrap mb-3 block py-2 px-5 bg-[#63b6b3] hover:bg-green-500 rounded-3xl text-white transition-all ease-linear duration-300 hover:text-gray-200">Make a Referral</nuxt-link></li>


    


  </ul>
  <nuxt-link class="text-gray-700 cursor-pointer  block lg:hidden" @click="toggleMenu">
    <svg stroke="currentColor" fill="currentColor" stroke-width="0" version="1.2" baseProfile="tiny" viewBox="0 0 24 24" height="1.5rem" width="1.5rem" xmlns="http://www.w3.org/2000/svg"><path d="M19 18c.55 0 1 .45 1 1s-.45 1-1 1h-14c-.55 0-1-.45-1-1s.45-1 1-1h14m0-2h-14c-1.654 0-3 1.346-3 3s1.346 3 3 3h14c1.654 0 3-1.346 3-3s-1.346-3-3-3zM19 11c.55 0 1 .45 1 1s-.45 1-1 1h-14c-.55 0-1-.45-1-1s.45-1 1-1h14m0-2h-14c-1.654 0-3 1.346-3 3s1.346 3 3 3h14c1.654 0 3-1.346 3-3s-1.346-3-3-3zM19 4c.55 0 1 .45 1 1s-.45 1-1 1h-14c-.55 0-1-.45-1-1s.45-1 1-1h14m0-2h-14c-1.654 0-3 1.346-3 3s1.346 3 3 3h14c1.654 0 3-1.346 3-3s-1.346-3-3-3z"></path></svg>
  </nuxt-link>
          </div>

          <div class="bg-themeVariant text-gray-100 flex md:flex-row flex-col justify-between py-3 md:px-10 px-3">
            <div class="flex items-center gap-5 mb-3">
              <span class="border border-white p-4 rounded-full">
                <svg class="h-2.5 w-2.5 lg:w-6 lg:h-6" stroke="currentColor" fill="none" stroke-width="2" viewBox="0 0 24 24" stroke-linecap="round" stroke-linejoin="round"  xmlns="http://www.w3.org/2000/svg"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path><polyline points="22,6 12,13 2,6"></polyline></svg>
              </span>
              <div class="cursor-pointe -200">
                <p>Client Support Email: </p>
      
                <p>
                  <a href="mailto:admin@WilmoreCare.co.uk" class="hover:underline block">admin@WilmoreCare.co.uk</a>

                </p>
              </div>
            </div>

            <div class="flex items-center gap-5 mb-4">
              <span class="border border-gray-200 p-4 rounded-full">
                <svg class="h-2.5 w-2.5 lg:w-6 lg:h-6" stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 24 24" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path fill="none" d="M0 0h24v24H0V0z"></path><path d="M6.54 5c.06.89.21 1.76.45 2.59l-1.2 1.2c-.41-1.2-.67-2.47-.76-3.79h1.51m9.86 12.02c.85.24 1.72.39 2.6.45v1.49c-1.32-.09-2.59-.35-3.8-.75l1.2-1.19M7.5 3H4c-.55 0-1 .45-1 1 0 9.39 7.61 17 17 17 .55 0 1-.45 1-1v-3.49c0-.55-.45-1-1-1-1.24 0-2.45-.2-3.57-.57a.84.84 0 0 0-.31-.05c-.26 0-.51.1-.71.29l-2.2 2.2a15.149 15.149 0 0 1-6.59-6.59l2.2-2.2c.28-.28.36-.67.25-1.02A11.36 11.36 0 0 1 8.5 4c0-.55-.45-1-1-1z"></path></svg>
              </span>
              <div>
                <p>Client Referal Phone:</p>
                <p><a href="tel:07405141694">07405141694</a> </p>
                
              </div>
            </div>
            <div class="flex items-center gap-5 ">
              <span class="border border-gray-200 p-4 rounded-full">
                <svg class="h-2.5 w-2.5 lg:w-6 lg:h-6" stroke="currentColor" fill="none" stroke-width="2" viewBox="0 0 24 24" stroke-linecap="round" stroke-linejoin="round" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path><polyline points="22,6 12,13 2,6"></polyline></svg>
              </span>
              <div>
                <p>Client Referal Email:</p>
                <p>referrals@WilmoreCare.com</p>
                
              </div>
            </div>

          </div>

          

          </header>     
        <slot />
        <footer class="py-40">
          <div class="text-center">
              <p class="text-sm text-gray-400">© 2024 Wilmore Care Ltd – 18 Thricknells Close, Luton, LU3 3RP. Telephone: 07405141694
              </p>

              <ul class="text-sm my-4 text-red-500 m-auto md:justify-center flex flex-col md:flex-row max-w-4xl flex-wrap gap-3 md:gap-0">

                <li class="border-r border-gray-400 px-4"> <nuxt-link to="/privacy-policy" class="hover:text-theme" >Privacy Policy </nuxt-link> </li>
                <li class="border-r border-gray-400 px-4"> <nuxt-link to="/privacy-policy" class="hover:text-theme" >Cookie Policy</nuxt-link></li>
                <li class="border-r border-gray-400 px-4">Modern Slavery Statement</li>
                <!-- <li class="border-r border-gray-400 px-4"> Gender Pay Gap Report</li> -->
                <li class=" border-gray-400 px-4"> Site Map</li>
              </ul>
          </div>

      </footer>
    </main>

    </template>
  
  <script>
  export default {
    // Layout component options
    name: "App",
    data(){
      return{
        mobileViewOn: " pt-14 pb-40 block left-0",
        mobileViewOff: " pt-20 pb-40 px-10 hidden -left-full ",
        isShowMenu: false
        
      }
    },
    methods: {
    toggleMenu() {
      console.log(this.isShowMenu)
      this.isShowMenu = !this.isShowMenu;
      // console.log("Menu toggled:", this.isShowMenu);
    }
  }
  }
  </script>
  
  <style>
  @import url('https://fonts.googleapis.com/css2?family=Poppins:wght@200;300;400;600&display=swap');

  body{
    font-family: poppins, sans-serif;
  }
  .list a::before{
    content: "";
    height: 2px;
    width: 0%;
    display: block;
    background: rgb(99 182 179);
    bottom: 0;
    left: 0;
    position: absolute;
    transition: all 0.3s ease-in-out


  }

  .list:last-child a:before{

    height: 0;
  }
  .list a:hover::before{
    width: 100%;
  }
  .list a{
    padding: 16px;
  }
  .list a.router-link-active{
    color: rgb(99 182 179);

  }
  .list a.router-link-active::before{
    width: 100%;
  }
  /* Scoped styles for the layout */
  .list .sub-list{
    display: none;
  }
  .list:hover svg{
    transform: rotate(180deg);
  }
.list:hover .sub-list{
  display: block;

}


@media (max-width: 1024px) {
  .list a{
    color: white;
  }

    
    .list:hover .sub-list a{
      color: white;
    }
  }

  </style>
  