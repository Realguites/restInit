const express = require('express')
const app = express()

app.use(express.json());

let clients = [
    {id: 1, nome:'Guilherme', telefone:'53997121788'},
    {id: 2, nome:'Déllis', telefone:'53997121789'},
];

app.get('/clients', (req, res) => {
    res.json(clients);
})

app.get('/clients/:id', (req, res) => {
    const client = clients.filter(value => value.id === req.params.id);
    res.json(client);
})

app.post('/clients', (req, res) => {
    clients.push(req.body)
    console.log(req.body)
    res.json(clients)
})

app.put('/clients/:id', (req, res) => {
    const client = clients.filter(value => value.id === req.params.id);
    
    client[0].telefone = req.body.telefone;

    res.json(client[0])
})


app.delete('/clients/:id', (req, res) => {
    const client = clients.filter(value => value.id === req.params.id);
    
    client[0].telefone = req.body.telefone;

    res.json(client[0])
})

app.delete('/clients/:id', (req, res) => {
    const client = clients.filter(value => value.id != req.params.id);
    
   
    res.json(client)
})

app.listen(3000);
