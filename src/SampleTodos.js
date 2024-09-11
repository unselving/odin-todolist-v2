import {v4 as uuidv4} from 'uuid';

    const SampleTodos = [{title: "Feed the Cat",
                description: "The cat won't stop screaming at you until you do",
                dueDate: '2024-09-03',
                priority: "High",
                listName: "Default",
                id: uuidv4(),
                isDone: false,
            },
            {title: "Do laundry",
                description: "Pick clothes up, put in laundry basket, throw in laundry machine. Simple.",
                dueDate: '2024-10-09',
                priority: "Medium",
                listName:"Default",
                id: uuidv4(),
                isDone: false,
            },
            {title: "Eat a whole can of chipotle peppers in adobo",
                description: "It burns so good",
                dueDate: '2024-10-11',
                priority: "Medium",
                listName:"Spicy",
                id: uuidv4(),
                isDone: false,
            }
        ]


export default SampleTodos;