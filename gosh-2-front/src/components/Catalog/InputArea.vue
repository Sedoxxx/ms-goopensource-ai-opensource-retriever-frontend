<template>

    <div class="sticky-container">
        <H1 class="text">GOS AI</H1>
        <i color="#000000" class="pi pi-sparkles icon-input"></i> 
        <Textarea v-model="searchQuery" autoResize rows="3" cols="20" v-on:keyup.enter="sendQuery" />
      <!-- <textarea v-model="userInput" @keyup.enter="sendQuery" placeholder="Enter your query..."></textarea> -->
      <!-- <button @click="leftAction">←</button>
      <button @click="rightAction">→</button> -->

      <div>
        <Button @click="leftAction" class="button-input" icon="pi pi-arrow-left" aria-label="Submit" />
        <Button @click="rightAction" class="button-input" icon="pi pi-arrow-right" aria-label="Submit" />
        <!-- <Button class="button-input" icon="pi pi-sliders-v" aria-label="Submit" /> -->
        <SiderBar ref="sidebar" @loading="toggleLoading" @fetched="handleFetchedCatalog" :searchQuery="searchQuery"></SiderBar>
      </div>
    </div>
  </template>

<script>
import axios from 'axios';
import SiderBar from '@/components/Catalog/SiderBar.vue'


export default {
    components: {

      SiderBar,

    },
    props: {
        session_id: Number,
        pageNumber: Number,
        // searchQuery: String
    },
   data() {
    return {
      userInput: '',
      searchQuery: 'HI TEST TEST TEST'
    };
  },
  methods: {
    sendQuery() {
      console.log("helloooo ", this.session_id )
      this.$emit('loading');  
      axios.post('http://188.130.155.83:8000/prompts', {
        session_id: this.session_id, 
        prompt_text: this.searchQuery,
        created_at: new Date().toISOString(),
        last_accessed: new Date().toISOString(),
    })
        .then(response => {
          console.log(response);
          this.$emit('loading');  
        })
        .catch(error => {
          console.error(error);
          this.$emit('loading');  
        });
    },
    leftAction() {
      console.log('Left action performed');
      this.$emit('leftAction')

    },
    rightAction() {
      console.log('rightAction');
      this.$emit('rightAction')
    }
  }
}
</script>

<style scoped>

.text{
    font-family: "Montserrat", sans-serif;
    font-optical-sizing: auto;
    font-weight: 700;
    font-style: normal;
    color: black;
    font-size: 1.5rem;
}
.icon-input{
    font-size: 1.3rem;
    color: black !important;
    margin-right: 0.5rem;
}
.button-input{
    width: 3.5rem;
    height: 3.5rem;
    background: black;
    margin-right: 0.5rem;
}
.sticky-container {
  position: fixed;
  bottom: 0;
  left: 50%;
  transform: translateX(-50%);
  width: 60vw;
  padding: 20px;
  background-color: rgba(255, 255, 255, 1);
  border-radius: 15px 15px 0 0;
  display: flex;
  align-items: center;
  justify-content: space-between;
  column-gap: 0;
  box-shadow: 0px 0px 40px -3px #06b6d4;
  transition: box-shadow 0.3s ease-in-out;
  animation: rainbow-color 15s infinite linear;

}

@keyframes rainbow-color {
  0% { box-shadow: 0px 0px 40px -3px rgba(255, 0, 0, 0.8); }      /* Red */
  17% { box-shadow: 0px 0px 40px -3px rgba(255, 165, 0, 0.8); }   /* Orange */
  34% { box-shadow: 0px 0px 40px -3px rgba(255, 255, 0, 0.8); }   /* Yellow */
  51% { box-shadow: 0px 0px 40px -3px rgba(0, 128, 0, 0.8); }     /* Green */
  68% { box-shadow: 0px 0px 40px -3px rgba(0, 0, 255, 0.8); }     /* Blue */
  85% { box-shadow: 0px 0px 40px -3px rgba(75, 0, 130, 0.8); }    /* Indigo */
  100% { box-shadow: 0px 0px 40px -3px rgba(238, 130, 238, 0.8); } /* Violet */
}

.sticky-container:hover {
    cursor: pointer;
    box-shadow: 0px 0px 40px -3px #06b6d4;
}


textarea {
  width: 70%;
  height: 50px; /* Adjust based on need */
  border-radius: 4px;
  padding: 8px;
  resize: none; /* To avoid manual resizing */
}

button {
  border: none;
  background: none;
  cursor: pointer;
  font-size: 24px; /* Adjust based on your design */
}
</style>
