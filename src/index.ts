import { Hono } from 'hono'

const app = new Hono()

async function authmiddleware(c:any , next:any){
  if(c.req.header("Authorization") === "Bearer 123"){
    await next();
  }else{
    return c.json({
      msg : "U Having and unauthorized access"
    })
  }
}

app.post('/',authmiddleware,async (c) => {
  const body = await c.req.json();
  console.log(body);
  console.log(c.req.header("Authorization"));
  console.log(c.req.query("param"));
  

  return c.text('Finally getting the result');

})


export default app
