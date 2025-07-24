<style>
@import url("~/assets/css/main.css");
</style>

<template>
  <div id="appDiv"></div>
</template>

<script setup lang="ts">
onMounted(async () => {
  const { default: esriConfig } = await import("@arcgis/core/config");
  const { default: Map } = await import("@arcgis/core/Map");
  const { default: MapView } = await import("@arcgis/core/views/MapView");
  const { default: PortalGroup } = await import(
    "@arcgis/core/portal/PortalGroup"
  );
  const { default: Portal } = await import("@arcgis/core/portal/Portal");

  const config = useRuntimeConfig();
  esriConfig.apiKey = config.public.esriApiKey;

  const portal = new Portal({
    url: config.public.portalUrl,
  });
  const group = new PortalGroup({
    portal: portal,
    id: config.public.portalGroupId,
  });
  const queryItems = await group.queryItems();
  queryItems.results.forEach(async (queryItem) => {
    await queryItem.load();
    console.log(JSON.stringify(queryItem));
    console.log(`'${queryItem.title}' is layer? ${queryItem.isLayer}`);
  });

  const map = new Map({
    basemap: "arcgis/topographic",
  });

  const mapView = new MapView({
    map,
    container: "appDiv",
    center: [-118.805, 34.027],
    zoom: 13,
  });
});
</script>
