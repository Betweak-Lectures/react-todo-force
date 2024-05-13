const TODO_KEY = 'todos';

export const TodoStore = {
    setTodo: function(obj){
        localStorage.setItem(TODO_KEY, JSON.stringify(obj));
    },
    getTodo: function(){
        const todos = localStorage.getItem(TODO_KEY);
        if (todos){
            return JSON.parse(todos)
        }
        return [];
    }
}