<template>
  <div id="wrapper">
    <div class="flex-center">
      <div id="letter" :class="color">{{ pressed }}</div>
    </div>
  </div>
</template>

<script lang=ts>
import { defineComponent } from 'vue'
import { useShell } from '/@/composables/electron'

export default defineComponent({
  name: 'landing-page',

  created() {
    document.addEventListener('keydown', (e) => {
      useShell().beep()
      const colors = ['green', 'blue', 'purple', 'pink', 'red']
      this.color = colors[Math.floor(Math.random() * colors.length)]
      this.pressed = e.key
      e.preventDefault()
    })
  },

  data() {
    return {
      color: '',
      pressed: ''
    }
  }
})
</script>

<style>
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
  text-align: center;
  font-size: 9vw;
}

.red {
  color: #B44242;
}

.blue {
  color: #42B4B9;
}

.green {
  color: #42B983;
}

.purple {
  color: #8342B9;
}

.pink {
  color: #B94278;
}
</style>
