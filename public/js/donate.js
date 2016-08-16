var vm =new Vue({
  
el: 'body',

  data: {

    email:'',
    name:'',
    address:'',
    ifAddress:false
  },

  methods:{
    
    donatesend : function(){
      
      var info={};
      info.email=this.email;
      info.name=this.name;
                this.$http({url:"http://collabpad-bitcoin-bhuvanmalik007.c9users.io/donate/"+info.email+"/"+info.name, method:"GET"}).then(function (response) {
  
                 
                  console.log("status : "+response.status);
                  
                  // get all headers
                  //console.log("headers : "+response.headers());
  
  
                  // get 'expires' header
                  //response.headers('expires');
  
                  // set data on vm
                  
                  this.address=response.data.data.address;
                  this.ifAddress=true;
                  console.log(response.data.data.address);
                 
  
                //  this.$set('textarea', JSON.stringify(response.data,null, 2))
  
              })
            
   
    }
  

  }


})
