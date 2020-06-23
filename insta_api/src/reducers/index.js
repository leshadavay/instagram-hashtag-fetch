const { shallowEqual } = require("react-redux")

const ApiResultReducer = (data=null,action) => {
     switch(action.type){
         case "STORE" :  return data=data;
         case "FETCH" :  return data;
         default : return data;
     }
}