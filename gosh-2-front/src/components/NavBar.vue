<template>
    
    <div class="card navbar">
        <Menubar :model="items" class="menubar w-auto justify-content-between">
 
            <!-- <template #start>
                <div class="logo-container">
                    <img src="@/assets/public/small-logo-gos.png" class="nav-logo" alt="gos-log">
                    <h1 class="nav-logo-title">GOShowcase</h1>
                </div>
            </template> -->
            <template #item="{ item, props, hasSubmenu, root }">
            <div class="item-container">
                <a v-ripple class="flex align-items-center justify-content-center" v-bind="props.action" @click="goToPath(item.to)">
                    <span :class="item.icon" />
                    <span class="ml-2">{{ item.label }}</span>
                    <Badge v-if="item.badge" :class="{ 'ml-auto': !root, 'ml-2': root }" :value="item.badge" />
                    <span v-if="item.shortcut" class="ml-auto border-1 surface-border border-round surface-100 text-xs p-1">{{ item.shortcut }}</span>
                    <i v-if="hasSubmenu" :class="['pi pi-angle-down', { 'pi-angle-down ml-2': root, 'pi-angle-right ml-auto': !root }]"></i>
                </a>
            </div>
            </template>
            <template #end>
                <div class="flex align-items-center gap-2">
                    <!-- <Avatar image="https://primefaces.org/cdn/primevue/images/avatar/amyelsner.png" shape="circle" class="mr-2"/> -->
                    <Avatar image="../src/assets/images/aymen_header_2.jpg" shape="circle" class="mr-2"/>
                </div>
            </template>
        </Menubar>
    </div>



</template>


<script>
import Menubar from 'primevue/menubar';
import Badge from 'primevue/badge';

export default {
    components :{
        Menubar,
        Badge,
    },
    data() {
        return {
            items: [
                {
                    label: 'Home',
                    icon: 'pi pi-home',
                    to: '/'
                },
                {
                    label: 'Sessions',
                    icon: 'pi pi-clock',
                    to: '/sessions'
                },
                {
                    label: 'Our Github',
                    icon: 'pi pi-github',
                    to: '/'
                },
                // {
                //  label: 'Features',
                // icon: 'pi pi-star'
                // },
                // {
                //     label: 'Catalog',
                //     icon: 'pi pi-star',
                //     to: '/catalog'
                // },
                // {
                //     label: 'Projects',
                //     icon: 'pi pi-search',
                //     items: [
                //         {
                //             label: 'Core',
                //             icon: 'pi pi-bolt',
                //             shortcut: '⌘+S'
                //         },
                //         {
                //             label: 'Blocks',
                //             icon: 'pi pi-server',
                //             shortcut: '⌘+B'
                //         },
                //         {
                //             label: 'UI Kit',
                //             icon: 'pi pi-pencil',
                //             shortcut: '⌘+U'
                //         },
                //         {
                //             separator: true
                //         },
                //         {
                //             label: 'Templates',
                //             icon: 'pi pi-palette',
                //             items: [
                //                 {
                //                     label: 'Apollo',
                //                     icon: 'pi pi-palette',
                //                     badge: 2
                //                 },
                //                 {
                //                     label: 'Ultima',
                //                     icon: 'pi pi-palette',
                //                     badge: 3
                //                 }
                //             ]
                //         }
                //     ]
                // },
                // {
                //     label: 'Contact',
                //     icon: 'pi pi-envelope',
                //     badge: 3
                // }
            ]
        };
    },
    methods:{
        goToPath(path) {
         this.$router.push(path);
        }
    }
};
</script>


<style scoped>






.nav-logo {
    height: 60px;
    width: 60px;
}
.nav-logo-title {
  font-family: "Montserrat", sans-serif;
  font-optical-sizing: auto;
  font-weight: 700;
  font-style: normal;
}

.menubar {
    display: flex;
    justify-content: space-between;
    width: 100%; /* Ensure it spans the full width of its container */
}

.logo-container, .flex.align-items-center.gap-2 {
    flex: 0 0 auto; /* Do not grow or shrink */
}

.item-container {
    flex: 1 1 auto; /* Allow this container to grow */
    display: flex;
    justify-content: center; /* Center items in this container */
}


</style>