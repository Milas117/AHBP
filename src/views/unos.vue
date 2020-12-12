<template>
  <div id="unos">



<div>
    <div class="row">
      <div class="col">
        <h3 class="text-center mb-5">Unos pacijenta</h3>
      </div>
    </div>
    <div v-if="zaposlenik === 'pratioc'" class="row">
      <div class="col">
        <h5>Nemate ovlasti za unos</h5>
      </div>
    </div>
    <div v-if="zaposlenik === 'sestra'" class="row">
      <div class="col"></div>
      <div class="col">
        <form @submit.prevent="unospac">
          <div v-if="errorMessage" class="alert alert-danger">
            <strong>Ups!</strong>
            {{ errorMessage }}
          </div>

          <div class="form-group">
            <label for="passwordField">OIB pacijenta</label>
            <input
              v-model="oibp"
              class="form-control"
              id="oib"
              placeholder="Unesite OIB"
            />
          </div>
          <div class="form-group">
            <label >Ime</label>
            <input
              v-model="imep"
              class="form-control"
              id="isk"
              placeholder="Ime"
            />
          </div>
          <div class="form-group">
            <label for="passwordField">Prezime</label>
            <input
              v-model="prezimep"
              class="form-control"
              id="prezime"
              placeholder="Prezime"
            />
          </div>
<form>
  <div class="form-row align-items-center">
<label>Vrsta pretrage:</label>
<select v-model="pretragap">
    <option value="RTG">RTG</option>
    <option value="MSCT">MSCT</option>
    <option value="UZV">UZV</option>
</select>
  </div>
</form>
          <button type="submit" class="btn btn-primary mt-5">Potvrdi</button>
        </form>
      </div>
      <div class="col"></div>
    </div>
  </div>




  </div>
</template>


<script>
import store from "../store";
import moment from 'moment';
export default {
  data() {
    return store;
  },
  mounted() {},
  methods: {

      unospac(){
          var date = new Date();
          var formattedDate = moment(date).format('YYYY/MM/DD/ [u] hh:mm');
           firebase.firestore().collection("pacijenti").doc(this.oibp).set
                      ({
                      oib: this.oibp,
                      ime: this.imep,
                      prezime: this.prezimep,
                      pretraga: this.pretragap,
                      status: 'cekanje',
                      vrijeme: formattedDate
                   
                       }
                       )
      },

  }
};
</script>