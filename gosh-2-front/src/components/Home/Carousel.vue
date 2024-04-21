
<template>
    <div class="card">
        <div class="carousel-title plex-mono">  <i color="#fbbf24" class="icon-input pi pi-star-fill mr-2"></i>   Featured Repositories         <i color="#fbbf24" class="icon-input pi pi-star-fill mr-2"></i> </div>

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
  prompt_id: 4,
  name: "ClickUp",
  full_name: "nolakkapali/ClickUp",
  private: false,
  owner_name: "nolakkapali",
  owner_avatar_url: "https://avatars.githubusercontent.com/u/141819121?v=4",
  repo_html_url: "https://github.com/nolakkapali/ClickUp",
  repo_api_url: "https://api.github.com/repos/nolakkapali/ClickUp",
  short_description: "ClickUp project management tool is used to maintain projects and their updates and Opencart project is used here with ClickUp project management tool.",
  fork: false,
  number_of_forks: 0,
  number_of_stars: 0,
  number_of_watchers: null,
  number_of_collaborators: null,
  number_of_contributors: null,
  number_of_branches: null,
  number_of_tags: null,
  number_of_pulls: null,
  number_of_commits: null,
  number_of_downloads: null,
  number_of_issues: null,
  languages: "",
  created_at: "2023-11-13T04:27:13",
  updated_at: "2023-11-24T05:46:26",
  pushed_at: "2023-11-24T05:55:09",
  size: 1771,
  license_key: null,
  license_name: null,
  license_url: null,
  license_spdx_id: null,
  topics: "clickup,clickuptask,dependency,project,project-management,project-management-tool,subtask",
  visibility: "public",
  archived: false,
  default_branch: "main",
  id: 1
},
{
    session_id: 1,
    prompt_id: 4,
    name: "Tasks-Backend-Demo",
    full_name: "waadmawlood/Tasks-Backend-Demo",
    private: false,
    owner_name: "waadmawlood",
    owner_avatar_url: "https://avatars.githubusercontent.com/u/44348636?v=4",
    repo_html_url: "https://github.com/waadmawlood/Tasks-Backend-Demo",
    repo_api_url: "https://api.github.com/repos/waadmawlood/Tasks-Backend-Demo",
    short_description: "The Task Management System is Backend Api a web application developed using the Laravel framework 10. It provides a user-friendly and efficient way to manage tasks and projects, similar to popular task management tools like ClickUp.",
    long_description: "empty",
    fork: false,
    number_of_forks: 0,
    number_of_stars: 3,
    number_of_watchers: null,
    number_of_collaborators: null,
    number_of_contributors: null,
    number_of_branches: null,
    number_of_tags: null,
    number_of_pulls: null,
    number_of_commits: null,
    number_of_downloads: null,
    number_of_issues: null,
    languages: "PHP",
    created_at: "2023-10-25T12:59:59",
    updated_at: "2023-11-08T06:34:32",
    pushed_at: "2023-10-30T08:15:49",
    size: 301,
    license_key: null,
    license_name: null,
    license_url: null,
    license_spdx_id: null,
    topics: "",
    visibility: "public",
    archived: false,
    default_branch: "main",
    id: 2
  },
  {
    session_id: 1,
    prompt_id: 6,
    name: "Next-react-graphql-apollo_Boostrap",
    full_name: "Sebastp/Next-react-graphql-apollo_Boostrap",
    private: false,
    owner_name: "Sebastp",
    owner_avatar_url: "https://avatars.githubusercontent.com/u/17354422?v=4",
    repo_html_url: "https://github.com/Sebastp/Next-react-graphql-apollo_Boostrap",
    repo_api_url: "https://api.github.com/repos/Sebastp/Next-react-graphql-apollo_Boostrap",
    short_description: "React + GraphQL + Next.js project architecture that I play with right now",
    long_description: "empty",
    fork: false,
    number_of_forks: 16,
    number_of_stars: 85,
    number_of_watchers: null,
    number_of_collaborators: null,
    number_of_contributors: null,
    number_of_branches: null,
    number_of_tags: null,
    number_of_pulls: null,
    number_of_commits: null,
    number_of_downloads: null,
    number_of_issues: null,
    languages: "TypeScript",
    created_at: "2019-11-05T23:03:37",
    updated_at: "2024-03-29T03:11:20",
    pushed_at: "2023-06-19T12:53:02",
    size: 1822,
    license_key: null,
    license_name: null,
    license_url: null,
    license_spdx_id: null,
    topics: "apollo,boostrap,eslint,fullstack,graphql,javascript,nextjs,react,scss,typescript",
    visibility: "public",
    archived: false,
    default_branch: "master",
    id: 3
  },
  {
    session_id: 1,
    prompt_id: 6,
    name: "generator-keystone-react",
    full_name: "keystonejs/generator-keystone-react",
    private: false,
    owner_name: "keystonejs",
    owner_avatar_url: "https://avatars.githubusercontent.com/u/6118534?v=4",
    repo_html_url: "https://github.com/keystonejs/generator-keystone-react",
    repo_api_url: "https://api.github.com/repos/keystonejs/generator-keystone-react",
    short_description: "⚠️ Archived - Legacy Yeoman generator for a KeystoneJS / React.js boilerplate project",
    long_description: "empty",
    fork: false,
    number_of_forks: 12,
    number_of_stars: 87,
    number_of_watchers: null,
    number_of_collaborators: null,
    number_of_contributors: null,
    number_of_branches: null,
    number_of_tags: null,
    number_of_pulls: null,
    number_of_commits: null,
    number_of_downloads: null,
    number_of_issues: null,
    languages: "JavaScript",
    created_at: "2015-04-21T04:40:39",
    updated_at: "2024-04-09T22:07:38",
    pushed_at: "2021-11-24T04:07:34",
    size: 38,
    license_key: "mit",
    license_name: "MIT License",
    license_url: "https://api.github.com/licenses/mit",
    license_spdx_id: "MIT",
    topics: "",
    visibility: "public",
    archived: true,
    default_branch: "master",
    id: 4
  },
  {
    session_id: 1,
    prompt_id: 6,
    name: "jamstack-ecommerce",
    full_name: "jamstack-cms/jamstack-ecommerce",
    private: false,
    owner_name: "jamstack-cms",
    owner_avatar_url: "https://avatars.githubusercontent.com/u/55660630?v=4",
    repo_html_url: "https://github.com/jamstack-cms/jamstack-ecommerce",
    repo_api_url: "https://api.github.com/repos/jamstack-cms/jamstack-ecommerce",
    short_description: "A starter project for building performant ECommerce applications with Next.js and React",
    long_description: "empty",
    fork: false,
    number_of_forks: 421,
    number_of_stars: 1902,
    number_of_watchers: null,
    number_of_collaborators: null,
    number_of_contributors: null,
    number_of_branches: null,
    number_of_tags: null,
    number_of_pulls: null,
    number_of_commits: null,
    number_of_downloads: null,
    number_of_issues: null,
    languages: "JavaScript",
    created_at: "2020-02-11T02:08:15",
    updated_at: "2024-04-21T08:01:25",
    pushed_at: "2023-01-06T17:53:32",
    size: 17314,
    license_key: "mit",
    license_name: "MIT License",
    license_url: "https://api.github.com/licenses/mit",
    license_spdx_id: "MIT",
    topics: "ecommerce,gatsby,javascript,next,nextjs,react,serverless,static-site-generator",
    visibility: "public",
    archived: false,
    default_branch: "next",
    id: 5
  },
  {
    session_id: 1,
    prompt_id: 6,
    name: "google-translate-select",
    full_name: "i7eo/google-translate-select",
    private: false,
    owner_name: "i7eo",
    owner_avatar_url: "https://avatars.githubusercontent.com/u/18899748?v=4",
    repo_html_url: "https://github.com/i7eo/google-translate-select",
    repo_api_url: "https://api.github.com/repos/i7eo/google-translate-select",
    short_description: "🚀 A modern, high-performance monorepo project designed with Google Translate JS SDK. Vue and react are supported!",
    long_description: "empty",
    fork: false,
    number_of_forks: 84,
    number_of_stars: 358,
    number_of_watchers: null,
    number_of_collaborators: null,
    number_of_contributors: null,
    number_of_branches: null,
    number_of_tags: null,
    number_of_pulls: null,
    number_of_commits: null,
    number_of_downloads: null,
    number_of_issues: null,
    languages: "Vue",
    created_at: "2021-06-24T08:05:08",
    updated_at: "2024-03-28T01:52:31",
    pushed_at: "2024-03-28T02:51:56",
    size: 2180,
    license_key: "mit",
    license_name: "MIT License",
    license_url: "https://api.github.com/licenses/mit",
    license_spdx_id: "MIT",
    topics: "changesets,i18n,monorepo,react,translation,vite,vue,vue3",
    visibility: "public",
    archived: false,
    default_branch: "master",
    id: 6
  },
  {
    session_id: 1,
    prompt_id: 6,
    name: "reactjs-open-source",
    full_name: "Mybridge/reactjs-open-source",
    private: false,
    owner_name: "Mybridge",
    owner_avatar_url: "https://avatars.githubusercontent.com/u/9070843?v=4",
    repo_html_url: "https://github.com/Mybridge/reactjs-open-source",
    repo_api_url: "https://api.github.com/repos/Mybridge/reactjs-open-source",
    short_description: "Monthly Series - React.js Top 10 Open Source Projects",
    long_description: "empty",
    fork: false,
    number_of_forks: 15,
    number_of_stars: 226,
    number_of_watchers: null,
    number_of_collaborators: null,
    number_of_contributors: null,
    number_of_branches: null,
    number_of_tags: null,
    number_of_pulls: null,
    number_of_commits: null,
    number_of_downloads: null,
    number_of_issues: null,
    languages: "",
    created_at: "2018-02-20T10:49:07",
    updated_at: "2024-02-18T05:49:51",
    pushed_at: "2022-03-13T11:45:50",
    size: 10565,
    license_key: null,
    license_name: null,
    license_url: null,
    license_spdx_id: null,
    topics: "",
    visibility: "public",
    archived: false,
    default_branch: "master",
    id: 7
  },
  {
    session_id: 1,
    prompt_id: 6,
    name: "nextjs-tailwindcss-portfolio",
    full_name: "realstoman/nextjs-tailwindcss-portfolio",
    private: false,
    owner_name: "realstoman",
    owner_avatar_url: "https://avatars.githubusercontent.com/u/16396664?v=4",
    repo_html_url: "https://github.com/realstoman/nextjs-tailwindcss-portfolio",
    repo_api_url: "https://api.github.com/repos/realstoman/nextjs-tailwindcss-portfolio",
    short_description: "Next.js, React & Tailwind CSS version of the portfolio project.",
    long_description: "empty",
    fork: false,
    number_of_forks: 41,
    number_of_stars: 92,
    number_of_watchers: null,
    number_of_collaborators: null,
    number_of_contributors: null,
    number_of_branches: null,
    number_of_tags: null,
    number_of_pulls: null,
    number_of_commits: null,
    number_of_downloads: null,
    number_of_issues: null,
    languages: "JavaScript",
    created_at: "2021-12-16T09:19:44",
    updated_at: "2024-04-16T13:31:36",
    pushed_at: "2024-02-12T02:08:16",
    size: 2845,
    license_key: "mit",
    license_name: "MIT License",
    license_url: "https://api.github.com/licenses/mit",
    license_spdx_id: "MIT",
    topics: "dark-mode,framer-motion,javascript,js,nextjs,react,reactjs,spa,starter-template,tailwind,tailwindcss,template,theme,ui,vercel,vercel-deployment",
    visibility: "public",
    archived: false,
    default_branch: "main",
    id: 8
  }

                //         {
                // session_id: 1,
                // prompt_id: 8,
                //     name: "example",
                //     full_name: "Example Repository",
                //     private: false,
                //     owner_name: "John Doe",
                //     owner_avatar_url: "https://example.com/avatar.jpg",
                //     repo_html_url: "https://github.com/example",
                //     repo_api_url: "https://api.github.com/repos/example",
                //     short_description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Aliquet bibendum enim facilisis gravida. Pharetra magna ac placerat vestibulum lectus mauris ultrices eros. Cum sociis natoque penatibus et magnis dis parturient montes. Neque convallis a cras semper auctor neque vitae. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Aliquet bibendum enim facilisis gravida. Pharetra magna ac placerat vestibulum lectus mauris ultrices eros. Cum sociis natoque penatibus et magnis dis parturient montes. Neque convallis a cras semper auctor neque vitae.",
                //     fork: false,
                // number_of_forks: 590,
                //     number_of_stars: 1810,
                //     number_of_watchers: 90,
                //     number_of_collaborators: 15,
                //     number_of_contributors: 9,
                //     number_of_branches: 15,
                //     number_of_tags: 333,
                //     number_of_pulls: 15,
                //     number_of_commits: 190,
                //     number_of_downloads: 1000,
                //     number_of_issues: 121,
                //     languages: "VueJS,HTML,CSS,Python,Javascript,Java,C++",
                //     created_at: "2022-04-20",
                //     updated_at: "2024-04-20",
                //     pushed_at: "2024-04-20",
                //     size: 1024,
                //     license_key: "MIT",
                //     license_name: "MIT License",
                //     license_url: "https://opensource.org/licenses/MIT",
                //     license_spdx_id: "MIT",
                //     topics: "example, sample, repository",
                //     visibility: "Public",
                //     archived: false,
                //     default_branch: "main"
                // },
                // {
                // session_id: 1,
                // prompt_id: 8,
                //     name: "example",
                //     full_name: "Aymen Repository",
                //     private: false,
                //     owner_name: "Aymen Daassi",
                //     owner_avatar_url: "https://example.com/avatar.jpg",
                //     repo_html_url: "https://github.com/example",
                //     repo_api_url: "https://api.github.com/repos/example",
                //     short_description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Aliquet bibendum enim facilisis gravida. Pharetra magna ac placerat vestibulum lectus mauris ultrices eros. Cum sociis natoque penatibus et magnis dis parturient montes. Neque convallis a cras semper auctor neque vitae. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Aliquet bibendum enim facilisis gravida. Pharetra magna ac placerat vestibulum lectus mauris ultrices eros. Cum sociis natoque penatibus et magnis dis parturient montes. Neque convallis a cras semper auctor neque vitae.",
                //     fork: false,
                // number_of_forks: 590,
                //     number_of_stars: 1810,
                //     number_of_watchers: 90,
                //     number_of_collaborators: 15,
                //     number_of_contributors: 9,
                //     number_of_branches: 15,
                //     number_of_tags: 333,
                //     number_of_pulls: 15,
                //     number_of_commits: 190,
                //     number_of_downloads: 1000,
                //     number_of_issues: 121,
                //     languages: "VueJS,HTML,CSS,Python,Javascript,Java,C++",
                //     created_at: "2022-04-20",
                //     updated_at: "2024-04-20",
                //     pushed_at: "2024-04-20",
                //     size: 1024,
                //     license_key: "MIT",
                //     license_name: "MIT License",
                //     license_url: "https://opensource.org/licenses/MIT",
                //     license_spdx_id: "MIT",
                //     topics: "example, sample, repository",
                //     visibility: "Public",
                //     archived: false,
                //     default_branch: "main"
                // },
                // {
                // session_id: 1,
                // prompt_id: 10,
                //     name: "example",
                //     full_name: "AI/MLS Repository",
                //     private: false,
                //     owner_name: "Aymen Daassi",
                //     owner_avatar_url: "https://example.com/avatar.jpg",
                //     repo_html_url: "https://github.com/example",
                //     repo_api_url: "https://api.github.com/repos/example",
                //     short_description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Aliquet bibendum enim facilisis gravida. Pharetra magna ac placerat vestibulum lectus mauris ultrices eros. Cum sociis natoque penatibus et magnis dis parturient montes. Neque convallis a cras semper auctor neque vitae. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Aliquet bibendum enim facilisis gravida. Pharetra magna ac placerat vestibulum lectus mauris ultrices eros. Cum sociis natoque penatibus et magnis dis parturient montes. Neque convallis a cras semper auctor neque vitae.",
                //     fork: false,
                // number_of_forks: 590,
                //     number_of_stars: 1810,
                //     number_of_watchers: 90,
                //     number_of_collaborators: 15,
                //     number_of_contributors: 9,
                //     number_of_branches: 15,
                //     number_of_tags: 333,
                //     number_of_pulls: 15,
                //     number_of_commits: 190,
                //     number_of_downloads: 1000,
                //     number_of_issues: 121,
                //     languages: "VueJS,HTML,CSS,Python,Javascript,Java,C++",
                //     created_at: "2022-04-20",
                //     updated_at: "2024-04-20",
                //     pushed_at: "2024-04-20",
                //     size: 1024,
                //     license_key: "MIT",
                //     license_name: "MIT License",
                //     license_url: "https://opensource.org/licenses/MIT",
                //     license_spdx_id: "MIT",
                //     topics: "example, sample, repository",
                //     visibility: "Public",
                //     archived: false,
                //     default_branch: "main"
                // },


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
