<template>
  <div>
      <p style="text-align: center; font: 400% bold times;"> Route Details </p>
    <b-table class="border border-success" striped hover :items="items" ></b-table>
  </div>
</template>

<script>
export default {
  data() {
    return {
      items: [
        {
          Location: "CENTER WING",
          BusName: "CERES LINER",
          BusNumber: "Ceres Liner 55778",
          BusType: "Ordinary",
          Destination: "South Bus Terminal - Talisay, City of Naga, San Fernando, Sibonga, Argao, Dalaguete, Alcoy, Boljoon, Oslob, Santander",
          DepartureTime: "1:00 AM",
          ArrivalTime: "8:30 PM",
          NumberOfBuses: '5',
          Seats: "50 seats"
        },
        {
          Location: "CENTER WING",
          BusName: "CERES LINER",
          BusNumber: "Ceres Liner 55778",
          BusType: "Aircon",
          Destination: "Southbus Terminal - Talisay, City of Naga, San Fernando, Barili, Dumanjug, Badian, Samboan, Bato",
          DepartureTime: "4:00 AM",
          ArrivalTime: "6:00 PM",
          NumberOfBuses: '3',
          Seats: "45 Seaters"
        },
        {
          Location: "CENTER WING",
          BusName: "CERES LINER",
          BusNumber: "Ceres Liner 71289",
          BusType: "Ordinary",
          Destination: "Southbus Terminal - Talisay, City of Naga, San Fernando, Barili, Dumanjug, Badian, Samboan, Bato",
          DepartureTime: "1:00 AM",
          ArrivalTime: "10:00 PM",
          NumberOfBuses: '5',
          Seats: "55 Seaters"
        },
        {
          Location: "CENTER WING",
          BusName: "CERES LINER",
          BusNumber: "Ceres Tours 871",
          BusType: "Aircon",
          Destination: "Southbus Terminal - Talisay, City of Naga, San Fernando, Sibonga, Argao",
          DepartureTime: "04:00 AM",
          ArrivalTime: "06:00 AM",
          NumberOfBuses: '3',
          Seats: "45 Seaters"
        },
        {
          Location: "CENTER WING",
          BusName: "CERES LINER",
          BusNumber: "Ceres Liner 78542",
          BusType: "Aircon",
          Destination: "Southbus Terminal - Talisay, City of Naga, San Fernando, Sibonga, Argao",
          DepartureTime: "7:00 AM",
          ArrivalTime: "12:00 Mid",
          NumberOfBuses: '4',
          Seats: "40 Seaters"
        },
        {
          Location: "CENTER WING",
          BusName: "CERES LINER",
          BusNumber: "Ceres Liner 55778",
          BusType: "Aircon",
          Destination: "Southbus Terminal - Talisay, City of Naga, San Fernando, Sibonga, Argao, Dalaguete, Alcoy ",
          DepartureTime: "1:00 AM",
          ArrivalTime: "12:00 Mid",
          NumberOfBuses: '5',
          Seats: "45 Seaters"
        },
        {
          Location: "RIGHT WING",
          BusName: "CERES LINER",
          BusType: "Aircon",
          BusNumber: "Ceres Liner 45678",
          Destination: "Southbus Terminal - Balamban, via Toledo, Pinamungajan",
          DepartureTime: "4:00 AM",
          ArrivalTime: "7:00 PM",
          NumberOfBuses: '4',
          Seats: "55 Seaters"
        },
        {
          Location: "LEFT WING",
          BusName: "SUNRAYS",
          BusNumber: "Sunrays Bus Lines 45211",
          BusType: "Aircon",
          Destination: "Southbus Terminal - Talisay, City of Naga, San Fernando, Barili, Dumanjug, Badian, Samboan",
          DepartureTime: "4:00 AM",
          ArrivalTime: "8:30 PM",
          NumberOfBuses: '3',
          Seats: "56 Seaters"
        },
        {
          Location: "LEFT WING",
          BusName: "SUNRAYS",
          BusNumber: "Sunrays Bus Lines 58976",
          BusType: "Aircon",
          Destination: "Southbus Terminal - Talisay, City of Naga, San Fernando, Sibonga, Argao, Dalaguete, Alcoy, Boljoon, Oslob, Santander",
          DepartureTime: "4:00 AM",
          ArrivalTime: "8:30 PM",
          NumberOfBuses: '6',
          Seats: "56 Seaters"
        },
        {
          Location: "LEFT WING",
          BusName: "SUNRAYS",
          BusNumber: "Sunrays Bus Lines 80123",
          BusType: "Aircon",
          Destination: "Southbus Terminal - Talisay, City of Naga, San Fernando, Sibonga, Argao, Dalaguete, Alcoy",
          DepartureTime: "07:00 AM",
          ArrivalTime: "10:30 AM",
          NumberOfBuses: '4',
          Seats: "55 Seaters"
        },
        {
          Location: "LEFT WING",
          BusName: "SUNRAYS",
          BusNumber: "Sunrays Bus Lines 78542",
          BusType: "Ordinary",
          Destination: "Southbus Terminal - Talisay, City of Naga, San Fernando, Sibonga, Argao, Dalaguete, Alcoy, Boljoon, Oslob, Santander",
          DepartureTime: "01:00 PM",
          ArrivalTime: "08:30 AM",
          NumberOfBuses: '3',
          Seats: "39 Seaters"
        }
      ]
    };
  }
};
</script>