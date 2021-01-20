<template>
  <div>
    <vue-good-table
      :columns="columns"
      :rows="rows"
      :search-options="{ enabled: true }"
    />
  </div>
</template>

<script>
import "vue-good-table/dist/vue-good-table.css";
import { VueGoodTable } from "vue-good-table";
import search_obj from "../assets/table-example.json";
export default {
  name: "TableComp",
  components: {
    VueGoodTable,
  },
  data() {
    return search_obj;
  },
};
</script>
