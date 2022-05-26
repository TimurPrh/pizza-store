const getMenuItems = async () => {
  // const res = await fetch('https://jsonplaceholder.typicode.com/users');
  const res = await fetch('http://localhost:5000/api/menu');
  if (!res.ok) {
      throw new Error(`Could not fetch, status: ${res.status}`);
  }
  return await res.json();
}
const getMenuTypes = async () => {
  // const res = await fetch('https://jsonplaceholder.typicode.com/users');
  const res = await fetch('http://localhost:5000/api/type');
  if (!res.ok) {
      throw new Error(`Could not fetch, status: ${res.status}`);
  }
  return await res.json();
}
const postMenuItems = async (data) => {
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

export {getMenuItems, postMenuItems, getMenuTypes}