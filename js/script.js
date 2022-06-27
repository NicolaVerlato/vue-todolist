var app = new Vue(
    {
        el: '#root',
        data: {
            textNewTodo: '',
            newTodo: {},
            currentTodo: '',
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
                    newTodo.done = false
                }
                todos.push(newTodo);
                this.textNewTodo = '';
            },
            removeTodo(currentTodo) {
                this.todos.splice(currentTodo, 1);
            }
        }
    },
);