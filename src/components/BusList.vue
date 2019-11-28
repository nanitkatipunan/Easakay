<template>
    <div>
        <div v-bind:key="bus.id" v-for="bus in buses">
            <BusItem v-bind:bus="bus"/>
            <br/>
        </div>
    </div>
</template>

<script>
import BusItem from './BusItem.vue';

export default {
    name: "BusList",
    components: {
        BusItem
    },
    props:["buses"]
}

</script>