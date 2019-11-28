<template>
    <transition name="modal" >
        <div class="modal-mask" v-show="show">
            <div class="modal-wrapper">
                <div class="modal-container" size='xl'>

                    <div class="modal-header">
                        <slot name="header">
                           <h2> {{ bus.company }} </h2>
                        </slot>
                    </div>
                    <br/>
                    <b-img id="image" thumbnail fluid :src="bus.image" alt="Image 1"></b-img>

                    <div class="modal-body">
                        <div class='col-sm-12'>
                        <slot name="body">
                            <h4>{{bus.busRoute.from}} - {{bus.busRoute.to}}</h4>

                            <p>{{ bus.name }} {{ bus.plateNumber }} . {{ bus.busType }}</p>

                            <p>
                                Departure Time: {{ bus.departureTime }}
                                <br />Arrival Time: {{ bus.arrivalTime }}
                                <br />Date: {{ bus.departureDate }}
                            </p>
                        </slot>
                        </div>
                    </div>

                    <div class="modal-footer">
                        <slot name="footer">
                            <button class="modal-default-button" @click="$emit('close')">
                                Close
                            </button>
                            <button class="modal-default-button" @click="$emit('close')">
                                Reserve
                            </button>
                        </slot>
                    </div>
                </div>
            </div>
        </div>
  </transition>
</template>

<script>
export default {
    name:"Modal",
    props: ['show','bus']
}
</script>

<style scoped>
.modal-mask {
    position: fixed;
    z-index: 9998;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, .5);
    transition: opacity .3s ease;
}
.modal-container {
    width: 500px;
    margin: 40px auto 0;
    padding: 20px 30px;
    background-color: #fff;
    border-radius: 2px;
    box-shadow: 0 2px 8px rgba(0, 0, 0, .33);
    transition: all .3s ease;
    font-family: Helvetica, Arial, sans-serif;
}
.modal-header h3 {
    margin-top: 0;
    color: #42b983;
}
.modal-body {
    margin: 20px 0;
}
.text-right {
    text-align: right;
}
.form-label {
    display: block;
    margin-bottom: 1em;
}
.form-label > .form-control {
    margin-top: 0.5em;
}
.form-control {
    display: block;
    width: 100%;
    padding: 0.5em 1em;
    line-height: 1.5;
    border: 1px solid #ddd;
}
.modal-enter {
  opacity: 0;
}
.modal-leave-active {
  opacity: 0;
}
.modal-enter .modal-container,
.modal-leave-active .modal-container {
  -webkit-transform: scale(1.1);
  transform: scale(1.1);
}
#image {
    height: 50%;
    width: 100%;
}
</style>