<template>
  <div>
    <ul class="news-list">
      <li v-for="job in this.$store.state.jobs" :key="job.id" class="post">
        <div class="points">
          {{ job.points || 0 }}
        </div>
        <div>
          <p class='news-title'>
            <a v-bind:href="job.url">
              {{ job.title }}
            </a>
          </p>
          <small class="link-text">
            {{ job.time_ago }} by 
            <a :href="job.url">
              {{ job.domain }}
            </a>
          </small>
        </div>
      </li>
    </ul>
  </div>
</template>

<script>
//import ListItem from '../components/ListItem.vue';
export default {
  // components: {
  //   ListItem,
  // },
  created() {
    this.$store.dispatch('FETCH_JOBS');
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