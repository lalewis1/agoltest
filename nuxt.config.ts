// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
    modules: ["nuxt-security"],
    security: {
        corsHandler: {
            origin: "https://south32.maps.arcgis.com",
            methods: "*",
            allowHeaders: "*",
            exposeHeaders: "*",
        }
    },
    compatibilityDate: '2025-05-15',
    devtools: {enabled: true},
    runtimeConfig: {
        public: {
            portalUrl: "",
            portalGroupId: "",
            esriApiKey: ""
        }
    }
})
