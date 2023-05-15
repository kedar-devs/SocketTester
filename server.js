const app=require('./app')
const Port=process.env.Port||5000
app.listen(Port,()=>{
    console.log(`Server is up on port ${Port} ...`);
})