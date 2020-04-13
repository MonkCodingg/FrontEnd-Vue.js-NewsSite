<template>
  <div>
    <ul class="news-list">
      <li v-for="item in fetchedAsk" v-bind:key="item.id" class="post">
        <div class="points">
          {{ item.points }}
        </div>
        <div>
          <p class="news-title">
            <router-link v-bind:to="`item/${item.id}`">
              {{ item.title }}
            </router-link>
          </p>
          <small class="link-text">
            {{ item.time_go }} by 
            <router-link v-bind:to="`/user/${item.user}`" class="link-text">
              {{ item.user }}
            </router-link>
          </small>
        </div>
      </li>
    </ul>
  </div> 
</template>

<script>
import { mapState, mapGetters } from 'vuex';
//import ListItem from '../components/ListItem.vue';
export default {
    // components: {
    //     ListItem,
    // }
    computed: {
       ...mapGetters([ // spread operator
           'fetchedAsk'
       ]),
        // #2
        // ...mapState({
        //     fetchedAsk: state => state.ask
        // }),

        // #1
        // ask() {
        //     return this.$store.state.ask;
        // }
    },
    created() {
       this.$store.dispatch('FETCH_ASK');   
    },
}
</script>

<style scoped>
.news-list {
  margin: 0;
  padding: 0;
}
.post {
  list-style: none;
  display: flex;
  align-items: center;
  border-bottom: 1px solid;
}
.points {
  width: 80px;
  height: 60px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: #42B883;
}
.news-title {
  margin: 0;
}
.link-text {
  color: #828282;
}
</style>