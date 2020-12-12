<template>
 <div id="nat">
  <div class="kartica">
      <div class="podaci">
    <div class="row">
    <div class="column"><h6>OIB</h6>
    <a>{{ kpuobr.oib }}</a></div>
  <div class="column"><h6>Ime</h6>
  <a>{{ kpuobr.ime }}</a>
  </div>
  <div class="column"><h6>Prezime</h6><a>{{ kpuobr.prezime }}</a></div>
  <div class="column"><h6>Vrsta pretrage</h6><a>{{ kpuobr.pretraga }}</a></div>
  <div class="column"><h6>Datum i vrijeme</h6><a>{{ kpuobr.vrijeme }}</a></div>
  <div class="column"><h6>Pratioc</h6><a>{{ kpuobr.preuzimatelj }}</a></div>
  <div class="column"><h6>Vrijeme preuzimanja</h6><a>{{ kpuobr.vrijemep }}</a></div>
  <div class="column2"><button  @click="zavrsi(kpuobr.oib)" id="obrisi">Završi</button></div>

</div>
      </div>
  </div>


  </div>
</template>
<style>
.column2{
padding-top: 20px;
}
#obrisi {
margin-bottom: 30px;
color: red
}
</style>

<script>
import store from "../store";
import moment from 'moment';
export default {
    data() {
    return store;
  },
  props: [ "kpuobr" ],
  methods: {
      
   zavrsi(oib){
var date = new Date();
var formattedDate = moment(date).format('YYYY/MM/DD/ [u] hh:mm');
var brisanje_upit = firebase.firestore().collection("pacijenti").where("oib","==",oib);
brisanje_upit.get().then(function(querySnapshot) {
  querySnapshot.forEach(function(doc) {
  doc.ref.set({
 vrijemez: formattedDate,
 status: 'obraden'
},{merge:true})
  });
}).then(alert("Pacijent obrađen"));
  }


  
  },
  
}
</script>


