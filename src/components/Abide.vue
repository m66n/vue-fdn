<template>
  <div class="grid-container">
    <div class="grid-x grid-padding-x align-center">
      <div class="cell medium-6">
        <form data-abide novalidate>
          <div class="grid-x grid-padding-x">
            <div class="cell">
              <label>Number Required
                <input type="text" placeholder="1234" pattern="number" required>
                <span class="form-error">Yo, you had better fill this out, it's required.</span>
              </label>
            </div>
          </div>
        </form>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    mounted () {
      this.form = new this.$foundation.Abide($('form'))
    },
    destroyed () {
      this.form.destroy()
    }
  }
</script>

<style lang="scss" scoped>
  .grid-container {
    margin-top: 2rem;
  }

</style>
