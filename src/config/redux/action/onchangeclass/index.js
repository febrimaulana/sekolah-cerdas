import axios from 'axios';
import { Notifikasi } from '../../../../component/atom/Notifikasi';


export const getselectSubclass = (data) => (dispatch) => {    
    console.log("data_subclass");
    console.log(data.idsubclass);
    let result ={};
    if(data.idsubclass == 1){
         result=
            {
                "1": "A",
                "2": "B"
            
            };
    }else{

             result=
            {
                "3": "C",
                "4": "D"
            };

    }
   
    return new Promise((resolve, reject) => {
        dispatch({ type: 'SET_SELECT_SUBCLASS', value: result });
        dispatch({ type: 'SET_LOADING', value: false })
        
    })
}


export const getselectclass = (data) => (dispatch) => {    
 
    let dataresult={};
    dataresult= {
        statusCode: "200",
        elapsedTime: "4.63",
        messages: "Success",
        total: 3,
        data: 
            {
                1: 'A',
                 2: "B"
            }
    
    };
    console.log("data_class");
    console.log(dataresult.data);
    let result ={};
 
    result= {
                1: 'A',
                 2: "B"
            
            };
  
           
    return new Promise((resolve, reject) => {
        dispatch({ type: 'SET_SELECT_CLASS', value: dataresult.data });
        dispatch({ type: 'SET_LOADING', value: false })
        
    })
}
