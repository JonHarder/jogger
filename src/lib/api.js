const BACKEND_SERVER = 'http://localhost:5000'


const api = {
    getSessions: () => {
        return fetch(`${BACKEND_SERVER}/sessions`)
                .then(response => {
                    if (response.ok) {
                        return response.json()
                    } else {
                        throw Error(response.text())
                    }
                })
                .then(data => {
                    const sessions = data.sessions.sort((a, b) => new Date(a.date) - new Date(b.date))
                    return sessions
                })
                .catch(err => console.log(err))
    }
};


export default api;