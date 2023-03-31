<template>
  <div>
    <a-form-model layout="inline" :model="formInline" @submit.native.prevent>
      <a-form-model-item>
        <a-range-picker v-model="date" @change="onChange" />
      </a-form-model-item>
    </a-form-model>
    <button @click="fn">点击</button>
  </div>
</template>
<script>
// import moment from 'moment';
import { quickTime } from '@/utlis/dayjs'
export default {
  data() {
    return {
      formInline: {
        user: '',
        password: '',
      },
      date: quickTime('本季度'),
    }
  },
  created() {
    // console.log(quickTime('本年度'))
  },
  methods: {
    onChange(value) {
      console.log(value)
    },
    fn() {
      this.fn1()
    },

    simpleDebounce(fn, delay = 100) {
      let timer = null
      return function () {
        let args = arguments
        if (timer) {
          clearTimeout(timer)
        }
        timer = setTimeout(() => {
          fn.apply(this, args)
        }, delay)
      }
    },
    fn1() {
      console.log(123)
    },
  },
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
