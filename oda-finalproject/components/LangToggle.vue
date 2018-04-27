<template>
    <div>
        <v-btn-toggle v-model="$store.state.lang" id="lang-toggle">
            <v-btn @click="$store.state.lang = 'eng'" flat value="eng">
                  English
                </v-btn>
            <v-btn @click="$store.state.lang = 'esp'" flat value="esp">
                  Español
            </v-btn>
        </v-btn-toggle>
    </div>
</template>

<script>
import { mapState } from 'vuex'

export default {
    name: 'lang-toggle',
    data() {
        return {
            // selected: currentLang
        }
    }
  
}
</script>


<style scoped>
#lang-toggle{
    float:right;
}
</style>
