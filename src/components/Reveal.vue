<template>
  <div class="grid-container">
    <h4>Reveal</h4>
    <div class="grid-x grid-padding-x align-center">
      <div class="cell medium-6">
        <div class="reveal" id="reveal" data-reveal data-animation-in="fade-in" data-animation-out="fade-out">
          <h4>Information</h4>
          <table>
            <thead>
              <tr>
                <th width="300">Component</th>
                <th width="150">Version</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Vue JS</td>
                <td>{{ vueVersion }}</td>
              </tr>
              <tr>
                <td>Foundation for Sites</td>
                <td>{{ $foundation.version }}</td>
              </tr>
            </tbody>
          </table>
          <button class="close-button" data-close aria-label="Close modal" type="button">
            <span aria-hidden="true">&times;</span>
          </button>
        </div>
        <button class="button" data-open="reveal">Click me for version information</button>
      </div>
    </div>
  </div>
</template>

<script>
  import Vue from 'vue'

  export default {
    data () {
      return {
        vueVersion: Vue.version
      }
    },
    mounted () {
      this.reveal = new this.$foundation.Reveal($('.reveal'))
    },
    destroyed () {
      this.reveal.destroy()
    }
  }
</script>

<style lang="scss" scoped>
  .grid-container {
    margin-top: 2rem;
  }
</style>
