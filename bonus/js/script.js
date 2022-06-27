var app = new Vue(
    {
        el: '#root',
        data: {
            currentTodo: 0,
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
            addTodo() {
                if(this.textNewTodo.length > 0) {
                    this.todos.push({
                        text: this.textNewTodo,
                        done: false
                    });
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