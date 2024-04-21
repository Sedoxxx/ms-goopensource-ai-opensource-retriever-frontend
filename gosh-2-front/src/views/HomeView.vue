<script>

import NavBar from '@/components/Home/NavBar.vue';
import Hero1 from '@/components/Home/Hero1.vue';
import Hero2 from '@/components/Home/Hero2.vue'
import CarouselVue from '../components/Home/Carousel.vue';
import FAQVue from '../components/Home/FAQ.vue';
export default {
  components:{
    NavBar,
    Hero1,
    Hero2,
    CarouselVue,
    FAQVue
  }
}
</script>


<template>
  <div class="main-section">
    <div class="sessions-container flex justify-content-center flex-column align-content-center">
    <div class="flex flex-column justify-content-center align-items-center gap-1">
      <header class="sessions-header flex flex-column">
        <div class="mb-8 flex">
          <div class="logo-container">
              <img src="@/assets/public/small-logo-gos.png" class="nav-logo" alt="gos-log">
          </div>
          <h1 class="sessions-header-title">GOShowcase Platform</h1>
        </div>
        <!-- <div class="flex">
        <Button @click="createSession" class="create-session-button mr-2">Create a new Session</Button>
        <div class="search-bar">
          <input
            type="text"
            v-model="searchQuery"
            placeholder="Search for a previous session..."
            class="search-input"          />
          <button @click="fetchSessions" class="search-button">Refresh</button>
        </div>
        </div> -->

      </header>

    </div>
  </div>
    <div class="center-hero">
      <Hero1 ></Hero1>
    </div>
    <CarouselVue class="caroussel"></CarouselVue>
    <div class="empty-div"></div> 
    <!-- <div class="center-hero">
      <Hero2 ></Hero2>
    </div> -->
    <!-- <FAQVue></FAQVue>  -->
  </div>
</template>

<style>
  .main-section {
    width: 100%;
  }

  .center-hero {
    display: flex;
    justify-content: center;
    align-items: center;
  }
  .hero-image {
    height: 600px;
    width: 600px;

  }
  .faq-section {
    width: 100%;
  }

  .caroussel{
    margin-bottom: 100px;
  }

  .empty-div{
    height: 200px;
  }
  .session-rectangle {
    width: 60vw;
    height: 15px;
    background-color:rgba(0, 0, 0, 1);
    color: white !important;
    border: 4px solid rgba(0, 0, 0, 0.90);
    border-radius: 100px;
    margin: 0px;
    padding: 30px 20px 30px 20px;
    display: flex;
    gap: 0 !important;
    justify-content: center;
    align-items: center;
    cursor: pointer;
    box-shadow: -5px 4px 3px rgba(0, 0, 0, 0.25);    

    transition: all 0.3s ease;
  }
  .session-rectangle span {
    font-family: IBM Plex Mono;
  }
  .sessions-header {
    width: 70vw;
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-top: 20px;
    margin-bottom: 20px;

  }
  .create-session-button{
    border-radius: 30px;
    font-family: IBM Plex Mono;
  }
  .sessions-header-title {
    font-family: "IBM Plex Mono", sans-serif;
    color: black;
    font-optical-sizing: auto;
    font-weight: 700;
    font-size: 35px;
    font-style: normal;
  
  }

  .logo-container {
    display: flex;
    justify-content: center;
    align-items: center;
}
.nav-logo {
    height: 60px;
    width: 60px;
}
  .session-rectangle:hover {
    background: transparent;
    color: rgba(0, 0, 0, 0.85) !important;
    border: 4px solid rgba(0, 0, 0, 0.85);
    transform: translateX(10px);
  }
  .search-bar {
    position: relative;
    width: 100%;
    max-width: 70%;
    border-radius: 2.5rem;
    border: 1px solid #000000b8;
  }
  .search-bar {
    position: relative;
    width: 100%;
    max-width: 606px;
    /* background-color: #000; Adjust the color to match your theme */
  }
  
  .search-input {
    flex-grow: 1;
    width: 606px;
    height: 300px;
    height: 42px;
    border: none;
    /* Hide the right border */
    padding: 20px;
    border-radius: 30px;
    color: #06b6d4;
    /* border-top-left-radius: 30px;
      border-bottom-left-radius: 20px; */
    outline: none;
    background: transparent;
    /* Set the placeholder color */
  }
  
  .search-input::placeholder {
    font-family: IBM Plex Mono;
    font-size: 14px;
    color: #aaa;
  }
  
  .search-button {
    position: absolute;
    top: 51%;
    right: 3px; /* Adjust as needed */
    transform: translateY(-49%);
    padding: 8px 23px;
    text-align: center;
    font-family: IBM Plex Mono;
    border: 2px solid #06b6d4;
    border-radius: 30px;
    background-color: #06b6d4; /* Adjust the button background color if needed */
    color: white; /* Adjust the text color if needed */
    cursor: pointer;
    outline: none;
    transition: all 0.3s ease-in-out;
  }
  
  .search-button:hover {
    background: transparent;
    color: #06b6d4;
  }

</style>
