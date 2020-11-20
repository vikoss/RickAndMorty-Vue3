<template>
  <ListOfLocations
    title="Locations"
    :results="results"
  />
</template>

<script>
import { useQuery } from '@/composables/useQuery'
import ListOfLocations from '@/components/ListOfResults'

export default {
  components: {
    ListOfLocations
  },
  setup() {
    const { results } = useQuery(`
      query($page: Int) {
        data: locations(page: $page) {
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
