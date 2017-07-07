<template>
  <div>
    <top-bar></top-bar>
    <abide></abide>
    <dropdown></dropdown>
    <slider></slider>
    <accordion-menu></accordion-menu>
  </div>
</template>

<script>
  import TopBar from '@/components/TopBar'
  import Abide from '@/components/Abide'
  import Dropdown from '@/components/Dropdown'
  import Slider from '@/components/Slider'
  import AccordionMenu from '@/components/AccordionMenu'

  export default {
    components: {
      'top-bar': TopBar,
      'abide': Abide,
      'dropdown': Dropdown,
      'slider': Slider,
      'accordion-menu': AccordionMenu
    }
  }
</script>
