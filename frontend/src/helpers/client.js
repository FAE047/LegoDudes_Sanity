import {createClient} from '@sanity/client'

const client = createClient({
    projectId: "vioapooz",
    dataset: "production",
    useCdn: true,
    apiVersion: "2026-04-13"

})

export default client