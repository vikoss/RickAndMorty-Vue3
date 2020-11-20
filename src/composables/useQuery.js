import { request as fetch } from "graphql-request"
import { ref, inject, watchEffect } from 'vue'
import { useRoute } from 'vue-router'

export function useQuery(query) {
    const info = inject('info')
    const route = useRoute()
    let results = ref([])

    watchEffect(() => {
        fetch('https://rickandmortyapi.com/graphql',
            query,
            // watchEffect observa en este caso a la propiedad route y se recalcula
            {page: parseInt(route.params.page)}
        )
        .then(({ data }) => {
            console.log(data)
            results.value = data.results
            info.value = data.info
        })
    })

    return { results }
}