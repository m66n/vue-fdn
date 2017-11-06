<template>
  <div>
    <top-bar></top-bar>
    <reveal></reveal>
    <abide></abide>
    <dropdown></dropdown>
    <slider></slider>
    <accordion-menu></accordion-menu>
    <off-canvas></off-canvas>
  </div>
</template>

<script>
  import TopBar from '@/components/TopBar'
  import Reveal from '@/components/Reveal'
  import Abide from '@/components/Abide'
  import Dropdown from '@/components/Dropdown'
  import Slider from '@/components/Slider'
  import AccordionMenu from '@/components/AccordionMenu'
  import OffCanvas from '@/components/OffCanvas'

  export default {
    components: {
      'top-bar': TopBar,
      'reveal': Reveal,
      'abide': Abide,
      'dropdown': Dropdown,
      'slider': Slider,
      'accordion-menu': AccordionMenu,
      'off-canvas': OffCanvas
    }
  }
</script>
