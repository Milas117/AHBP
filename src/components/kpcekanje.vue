<template>
 <div id="nat">
  <div class="kartica">
      <div class="podaci">
    <div class="row">
    <div class="column"><h6>OIB</h6>
    <a>{{ kpcekanje.oib }}</a></div>
  <div class="column"><h6>Ime</h6>
  <a>{{ kpcekanje.ime }}</a>
  </div>
  <div class="column"><h6>Prezime</h6><a>{{ kpcekanje.prezime }}</a></div>
  <div class="column"><h6>Vrsta pretrage</h6><a>{{ kpcekanje.pretraga }}</a></div>
  <div class="column"><h6>Datum i vrijeme</h6><a>{{ kpcekanje.vrijeme }}</a></div>
  <div  class="column2"><button  @click="preuzmi(ime, prezime, kpcekanje.oib)" id="obrisi">Preuzmi</button></div>

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
  props: [ "kpcekanje" ],
  methods: {
      

  preuzmi(i,p,oib){
var date = new Date();
var formattedDate = moment(date).format('YYYY/MM/DD/ [u] hh:mm');
var imeiprezime = i.concat(" ", p);
var brisanje_upit = firebase.firestore().collection("pacijenti").where("oib","==",oib);
brisanje_upit.get().then(function(querySnapshot) {
  querySnapshot.forEach(function(doc) {
    doc.ref.set({
 preuzimatelj: imeiprezime,
 vrijemep: formattedDate,
 status: 'obrada'
},{merge:true})
  });
}).then(alert("Pacijent preuzet"));
  }


  
  },
  
}
</script>


