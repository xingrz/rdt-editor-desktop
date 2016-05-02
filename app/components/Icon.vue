<template>
  <img class="icon" :src="url" />
</template>

<script>
import { createHash } from 'crypto'

export default {
  props: [ 'name' ],
  computed: {
    file () {
      return `BSicon_${this.name.replace(/ /, '_')}.svg`
    },
    hash () {
      const hash = createHash('md5')
      hash.write(this.file, 'utf-8')
      return hash.digest('hex')
    },
    url () {
      return 'https://upload.wikimedia.org/wikipedia/commons/thumb'
      + `/${this.hash.substring(0, 1)}/${this.hash.substring(0, 2)}`
      + `/${encodeURIComponent(this.file)}`
      + `/40px-${encodeURIComponent(this.file)}.png`
    }
  }
}
</script>

<style lang="scss" scoped>
.icon {
  display: block;
  position: absolute;

  width: 20px;
  height: 20px;

  margin: 0;
  padding: 0;

  border: none;
}
</style>
