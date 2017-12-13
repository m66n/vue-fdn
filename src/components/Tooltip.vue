<template>
  <div class="grid-container">
    <h4>Tooltip</h4>
    <div class="grid-x grid-padding-x align-center">
      <div class="cell medium-8">
        <p>This <span data-tooltip aria-haspopup="true" class="has-tip top" tabindex="1" data-disable-hover="false" :title="$buildDate">tooltip</span> will display the build date.</p>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    mounted () {
      const el = $('.has-tip')
      this.tooltip = new this.$foundation.Tooltip(el)
    },
    destroyed () {
      this.tooltip.destroy()
    }
  }
</script>

<style lang="scss" scoped>
  .grid-container {
    margin-top: 2rem;
  }
</style>
