<template>
  <div>
    <top-bar></top-bar>
    <abide></abide>
    <dropdown></dropdown>
  </div>
</template>

<script>
  import TopBar from '@/components/TopBar'
  import Abide from '@/components/Abide'
  import Dropdown from '@/components/Dropdown'

  export default {
    components: {
      'top-bar': TopBar,
      'abide': Abide,
      'dropdown': Dropdown
    }
  }
</script>
