<template>
    <div class="bv-example-row" id="jumbo1" bg-variant="white" text-variant="black">
        <b-row>
            <div class="col-sm-2">
            <br />
            <b-img id="image" thumbnail fluid :src="imageHost+bus.image" alt="Image 1"></b-img>

            <p>{{ bus.name }} {{ bus.plateNumber }} . {{ bus.busType }}</p>
            </div>
            <div class="col-sm-3">
            <h5 class="text-center">{{ bus.company }}</h5>
            <hr />
            <p>
                Departure Time: {{ bus.departureTime }}
                <br />Arrival Time: {{ bus.arrivalTime }}
                <br />Date: {{ bus.departureDate }}
            </p>
            </div>
            <div class="col-sm-5">
            <h5 class="text-center">{{ bus.busRoute.from }} - {{ bus.busRoute.to }}</h5>
            <hr />
            </div>
            <div class="col-sm-2">
            <h5 class="text-center">{{ bus.availableSeats }} Seats</h5>
            <hr />
            <b-form id="b-getTicket">
                <b-button v-b-modal.modal-xl variant="outline-success" @click="getTicket">Get ticket</b-button>
            </b-form>

            <Modal v-bind:showModal="isModalVisible" 
                   v-bind:bus="bus" 
                   v-on:book='book' 
                   v-on:close='closeModal' />
            </div>
        </b-row>
    </div>
</template>

<script>
// import { EventBus } from '../main';
import  Modal  from './Modal.vue';

export default {
    name:"BusItem",
    data(){
        return {
            isModalVisible: false,
            imageHost: "http://localhost:8082"
        }
    },
    components:{
        Modal
    },
    props:["bus"],
    // mounted(){
    //     EventBus.$on('ok', clickCount => {
    //         console.log(`Oh, that's nice. It's gotten ${clickCount} clicks! :)`)
    //     });
    // },
    methods:{
        //  getTicket:function(){
        //      let bus = this.bus
        //      EventBus.$emit('displayBusDataOnModal',bus);
        //  }
        getTicket() {
           this.isModalVisible = true
        },
        book(){
            console.log("BOOK TODO")
        },
        closeModal(){
            console.log("CLOSE MODAL")
            this.isModalVisible = false
        }

     }
}
</script>