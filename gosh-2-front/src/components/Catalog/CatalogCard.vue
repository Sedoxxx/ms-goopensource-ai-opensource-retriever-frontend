
<template>
    <Card class="card-container" style="width: '100%'; overflow: hidden" @click="showDetails">
        <template #header>
            <!-- <img class="card-image" alt="user header" src="@/assets/images/what-is-github-1-1.png" /> -->
            <div class="repo-image-container flex justify-content-center mb-5">
                <img class="card-image" alt="user header" :src="selectedGif" />
            </div>


            <!-- <img alt="user header" :src="avatarURL" /> -->

        </template>
        <template #title>{{ repositoryData.full_name }}</template>
         <template #subtitle>
            <div class="flex">
                <div class="flex align-items-center">
                    <i color="#fbbf24" class="pi pi-star-fill"></i> 
                    <span>Stars : {{ repositoryData.number_of_stars }}</span>
                </div>
                <div class="ml-3 flex align-items-center">
                    <i color="#fbbf24" class="pi pi-share-alt"></i> 
                    <span>Forks : {{ repositoryData.number_of_forks }}</span>
                </div>
                <div class="ml-3 flex align-items-center">
                    <i color="#fbbf24" class="pi pi-user-plus"></i> 
                    <span>Contributors : {{ repositoryData.number_of_contributors }}</span>
                </div>
            </div>


        </template>

        <template #content>
            <p class="m-0">
                {{ repositoryData.short_description }}
            </p>
        </template>
        <template #footer>
            <div class="flex gap-3 mt-1">
                <Button label="Go to Repo" class="w-full " icon="pi pi-external-link" @click="goToRepo" />
                <DialogRepo ref="details" :repositoryData="repositoryData" :selectedGif="selectedGif"></DialogRepo>

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
    repositoryData: Object,
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
      gifs : [
        "https://media.giphy.com/media/l1J9KU2KmTwzptMD6/giphy.gif?cid=790b7611whocz0rw7avyvcll8x51rhoi9vcpzemzobqz4m5z&ep=v1_gifs_search&rid=giphy.gif&ct=g",
        "https://media.giphy.com/media/FVAxtXxUyeb6L6OFHr/giphy.gif?cid=790b7611whocz0rw7avyvcll8x51rhoi9vcpzemzobqz4m5z&ep=v1_gifs_search&rid=giphy.gif&ct=g",
        "https://media.giphy.com/media/qy5puFfG5DGAFbr0SD/giphy.gif?cid=ecf05e47czxnxmub0msyhytsgapmujuyducrf28q3iz98aak&ep=v1_gifs_search&rid=giphy.gif&ct=g",
        "https://media.giphy.com/media/sPD0WMaCidlM9E2Nl8/giphy.gif?cid=ecf05e47czxnxmub0msyhytsgapmujuyducrf28q3iz98aak&ep=v1_gifs_search&rid=giphy.gif&ct=g",
        "https://media.giphy.com/media/fw8uZriJW4TlhmZnUj/giphy.gif?cid=790b7611whocz0rw7avyvcll8x51rhoi9vcpzemzobqz4m5z&ep=v1_gifs_search&rid=giphy.gif&ct=g",
        "https://media.giphy.com/media/YnexM9LwlwGu4Z1QnS/giphy.gif?cid=790b7611whocz0rw7avyvcll8x51rhoi9vcpzemzobqz4m5z&ep=v1_gifs_search&rid=giphy.gif&ct=g",
        "https://media.giphy.com/media/7PqDpUepjFkBXr3ZK9/giphy.gif?cid=790b7611whocz0rw7avyvcll8x51rhoi9vcpzemzobqz4m5z&ep=v1_gifs_search&rid=giphy.gif&ct=g",
        "https://media.giphy.com/media/jsH69xiL2JonAcOwwE/giphy.gif?cid=ecf05e47czxnxmub0msyhytsgapmujuyducrf28q3iz98aak&ep=v1_gifs_search&rid=giphy.gif&ct=g",
        "https://media.giphy.com/media/3ohs7H0ZoO3EiccXmw/giphy.gif?cid=ecf05e47v1t20hfm5fdfi5hmly0h46qtv2mzkqgwx1fy3gpc&ep=v1_gifs_search&rid=giphy.gif&ct=g",
        "https://media.giphy.com/media/l0MYtqHmbuPmuxZpC/giphy.gif?cid=ecf05e471mjjttmrnjljg4incii8gomc1ry2anf7s4dr5l0l&ep=v1_gifs_search&rid=giphy.gif&ct=g",
        "https://media.giphy.com/media/3o7ZeoSiPhPGGsOsYo/giphy.gif?cid=ecf05e47msbtqs0104npplmio6ecnplnxrgr2nne3nwhzzg1&ep=v1_gifs_search&rid=giphy.gif&ct=g",
        "https://media.giphy.com/media/3oz8xus1ykCFgxW2ac/giphy.gif?cid=ecf05e47hfaj9cipwcxgsfy134rl826o2nte9i3883uesxqf&ep=v1_gifs_search&rid=giphy.gif&ct=g",
        "https://media.giphy.com/media/3o7aCU6qwb129paxKU/giphy.gif?cid=ecf05e47msva56f0fceo1yiiqngje12lpolgp78bvgszk9zf&ep=v1_gifs_search&rid=giphy.gif&ct=g",
    ]
    ,
      selectedGif: ""
    }
  },
  mounted() {
    this.randomGif(); // Set an initial random gif on load
  },
  methods: {
    goToRepo(){

    },
    randomGif() {
      const randomIndex = Math.floor(Math.random() * this.gifs.length);
      this.selectedGif = this.gifs[randomIndex];
    },
    goToFork(){
        window.open('https://www.github.com', '_blank');
    },
    showDetails(){
        this.$refs.details.toggleVisibility();
    }

  }
}
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
    transform: scale(2.5) translate(-30%, -37%); /* Center the image */
    min-width: auto; /* Ensure the image covers the container */
    min-height: auto; /* Ensure the image covers the container */
}


