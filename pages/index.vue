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

  const config = useRuntimeConfig();
  esriConfig.apiKey = config.public.esriApiKey;
  esriConfig.request.interceptors.push({
    before: function (params) {
      if (params.url.startsWith("https://basemapstyles")) {
        const referer = `${window.location.protocol}//${window.location.host}`;
        params.requestOptions.headers = {
          ...params.requestOptions.headers,
          Referer: referer,
        };
      }
    },
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
