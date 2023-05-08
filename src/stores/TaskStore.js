import {defineStore} from 'pinia'
export const useTaskStore=defineStore('taskStore',{
    state:()    =>({
        task:[],
        // loading:false,
        name:'Akash'
    }),
    getters:{
        favs(){
            return this.task.filter(t =>t.isFav)
        },
        favCount(){
            return this.task.reduce((prevValue,currentValue)=>{
                return currentValue.favs ? prevValue+1 :prevValue
            },0)
        },
        totalCount: (state)=>{
           return state.task.length
        }
    },
    actions:{

        deleteTask(id){
            this.task=this.task.filter(t=>{
                return t.id !==id
            })
        },


        addTask(task){
            this.task.push(task)
        },
        toggleFav(id){
            const task =this.task.find(t=> t.id === id)
            task.isFav= !task.isFav
        }
        // async getTask(){
        //     this.loading =true
        //     const res=await fetch('http://localhost/Aakash/project_api/public/api/get-all-data')
        //     const data =await res.json()
        //     this.task =data
        //     this.loading=false
        // },
        // async addTask(task){
        //     this.task.push(task)
        //     const res=await fetch('http://localhost/Aakash/project_api/public/api/pinia-data-store',{
        //         method:'POST',
        //         body:JSON.stringify(task),
        //         headers:{'Content-Type':'application/json'}
        //     })
        //     if(res.error){
        //         console.log(res.error)
        //     }
        // },
        // async deleteTask(id){
        //     this.task=this.task.filter(t=>{
        //         return t.id !==id
        //     })
        //     const res=await fetch('http://localhost/Aakash/project_api/public/api/get-all-data'+id,{
        //         method:'DELETE',
        //     })
        //     if(res.error){
        //         console.log(res.error)
        //     }
        // },
        // async toggleFav(id){
        //     const task =this.task.find(t=> t.id === id)
        //     task.isFav= !task.isFav
        //
        //     const res=await fetch('http://localhost/Aakash/project_api/public/api/storeData'+id,{
        //         method:'POST',
        //         body:JSON.stringify({isFav:task.isFav}),
        //         headers:{'Content-Type':'application/json'}
        //     })
        //     if(res.error){
        //         console.log(res.error)
        //     }
        // }
    }
})