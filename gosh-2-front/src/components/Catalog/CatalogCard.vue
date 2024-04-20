
<template>
    <Card class="card-container" style="width: '100%'; overflow: hidden" @click="showDetails">
        <template #header>
            <img class="card-image" alt="user header" src="@/assets/images/what-is-github-1-1.png" />
            <!-- <img alt="user header" :src="avatarURL" /> -->

        </template>
        <template #title>{{ repositoryName }}</template>
         <template #subtitle>
            <div class="flex">
                <div class="flex align-items-center">
                    <i color="#fbbf24" class="pi pi-star-fill"></i> 
                    <span>Stars : {{ stars }}</span>
                </div>
                <div class="ml-3 flex align-items-center">
                    <i color="#fbbf24" class="pi pi-share-alt"></i> 
                    <span>Forks : {{ forks }}</span>
                </div>
                <div class="ml-3 flex align-items-center">
                    <i color="#fbbf24" class="pi pi-user-plus"></i> 
                    <span>Contributors : {{ forks }}</span>
                </div>
            </div>


        </template>

        <template #content>
            <p class="m-0">
                {{ description }}
            </p>
        </template>
        <template #footer>
            <div class="flex gap-3 mt-1">
                <Button label="Go to Repo" class="w-full " icon="pi pi-external-link" @click="goToRepo" />
                <DialogContributors></DialogContributors>
                <DialogRepo ref="details"></DialogRepo>

                <!-- <Button label="Fork" class="w-full" icon="pi pi-code" @click="goToFork"/> -->
                <!-- <Button label="Cancel" severity="secondary" outlined class="w-full" /> -->
            </div>
        </template>
    </Card>
</template>

<script>
import DialogContributors from '../Catalog/DialogContributors.vue'
import DialogRepo from './DialogRepo.vue'

export default {
  
  components: {
    DialogContributors,
    DialogRepo
  },
  props: {
    repositoryID : String,
    repositoryName: String,
    forks: String,
    stars: String,
    description: String,
    avatarURL: String,
    contributorAccount: String
  },
  data() {
    return {
     
    }
  },
  methods: {
    goToFork(){
        window.open('https://www.github.com', '_blank');
    },
    showDetails(){
        this.$refs.details.toggleVisibility();
    }

  }
}
</script>
<style>
.card-container{
    box-shadow: -3px 5px 4px rgba(0, 0, 0, 0.25);    
    transition: box-shadow 0.3s ease-in-out;
}
.card-container:hover {
    cursor: pointer;
    box-shadow: 0px 0px 40px -3px #06b6d4;
}

.card-image {
    height: 300px;
    width: auto;
}
.flex.align-items-center {
    display: flex;
    justify-content: flex-start;
    align-items: center;
    gap: 0.5rem;
}
</style>