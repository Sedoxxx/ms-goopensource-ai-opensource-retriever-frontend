
<template>
    <div class="card flex justify-content-center">
        <!-- <Button label="Contributors" severity="secondary" @click="visible = true" /> -->
        <Dialog v-model:visible="visible" modal :style="{ width: '40%' }">
            <div class="flex flex-row justify-content-center">
                <div class="repo-image-container flex justify-content-center mb-5">
                    <img :src="selectedGif" alt="Repo-Image">
                    <!-- <img src="https://www.icegif.com/wp-content/uploads/2022/09/icegif-386.gif" alt=""> -->
                </div>
            </div>
            <div class="p-grid p-fluid dialog-content ml-2">
        <div class="p-col-12 grid mb-5">
         <div class="col-8">
            <h3 class="font-bold text-3xl">{{ full_name }}</h3>
            <div class="flex mb-1">
                <div v-for="(language, index) in languageList" :key="index">
                    <Tag :severity="getRandomSeverity()" :value="language" class="mr-1 text-sm"></Tag>
                </div>
            </div>
            <p>{{ short_description }}</p>
         </div>
          <div class="col-4">
            <div class="p-col-12 flex  align-items-center">
            <h5 class="text-base font-bold">Owner: {{ owner_name }}</h5>
            <!-- <img :src="owner_avatar_url" alt="Owner Avatar" width="50" height="50"> -->
            <Avatar :image="owner_avatar_url" shape="circle" size="large" class="ml-2 mr-2"/>
            </div>
          </div>
        </div>

<div class="p-col-12 flex flex-row justify-content-between">       

<div>

    <div class="p-col-12">
          <h5 class="text-base font-bold">Repository URL:</h5>
          <a :href="repo_html_url">{{ repo_html_url }}</a>
        </div>


        <div class="flex justify-content-between w-auto mt-1">
            <div class="p-col-12">
                <h5 class="text-base font-bold">Created At:</h5>
                <p>{{ created_at }}</p>
            </div>
            <div class="p-col-12">
                <h5 class="text-base font-bold">Updated At:</h5>
                <p>{{ updated_at }}</p>
            </div>
            <div class="p-col-12">
                <h5 class="text-base font-bold">Pushed At:</h5>
                <p>{{ pushed_at }}</p>
            </div>
        </div>

        <div class="p-col-12">
          <h5  class="text-base font-bold">Size:</h5>
          <p>{{ size }}</p>
        </div>
        <div class="p-col-12">
          <h5  class="text-base font-bold">License:</h5>
          <p>{{ license_name }}</p>
          <a :href="license_url" target="_blank">{{ license_url }}</a>
        </div>
        <div class="p-col-12">
          <h5  class="text-base font-bold">Visibility:</h5>
          <p>{{ visibility }}</p>
        </div>
        <div class="p-col-12">
          <h5  class="text-base font-bold">Archived:</h5>
          <p>{{ archived }}</p>
        </div>
        <div class="p-col-12">
            <h5 class="text-base font-bold">Default Branch:</h5>
            <p>{{ default_branch }}</p>
        </div>
</div>


<div class="flex flex-column justify-content-between w-5 mt-1">
    <div class="p-col-12 flex align-items-center">
        <i color="#fbbf24" class="pi pi-share-alt mr-2"></i> 
        <h5 class="text-base font-bold">Forks:</h5>
        <p class="ml-1">{{ number_of_forks }}</p>
    </div>
    <div class="p-col-12 flex align-items-center">
        <i color="#fbbf24" class="pi pi-star mr-2"></i> 
        <h5 class="text-base font-bold ">Stars:</h5>
        <p class="ml-1">{{ number_of_stars }}</p>
    </div>
    <div class="p-col-12 flex align-items-center">
        <i color="#fbbf24" class="pi pi-eye mr-2"></i> 
        <h5 class="text-base font-bold">Watchers:</h5>
        <p class="ml-1">{{ number_of_watchers }}</p>
    </div>

    <!-- <div class="p-col-12 flex">
        <h5 class="text-base font-bold">Number of Collaborators:</h5>
        <p class="ml-1">{{ number_of_collaborators }}</p>
    </div> -->
    <div class="p-col-12 flex align-items-center">
        <i color="#fbbf24" class="pi pi-users mr-2"></i> 
        <h5 class="text-base font-bold">Contributors:</h5>
        <p class="ml-1">{{ number_of_contributors }}</p>
    </div>
    <div class="p-col-12 flex align-items-center">
        <i color="#fbbf24" class="pi pi-sitemap mr-2"></i> 
        <h5 class="text-base font-bold">Branches:</h5>
        <p class="ml-1">{{ number_of_branches }}</p>
    </div>
    <div class="p-col-12 flex align-items-center">
        <i color="#fbbf24" class="pi pi-hashtag mr-2"></i> 
        <h5 class="text-base font-bold">Tags:</h5>
        <p class="ml-1">{{ number_of_tags }}</p>
    </div>

    <div class="p-col-12 flex align-items-center">
        <i color="#fbbf24" class="pi pi-directions mr-2"></i> 
        <h5 class="text-base font-bold">Pull Requests:</h5>
        <p class="ml-1">{{ number_of_pulls }}</p>
    </div>
    <div class="p-col-12 flex align-items-center">
        <i color="#fbbf24" class="pi pi-check mr-2"></i> 
        <h5 class="text-base font-bold">Commits:</h5>
        <p class="ml-1">{{ number_of_commits }}</p>
    </div>
    <div class="p-col-12 flex align-items-center">
        <i color="#fbbf24" class="pi pi-download mr-2"></i> 
        <h5 class="text-base font-bold">Downloads:</h5>
        <p class="ml-1">{{ number_of_downloads }}</p>
    </div>
    <div class="p-col-12 flex align-items-center">
        <i color="#fbbf24" class="pi pi-times-circle mr-2"></i> 
        <h5 class="text-base font-bold">Issues:</h5>
        <p class="ml-1">{{ number_of_issues }}</p>
    </div>
