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

        <Paginator ref="paginator" v-model:page="currentPage" :rows="6" :totalRecords="120" :rowsPerPageOptions="[6, 12, 18]" @page="onPageChange"></Paginator>
      </div>
      <!-- <SiderBar ref="sidebar" @loading="toggleLoading" @fetched="handleFetchedCatalog" :searchQuery="this.searchQuery"></SiderBar> -->
    </div>
    <InputArea ref="inputArea" @leftAction="leftAction" @rightAction="rightAction" @loading="toggleLoading" :session_id="sessionId" :searchQuery="searchQuery" @fetch="updateCatalog"></InputArea>
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
      no_obj: 6,
      cur_li: 0,
      searchQuery: "Search for the Open Source Project You Desire !"
      ,size,
      products:[ ]
      ,
     
//         p,roducts: [
//         {
//   session_id: 1,
//   prompt_id: 4,
//   name: "ClickUp",
//   full_name: "nolakkapali/ClickUp",
//   private: false,
//   owner_name: "nolakkapali",
//   owner_avatar_url: "https://avatars.githubusercontent.com/u/141819121?v=4",
//   repo_html_url: "https://github.com/nolakkapali/ClickUp",
//   repo_api_url: "https://api.github.com/repos/nolakkapali/ClickUp",
//   short_description: "ClickUp project management tool is used to maintain projects and their updates and Opencart project is used here with ClickUp project management tool.",
//   fork: false,
//   number_of_forks: 0,
//   number_of_stars: 0,
//   number_of_watchers: null,
//   number_of_collaborators: null,
//   number_of_contributors: null,
//   number_of_branches: null,
//   number_of_tags: null,
//   number_of_pulls: null,
//   number_of_commits: null,
//   number_of_downloads: null,
//   number_of_issues: null,
//   languages: "",
//   created_at: "2023-11-13T04:27:13",
//   updated_at: "2023-11-24T05:46:26",
//   pushed_at: "2023-11-24T05:55:09",
//   size: 1771,
//   license_key: null,
//   license_name: null,
//   license_url: null,
//   license_spdx_id: null,
//   topics: "clickup,clickuptask,dependency,project,project-management,project-management-tool,subtask",
//   visibility: "public",
//   archived: false,
//   default_branch: "main",
//   id: 1
// },
// {
//     session_id: 1,
//     prompt_id: 4,
//     name: "Tasks-Backend-Demo",
//     full_name: "waadmawlood/Tasks-Backend-Demo",
//     private: false,
//     owner_name: "waadmawlood",
//     owner_avatar_url: "https://avatars.githubusercontent.com/u/44348636?v=4",
//     repo_html_url: "https://github.com/waadmawlood/Tasks-Backend-Demo",
//     repo_api_url: "https://api.github.com/repos/waadmawlood/Tasks-Backend-Demo",
//     short_description: "The Task Management System is Backend Api a web application developed using the Laravel framework 10. It provides a user-friendly and efficient way to manage tasks and projects, similar to popular task management tools like ClickUp.",
//     long_description: "empty",
//     fork: false,
//     number_of_forks: 0,
//     number_of_stars: 3,
//     number_of_watchers: null,
//     number_of_collaborators: null,
//     number_of_contributors: null,
//     number_of_branches: null,
//     number_of_tags: null,
//     number_of_pulls: null,
//     number_of_commits: null,
//     number_of_downloads: null,
//     number_of_issues: null,
//     languages: "PHP",
//     created_at: "2023-10-25T12:59:59",
//     updated_at: "2023-11-08T06:34:32",
//     pushed_at: "2023-10-30T08:15:49",
//     size: 301,
//     license_key: null,
//     license_name: null,
//     license_url: null,
//     license_spdx_id: null,
//     topics: "",
//     visibility: "public",
//     archived: false,
//     default_branch: "main",
//     id: 2
//   },
//   {
//     session_id: 1,
//     prompt_id: 6,
//     name: "Next-react-graphql-apollo_Boostrap",
//     full_name: "Sebastp/Next-react-graphql-apollo_Boostrap",
//     private: false,
//     owner_name: "Sebastp",
//     owner_avatar_url: "https://avatars.githubusercontent.com/u/17354422?v=4",
//     repo_html_url: "https://github.com/Sebastp/Next-react-graphql-apollo_Boostrap",
//     repo_api_url: "https://api.github.com/repos/Sebastp/Next-react-graphql-apollo_Boostrap",
//     short_description: "React + GraphQL + Next.js project architecture that I play with right now",
//     long_description: "empty",
//     fork: false,
//     number_of_forks: 16,
//     number_of_stars: 85,
//     number_of_watchers: null,
//     number_of_collaborators: null,
//     number_of_contributors: null,
//     number_of_branches: null,
//     number_of_tags: null,
//     number_of_pulls: null,
//     number_of_commits: null,
//     number_of_downloads: null,
//     number_of_issues: null,
//     languages: "TypeScript",
//     created_at: "2019-11-05T23:03:37",
//     updated_at: "2024-03-29T03:11:20",
//     pushed_at: "2023-06-19T12:53:02",
//     size: 1822,
//     license_key: null,
//     license_name: null,
//     license_url: null,
//     license_spdx_id: null,
//     topics: "apollo,boostrap,eslint,fullstack,graphql,javascript,nextjs,react,scss,typescript",
//     visibility: "public",
//     archived: false,
//     default_branch: "master",
//     id: 3
//   },
//   {
//     session_id: 1,
//     prompt_id: 6,
//     name: "generator-keystone-react",
//     full_name: "keystonejs/generator-keystone-react",
//     private: false,
//     owner_name: "keystonejs",
//     owner_avatar_url: "https://avatars.githubusercontent.com/u/6118534?v=4",
//     repo_html_url: "https://github.com/keystonejs/generator-keystone-react",
//     repo_api_url: "https://api.github.com/repos/keystonejs/generator-keystone-react",
//     short_description: "⚠️ Archived - Legacy Yeoman generator for a KeystoneJS / React.js boilerplate project",
//     long_description: "empty",
//     fork: false,
//     number_of_forks: 12,
//     number_of_stars: 87,
//     number_of_watchers: null,
//     number_of_collaborators: null,
//     number_of_contributors: null,
//     number_of_branches: null,
//     number_of_tags: null,
//     number_of_pulls: null,
//     number_of_commits: null,
//     number_of_downloads: null,
//     number_of_issues: null,
//     languages: "JavaScript",
//     created_at: "2015-04-21T04:40:39",
//     updated_at: "2024-04-09T22:07:38",
//     pushed_at: "2021-11-24T04:07:34",
//     size: 38,
//     license_key: "mit",
//     license_name: "MIT License",
//     license_url: "https://api.github.com/licenses/mit",
//     license_spdx_id: "MIT",
//     topics: "",
//     visibility: "public",
//     archived: true,
//     default_branch: "master",
//     id: 4
//   },
//   {
//     session_id: 1,
//     prompt_id: 6,
//     name: "jamstack-ecommerce",
//     full_name: "jamstack-cms/jamstack-ecommerce",
//     private: false,
//     owner_name: "jamstack-cms",
//     owner_avatar_url: "https://avatars.githubusercontent.com/u/55660630?v=4",
//     repo_html_url: "https://github.com/jamstack-cms/jamstack-ecommerce",
//     repo_api_url: "https://api.github.com/repos/jamstack-cms/jamstack-ecommerce",
//     short_description: "A starter project for building performant ECommerce applications with Next.js and React",
//     long_description: "empty",
//     fork: false,
//     number_of_forks: 421,
//     number_of_stars: 1902,
//     number_of_watchers: null,
//     number_of_collaborators: null,
//     number_of_contributors: null,
//     number_of_branches: null,
//     number_of_tags: null,
//     number_of_pulls: null,
//     number_of_commits: null,
//     number_of_downloads: null,
//     number_of_issues: null,
//     languages: "JavaScript",
//     created_at: "2020-02-11T02:08:15",
//     updated_at: "2024-04-21T08:01:25",
//     pushed_at: "2023-01-06T17:53:32",
//     size: 17314,
//     license_key: "mit",
//     license_name: "MIT License",
//     license_url: "https://api.github.com/licenses/mit",
//     license_spdx_id: "MIT",
//     topics: "ecommerce,gatsby,javascript,next,nextjs,react,serverless,static-site-generator",
//     visibility: "public",
//     archived: false,
//     default_branch: "next",
//     id: 5
//   },
//   {
//     session_id: 1,
//     prompt_id: 6,
//     name: "google-translate-select",
//     full_name: "i7eo/google-translate-select",
//     private: false,
//     owner_name: "i7eo",
//     owner_avatar_url: "https://avatars.githubusercontent.com/u/18899748?v=4",
//     repo_html_url: "https://github.com/i7eo/google-translate-select",
//     repo_api_url: "https://api.github.com/repos/i7eo/google-translate-select",
//     short_description: "🚀 A modern, high-performance monorepo project designed with Google Translate JS SDK. Vue and react are supported!",
//     long_description: "empty",
//     fork: false,
//     number_of_forks: 84,
//     number_of_stars: 358,
//     number_of_watchers: null,
//     number_of_collaborators: null,
//     number_of_contributors: null,
//     number_of_branches: null,
//     number_of_tags: null,
//     number_of_pulls: null,
//     number_of_commits: null,
//     number_of_downloads: null,
//     number_of_issues: null,
//     languages: "Vue",
//     created_at: "2021-06-24T08:05:08",
//     updated_at: "2024-03-28T01:52:31",
//     pushed_at: "2024-03-28T02:51:56",
//     size: 2180,
//     license_key: "mit",
//     license_name: "MIT License",
//     license_url: "https://api.github.com/licenses/mit",
//     license_spdx_id: "MIT",
//     topics: "changesets,i18n,monorepo,react,translation,vite,vue,vue3",
//     visibility: "public",
//     archived: false,
//     default_branch: "master",
//     id: 6
//   },
//   {
//     session_id: 1,
//     prompt_id: 6,
//     name: "reactjs-open-source",
//     full_name: "Mybridge/reactjs-open-source",
//     private: false,
//     owner_name: "Mybridge",
//     owner_avatar_url: "https://avatars.githubusercontent.com/u/9070843?v=4",
//     repo_html_url: "https://github.com/Mybridge/reactjs-open-source",
//     repo_api_url: "https://api.github.com/repos/Mybridge/reactjs-open-source",
//     short_description: "Monthly Series - React.js Top 10 Open Source Projects",
//     long_description: "empty",
//     fork: false,
//     number_of_forks: 15,
//     number_of_stars: 226,
//     number_of_watchers: null,
//     number_of_collaborators: null,
//     number_of_contributors: null,
//     number_of_branches: null,
//     number_of_tags: null,
//     number_of_pulls: null,
//     number_of_commits: null,
//     number_of_downloads: null,
//     number_of_issues: null,
//     languages: "",
//     created_at: "2018-02-20T10:49:07",
//     updated_at: "2024-02-18T05:49:51",
//     pushed_at: "2022-03-13T11:45:50",
//     size: 10565,
//     license_key: null,
//     license_name: null,
//     license_url: null,
//     license_spdx_id: null,
//     topics: "",
//     visibility: "public",
//     archived: false,
//     default_branch: "master",
//     id: 7
//   },
//   {
//     session_id: 1,
//     prompt_id: 6,
//     name: "nextjs-tailwindcss-portfolio",
//     full_name: "realstoman/nextjs-tailwindcss-portfolio",
//     private: false,
//     owner_name: "realstoman",
//     owner_avatar_url: "https://avatars.githubusercontent.com/u/16396664?v=4",
//     repo_html_url: "https://github.com/realstoman/nextjs-tailwindcss-portfolio",
//     repo_api_url: "https://api.github.com/repos/realstoman/nextjs-tailwindcss-portfolio",
//     short_description: "Next.js, React & Tailwind CSS version of the portfolio project.",
//     long_description: "empty",
//     fork: false,
//     number_of_forks: 41,
//     number_of_stars: 92,
//     number_of_watchers: null,
//     number_of_collaborators: null,
//     number_of_contributors: null,
//     number_of_branches: null,
//     number_of_tags: null,
//     number_of_pulls: null,
//     number_of_commits: null,
//     number_of_downloads: null,
//     number_of_issues: null,
//     languages: "JavaScript",
//     created_at: "2021-12-16T09:19:44",
//     updated_at: "2024-04-16T13:31:36",
//     pushed_at: "2024-02-12T02:08:16",
//     size: 2845,
//     license_key: "mit",
//     license_name: "MIT License",
//     license_url: "https://api.github.com/licenses/mit",
//     license_spdx_id: "MIT",
//     topics: "dark-mode,framer-motion,javascript,js,nextjs,react,reactjs,spa,starter-template,tailwind,tailwindcss,template,theme,ui,vercel,vercel-deployment",
//     visibility: "public",
//     archived: false,
//     default_branch: "main",
//     id: 8
//   },
//   // hello

