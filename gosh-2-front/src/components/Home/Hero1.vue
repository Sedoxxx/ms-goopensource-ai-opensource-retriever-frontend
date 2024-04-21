<template>
    
<div class="section">
    <div class="grid grid-nogutter surface-section text-800">
        <div class="col-12 md:col-6 p-6 text-center md:text-left flex align-items-center ">
            <section>
                <span class="block text-6xl font-bold mb-1 poppins">Contribute to Open Source Projects without limits</span>
                <div class="text-3xl text-primary font-bold mb-3 plex-mono">access the larget community of open source enthusiasts</div>
                <p class="mt-0 mb-4 text-700 line-height-3 plex-mono">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                
                <Button label="Sessions" type="button" class="mr-3 p-button-raised"         @click="navigateToSessions()"></Button>
                <Button label="Demo" type="button" class="p-button-outlined"   @click="navigateToSessions()"></Button>
            </section>
        </div>
        <div class="col-12 md:col-6 overflow-hidden">
            <!-- <img src="@/assets/images/Home/hero-image-1.svg" alt="Image" class="hero-image md:ml-6 block md:h-full" style="clip-path: polygon(8% 0, 100% 0%, 100% 100%, 0 100%)" /> -->
            <img src="@/assets/images/Home/hero-image-1.svg" alt="Image" class="hero-image md:ml-6 block md:h-full"  />

        </div>
    </div>
</div>


</template>

<script>
export default {
    methods: {
        navigateToSessions() {
          this.$router.push(`/sessions`);
        }
    }

}   
</script>

<style scoped>

.poppins {
    font-family: Poppins;
    font-weight: 700;
}

.plex-mono {
    font-family: IBM Plex Mono;
}

.section {
    padding: 0 12.5%;
}

.hero-image {
    transform: scale(110%) ;
}

</style>