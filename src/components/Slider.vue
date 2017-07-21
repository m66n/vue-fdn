<template>
  <div class="grid-container">
    <h4>Slider</h4>
    <div class="grid-x grid-padding-x align-center">
      <div class="cell medium-8">
        <div class="grid-x grid-padding-x">
          <div class="cell auto">
            <div class="slider" data-slider :data-initial-start="val" data-end="200">
              <span class="slider-handle" data-slider-handle role="slider" tabindex="1"></span>
              <span class="slider-fill" data-slider-fill></span>
              <input type="hidden">
            </div>
          </div>
          <div class="cell small-1">
            {{ val }}
          </div>
        </div>
      </div>
    </div>
  </div>
</template>


<script>
  export default {
    data () {
      return {
        val: 50
      }
    },
    mounted () {
      const el = $('.slider')
      this.slider = new this.$foundation.Slider(el)
      const me = this
      el.on('moved.zf.slider', () => {
        me.val = $('input[type=hidden]').val()
      })
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
