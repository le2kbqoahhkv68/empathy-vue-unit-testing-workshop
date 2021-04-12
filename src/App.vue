<template>
  <div id='app'>
    Dropdown
    <Dropdown
      :options="options"
      v-model="selected"
    />
  </div>
</template>

<script lang='ts'>
import { Component, Vue } from 'vue-property-decorator'
import Dropdown from '@/components/Dropdown.vue'
import { AxiosResponse } from 'axios'

@Component({
  components: { Dropdown }
})
export default class App extends Vue {
  options: string[] = []
  selected: string | null = null;

  mounted (): void {
    this.$http.get('http://localhost:3001/options')
      .then(({ data: options }: AxiosResponse) => {
        this.options = options
      })
  }
}
</script>

<style>
</style>
