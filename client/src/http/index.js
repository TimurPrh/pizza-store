function CustomFetchException({log, res}) {
  this.log = log
  this.res = res
  this.name = "Исключение, ошибка fetch"
}

const getMenuTypes = async () => {
  const res = await fetch(`${process.env.REACT_APP_API_URL}api/type`);
  if (!res.ok) {
    throw new Error(`Could not fetch, status: ${res.status}`);
  }
  return await res.json();
}

const postMenuType = async (data) => {
  const token = localStorage.getItem('token')
  const res = await fetch(`${process.env.REACT_APP_API_URL}api/type`, {
    method: 'POST',
    cache: 'no-cache',
    headers: {
      'Content-Type': 'application/json',
      'authorization': `Bearer ${token}`
    },
    body: JSON.stringify(data)
  });
  if (!res.ok) {
    throw new CustomFetchException({log: `Could not fetch, status: ${res.status}`, res: await res.json()})
  }
  return await res.json();
}

const changeMenuType = async (id, data) => {
  const token = localStorage.getItem('token')
  const res = await fetch(`${process.env.REACT_APP_API_URL}api/type/${id}`, {
    method: 'PUT',
    cache: 'no-cache',
    headers: {
      'Content-Type': 'application/json',
      'authorization': `Bearer ${token}`
    },
    body: JSON.stringify(data)
  });
  if (!res.ok) {
    throw new CustomFetchException({log: `Could not fetch, status: ${res.status}`, res: await res.json()})
  }
  return await res.json();
}

const deleteMenuType = async (id) => {
  const token = localStorage.getItem('token')
  const res = await fetch(`${process.env.REACT_APP_API_URL}api/type/${id}`, {
    method: 'DELETE',
    cache: 'no-cache',
    headers: {
      'Content-Type': 'application/json',
      'authorization': `Bearer ${token}`
    }
  });
  if (!res.ok) {
    throw new CustomFetchException({log: `Could not fetch, status: ${res.status}`, res: await res.json()})
  }
  return await res.json();
}

const getMenuItems = async () => {
  const res = await fetch(`${process.env.REACT_APP_API_URL}api/menu`);
  if (!res.ok) {
    throw new Error(`Could not fetch, status: ${res.status}`);
  }
  return await res.json();
}

const postMenuItem = async (data) => {
  const token = localStorage.getItem('token')
  const res = await fetch(`${process.env.REACT_APP_API_URL}api/menu`, {
    method: 'POST',
    headers: {
      'authorization': `Bearer ${token}`
    },
    body: data
  });
  if (!res.ok) {
    throw new CustomFetchException({log: `Could not fetch, status: ${res.status}`, res: await res.json()})
  }
  return await res.json();
}
  
const changeMenuItem = async (data) => {
  const token = localStorage.getItem('token')
  const res = await fetch(`${process.env.REACT_APP_API_URL}api/menu`, {
      method: 'PUT',
      headers: {
        'authorization': `Bearer ${token}`
      },
      body: data
  });
  if (!res.ok) {
    throw new CustomFetchException({log: `Could not fetch, status: ${res.status}`, res: await res.json()})
  }
  return await res.json();
}

const deleteMenuItem = async (id) => {
  const token = localStorage.getItem('token')
  const res = await fetch(`${process.env.REACT_APP_API_URL}api/menu/${id}`, {
    method: 'DELETE',
    cache: 'no-cache',
    headers: {
      'Content-Type': 'application/json',
      'authorization': `Bearer ${token}`
    }
  });
  if (!res.ok) {
    throw new CustomFetchException({log: `Could not fetch, status: ${res.status}`, res: await res.json()})
  }
  return await res.json();
}

const getOrders = async (limit, page) => {
  const res = await fetch(`${process.env.REACT_APP_API_URL}api/order?limit=${limit}&page=${page}`);
  if (!res.ok) {
      throw new Error(`Could not fetch, status: ${res.status}`);
  }
  return await res.json();
}

const getOrdersIds = async () => {
  const res = await fetch(`${process.env.REACT_APP_API_URL}api/order/count`);
  if (!res.ok) {
      throw new Error(`Could not fetch, status: ${res.status}`);
  }
  return await res.json();
}

const postMenuCart = async (data) => {
  const res = await fetch(`${process.env.REACT_APP_API_URL}api/order`, {
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

const putDone = async (id, done) => {
  const token = localStorage.getItem('token')
  const res = await fetch(`${process.env.REACT_APP_API_URL}api/order/${id}`, {
    method: 'PUT',
    cache: 'no-cache',
    headers: {
      'Content-Type': 'application/json',
      'authorization': `Bearer ${token}`
    },
    body: JSON.stringify({ done })
  });
  if (!res.ok) {
    throw new CustomFetchException({log: `Could not fetch, status: ${res.status}`, res: await res.json()})
  }
  return await res.json();
}

const deleteOrder = async (id) => {
  const token = localStorage.getItem('token')
  const res = await fetch(`${process.env.REACT_APP_API_URL}api/order/${id}`, {
    method: 'DELETE',
    cache: 'no-cache',
    headers: {
      'Content-Type': 'application/json',
      'authorization': `Bearer ${token}`
    }
  });
  if (!res.ok) {
    throw new CustomFetchException({log: `Could not fetch, status: ${res.status}`, res: await res.json()})
  }
  return await res.json();
}

const postLogin = async (data) => {
  const res = await fetch(`${process.env.REACT_APP_API_URL}api/user/login`, {
    method: 'POST',
    cache: 'no-cache',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(data)
  });
  console.log('res')
  console.log(res)
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
  getOrdersIds,
  putDone,
  postMenuCart,
  deleteOrder,
  postLogin
}