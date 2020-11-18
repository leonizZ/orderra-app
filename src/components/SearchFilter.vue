<template>
  <v-row no-gutters class="search-filter ">
    <v-col cols="6" class="ma-0 px-3">
      <v-row no-gutters class="filter-cont">
        <v-col cols="6" class="ma-0 pa-0">
          <v-select
            v-model="location"
            :items="states"
            menu-props="auto"
            label="Dumaguete City"
            solo
            flat
            dense
            hide-details
            prepend-icon="mdi-target primary--text"
            single-line
          ></v-select>
        </v-col>
        <v-col cols="3" class="ma-0 pa-0">
          <v-select
            v-model="delOption"
            :items="states"
            menu-props="auto"
            label="Pick Up"
            solo
            flat
            dense
            hide-details
            prepend-icon="mdi-shopping warning--text"
            single-line
          ></v-select>
        </v-col>
        <v-col cols="3" class="ma-0 pa-0">
          <v-select
            v-model="category"
            :items="states"
            menu-props="auto"
            label="Best Deals"
            solo
            flat
            dense
            hide-details
            prepend-icon="mdi-sale amber--text text--accent-3"
            single-line
          ></v-select>
        </v-col>
      </v-row>
    </v-col>
    <v-col cols="6" class="ma-0 pa-0">
      <div class="search-cont d-flex">
        <v-text-field
          placeholder="Search here.."
          prepend-inner-icon="mdi-magnify"
          solo
          dense
          flat
          background-color="#fafafa"
          clearable
        ></v-text-field>
        <v-btn color="primary " class=" mx-3">
          <v-icon>
            mdi-filter-variant
          </v-icon>
        </v-btn>
        <v-btn color="warning" class=" white--text">
          <v-icon dark>
            mdi-cart-outline
          </v-icon>
        </v-btn>
      </div>
    </v-col>
  </v-row>
</template>

<script>
export default {
  data: () => ({
    location: null,
    delOption: null,
    category: null,
    states: ["Alabama", "Alaska", "American Samoa"]
  })
};
</script>

<style lang="sass">
// .search-filter
//     position: fixed
//     top: 0
//     z-index: 66
//     background-color:#fff
</style>
