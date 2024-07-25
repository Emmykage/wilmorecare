<template>
  <main class="pt-80 h-screen">
    <div class="bg-green-500 h-96 bg-hero relative">
        <div class="max-w-lg w-full text-center py-20 px-4 rounded-tl-3xl rounded-tr-3xl absolute bottom-0 left-20 bg-orange-600/60 text-white">
            <h3 class="text-3xl mb-3 font-semibold">  About Us</h3>
  
            
        </div>
    </div>    
    <!-- Your content here -->

    <section class=" py-40">


    <div class="max-w-3xl my-40 m-auto text-white rounded p-5 md:p-10 md:py-20 border bg-purple-900">
        <h3 class="text-4xl text-center my-10">Get In Touch</h3>

     <form class="p-4">
        <div class="flex gap-3">
            <div class="flex-1">
                <label for="first_name">First Name</label>
                <input type="text" id="first_name" placeholder="First Name" class="py-2 px-2 border block w-full">
            </div>
            <div class="flex-1">
                <label for="first_name">Name Name</label>
                <input type="text" id="first_name" class="border block p-2 w-full">
            </div>
        </div>
        <div class="my-4">
            <label for="email">Email Address</label>
            <input name="email" id="email" class="p-2 border block w-full"  placeholder="Email Address"/>
        </div>

        <div class="my-4">
            <label for="upload" class="">YOUR RESUME</label>
            <input type="file" class="border block w-full">
        </div>

        <input type="submit" value="send" class="border py-2 w-full cursor-pointer bg-theme text-white px-4 rounded" />

     </form>
    </div>

</section>


</main>
</template>

<script>
export default {
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

</style>