/**
 * Copyright 2017 Fredrik J
 * Released under the MIT license
 */
<template>
   <div>
      <span>Data is:</span>
      <p style="white-space: pre">{{ input }}</p>
      <br>
      <textarea v-model="input" placeholder="add space seperated numerical data"></textarea>
   </div>
</template>

<script>
export default {
   data: () => ({
      input: []
   }),
   created() {
   },
   methods: {
      publish( data ) {
         const { resource } = this.features.input;
         this.eventBus.publish( `didReplace.${resource}`, { resource, data: input } );
      }
   }
};
</script>
