
  export async function checkParticipation(data, success, error) {
    try {
      var response = await fetch(`http://192.168.1.198:5000/api/user/checkParticipation`, {
        method: "POST",
        body: JSON.stringify(data),
        headers: {
            'Content-Type' : "application/json",
            'Accept' : "application/json",//les données sont de type json
        }
      });
  
      var result = await response.json();
  
      if (result.error) return error(result);
      return success(result);
    } catch (e) {
      error(e);
    }
  }