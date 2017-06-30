<template>
  <div>
    <top-bar></top-bar>
    <abide></abide>
  </div>
</template>

<script>
  import TopBar from '@/components/TopBar'
  import Abide from '@/components/Abide'

  export default {
    components: {
      'top-bar': TopBar,
      'abide': Abide
    }
  }
</script>