.card-container{
    box-shadow: -3px 5px 4px rgba(0, 0, 0, 0.25);    
    transition: box-shadow 0.3s ease-in-out;    
}
.card-container:hover {
    cursor: pointer;
    box-shadow: 0px 0px 40px -3px #06b6d4;
    animation: rainbow-color 5s infinite linear;

}

/* .sticky-container {
  position: fixed;
  bottom: 0;
  left: 50%;
  transform: translateX(-50%);
  width: 60vw;
  padding: 20px;
  background-color: rgba(255, 255, 255, 1);
  border-radius: 15px 15px 0 0;
  display: flex;
  align-items: center;
  justify-content: space-between;
  column-gap: 0;
  box-shadow: 0px 0px 40px -3px #06b6d4;
  transition: box-shadow 0.3s ease-in-out;
  animation: rainbow-color 30s infinite linear;

} */

@keyframes rainbow-color {
  /* 0% { box-shadow: 0px 0px 40px -3px rgba(255, 0, 0, 0.8); }      Red */
  0% { box-shadow: 0px 0px 40px -3px rgba(107, 233, 255, 0.8); } 
  17% { box-shadow: 0px 0px 40px -3px rgba(255, 165, 0, 0.8); }   /* Orange */
  34% { box-shadow: 0px 0px 40px -3px rgba(255, 255, 0, 0.8); }   /* Yellow */
  51% { box-shadow: 0px 0px 40px -3px rgba(0, 128, 0, 0.8); }     /* Green */
  68% { box-shadow: 0px 0px 40px -3px rgba(0, 0, 255, 0.8); }     /* Blue */
  85% { box-shadow: 0px 0px 40px -3px rgba(75, 0, 130, 0.8); }    /* Indigo */
  100% { box-shadow: 0px 0px 40px -3px rgba(238, 130, 238, 0.8); } /* Violet */
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