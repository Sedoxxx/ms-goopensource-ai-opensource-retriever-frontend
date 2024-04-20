<template>
    <div class="sessions-container flex justify-content-center flex-column align-content-center">

        <div class="flex flex-column justify-content-center align-items-center gap-1">
            <header class="sessions-header">
            <h1>Sessions</h1>
                <div class="search-bar">
                <input
                    type="text"
                    v-model="searchQuery"
                    placeholder="Search for a previous session..."
                    class="search-input"
                />
                <button @click="makeQuery" class="search-button">Search</button>
                </div>
        </header>
        <div
            v-for="(session, index) in sessions"
            :key="index"
            class="session-rectangle flex flex-row justify-content-between gap-0 "
            :class="{ 'hovered': selectedIndex === index }"
            @click="selectSession(index)"
        >
            <span class=" font-medium text-xl">SESSION {{ index + 1 }}</span>
            <div>
              <i color="#fbbf24" class="pi pi-plus mr-2"></i> 
                <span class="mr-5">Created at: 20-04-2024</span>
                <i color="#fbbf24" class="pi pi-clock mr-2 mb-1"></i> 
                <span>Last Accessed: 20-04-2024</span>
            </div>
        </div>
        </div>
    </div>
  </template>
  
  <script>
  export default {
    data() {
      return {
        sessions: ['Session 1', 'Session 2', 'Session 3','Session 1', 'Session 2', 'Session 3','Session 1', 'Session 2', 'Session 3'],
        cards: [
           {
            name: "Session 1",
            lastAccessed: "23 february",
            created_at: "19 february",
           },


        ], // example session data
        selectedIndex: null // initially no session is selected
      };
    },
    methods: {
      selectSession(index) {
        // toggle selection
        this.selectedIndex = this.selectedIndex === index ? null : index;
      }
    }
  };
  </script>
  
  <style>
  .session-rectangle {
    width: 60vw;
    height: 15px;
    background-color:rgba(0, 0, 0, 1);
    color: white !important;
    border: 4px solid rgba(0, 0, 0, 0.90);
    margin: 0px;
    padding: 30px 20px 30px 20px;
    display: flex;
    gap: 0 !important;
    justify-content: center;
    align-items: center;
    cursor: pointer;
    border-radius: 0px;
    transition: all 0.3s ease;
  }
  .sessions-header {
    width: 70vw;
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-top: 20px;
    margin-bottom: 20px;
  }
  .sessions-header > h1 {
    color: Black;
    font-family: Raleway;
    font-weight: bold;
    font-size: 30px;
  }
  .session-rectangle:hover {
    background: transparent;
    color: rgba(0, 0, 0, 0.85) !important;
    border: 4px solid rgba(0, 0, 0, 0.85);
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
    transform: translateY(-50%);
    padding: 9px 22px;
    text-align: center;
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
  