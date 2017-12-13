<template>
  <div>
    <top-bar></top-bar>
    <reveal></reveal>
    <abide></abide>
    <dropdown></dropdown>
    <slider></slider>
    <accordion-menu></accordion-menu>
    <tooltip></tooltip>
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
  import Tooltip from '@/components/Tooltip'
  import OffCanvas from '@/components/OffCanvas'

  export default {
    components: {
      'top-bar': TopBar,
      'reveal': Reveal,
      'abide': Abide,
      'dropdown': Dropdown,
      'slider': Slider,
      'accordion-menu': AccordionMenu,
      'tooltip': Tooltip,
      'off-canvas': OffCanvas
    }
  }
</script>
