<template>
  <div id="wrapper">
    <div class="flex-center">
      <div id="letter">{{ pressed }}</div>
    </div>
  </div>
</template>

<script lang=ts>
import { defineComponent } from 'vue'
import { useShell } from '/@/composables'

export default defineComponent({
  name: 'landing-page',

  created() {
    document.addEventListener('keydown', (e) => {
      useShell().beep()
      this.pressed = e.key
      e.preventDefault()
    })
  },

  data() {
    return {
      pressed: ''
    }
  }
})
</script>

<style>
* {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
}

body {
  font-family: 'Source Sans Pro', sans-serif;
  font-size: 16px;
}

#wrapper {
  background: linear-gradient(to bottom, rgba(33, 33, 33, 1), rgba(22, 22, 22, 1));
  height: 100vh;
  padding: 60px 80px;
  width: 100vw;
}

.flex-center {
  height: 90vh;
  display: flex;
  align-content: center;
  align-items: center;
  justify-content: center;
}

#letter {
  color: #42B4B9;
  text-align: center;
  font-size: 9vw;
}
</style>
