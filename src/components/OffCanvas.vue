<template>
  <div class="grid-container">
    <h4>Off Canvas</h4>
    <div class="grid-x grid-padding-x align-center">
      <div class="cell medium-8">
        <div class="grid-x grid-padding-x">
          <div class="cell small-6">
            <button type="button" class="button expanded" data-toggle="offCanvasLeftSplit1">Open Left</button>
          </div>
          <div class="cell small-6">
            <button type="button" class="button expanded" data-toggle="offCanvasRightSplit2">Open Right</button>
          </div>
        </div>
        <div class="grid-x grid-padding-x">
          <div class="cell small-6">
            <div class="off-canvas-wrapper">
              <div class="off-canvas-absolute position-left" id="offCanvasLeftSplit1" data-off-canvas>
                <!-- Your menu or Off-canvas content goes here -->
              </div>
              <div class="off-canvas-content" style="min-height: 300px;" data-off-canvas-content>
                <p>I have nothing to do with the off-canvas on the right!</p>
              </div>
            </div>
          </div>
          <div class="cell small-6">
            <div class="off-canvas-wrapper">
              <div class="off-canvas-absolute position-right" id="offCanvasRightSplit2" data-off-canvas>
                <!-- Your menu or Off-canvas content goes here -->
              </div>
              <div class="off-canvas-content" style="min-height: 300px;" data-off-canvas-content>
                <p>I&rsquo;m a unique off-canvas container all on my own!</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>


<script>
  export default {
    mounted () {
      this.offCanvas1 = new this.$foundation.OffCanvas($('#offCanvasLeftSplit1'))
      this.offCanvas2 = new this.$foundation.OffCanvas($('#offCanvasRightSplit2'))
    },
    destroyed () {
      this.offCanvas1.destroy()
      this.offCanvas2.destroy()
    }
  }
</script>

<style lang="scss" scoped>
  .grid-container {
    margin-top: 2rem;
    margin-bottom: 2rem;
  }
</style>
