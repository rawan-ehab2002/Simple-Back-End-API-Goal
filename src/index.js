const express = require('express');
const app = express();
const PORT = 3000;

app.use(express.json()); // to parse JSON body

let tasks = [];
let currentId = 1;

app.get('/', (req, res) => {
    res.send('✅ Task API is running! Try GET /tasks');
});

// POST /tasks → add a task
app.post('/tasks', (req, res) => {
    const { title, description } = req.body;
    if (!title || title.trim() === '') {
        return res.status(400).json({ error: 'Task title is required' });
    }
    const task = {
        id: currentId++,
        title,
        description: description || '',
        completed: false,
    };
    tasks.push(task);
    res.status(201).json(task);
});

// GET /tasks → list tasks
app.get('/tasks', (req, res) => {
    res.json(tasks);
});

// GET /tasks/:id → get one task
app.get('/tasks/:id', (req, res) => {
    const id = parseInt(req.params.id);
    const task = tasks.find(t => t.id === id);
    if (!task) {
        return res.status(404).json({ error: 'Task not found' });
    }
    res.json(task);
});

// PUT /tasks/:id → update a task
app.put('/tasks/:id', (req, res) => {
    const id = parseInt(req.params.id);
    const task = tasks.find(t => t.id === id);
    if (!task) {
        return res.status(404).json({ error: 'Task not found' });
    }

    const { title, description, completed } = req.body;
    if (title !== undefined) {
        if (title.trim() === '') {
            return res.status(400).json({ error: 'Task title cannot be empty' });
        }
        task.title = title;
    }
    if (description !== undefined) {
        task.description = description;
    }
    if (completed !== undefined) {
        task.completed = Boolean(completed);
    }
    res.json(task);
});

// DELETE /tasks/:id → remove a task
app.delete('/tasks/:id', (req, res) => {
    const id = parseInt(req.params.id);
    const index = tasks.findIndex(t => t.id === id);
    if (index === -1) {
        return res.status(404).json({ error: 'Task not found' });
    }
    const deleted = tasks.splice(index, 1)[0];
    res.json({ message: 'Task deleted', task: deleted });
});

app.listen(PORT, () => {
    console.log(`🚀 Server is running on http://localhost:${PORT}`);
});
