<template>
  <v-app>
    <v-container class="pa-0">
      <v-app-bar app color="black" dense>
        <v-container class="d-flex align-center">
          <!-- First Level Navigation -->
          <v-btn text class="text-white font-weight-bold">Dashboard</v-btn>
          <v-btn text class="text-white font-weight-bold">Projects</v-btn>
          <v-btn text class="text-white font-weight-bold">Chat</v-btn>
          <v-spacer></v-spacer>
          <v-btn text class="text-white font-weight-bold">Projectboard</v-btn>
          <v-btn text class="text-white font-weight-bold">Templates</v-btn>
          <v-btn text class="text-white font-weight-bold">Tasks</v-btn>
          <v-btn text class="text-white font-weight-bold">Hours</v-btn>
          <v-btn text class="text-white font-weight-bold">Forms</v-btn>
          <v-btn text class="text-white font-weight-bold">Documents</v-btn>
          <v-btn text class="text-white font-weight-bold">Reports</v-btn>
          <v-spacer></v-spacer>
          <v-text-field
            hide-details
            dense
            solo-inverted
            flat
            label="Search"
            class="white--text search-field"
          ></v-text-field>
          <v-btn icon>
            <v-icon color="white">mdi-cog</v-icon>
          </v-btn>
          <v-btn icon>
            <v-icon color="white">mdi-information</v-icon>
          </v-btn>
          <v-btn icon>
            <v-icon color="white">mdi-printer</v-icon>
          </v-btn>
        </v-container>
      </v-app-bar>

      <!-- Second Level Navigation -->
      <v-toolbar dense color="#e0e0e0" class="second-level-nav">
        <v-container class="d-flex align-center">
          <v-btn color="green" dark>+ CREATE TASK</v-btn>
          <v-btn color="green" dark>+ CREATE PHASE</v-btn>
          <v-btn color="green" dark>IMPORT PHASE</v-btn>
          <v-btn color="green" dark>ASSIGN TASKS</v-btn>
          <v-btn color="green" dark>MOVE TASKS</v-btn>
          <v-btn color="green" dark>DELETE TASKS/PHASES</v-btn>
          <v-btn color="green" dark>EDIT TASKS/PHASES</v-btn>
          <v-spacer></v-spacer>
          <v-btn icon color="green">
            <v-icon>mdi-cog</v-icon>
          </v-btn>
          <v-btn icon color="green">
            <v-icon>mdi-information</v-icon>
          </v-btn>
          <v-btn icon color="green">
            <v-icon>mdi-printer</v-icon>
          </v-btn>
        </v-container>
      </v-toolbar>
    </v-container>
  </v-app>
</template>

<script setup>
// Vuetify handles responsiveness out of the box
</script>

<style scoped>
.text-white {
  color: white !important;
}

.search-field {
  max-width: 200px;
}

.second-level-nav {
  margin-top: 48px;
  border-radius: 0;
}
</style>
