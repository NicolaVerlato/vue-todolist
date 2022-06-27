var app = new Vue(
    {
        el: '#root',
        data: {
            textNewTodo: '',
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
                    todos.push({
                        text: this.textNewTodo,
                        done: false
                    });
                }
                this.textNewTodo = '';
            },
            removeTodo(index) {
                this.todos.splice(index, 1);
            }
        }
    },
);