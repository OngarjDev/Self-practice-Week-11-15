export async function postItems(url,bodyobj) {
  try{
    const res = await fetch(url,{
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(bodyobj)
    });
    if(!res.ok) throw new Error(`HTTP ${res.status}`);
    return await res.json
  }catch(err){
    
  }
}