<template>

 <div id="nat">
  <div>


  </div>

 
      <div class="col">
        <h3 class="text-center mb-5">Pacijenti na čekanju</h3>
      </div>
<kpcekanje :key="kpcekanje.id" :kpcekanje="kpcekanje" v-for="kpcekanje in paccekanje" />







  </div>
</template>


<script>
import kpcekanje from '@/components/kpcekanje.vue'
import store from "../store";
export default {
  data() {
    return store;
  },
    components: {
    kpcekanje
  },
  mounted(){
   if(this.paccekanje.some(kpcekanje => kpcekanje.oib === doc.data().oib)==false){
    firebase.firestore().collection("pacijenti").where("status", "==", "cekanje").onSnapshot(snapshot => {
    snapshot.docChanges().forEach(change => {
         if(change.type === 'added'){
        let doc = change.doc
         let kpcekanje=doc.data()
         kpcekanje.id = doc.id
        this.paccekanje.push(kpcekanje);
}

 else if( change.type === 'removed'){
                           this.paccekanje = this.paccekanje.filter(paccekanje =>{
                            return paccekanje.id != change.doc.id
                          })
                        }


    });
});
 }




  },
  methods: {

 },

};
</script>

<style>



.kartica{
margin-left: -10%;
height: 98px;
width: 100vw;
border-top: #aaa 2px solid;
border-bottom: #aaa 2px solid;
background-color: rgb(255, 255, 255);
padding-bottom: 2%;
}

.podaci{
margin-left: 5%;
}

.column {
  float: left;
  width: 8%;
}

.row:after {
  content: "";
  display: table;
  clear: both;
}
</style>