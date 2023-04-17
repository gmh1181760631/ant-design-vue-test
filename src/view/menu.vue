<!-- eslint-disable vue/multi-word-component-names -->
<template>
  <div class="father">
    <div class="pink" @click.stop>
      <content-menu :menu="menu1">
        <template> </template>
      </content-menu>
    </div>
    <div class="blue">
      <content-menu :menu="menu2">
        <template> </template>
      </content-menu>
      <div class="orange">
        <content-menu :menu="menu3">
          <template> </template>
        </content-menu>
      </div>
    </div>
  </div>
</template>

<script>
import contentMenu from '@/components/contentMenu'
export default {
  data() {
    return {
      menu1: ['一级菜单', '二级菜单', '三级菜单', '四级菜单'],
      menu2: ['表格', '标题', '超文本'],
      menu3: ['红烧鱼', '酸菜鱼', '菠菜面', '超级加倍', '特别加倍'],
    }
  },
  components: {
    contentMenu,
  },
}
</script>

<style scoped>
.father {
  display: flex;
  justify-content: space-between;
}
.pink {
  width: 500px;
  height: 500px;
  background-color: pink;
}
.blue {
  display: flex;
  align-items: end;
  width: 800px;
  height: 800px;
  background-color: #8df;
}
.orange {
  width: 400px;
  height: 400px;
  background-color: orange;
}
</style>
