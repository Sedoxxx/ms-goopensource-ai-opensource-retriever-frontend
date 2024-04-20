
<template>
    <div class="card flex justify-content-center">
        <!-- <Button label="Contributors" severity="secondary" @click="visible = true" /> -->
        <Dialog v-model:visible="visible" modal :style="{ width: '40%' }">
            <div class="flex flex-row justify-content-center">
                <div class="repo-image-container flex justify-content-center mb-5">
                    <img src="https://www.icegif.com/wp-content/uploads/2022/09/icegif-386.gif" alt="">
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
            <Avatar image="src/assets/images/aymen_header.jpg" shape="circle" size="large" class="mr-2"/>
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
        <i color="#fbbf24" class="pi pi-share-alt"></i> 
        <h5 class="text-base font-bold">Forks:</h5>
        <p class="ml-1">{{ number_of_forks }}</p>
    </div>
    <div class="p-col-12 flex align-items-center">
        <i color="#fbbf24" class="pi pi-star"></i> 
        <h5 class="text-base font-bold">Stars:</h5>
        <p class="ml-1">{{ number_of_stars }}</p>
    </div>
    <div class="p-col-12 flex align-items-center">
        <i color="#fbbf24" class="pi pi-eye"></i> 
        <h5 class="text-base font-bold">Watchers:</h5>
        <p class="ml-1">{{ number_of_watchers }}</p>
    </div>

    <!-- <div class="p-col-12 flex">
        <h5 class="text-base font-bold">Number of Collaborators:</h5>
        <p class="ml-1">{{ number_of_collaborators }}</p>
    </div> -->
    <div class="p-col-12 flex align-items-center">
        <i color="#fbbf24" class="pi pi-users"></i> 
        <h5 class="text-base font-bold">Contributors:</h5>
        <p class="ml-1">{{ number_of_contributors }}</p>
    </div>
    <div class="p-col-12 flex align-items-center">
        <i color="#fbbf24" class="pi pi-sitemap"></i> 
        <h5 class="text-base font-bold">Branches:</h5>
        <p class="ml-1">{{ number_of_branches }}</p>
    </div>
    <div class="p-col-12 flex align-items-center">
        <i color="#fbbf24" class="pi pi-hashtag"></i> 
        <h5 class="text-base font-bold">Tags:</h5>
        <p class="ml-1">{{ number_of_tags }}</p>
    </div>

    <div class="p-col-12 flex align-items-center">
        <i color="#fbbf24" class="pi pi-directions"></i> 
        <h5 class="text-base font-bold">Pull Requests:</h5>
        <p class="ml-1">{{ number_of_pulls }}</p>
    </div>
    <div class="p-col-12 flex align-items-center">
        <i color="#fbbf24" class="pi pi-check"></i> 
        <h5 class="text-base font-bold">Commits:</h5>
        <p class="ml-1">{{ number_of_commits }}</p>
    </div>
    <div class="p-col-12 flex align-items-center">
        <i color="#fbbf24" class="pi pi-download"></i> 
        <h5 class="text-base font-bold">Downloads:</h5>
        <p class="ml-1">{{ number_of_downloads }}</p>
    </div>
    <div class="p-col-12 flex align-items-center">
        <i color="#fbbf24" class="pi pi-times-circle"></i> 
        <h5 class="text-base font-bold">Issues:</h5>
        <p class="ml-1">{{ number_of_issues }}</p>
    </div>
</div>

</div>

        
      </div>

            <!-- <ContainerOfContributors></ContainerOfContributors> -->
            <template #footer>
                <Button label="Go to Repo" class="w-10rem " icon="pi pi-external-link" @click="goToRepo" />
                <Button label="Fork" class="w-8rem " severity="success" icon="pi pi-share-alt" @click="goToRepo" />
                <Button label="Close" text severity="secondary" @click="visible = false" autofocus />
            </template>
        </Dialog>
    </div>
</template>

<script>
import ContainerOfContributors from '@/components/Catalog/ContainerOfContributors.vue';

export default {
    expose: ['toggleVisibility'],
    components: {
        ContainerOfContributors
    },
    data() {
        return {
            visible: false,
            name: "example",
            full_name: "Example Repository",
            private: false,
            owner_name: "John Doe",
            owner_avatar_url: "https://example.com/avatar.jpg",
            repo_html_url: "https://github.com/example",
            repo_api_url: "https://api.github.com/repos/example",
            short_description: 
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Aliquet bibendum enim facilisis gravida. Pharetra magna ac placerat vestibulum lectus mauris ultrices eros. Cum sociis natoque penatibus et magnis dis parturient montes. Neque convallis a cras semper auctor neque vitae. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Aliquet bibendum enim facilisis gravida. Pharetra magna ac placerat vestibulum lectus mauris ultrices eros. Cum sociis natoque penatibus et magnis dis parturient montes. Neque convallis a cras semper auctor neque vitae.",
            fork: false,
            number_of_forks: 0,
            number_of_stars: 10,
            number_of_watchers: 5,
            number_of_collaborators: 3,
            number_of_contributors: 7,
            number_of_branches: 2,
            number_of_tags: 3,
            number_of_pulls: 5,
            number_of_commits: 100,
            number_of_downloads: 1000,
            number_of_issues: 20,
            languages: "JavaScript,HTML,CSS",
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
            default_branch: "main",
        };
    },
    computed: {
    languageList() {
      return this.languages.split(",");
    }
    },
    methods:{
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
    transform: scale(1) translate(-50%, -50%); /* Center the image */
    min-width: auto; /* Ensure the image covers the container */
    min-height: auto; /* Ensure the image covers the container */
}
</style>