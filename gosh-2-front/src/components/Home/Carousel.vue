
<template>
    <div class="card">
        <div class="carousel-title">Most Projects by Stars</div>
        <Carousel :value="products" :numVisible="3" :numScroll="1" :responsiveOptions="responsiveOptions" circular :autoplayInterval="3000">
            <template  #item="slotProps">
                <CatalogCard class="catalog-card"
              :repositoryData="slotProps.data"
              :key="slotProps.data"
            ></CatalogCard>
                <!-- <div class="   border-1 surface-border border-round m-2  p-3">
                    <div class="mb-3">
                        <div class="relative mx-auto">
                            <img :src="slotProps.data.avatarURL" :alt="slotProps.data.repositoryName" class=" image border-round" />
                        </div>
                    </div>
                    <div class="BLACK mb-3 font-medium text-xl">{{slotProps.data.repositoryName}}</div>
                    <div class="BLACK flex justify-content-between align-items-center">
                        <div class="mt-0 font-regular text-m">{{slotProps.data.descriptions}}</div>
                        <span>
                            <Button icon="pi pi-heart" severity="secondary" outlined />
                            <Button icon="pi pi-shopping-cart" class="ml-2"/>
                        </span>
                    </div>
                </div> -->
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
    methods: {
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
    margin-left:3 px;
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
