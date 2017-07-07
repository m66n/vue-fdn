<template>
  <div class="grid-container">
    <h4>Dropdown</h4>
    <div class="grid-x grid-padding-x align-center">
      <div class="medium-6 cell">
        <button class="button" type="button" data-toggle="example-dropdown">Toggle Dropdown</button>
        <div class="dropdown-pane" id="example-dropdown" data-dropdown data-auto-focus="true">
          Example form in a dropdown.
          <form>
            <div class="row">
              <div class="medium-6 columns">
                <label>Name
                  <input type="text" placeholder="Kirk, James T.">
                </label>
              </div>
              <div class="medium-6 columns">
                <label>Rank
                  <input type="text" placeholder="Captain">
                </label>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    mounted () {
      this.dropdown = new this.$foundation.Dropdown($('.dropdown-pane'))
    },
    destroyed () {
      this.dropdown.destroy()
    }
  }
</script>

<style lang="scss" scoped>
  .grid-container {
    margin-top: 2rem;
  }
</style>
