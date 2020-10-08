const express = require('express'),
      app = express(),
      path = require('path'),
      pathPublic = path.join(__dirname,"../public"),
      port = process.env.PORT || 3000;
app.use(express.static(pathPublic));



app.listen(port,()=>{
    console.log(`Server is up on port ${port}`);
})