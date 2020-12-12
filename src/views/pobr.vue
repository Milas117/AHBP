<template>

 <div id="nat">
  <div>


  </div>

 
      <div class="col">
        <h3 class="text-center mb-5">Obrađeni pacijenti</h3>
      </div>
<kpobr :key="kpobr.id" :kpobr="kpobr" v-for="kpobr in pacobradeni" />







  </div>
</template>


<script>
import kpobr from '@/components/kpobr.vue'
import store from "../store";
export default {
  data() {
    return store;
  },
    components: {
    kpobr

  },
  mounted(){
   if(this.pacobradeni.some(kpobr => kpobr.oib === doc.data().oib)==false){
    firebase.firestore().collection("pacijenti").where("status", "==", "obraden").onSnapshot(snapshot => {
    snapshot.docChanges().forEach(change => {
         if(change.type === 'added'){
        let doc = change.doc
         let kpobr=doc.data()
         kpobr.id = doc.id
        this.pacobradeni.push(kpobr);
}

 else if( change.type === 'removed'){
                           this.pacobradeni = this.pacobradeni.filter(pacobradeni =>{
                            return pacobradeni.id != change.doc.id
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