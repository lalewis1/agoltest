# ArcGIS Online Test

Test authentication to ArcGIS online in nuxt app using API key

## Usage

Provide the ArcGIS API Key

```bash
echo "NUXT_PUBLIC_ESRI_API_KEY=<my-api-key>" > .env
```

Start the dev server

```bash
pnpm dev
```

Open [localhost](http://localhost:3030) and you should see a the
topographic basemap loaded from the arcgis basemap styles server.
The basemap style server won't serve unauthenticated requests, so
if you see the map you know it is working.

Interesting code in [index.vue](./pages/index.vue)

## Notes

The API Key, when created in ArcGIS portal will have some accepted referers.
The code in [index.vue](./pages/index.vue) injects the referer header manually
becuase without it you get a 401.

Not sure if this will be required when operating on a proper domain though.
