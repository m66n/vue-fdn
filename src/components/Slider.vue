<template>
  <div class="grid-container">
    <div class="grid-x grid-padding-x align-center">
      <div class="cell medium-8">
        <div class="slider" data-slider data-initial-start="50" data-end="200">
          <span class="slider-handle" data-slider-handle role="slider" tabindex="1"></span>
          <span class="slider-fill" data-slider-fill></span>
          <input type="hidden">
        </div>
      </div>
    </div>
  </div>
</template>


<script>
  export default {
    mounted () {
      this.slider = new this.$foundation.Slider($('.slider'))
    },
    destroyed () {
      this.slider.destroy()
    }
  }
</script>

<style lang="scss" scoped>
  .grid-container {
    margin-top: 2rem;
  }
</style>
