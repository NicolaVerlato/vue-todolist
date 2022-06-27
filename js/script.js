var app = new Vue(
    {
        el: '#root',
        data: {
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
            
            removeTodo(currentTodo) {
                this.todos.splice(currentTodo, 1);
            }
        }
    },
);