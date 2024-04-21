
<template>
    <div class="card">
        <div class="carousel-title plex-mono">  <i color="#fbbf24" class="icon-input pi pi-star-fill mr-2"></i>   TOP Repositories By Stars         <i color="#fbbf24" class="icon-input pi pi-star-fill mr-2"></i> </div>

        <Carousel v-if=" mobile === true" :value="products" :numVisible="1" :numScroll="1" :responsiveOptions="responsiveOptions" circular :autoplayInterval="3000">
            <template  #item="slotProps">
                <CatalogCard class="catalog-card"
              :repositoryData="slotProps.data"
              :key="slotProps.data"
            ></CatalogCard>
            </template>
        </Carousel>
        <Carousel v-else :value="products" :numVisible="3" :numScroll="1" :responsiveOptions="responsiveOptions" circular :autoplayInterval="3000">
            <template  #item="slotProps">
                <CatalogCard class="catalog-card"
              :repositoryData="slotProps.data"
              :key="slotProps.data"
            ></CatalogCard>
            </template>
        </Carousel>
    </div>
</template>

<script>
import Axios from 'axios'
import CatalogCard from '../Catalog/CatalogCard.vue';
export default {
    components: {
        CatalogCard
    },
    data() {
        return {
            mobile: false,
            numVis: 3,
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
            responsiveOptions: [/* Your responsive options here */],
            currentPage: 1,
            limit: 21, // Assuming you want to fetch 3 items at a time
        };
    },async mounted() {
        await this.fetchData();
    },
    mounted() {
    window.scroll(0, 150);
    if (window.innerWidth > 768) {
      this.mobile = false;
    }
    else {
      this.mobile = true
    }
    console.log(this.numVis)
    // if (window.innerWidth > 1024) {
    //   this.showHead = true;
    // }
    window.addEventListener('resize', this.handleResize);


    // fetch('./code_templates.json')
    //     .then(response => response.json())
    //     .then(data => {
    //       this.codeTemplates = data;
    //       print(JSON.stringify(data))
    // }).catch(error => console.error("Error fetching the file"))
    
  },
  beforeDestroy() {
        window.removeEventListener('resize', this.handleResize); // Cleanup to prevent memory leaks
    },
    methods: {
        handleResize() {
      if  (window.innerWidth <= 768  ) {
        this.mobile = true;
        this.numVis = 1
      } else {
        this.mobile = false;
        this.numVis = 3
      }
    },
        async fetchData() {
            try {
                const response = await Axios.get(`http://91.107.124.108:5173/v1/home/star?limit=${this.limit}&page=${this.currentPage}`);
                this.products = response.data.data;
                this.currentPage++;
                console.log(this.products)
            } catch (error) {
                console.error("Error fetching products:", error);
                // Handle error (e.g., show error message)
            }
        },
        async updateCarousel() {
            await this.fetchData();
            // Implement logic here if needed to update carousel or manage state
        }
    },
 
};
</script>


<style scoped>
.plex-mono {
    font-family: IBM Plex Mono;
}

.icon-input{
    font-size: 1.5rem;
    color: black !important;
    margin-right: 0.5rem;
}
.carousel-title {
    color: #333; /* Dark text color for better readability */
    font-size: 2em; /* Large font size */
    font-weight: bold; /* Make the title bold */
    text-align: center; /* Center-align the title */
    margin-bottom: 2rem; /* Add some space between the title and the carousel */
}
.BLACK {
    color: black;

}
.flex.align-items-center {
    flex-direction: column;
    flex-wrap: wrap;
    display: flex;
    justify-content: flex-start !important;
    align-items: flex-start !important;
    gap: 1.5rem;
}
.image {
    width: 100%;
    height: 300px;
    object-fit: cover;
}
.card {
    height: 100vh;
    margin: 6rem 0 0 0;
    padding: 30px;
}
.catalog-card {
    margin-right: 10px;
    margin-bottom: 10px;
    margin-left: 3px;
}
.surface-border { 
    height: 600px;
    max-height: 100%;
}
@media (max-width: 767px) {
    .carousel-title {
        font-size: 1.5em; /* Smaller font size on narrow screens */
        margin-bottom: 1rem; /* Less space on smaller screens */
    }
}


</style>
