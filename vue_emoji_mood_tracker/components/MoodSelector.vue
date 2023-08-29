<template>
  <div>
    <h2>How are you feeling today?</h2>
    <div class="emoji-list">
      <div v-for="emoji in emojis" :key="emoji" @click="selectMood(emoji)">
        {{ emoji }}
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      emojis: ['😄', '😊', '😐', '😞', '😢']
    };
  },
  methods: {
    selectMood(emoji) {
      this.$emit('addMood', {
        emoji,
        timestamp: new Date().toLocaleString()
      });
    }
  }
};
</script>
