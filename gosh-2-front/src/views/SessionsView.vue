<template>
  <div class="sessions-container flex justify-content-center flex-column align-content-center">
    <div class="flex flex-column justify-content-center align-items-center gap-1">
      <header class="sessions-header flex flex-column">
        <div class="mb-5 flex">
          <div class="logo-container">
              <img src="@/assets/public/small-logo-gos.png" class="nav-logo" alt="gos-log">
          </div>
          <h1 class="sessions-header-title">GOShowcase Sessions</h1>
        </div>
        <div class="flex">
        <Button @click="createSession" class="create-session-button mr-2">Create a new Session</Button>
        <div class="search-bar">
          <input
            type="text"
            v-model="searchQuery"
            placeholder="Search for a previous session..."
            class="search-input"          />
          <button @click="fetchSessions" class="search-button">Refresh</button>
        </div>
        </div>

      </header>
        <div
        v-for="(session, index) in sessions"
        :key="session.id"
        class="session-rectangle flex flex-row justify-content-between gap-1 "
        @click="navigateToSession(session.id)"

      >
        <div>
        <span class="font-medium text-xl mr-3">SESSION {{ session.id }}</span>
        <i color="#000000" class="pi pi-sparkles icon-input"></i> 
        </div>

        <div>
          <i color="#fbbf24" class="pi pi-plus mr-2"></i> 
          <span class="mr-5">Created at: {{ new Date(session.created_at).toLocaleDateString() }}</span>
          <i color="#fbbf24" class="pi pi-clock mr-2 mb-1"></i> 
          <span>Last Accessed: {{ new Date(session.last_accessed).toLocaleDateString() }}</span>
        </div>
      </div>

    </div>
  </div>
</template>

<script>
import axios from 'axios';

export default {
  data() {
    return {
      sessions: [
        {
          id: 1,
        },
        {
          id: 2,
        },
        {
          id: 3,
        },
        {
          id: 4,
        },

      ],
      selectedIndex: null, // initially no session is selected
      searchQuery: ''
    };
  },
  created() {
    this.fetchSessions();
  },
  // mounted() {
  //   this.fetchSessions();
  // },
  methods: {
    fetchSessions() {
      axios.get('http://188.130.155.83:8000/sessions')
        .then(response => {
          this.sessions = response.data;
          console.log(JSON.stringify(this.sessions))
        })
        .catch(error => {
          console.error('There was an error fetching the sessions:', error);
        });
    },
    createSession() {
      // Example of data you might want to send
      const sessionData = {
        name: 'New Session',
        created_at: new Date().toISOString(),
        last_accessed: new Date().toISOString(),
      };
      axios.post('http://188.130.155.83:8000/sessions', sessionData)
        .then(response => {
          this.sessions.push(response.data); // Add the new session to the list
          console.log('Session created:', response.data);
        })
        .catch(error => {
          console.error('Error creating session:', error);
        });
    },
    selectSession(index) {
      this.selectedIndex = this.selectedIndex === index ? null : index;
    },
    navigateToSession(id) {
      this.$router.push(`/session/${id}`);
    }
  }
};
</script>

  
  <style scoped>
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
  