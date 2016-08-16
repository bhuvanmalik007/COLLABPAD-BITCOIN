var vm =new Vue({
  
el: 'body',

  data: {

    email:'',
    name:'',
  },

  methods:{
    
    donatesend : function(){
      
      var info={};
      info.email=this.email;
      info.name=this.name;
                this.$http({url:this.url, method:'get', data:info}).then(function (response) {
  
                 
                  console.log("status : "+response.status);
  
                  // get all headers
                  //console.log("headers : "+response.headers());
  
  
                  // get 'expires' header
                  //response.headers('expires');
  
                  // set data on vm
                  console.log(response.data);
  
                //  this.$set('textarea', JSON.stringify(response.data,null, 2))
  
              }
            
   
    }
  

  }


})
