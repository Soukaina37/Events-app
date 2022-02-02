export async function getUser(data, success, error) {
    try {
      var response = await fetch(`http://192.168.1.198:5000/api/user/infos`, {
        method: "POST",
        body: JSON.stringify(data),
        headers: {
            'Content-Type' : "application/json",
            'Accept' : "application/json",
        }
      });
  
      var result = await response.json();
  
      if (result.error) return error(result);
      return success(result);
    } catch (e) {
      error(e);
    }
  }

  export async function getEventInfo(data, success, error) {
    try {
      var response = await fetch(`http://192.168.1.198:5000/api/event/infos`, {
        method: "POST",
        body: JSON.stringify(data),
        headers: {
            'Content-Type' : "application/json",
            'Accept' : "application/json",
        }
      });
  
      var result = await response.json();
  
      if (result.error) return error(result);
      return success(result);
    } catch (e) {
      error(e);
    }
  }
  
  
  export async function addEventToUser(data, success, error) {
    try {
      var response = await fetch(`http://192.168.1.198:5000/api/user/addEvent`, {
        method: "POST",
        body: JSON.stringify(data),
        headers: {
            'Content-Type' : "application/json",
            'Accept' : "application/json",
        }
      });
  
      var result = await response.json();
  
      if (result.error) return error(result);
      return success(result);
    } catch (e) {
      error(e);
    }
  }

  export async function decNbrPlace(data, success, error) {
    try {
      var response = await fetch(`http://192.168.1.198:5000/api/event/addGuest`, {
        method: "POST",
        body: JSON.stringify(data),
        headers: {
            'Content-Type' : "application/json",
            'Accept' : "application/json",
        }
      });
  
      var result = await response.json();
  
      if (result.error) return error(result);
      return success(result);
    } catch (e) {
      error(e);
    }
  }

  export async function deleteEventFromUser(data, success, error) {
    try {
      var response = await fetch(`http://192.168.1.198:5000/api/user/deleteEvent`, {
        method: "POST",
        body: JSON.stringify(data),
        headers: {
            'Content-Type' : "application/json",
            'Accept' : "application/json",
        }
      });
  
      var result = await response.json();
  
      if (result.error) return error(result);
      return success(result);
    } catch (e) {
      error(e);
    }
  }

  export async function IncNbrPlace(data, success, error) {
    try {
      var response = await fetch(`http://192.168.1.198:5000/api/event/removeGuest`, {
        method: "POST",
        body: JSON.stringify(data),
        headers: {
            'Content-Type' : "application/json",
            'Accept' : "application/json",
        }
      });
  
      var result = await response.json();
  
      if (result.error) return error(result);
      return success(result);
    } catch (e) {
      error(e);
    }
  }

  export async function getImages(data, success, error) {
    try {
      var response = await fetch(`http://192.168.1.198:5000/api/event/images`, {
        method: "POST",
        body: JSON.stringify(data),
        headers: {
            'Content-Type' : "application/json",
            'Accept' : "application/json",
        }
      });
  
      var result = await response.json();
  
      if (result.error) return error(result);
      return success(result);
    } catch (e) {
      error(e);
    }
  }

