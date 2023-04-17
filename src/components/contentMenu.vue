<template>
  <div ref="containerMenu" style="width: 100%; height: 100%">
    <slot></slot>
    <Transition>
      <div
        class="conten-menu"
        v-if="menuShow"
        :style="{ left: x + 'px', top: y + 'px' }"
      >
        <div class="menu-list">
          <div @click="handelClick" v-for="(item, i) in menu" :key="i">
            {{ item }}
          </div>
        </div>
      </div>
    </Transition>
  </div>
</template>

<script>
export default {
  props: {
    menu: [],
  },
  data() {
    return {
      x: '',
      y: '',
      menuShow: false,
    }
  },
  mounted() {
    const menu = document.querySelector('.conten-menu')
    document.body.append(menu)
    const containerMenu = this.$refs.containerMenu
    this.useContentMenu(containerMenu)
    window.addEventListener(
      'click',
      () => {
        this.menuShow = false
      },
      true
    )
    window.addEventListener(
      'contextmenu',
      () => {
        this.menuShow = false
      },
      true
    )
  },
  methods: {
    useContentMenu(containerMenu) {
      const el = containerMenu
      el.addEventListener('contextmenu', this.handleContextMenu)

      // return { x, y, showMenu }
    },
    handleContextMenu(e) {
      e.preventDefault()
      e.stopPropagation()
      this.x = e.clientX
      this.y = e.clientY
      this.menuShow = true
    },
    handelClick() {
      this.menuShow = false
    },
  },
}
</script>

<style scoped>
.conten-menu {
  position: fixed;
  left: 0;
  top: 0;
}
.v-enter-from {
  opacity: 0;
}
.v-enter-to {
  transition: all 10s;
  opacity: 1;
}
</style>
