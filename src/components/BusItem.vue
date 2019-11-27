<template>
    <div class="bv-example-row" id="jumbo1" bg-variant="white" text-variant="black">
        <b-row>
            <div class="col-sm-2">
            <br />
            <b-img id="image" thumbnail fluid :src="bus.image" alt="Image 1"></b-img>

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
                <b-button variant="outline-success">Get Ticket</b-button>
            </b-form>
            </div>
        </b-row>
    </div>
</template>

<script>
export default {
    name:"BusItem",
    props:["bus"]
}
</script>