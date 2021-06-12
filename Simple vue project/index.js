 new Vue({
 el: "#app",
 data:{
   
     items:[
     {name:"rice", price:50.00},
     {name:"onion", price:40.50},
     {name:"oil", price:140.00},
     ],
     newItem:" "
   },
      computed:{
         total(){
             var total=0
             this.items.forEach(item => {
             total += parseFloat(item.price)
         })
             return total
         }
     },
     methods:{
         addItems(){
             this.items.push({
                 name:this.newItem,
                 price:0.,
             })
         },
          removeItem(index){
         this.items.splice(index,1)
     }
     }
    
    
 })
