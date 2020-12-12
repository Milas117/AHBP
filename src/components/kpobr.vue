<template>
 <div id="nat">
  <div class="kartica">
      <div class="podaci">
    <div class="row">
    <div class="column"><h6>OIB</h6>
    <a>{{ kpobr.oib }}</a></div>
  <div class="column"><h6>Ime</h6>
  <a>{{ kpobr.ime }}</a>
  </div>
  <div class="column"><h6>Prezime</h6><a>{{ kpobr.prezime }}</a></div>
  <div class="column"><h6>Vrsta pretrage</h6><a>{{ kpobr.pretraga }}</a></div>
  <div class="column"><h6>Datum i vrijeme</h6><a>{{ kpobr.vrijeme }}</a></div>
  <div class="column"><h6>Pratioc</h6><a>{{ kpobr.preuzimatelj }}</a></div>
  <div class="column"><h6>Vrijeme preuzimanja</h6><a>{{ kpobr.vrijemep }}</a></div>
  <div class="column"><h6>Vrijeme završetka</h6><a>{{ kpobr.vrijemez }}</a></div>

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
  props: [ "kpobr" ],

  
}
</script>


