/* Practica server usando post */
const servidor = require ('http');

const server = servidor.createServer((req,res)=>{
    console.log('Incoming Request');
    console.log(req.method, req.url);

   if(req.method === 'POST'){
    let body = '';

        
      req.on('data', (chunk)=>
      {
       
        body += chunk;
      });
      
      req.on('end', ()=>{
        let username = body.split('=')[1];
        res.end(username);


      

      });

   }
   else{
    res.setHeader('Content-Type','text/html')
    res.end('<form method="POST"><input type="text" name="username"></input><button type="submit">Create User</button></form>');
   } 

   

});

server.listen(5001);