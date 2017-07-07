<template>
  <div class="grid-container">
    <h4>Accordion Menu</h4>
    <div class="grid-x grid-padding-x align-center">
      <div class="medium-6 cell">
        <ul class="vertical menu accordion-menu" data-accordion-menu>
          <li>
            <a href="#">Item 1</a>
            <ul class="menu vertical nested">
              <li><a href="#">Item 1A</a></li>
              <li><a href="#">Item 1B</a></li>
            </ul>
          </li>
          <li><a href="#">Item 2</a></li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    mounted () {
      this.menu = new this.$foundation.AccordionMenu($('.accordion-menu'))
    },
    destroyed () {
      this.menu.destroy()
    }
  }
</script>

<style lang="scss" scoped>
  .grid-container {
    margin-top: 2rem;
  }
</style>
