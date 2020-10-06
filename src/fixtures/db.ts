export const messages = [
  {
    id: "1",
    content: "Are you on your way?",
    createdAt: new Date(Date.now() - 60 * 1000 * 1000),
  },
  {
    id: "2",
    content: "Hey, how are you?",
    createdAt: new Date(Date.now() - 2 * 60 * 1000 * 1000),
  },
  {
    id: "3",
    content: "I should buy a Tesla",
    createdAt: new Date(Date.now() - 24 * 60 * 1000 * 1000),
  },
  {
    id: "4",
    content: "I'd love to eat a donut from Tim Hortons",
    createdAt: new Date(Date.now() - 14 * 24 * 60 * 1000 * 1000),
  },
];

export const chats = [
  {
    id: "1",
    name: "Wyatt Craig",
    picture: "https://randomuser.me/api/portraits/men/7.jpg",
    lastMessage: messages.find((m) => m.id === "1"),
  },
  {
    id: "2",
    name: "Darryl Nelson",
    picture: "https://randomuser.me/api/portraits/men/86.jpg",
    lastMessage: messages.find((m) => m.id === "2"),
  },
  {
    id: "3",
    name: "Tamara Foster",
    picture: "https://randomuser.me/api/portraits/women/36.jpg",
    lastMessage: messages.find((m) => m.id === "3"),
  },
  {
    id: "4",
    name: "Sofia Klark",
    picture: "https://randomuser.me/api/portraits/women/2.jpg",
    lastMessage: messages.find((m) => m.id === "4"),
  },
];
