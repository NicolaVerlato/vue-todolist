var app = new Vue(
    {
        el: '#root',
        data: {
            currentTodo: 0,
            textNewTodo: '',
            newTodo: {},
            todos: [
                {
                    text: 'Fare i compiti',
                    done: false
                },
                {
                    text: 'Fare la spesa',
                    done: true
                },
                {
                    text: 'Fare il bucato',
                    done: false
                }
            ],
        },
        methods: {
            addTodo(todos, newTodo) {
                if(this.textNewTodo.length > 0) {
                    newTodo.text = (this.textNewTodo);
                    newTodo.done = false;
                    todos.push(newTodo);
                }
                this.textNewTodo = '';
            },
            removeTodo(index) {
                this.todos.splice(index, 1);
            },
            markedText(currentTodo) {
                this.todos[currentTodo].done = !this.todos[currentTodo].done;
            }
        }
    },
);