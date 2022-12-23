// Projects
const projects = [
  {
    id: '1',
    clientId: '1',
    name: 'project management website',
    description:
      'Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu.',
    status: 'In Progress',
    active: [
      {
        title: "serve sample data through graphQL api to client side",
        description: "",
        created: "december 19th, 2022"
      },
      {
        title: "render client side sample data",
        description: "",
        created: "december 19th, 2022"
      },
    ],
    backlog: [
      {
        title: "create mongoDB database to persist data",
        description: "",
        created: "december 19th, 2022"
      },
      {
        title: "create graphQL api that retreives data from database",
        description: "",
        created: "december 19th, 2022"
      },
      {
        title: "client side rendering of data from server",
        description: "",
        created: "december 19th, 2022"
      },
      {
        title: "create client side ticket functionality",
        description: "",
        created: "december 19th, 2022"
      },
      {
        title: "develop client side ticket moving to different catagory functionality",
        description: "",
        created: "december 19th, 2022"
      }
    ],
  
    completed: [],
  },
  {
    id: '2',
    clientId: '2',
    name: 'Dating App',
    description:
      'Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu.',
    status: 'In Progress',
    active: [],
    backlog: [],
    completed: []
  },
  {
    id: '3',
    clientId: '3',
    name: 'SEO Project',
    description:
      'Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu.',
    status: 'In Progress',
    active: [],
    backlog: [],
    completed: []
  },
  {
    id: '4',
    clientId: '4',
    name: 'Design Prototype',
    description:
      'Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu.',
    status: 'Done',
    active: [],
    backlog: [],
    completed: []
  },
  {
    id: '5',
    clientId: '5',
    name: 'Auction Website',
    description:
      'Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu.',
    status: 'In Progress',
    active: [],
    backlog: [],
    completed: []
  },
];

// Clients
const clients = [
  {
    id: '1',
    name: 'Tony Stark',
    email: 'ironman@gmail.com',
    phone: '343-567-4333',
  },
  {
    id: '2',
    name: 'Natasha Romanova',
    email: 'blackwidow@gmail.com',
    phone: '223-567-3322',
  },
  {
    id: '3',
    name: 'Thor Odinson',
    email: 'thor@gmail.com',
    phone: '324-331-4333',
  },
  {
    id: '4',
    name: 'Steve Rogers',
    email: 'steve@gmail.com',
    phone: '344-562-6787',
  },
  {
    id: '5',
    name: 'Bruce Banner',
    email: 'bruce@gmail.com',
    phone: '321-468-8887',
  },
];

export { projects, clients };
