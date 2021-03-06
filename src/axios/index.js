import JsonP from 'jsonp'
export default class Axios {
    static jsonp (options){
        return new Promise((resolve,reject)=>{
            JsonP(options.url,{
                param:'callback' 
            },function(err,response){
                // console.log(response,'axios---index.js')
                if(response.status == 'success'){
                    resolve(response)
                }else{
                    reject(response.message)
                }
            })
        })
    }
}