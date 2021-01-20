const baseURL = 'https://lit-savannah-09158.herokuapp.com/'

function getChores() {
  return fetch(`${baseURL}/chores`)
    .then(res => res.json())
};

function createChore(chore) {
  return fetch(`${baseURL}/chores`, {
    method: 'POST',
    headers: {'Content-Type': 'application/json'},
    body: JSON.stringify(chore)
  })
    .then(res => res.json())
};

function editChore(id, values) {
  return fetch(`${baseURL}/chores/${id}`, {
    method: 'PATCH',
    headers: {'Content-Type': 'application/json'},
    body: JSON.stringify(values)
  })
}

function deleteChore(id) {
  return fetch(`${baseURL}/chores/${id}`, {
    method: 'DELETE'
  })
};

const api = {
  getChores,
  createChore,
  editChore,
  deleteChore
};

export default api;