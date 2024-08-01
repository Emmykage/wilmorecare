<template>
    <div class="border p-3 rounded-3xl bg-[#00a0a6]/10 h-[400px]">
        {{ imageSource }}
        <img :src="imageSource" alt="goals image" class="w-full border-2 border-[#00a0a6] rounded-xl h-full">
    </div>
</template>

<script>
export default {
  name: 'ImageCard',
  props: {
        imageSource: {
            type: String,
            required: true
        },
    },
  data() {
    return {
    //   console.log("first")
    }
  },
  methods: {
    // methods
  }
}
</script>

<style scoped>
.styles{

}
</style>