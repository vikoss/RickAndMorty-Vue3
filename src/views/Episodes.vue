<template>
  <ListOfEpisodes
    title="Episodes"
    :results="results"
  />
</template>

<script>
import { useQuery } from '@/composables/useQuery'
import ListOfEpisodes from '@/components/ListOfResults'

export default {
  components: {
    ListOfEpisodes
  },
  setup() {
    const { results } = useQuery(`
      query($page: Int) {
        data: episodes(page: $page) {
          info {
            count
            pages
            next
            prev
          }
          results {
            id
            name
          }
        }
      }
    `)
    return { results }
  }
}
</script>
