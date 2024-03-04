const express=require('express')
const bodyparser=require('body-parser')
const sql=require('mysql2')
const mycors=require('cors')


const base = sql.createConnection({
    database:"sample",
    user:"root",
    password:"kalaipriyan0007",
    port:"3306"

})




const app=express()
app.use(mycors())
app.use(bodyparser.urlencoded({extended:true}))
app.use(bodyparser.json())

base.connect((err)=>{

    if(err){
        console.log("database was not connected")
    }
    console.log("database was connected successfully")

})

app.listen(1234,()=>{
    console.log("server is connected successfully")
})

app.get('/read',async(req,res)=>{
    const sql="select * from  details"
    base.query(sql,[req.params.read],(err,results)=>{
        if(err){
            res.status(500).json({error:`${err}`})
        }
        else if(results.length==0){
            res.status(404).json({message:"no records are found"})
        }
        res.status(200).json({message:results})
    })
})

app.post('/insert',async(req,res)=>{
    const{facultyname,date,purpose}=req.body
    const sql="insert into details values(?,?,?)"
    base.query(sql,[facultyname,date,purpose],(err,results)=>{
            if(err){
                res.status(500).json({error:`${err} is occurred`})
            }
            else if(results.length==0){
                res.status(404).json({message:'not found'})
            }
            res.status(200).json({message:"details have been posted"})
        })
})

////student field work

app.get('/record',async(req,res)=>{
    const sql="select * from  student_field_work"
    base.query(sql,[req.params.record],(err,results)=>{
        if(err){
            res.status(500).json({error:`${err}`})
        }
        else if(results.length==0){
            res.status(404).json({message:"no records are found"})
        }
        res.status(200).json({message:results})
    })
})

app.post('/enter',async(req,res)=>{
    const{academic_year,semester,name_of_the_faculty,
        nature_of_guidance,
        duration_from,
        duration_to,
        no_of_students,
        name_of_the_student,
        certificate}=req.body
    const sql="insert into student_field_work  values(?,?,?,?,?,?,?,?,?)"
    base.query(sql,[academic_year,semester,name_of_the_faculty,
        nature_of_guidance,
        duration_from,
        duration_to,
        no_of_students,
        name_of_the_student,
        certificate],(err,results)=>{
            if(err){
                res.status(500).json({error:`${err} is occurred`})
            }
            else if(results.length==0){
                res.status(404).json({message:'not found'})
            }
            res.status(200).json({message:"details have been posted"})
        })
})