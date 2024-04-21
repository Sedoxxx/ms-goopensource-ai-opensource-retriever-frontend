<template>
    <div class="projects-catalog">
      <div class="container_filtering_projects">
        <div class="container_search_products ">
          <header class="projects-header flex justify-content-center">
            <div class="logo-container">
                    <img src="@/assets/public/small-logo-gos.png" class="nav-logo" alt="gos-log">
            </div>
            <h1>GOShowcase Repositories</h1>
            <!-- <div class="search-bar">
              <input
                type="text"
                v-model="searchQuery"
                placeholder="Search for a product by AI..."
                class="search-input"
              />
              <button @click="makeQuery" class="search-button">Search</button>
            </div> -->
          </header>
          <section v-if="loading === false" class="product-list product-grid">
            <CatalogCard
              v-for="product in products"
              :repositoryData="product"
              :key="product"
              :repositoryName="product.repositoryName"
              :forks = "product.forks"
              :stars =  "product.stars"
              :description = "product.description"
              :avatarURL= "product.avatarURL"
              :contributorAccount="product.contributorAccount" 
            ></CatalogCard>
  
            <div class="no-products-container" v-if="filteredProducts.length === 0">
              <p class="no-products">Such project is not available...</p>
            </div>
          </section>
          <div   v-if="loading === true"  class="product-list product-grid">
              <!-- <ProgressSpinner v-if="this.loading === false" /> -->
              <Skeleton width="28rem" height="30rem" class="mr-2"></Skeleton>
              <Skeleton width="28rem" height="30rem" class="mr-2"></Skeleton>
              <Skeleton width="28rem" height="30rem" class="mr-2"></Skeleton>
              <Skeleton width="28rem" height="30rem" class="mr-2"></Skeleton>
              <Skeleton width="28rem" height="30rem" class="mr-2"></Skeleton>
              <Skeleton width="28rem" height="30rem" class="mr-2"></Skeleton>
          </div>
  
          <Paginator v-model:page="currentPage" :rows="10" :totalRecords="120" :rowsPerPageOptions="[10, 20, 30]" @page="onPageChange"></Paginator>
        </div>
        <!-- <SiderBar ref="sidebar" @loading="toggleLoading" @fetched="handleFetchedCatalog" :searchQuery="this.searchQuery"></SiderBar> -->
      </div>
      <InputArea ref="inputArea" @leftAction="leftAction" @rightAction="rightAction" @loading="toggleLoading" :session_id="sessionId" :searchQuery="searchQuery" ></InputArea>
    </div>
  </template>
  
  <script>
  import axios from 'axios';

  import CatalogCard from '@/components/Catalog/CatalogCard.vue'
  import SiderBar from '@/components/Catalog/SiderBar.vue'
  import InputArea from '../components/Catalog/InputArea.vue';

  import { ref, defineExpose } from 'vue'

  export default {
    components: {
      CatalogCard,
      SiderBar,
      InputArea
    },
    data() {
      return {
  
        totalRecords : Number, 
        rows : Number,
        sessionId: this.$route.params.id,
        promptId: -1,        

        loading: false,
        pageNumber: 0,
        no_obj: 10,
        cur_li: 0,
        searchQuery: "Search for the Open Source Project You Desire !"
        ,
        products: [
        {
  session_id: 1,
   prompt_id: 8,
    name: "example",
    full_name: "Example Repository",
    private: false,
    owner_name: "John Doe",
    owner_avatar_url: "https://example.com/avatar.jpg",
    repo_html_url: "https://github.com/example",
    repo_api_url: "https://api.github.com/repos/example",
    short_description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Aliquet bibendum enim facilisis gravida. Pharetra magna ac placerat vestibulum lectus mauris ultrices eros. Cum sociis natoque penatibus et magnis dis parturient montes. Neque convallis a cras semper auctor neque vitae. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Aliquet bibendum enim facilisis gravida. Pharetra magna ac placerat vestibulum lectus mauris ultrices eros. Cum sociis natoque penatibus et magnis dis parturient montes. Neque convallis a cras semper auctor neque vitae.",
    fork: false,
  number_of_forks: 590,
    number_of_stars: 1810,
    number_of_watchers: 90,
    number_of_collaborators: 15,
    number_of_contributors: 9,
    number_of_branches: 15,
    number_of_tags: 333,
    number_of_pulls: 15,
    number_of_commits: 190,
    number_of_downloads: 1000,
    number_of_issues: 121,
    languages: "VueJS,HTML,CSS,Python,Javascript,Java,C++",
    created_at: "2022-04-20",
    updated_at: "2024-04-20",
    pushed_at: "2024-04-20",
    size: 1024,
    license_key: "MIT",
    license_name: "MIT License",
    license_url: "https://opensource.org/licenses/MIT",
    license_spdx_id: "MIT",
    topics: "example, sample, repository",
    visibility: "Public",
    archived: false,
    default_branch: "main"
},
{
  session_id: 1,
   prompt_id: 8,
    name: "example",
    full_name: "Aymen Repository",
    private: false,
    owner_name: "Aymen Daassi",
    owner_avatar_url: "https://example.com/avatar.jpg",
    repo_html_url: "https://github.com/example",
    repo_api_url: "https://api.github.com/repos/example",
    short_description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Aliquet bibendum enim facilisis gravida. Pharetra magna ac placerat vestibulum lectus mauris ultrices eros. Cum sociis natoque penatibus et magnis dis parturient montes. Neque convallis a cras semper auctor neque vitae. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Aliquet bibendum enim facilisis gravida. Pharetra magna ac placerat vestibulum lectus mauris ultrices eros. Cum sociis natoque penatibus et magnis dis parturient montes. Neque convallis a cras semper auctor neque vitae.",
    fork: false,
  number_of_forks: 590,
    number_of_stars: 1810,
    number_of_watchers: 90,
    number_of_collaborators: 15,
    number_of_contributors: 9,
    number_of_branches: 15,
    number_of_tags: 333,
    number_of_pulls: 15,
    number_of_commits: 190,
    number_of_downloads: 1000,
    number_of_issues: 121,
    languages: "VueJS,HTML,CSS,Python,Javascript,Java,C++",
    created_at: "2022-04-20",
    updated_at: "2024-04-20",
    pushed_at: "2024-04-20",
    size: 1024,
    license_key: "MIT",
    license_name: "MIT License",
    license_url: "https://opensource.org/licenses/MIT",
    license_spdx_id: "MIT",
    topics: "example, sample, repository",
    visibility: "Public",
    archived: false,
    default_branch: "main"
},
{
  session_id: 1,
   prompt_id: 10,
    name: "example",
    full_name: "AI/MLS Repository",
    private: false,
    owner_name: "Aymen Daassi",
    owner_avatar_url: "https://example.com/avatar.jpg",
    repo_html_url: "https://github.com/example",
    repo_api_url: "https://api.github.com/repos/example",
    short_description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Aliquet bibendum enim facilisis gravida. Pharetra magna ac placerat vestibulum lectus mauris ultrices eros. Cum sociis natoque penatibus et magnis dis parturient montes. Neque convallis a cras semper auctor neque vitae. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Aliquet bibendum enim facilisis gravida. Pharetra magna ac placerat vestibulum lectus mauris ultrices eros. Cum sociis natoque penatibus et magnis dis parturient montes. Neque convallis a cras semper auctor neque vitae.",
    fork: false,
  number_of_forks: 590,
    number_of_stars: 1810,
    number_of_watchers: 90,
    number_of_collaborators: 15,
    number_of_contributors: 9,
    number_of_branches: 15,
    number_of_tags: 333,
    number_of_pulls: 15,
    number_of_commits: 190,
    number_of_downloads: 1000,
    number_of_issues: 121,
    languages: "VueJS,HTML,CSS,Python,Javascript,Java,C++",
    created_at: "2022-04-20",
    updated_at: "2024-04-20",
    pushed_at: "2024-04-20",
    size: 1024,
    license_key: "MIT",
    license_name: "MIT License",
    license_url: "https://opensource.org/licenses/MIT",
    license_spdx_id: "MIT",
    topics: "example, sample, repository",
    visibility: "Public",
    archived: false,
    default_branch: "main"
},


        ],
        filteredProducts: [],
        cataloging: [],
        searchQuery: ''
      }
    },
    mounted(){
      this.fetchData();
      this.updateToLatestPrompt();
    },
    created() {
      this.filteredProducts = this.products
    },

    methods: {
      updateToLatestPrompt(){
        const sessionId = this.$route.params.id;
        axios.get(`http://188.130.155.83:8000/prompts?session_id=${sessionId}`)
          .then(response => {
            console.log(JSON.stringify(response.data));
            this.prompts = response.data;
            let n = this.prompts.length;
            if(n != 0){
              this.promptId = this.prompts[n-1].id;
              console.log("Selected the following prompt id: ", this.promptId);
            }
          })
          .catch(error => {
            console.error('Error: Maybe out of bounds\n', error);
            this.loading = false;
          });
      },

      onPageChange(event) {
      this.no_obj = event.rows;
      this.cur_li = event.page;
      this.fetchData();
    } ,
      handleFetchedCatalog(productCatalog) {
        this.cataloging = productCatalog;
        console.log(JSON.stringify(this.cataloging))
      },
      toggleLoading(){
          this.loading = !this.loading
      },
      performSearch() {
        if (this.searchQuery) {
          this.filteredProducts = this.products.filter(
            (product) =>
              product.big_title.toLowerCase().includes(this.searchQuery.toLowerCase()) ||
              product.small_title.toLowerCase().includes(this.searchQuery.toLowerCase())
          )
        } else {
          this.filteredProducts = this.products
      }},
      
      makeQuery() {
          console.log("yes")
          this.$refs.sidebar.sendFilterRequest();
      },
      fetchData() {
        if(this.promptId == -1){
          console.log("No Prompt has been issued yet");
          return;
        }
        const sessionId = this.$route.params.id; // Get session ID from route parameters
        const promptId = this.promptId;
        console.log(this.cur_li);
        
        // Get prompt ID from component data
        this.loading = true;
        console.log(sessionId," ",promptId);
        let x = `?page_size=${this.no_obj}&page_no=${this.cur_li+1}`;
        console.log(`http://188.130.155.83:8000/repos/${sessionId}/${promptId}` + x);
        axios.get(`http://188.130.155.83:8000/repos/${sessionId}/${promptId}` + x)
          .then(response => {
            console.log(JSON.stringify(response.data));
            this.products = response.data;
            this.filteredProducts = response.data; 
            // Assuming you want to initialize filtered products too
            this.loading = false;
          })
          .catch(error => {
            console.error('Error fetching repositories:', error);
            this.loading = false;
          });
      },
      updatePage(i){
        const sessionId = this.$route.params.id;
        console.log("Sent request to: ", `http://188.130.155.83:8000/prompts/${sessionId}/${this.pageNumber + i}`);
        axios.get(`http://188.130.155.83:8000/prompts/${sessionId}/${this.pageNumber + i}`)
          .then(response => {
            console.log(JSON.stringify(response.data));
            this.prompt = response.data;
            this.promptId = this.prompt.id;
            this.$refs.inputArea.changeText(this.prompt.prompt_text);
            this.fetchData();
            console.log(prompt);
          })  
          .catch(error => {
            console.error('Error: Maybe out of bounds', error);
            this.loading = false;
          });
      },
      leftAction(){
        const sessionId = parseInt(this.$route.params.id,10); // Get session ID from route parameters
        const promptId = this.promptId;
        axios.get(`http://188.130.155.83:8000/prompts/?prompt_id=${promptId}&session_id=${sessionId}`)
          .then(response => {
            console.log(JSON.stringify(response.data));
            this.prompt = response.data;
            this.pageNumber = this.prompt[0].position;
            this.updatePage(-1);
          })
          .catch(error => {
            console.error('Error Going left', error);
            this.loading = false;
          });
      }
      ,
      rightAction(){
        
        const sessionId = parseInt(this.$route.params.id,10); // Get session ID from route parameters
        const promptId = this.promptId; 
        axios.get(`http://188.130.155.83:8000/prompts/?prompt_id=${promptId}&session_id=${sessionId}`)
          .then(response => {
            console.log(JSON.stringify(response.data));
            this.prompt = response.data;
            this.pageNumber = this.prompt[0].position;
            this.updatePage(1);
          })
          .catch(error => {
            console.error('Error Going right', error);
            this.loading = false;
          });
      
      }
      // async fetchData() {
      //         try {
      //             const response = await Axios.get(`http://91.107.124.108:5173/v1/home/star?limit=${this.limit}&page=${this.currentPage}`);
      //             this.products = response.data; // Adjust based on your actual response structure
      //             this.currentPage++;
      //         } catch (error) {
      //             console.error("Error fetching products:", error);
      //             // Handle error (e.g., show error message)
      //         }
      // },
    }
  }
  </script>
  
  <style scoped>
  
  .loading-div {
      width: 100%;
      height: 70vh;
      display: flex;
      justify-content: center;
      align-items: center;
  
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
  
  .projects-catalog {
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    background-image: url('../assets/images/main-page/pattern-bg.svg');
  }
  .container_filtering_projects {
    display: flex;
    justify-content: space-between;
    margin: 0;
    gap: 5rem;
    width: 80%;
  }
  .container_search_products {
    padding: 0 0;
    margin: 0 0 0 0;
  }
  .product-header {
    display: flex;
    justify-content: flex-start;
    align-items: center;
  }
  .search-bar {
    position: relative;
    width: 100%;
    max-width: 70%;
    border-radius: 2.5rem;
    border: 1px solid #000000b8;
  }
  
  .product-grid {
    grid-template-columns: repeat(auto-fill, minmax(350px, 1fr));
    width: 100%;
    margin-right: 5%;
  }
  
  .projects-header > h1 {
    /* font-family: "Montserrat", sans-serif;
    font-optical-sizing: auto;
    font-weight: 700;
    font-size: 35px;
    font-style: normal;
 */
    font-family: "IBM Plex Mono", sans-serif;
    font-optical-sizing: auto;
    font-weight: 700;
    font-size: 35px;
    font-style: normal;
  }
  
  .product-grid {
    display: grid;
    grid-template-columns: repeat(3, minmax(350px, 1fr));
    grid-column-gap: 35px;
    grid-row-gap: 35px;
    padding: 20px;
    margin-bottom: 50px;
  }
  
  .background {
    position: absolute;
    z-index: 0;
    top: 0;
    left: 0;
  }
  
  h1 {
    font-size: larger;
    color: black;
  }
  
  .projects-header {
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-top: 20px;
    margin-bottom: 20px;
  }
  
  .no-products-container {
    grid-column: span 2;
    width: 70vw;
    height: 60vh;
    display: flex;
    justify-content: center;
    align-items: center;
  }
  
  .no-products {
    text-align: center;
    margin-top: 20px;
    font-family: IBM Plex Mono;
    font-weight: 500;
    font-size: 30px;
    color: black;
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
  
  @media (max-width: 768px) {
    .projects-catalog {
      /* background: black; */
      background-image: url('../assets/images/main-page/pattern-bg.svg');
    }
    .projects-header {
      display: flex;
      flex-direction: column;
      justify-content: center;
    }
    .search-bar {
      margin-top: 1rem;
      width: auto;
    }
    .search-input {
      width: 90vw;
    }
  
    .product-grid {
      grid-template-columns: 1fr;
    }
    .container_filtering_projects {
      flex-wrap: wrap;
    }
    .p-card.sidebar {
      height: fit-content;
      width: 100%;
    }
    .container_search_products {
      margin: 0 5%;
    }
  }
  </style>
  