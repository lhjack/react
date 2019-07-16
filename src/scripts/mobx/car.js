import {observable,action,computed} from "mobx"
import {axios}  from "&"

class Car{
    @observable tails=[];
    @observable  flng=false
   
    // @observable  count=0
    @observable   wores=20
    @observable   price=0
    @observable   a=0
    @observable   b=0
    @observable   name=""


    @action getTails=()=>{
        axios.get("/react/allTail").then(res=>{
            this.tails=res.data.result
        })
    }

    @action addTo=(category_id)=>{
        this.tails=this.tails.map((item,id)=>{
            if(item.category_id==category_id){
                item.is_essential=true
                item.count +=1 
                // this.name=item.name
                if(item.count>0){
                    this.a=item.count
                }         
                // console.log(this.a)
                this.b = item.satisfy_rate
                // console.log(this.b)
                this.name=item.name
                // console.log(this.name)
            }
            return item
        })
    }
    @action Toback=(category_id)=>{   
        this.tails=this.tails.map((item,id)=>{
            if(item.category_id==category_id){
                item.is_essential=true
                if(item.count>1){
                   item.count -=1    
                //    if(item.satisfy_rate*item.count<=20){
                //     item.flng=false
                //    } 
                }else{
                    item.count=0
                    item.is_essential=false  
                    item.flng=false
                }
            }
            return item
        })
    }

    @computed get count(){
        var count=0
        this.tails.forEach((item)=>{
            count +=item.count
        })
        return count
    }
    @computed get sun(){
        var sun=true
        this.tails.forEach((item)=>{
            if(item.satisfy_rate*item.count>20){
                sun=false
            }     
        })
        return sun
    }
    // @computed get carNum(){
    //     var num=0;
    //     this.carList.forEach((item,i)=>{
    //         num +=item.count;
    //     })
    //     return num;
    // }

    @computed get total(){
        var total=0;
        this.tails.forEach((item)=>{
            total +=item.satisfy_rate*item.count
       
        })
        return total;
    }
}

export default new Car()