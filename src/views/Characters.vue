<template>
  <ListOfCharacters
    title="Characters"
    :results="results"
  />
</template>

<script>
import { useQuery } from '@/composables/useQuery'
import ListOfCharacters from '@/components/ListOfResults'

export default {
  components: {
    ListOfCharacters
  },
  setup() {
    const { results } = useQuery(`
      query($page: Int) {
        data: characters(page: $page) {
          info {
            count
            pages
            next
            prev
          }
          results {
            id
            name
            image
          }
        }
      }
    `)
    return { results }
  }
}
</script>