//         {
//   session_id: 1,
//    prompt_id: 8,
//     name: "example",
//     full_name: "Example Repository",
//     private: false,
//     owner_name: "John Doe",
//     owner_avatar_url: "https://example.com/avatar.jpg",
//     repo_html_url: "https://github.com/example",
//     repo_api_url: "https://api.github.com/repos/example",
//     short_description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Aliquet bibendum enim facilisis gravida. Pharetra magna ac placerat vestibulum lectus mauris ultrices eros. Cum sociis natoque penatibus et magnis dis parturient montes. Neque convallis a cras semper auctor neque vitae. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Aliquet bibendum enim facilisis gravida. Pharetra magna ac placerat vestibulum lectus mauris ultrices eros. Cum sociis natoque penatibus et magnis dis parturient montes. Neque convallis a cras semper auctor neque vitae.",
//     fork: false,
//   number_of_forks: 590,
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
//   session_id: 1,
//    prompt_id: 8,
//     name: "example",
//     full_name: "Aymen Repository",
//     private: false,
//     owner_name: "Aymen Daassi",
//     owner_avatar_url: "https://example.com/avatar.jpg",
//     repo_html_url: "https://github.com/example",
//     repo_api_url: "https://api.github.com/repos/example",
//     short_description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Aliquet bibendum enim facilisis gravida. Pharetra magna ac placerat vestibulum lectus mauris ultrices eros. Cum sociis natoque penatibus et magnis dis parturient montes. Neque convallis a cras semper auctor neque vitae. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Aliquet bibendum enim facilisis gravida. Pharetra magna ac placerat vestibulum lectus mauris ultrices eros. Cum sociis natoque penatibus et magnis dis parturient montes. Neque convallis a cras semper auctor neque vitae.",
//     fork: false,
//   number_of_forks: 590,
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
//   session_id: 1,
//    prompt_id: 10,
//     name: "example",
//     full_name: "AI/MLS Repository",
//     private: false,
//     owner_name: "Aymen Daassi",
//     owner_avatar_url: "https://example.com/avatar.jpg",
//     repo_html_url: "https://github.com/example",
//     repo_api_url: "https://api.github.com/repos/example",
//     short_description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Aliquet bibendum enim facilisis gravida. Pharetra magna ac placerat vestibulum lectus mauris ultrices eros. Cum sociis natoque penatibus et magnis dis parturient montes. Neque convallis a cras semper auctor neque vitae. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Aliquet bibendum enim facilisis gravida. Pharetra magna ac placerat vestibulum lectus mauris ultrices eros. Cum sociis natoque penatibus et magnis dis parturient montes. Neque convallis a cras semper auctor neque vitae.",
//     fork: false,
//   number_of_forks: 590,
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
//   session_id: 1,
//    prompt_id: 8,
//     name: "example",
//     full_name: "Example Repository",
//     private: false,
//     owner_name: "John Doe",
//     owner_avatar_url: "https://example.com/avatar.jpg",
//     repo_html_url: "https://github.com/example",
//     repo_api_url: "https://api.github.com/repos/example",
//     short_description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Aliquet bibendum enim facilisis gravida. Pharetra magna ac placerat vestibulum lectus mauris ultrices eros. Cum sociis natoque penatibus et magnis dis parturient montes. Neque convallis a cras semper auctor neque vitae. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Aliquet bibendum enim facilisis gravida. Pharetra magna ac placerat vestibulum lectus mauris ultrices eros. Cum sociis natoque penatibus et magnis dis parturient montes. Neque convallis a cras semper auctor neque vitae.",
//     fork: false,
//   number_of_forks: 590,
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
//   session_id: 1,
//    prompt_id: 8,
//     name: "example",
//     full_name: "Aymen Repository",
//     private: false,
//     owner_name: "Aymen Daassi",
//     owner_avatar_url: "https://example.com/avatar.jpg",
//     repo_html_url: "https://github.com/example",
//     repo_api_url: "https://api.github.com/repos/example",
//     short_description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Aliquet bibendum enim facilisis gravida. Pharetra magna ac placerat vestibulum lectus mauris ultrices eros. Cum sociis natoque penatibus et magnis dis parturient montes. Neque convallis a cras semper auctor neque vitae. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Aliquet bibendum enim facilisis gravida. Pharetra magna ac placerat vestibulum lectus mauris ultrices eros. Cum sociis natoque penatibus et magnis dis parturient montes. Neque convallis a cras semper auctor neque vitae.",
//     fork: false,
//   number_of_forks: 590,
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
//   session_id: 1,
//    prompt_id: 10,
//     name: "example",
//     full_name: "AI/MLS Repository",
//     private: false,
//     owner_name: "Aymen Daassi",
//     owner_avatar_url: "https://example.com/avatar.jpg",
//     repo_html_url: "https://github.com/example",
//     repo_api_url: "https://api.github.com/repos/example",
//     short_description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Aliquet bibendum enim facilisis gravida. Pharetra magna ac placerat vestibulum lectus mauris ultrices eros. Cum sociis natoque penatibus et magnis dis parturient montes. Neque convallis a cras semper auctor neque vitae. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Aliquet bibendum enim facilisis gravida. Pharetra magna ac placerat vestibulum lectus mauris ultrices eros. Cum sociis natoque penatibus et magnis dis parturient montes. Neque convallis a cras semper auctor neque vitae.",
//     fork: false,
//   number_of_forks: 590,
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

//         ],
      filteredProducts: [],
      cataloging: [],
      searchQuery: ''
    }
  },
  mounted(){
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
          console.log("Promp",n);
          if(n != 0){
            this.promptId = this.prompts[n-1].id;
            this.$refs.inputArea.changeText(this.prompts[n-1].prompt_text);
            console.log("Selected the following prompt id: ", this.promptId);
            this.fetchData();
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
    updateLength(){
      axios.get(`http://188.130.155.83:8000/repos?session_id=${sessionId}&prompt_id${promptId}`)
        .then(response => {
          console.log(JSON.stringify(response.data));
          this.size = response.data.length; 
          console.log("SIZEEEE:",size);
          // Assuming you want to initialize filtered products too
          this.loading = false;
        })
        .catch(error => {
          console.error('Error fetching repositories:', error);
          this.loading = false;
        });
       
    }
    ,
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
          console.log(response.data.size);
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
    updateCatalog(id){
      console.log(id)
      this.promptId = id;
      console.log(id) 
      const sessionId = parseInt(this.$route.params.id,10); // Get session ID from route parameters
      this.fetchData();
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
