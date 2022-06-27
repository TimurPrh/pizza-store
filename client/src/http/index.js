const getMenuTypes = async () => {
  const res = await fetch('http://localhost:5000/api/type');
  if (!res.ok) {
    throw new Error(`Could not fetch, status: ${res.status}`);
  }
  return await res.json();
}

const postMenuType = async (data) => {
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

const postMenuItem = async (data) => {
  const res = await fetch('http://localhost:5000/api/menu', {
    method: 'POST',
    body: data
  });
  if (!res.ok) {
    throw new Error(`Could not fetch, status: ${res.status}`);
  }
  return await res.json();
}
  
const changeMenuItem = async (data) => {
  const res = await fetch(`http://localhost:5000/api/menu`, {
      method: 'PUT',
      body: data
  });
  if (!res.ok) {
      throw new Error(`Could not fetch, status: ${res.status}`);
  }
  return await res.json();
}

const deleteMenuItem = async (id) => {
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

const getOrders = async () => {
  const res = await fetch('http://localhost:5000/api/order');
  if (!res.ok) {
      throw new Error(`Could not fetch, status: ${res.status}`);
  }
  return await res.json();
}

const putDone = async (id, done) => {
  const res = await fetch(`http://localhost:5000/api/order/${id}`, {
    method: 'PUT',
    cache: 'no-cache',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({ done })
  });
  if (!res.ok) {
    throw new Error(`Could not fetch, status: ${res.status}`);
  }
  return await res.json();
}

const postMenuCart = async (data) => {
  const res = await fetch(`http://localhost:5000/api/order`, {
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

const deleteOrder = async (id) => {
  const res = await fetch(`http://localhost:5000/api/order/${id}`, {
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

export {
  getMenuTypes,
  postMenuType,
  changeMenuType,
  deleteMenuType,
  getMenuItems,
  postMenuItem,
  changeMenuItem,
  deleteMenuItem,
  getOrders,
  putDone,
  postMenuCart,
  deleteOrder
}