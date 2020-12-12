<template>

 <div id="nat">
  <div>


  </div>

 
      <div class="col">
        <h3 class="text-center mb-5">Pacijenti u obradi</h3>
      </div>
<kpuobr :key="kpuobr.id" :kpuobr="kpuobr" v-for="kpuobr in pacobrada" />







  </div>
</template>


<script>
import kpuobr from '@/components/kpuobr.vue'
import store from "../store";
export default {
  data() {
    return store;
  },
    components: {
    kpuobr
  },
  mounted(){
   if(this.pacobrada.some(kpuobr => kpuobr.oib === doc.data().oib)==false){
    firebase.firestore().collection("pacijenti").where("status", "==", "obrada").onSnapshot(snapshot => {
    snapshot.docChanges().forEach(change => {
         if(change.type === 'added'){
        let doc = change.doc
         let kpuobr=doc.data()
         kpuobr.id = doc.id
        this.pacobrada.push(kpuobr);
}

 else if( change.type === 'removed'){
                           this.pacobrada = this.pacobrada.filter(pacobrada =>{
                            return pacobrada.id != change.doc.id
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