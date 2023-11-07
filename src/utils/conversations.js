import imgProfile from "../images/profile.png";
import imgUser1 from "../images/user1.png";
const conversations = [
  {
    name: "Minhazul",
    image: imgProfile,
    activeStatus: "10 minutes ago",
    messages: [
      {
        id: crypto.randomUUID(),
        from: "me",
        message: "Hello",
      },
      {
        id: crypto.randomUUID(),
        from: "op",
        message: "Hi, How are you?",
      },
      {
        id: crypto.randomUUID(),
        from: "me",
        message: "Fine",
      },
      {
        id: crypto.randomUUID(),
        from: "me",
        message: "You?",
      },
    ],
  },
  {
    name: "Tushar",
    image: imgUser1,
    activeStatus: "online",
    messages: [
      {
        id: crypto.randomUUID(),
        from: "me",
        message: "Hello",
      },
      {
        id: crypto.randomUUID(),
        from: "op",
        message: "Hi, How are you?",
      },
      {
        id: crypto.randomUUID(),
        from: "me",
        message: "Fine",
      },
      {
        id: crypto.randomUUID(),
        from: "me",
        message: "You?",
      },
    ],
  },
  {
    name: "Minhazul",
    image: imgUser1,
    activeStatus: "30 second ago",
    messages: [
      {
        id: crypto.randomUUID(),
        from: "op",
        message: "Kire",
      },
      {
        id: crypto.randomUUID(),
        from: "me",
        message: "Hi, How are you?",
      },
      {
        id: crypto.randomUUID(),
        from: "op",
        message: "Fine",
      },
      {
        id: crypto.randomUUID(),
        from: "me",
        message: "You?",
      },
      {
        id: crypto.randomUUID(),
        from: "op",
        message: "Fine",
      },
      {
        id: crypto.randomUUID(),
        from: "me",
        message: "You?",
      },
      {
        id: crypto.randomUUID(),
        from: "op",
        message: "Fine",
      },
      {
        id: crypto.randomUUID(),
        from: "me",
        message: "You?",
      },
      {
        id: crypto.randomUUID(),
        from: "op",
        message: "Fine",
      },
      {
        id: crypto.randomUUID(),
        from: "me",
        message: "You?",
      },
      {
        id: crypto.randomUUID(),
        from: "op",
        message: "Fine",
      },
      {
        id: crypto.randomUUID(),
        from: "me",
        message: "You?",
      },
      {
        id: crypto.randomUUID(),
        from: "op",
        message: "Fine",
      },
      {
        id: crypto.randomUUID(),
        from: "me",
        message: "You?",
      },
      {
        id: crypto.randomUUID(),
        from: "op",
        message: "Fine",
      },
      {
        id: crypto.randomUUID(),
        from: "me",
        message: "You?",
      },
      {
        id: crypto.randomUUID(),
        from: "op",
        message: "Fine",
      },
      {
        id: crypto.randomUUID(),
        from: "me",
        message: "You?",
      },
      {
        id: crypto.randomUUID(),
        from: "op",
        message: "Fine",
      },
      {
        id: crypto.randomUUID(),
        from: "me",
        message: "last message",
      },
    ],
  },
];

export default conversations;
