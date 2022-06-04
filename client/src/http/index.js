const getMenuTypes = async () => {
  const res = await fetch('http://localhost:5000/api/type');
  if (!res.ok) {
      throw new Error(`Could not fetch, status: ${res.status}`);
  }
  return await res.json();
}

const postMenuTypes = async (data) => {
  const res = await fetch('http://localhost:5000/api/type', {
      method: 'POST',
      cache: 'no-cache',
      headers: {
          'Content-Type': 'application/json'
      },
      body: JSON.stringify(data)
  });
  if (!res.ok) {
      throw new Error(`Could not fetch, status: ${res.status}`);
  }
  return await res.json();
}

const changeMenuType = async (id, data) => {
  const res = await fetch(`http://localhost:5000/api/type/${id}`, {
      method: 'PUT',
      cache: 'no-cache',
      headers: {
          'Content-Type': 'application/json'
      },
      body: JSON.stringify(data)
  });
  if (!res.ok) {
      throw new Error(`Could not fetch, status: ${res.status}`);
  }
  return await res.json();
}

const deleteMenuType = async (id) => {
  const res = await fetch(`http://localhost:5000/api/type/${id}`, {
      method: 'DELETE',
      cache: 'no-cache',
      headers: {
          'Content-Type': 'application/json'
      }
  });
  if (!res.ok) {
      throw new Error(`Could not fetch, status: ${res.status}`);
  }
  return await res.json();
}
const getMenuItems = async () => {
    const res = await fetch('http://localhost:5000/api/menu');
    if (!res.ok) {
        throw new Error(`Could not fetch, status: ${res.status}`);
    }
    return await res.json();
}

const postMenuItems = async (data) => {
    const res = await fetch('http://localhost:5000/api/menu', {
        method: 'POST',
        cache: 'no-cache',
        headers: {
            'Content-Type': 'multipart/form-data'
        },
        body: JSON.stringify(data)
    });
    if (!res.ok) {
        throw new Error(`Could not fetch, status: ${res.status}`);
    }
    return await res.json();
  }
  
  const changeMenItems = async (id, data) => {
    const res = await fetch(`http://localhost:5000/api/menu/${id}`, {
        method: 'PUT',
        cache: 'no-cache',
        headers: {
            'Content-Type': 'multipart/form-data'
        },
        body: JSON.stringify(data)
    });
    if (!res.ok) {
        throw new Error(`Could not fetch, status: ${res.status}`);
    }
    return await res.json();
  }
  
  const deleteMenItems = async (id) => {
    const res = await fetch(`http://localhost:5000/api/menu/${id}`, {
        method: 'DELETE',
        cache: 'no-cache',
        headers: {
            'Content-Type': 'application/json'
        }
    });
    if (!res.ok) {
        throw new Error(`Could not fetch, status: ${res.status}`);
    }
    return await res.json();
  }

const postMenuCart = async (data) => {
  const res = await fetch('http://localhost:3000/order/', {
      method: 'POST',
      cache: 'no-cache',
      headers: {
          'Content-Type': 'application/json'
      },
      body: JSON.stringify(data)
  });
  if (!res.ok) {
      throw new Error(`Could not fetch, status: ${res.status}`);
  }
  return await res.json();
}

export {
    getMenuTypes,
    postMenuTypes,
    changeMenuType,
    deleteMenuType,
    getMenuItems,
    postMenuItems,
    changeMenItems,
    deleteMenItems,
    postMenuCart
}