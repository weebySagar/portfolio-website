export function findValueByKey(obj,alias){
    if(obj){
        for(let key in obj){
            if(key == alias)
            {
                return obj[key].data?.attributes
            }
        }
    }
}