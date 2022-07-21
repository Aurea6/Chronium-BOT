const client = require("../../index") 

client.on("threadCreate", async (t) => {
  if (!t.joinable) return
  t.join()

}) 