</div>

</div>

        
      </div>

            <!-- <ContainerOfContributors></ContainerOfContributors> -->
            <template #footer>
                <DialogContributors></DialogContributors>
                <Button label="Go to Repo" class="w-10rem " icon="pi pi-external-link" @click="goToRepo" />
                <Button label="Fork" class="w-8rem " severity="success" icon="pi pi-share-alt" @click="goToFork" />
                <Button label="Close" text severity="secondary" @click="visible = false" autofocus />
            </template>
        </Dialog>
    </div>
</template>

<script>
import ContainerOfContributors from '@/components/Catalog/ContainerOfContributors.vue';
import DialogContributors from './DialogContributors.vue';

export default {
    expose: ['toggleVisibility'],
    components: {
        ContainerOfContributors,
        DialogContributors
    },
    props: {
        repositoryData: Object,
        selectedGif: String
    },
    data(){
    return {
        visible: false,
        name: this.repositoryData.name,
        full_name: this.repositoryData.full_name,
        private: this.repositoryData.private,
        owner_name: this.repositoryData.owner_name,
        owner_avatar_url: this.repositoryData.owner_avatar_url,
        repo_html_url: this.repositoryData.repo_html_url,
        repo_api_url: this.repositoryData.repo_api_url,
        short_description: this.repositoryData.short_description,
        fork: this.repositoryData.fork,
        number_of_forks: this.repositoryData.number_of_forks,
        number_of_stars: this.repositoryData.number_of_stars,
        number_of_watchers: this.repositoryData.number_of_watchers,
        number_of_collaborators: this.repositoryData.number_of_collaborators,
        number_of_contributors: this.repositoryData.number_of_contributors,
        number_of_branches: this.repositoryData.number_of_branches,
        number_of_tags: this.repositoryData.number_of_tags,
        number_of_pulls: this.repositoryData.number_of_pulls,
        number_of_commits: this.repositoryData.number_of_commits,
        number_of_downloads: this.repositoryData.number_of_downloads,
        number_of_issues: this.repositoryData.number_of_issues,
        languages: this.repositoryData.languages,
        created_at: this.repositoryData.created_at,
        updated_at: this.repositoryData.updated_at,
        pushed_at: this.repositoryData.pushed_at,
        size: this.repositoryData.size,
        license_key: this.repositoryData.license_key,
        license_name: this.repositoryData.license_name,
        license_url: this.repositoryData.license_url,
        license_spdx_id: this.repositoryData.license_spdx_id,
        topics: this.repositoryData.topics,
        visibility: this.repositoryData.visibility,
        archived: this.repositoryData.archived,
        default_branch: this.repositoryData.default_branch,
    };
    },
    computed: {
    languageList() {
      return this.languages.split(",");
    }
    },
    methods:{
        goToRepo(){
            window.location.href="https://github.com/meta-llama/llama3"
        },
        goToFork(){
            window.location.href="https://github.com/meta-llama/llama3/fork"
        },
        toggleVisibility(){
            console.log("hello");
            this.visible = true;
        },
        getRandomSeverity() {
      const severities = [
        "primary",
        "success",
        "info",
        "warning",
        "danger",
      ];
      const randomIndex = Math.floor(Math.random() * severities.length);
      return severities[randomIndex];
    }
    }
};
</script>

<style scoped>
.repo-image-container {
    height: 100px;
    overflow: hidden;
}
.repo-image {
    display: block;
    width: 100%;
    height: auto;
    border-radius: 15px;
}

.repo-image-container {
        width: 100%; /* Example width */
        height: 300px; /* Example height */
        overflow: hidden; /* Hide overflowing content */
        border-radius: 10px; /* Example border radius */
        position: relative; /* Position relative for absolute positioning */
    }

.repo-image-container img {
    position: absolute; /* Position the image absolutely */
    top: 50%; /* Align the top edge of the image with the middle of the container */
    left: 50%; /* Align the left edge of the image with the middle of the container */
    transform: scale(1.5) translate(-35%, -40%); /* Center the image */
    min-width: auto; /* Ensure the image covers the container */
    min-height: auto; /* Ensure the image covers the container */
}
</style>