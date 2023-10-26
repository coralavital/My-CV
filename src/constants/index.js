import {
  backend,
  creator,
  web,
  mobile,
  crud,
  petsnanny,
  fridgeit
} from "../assets";

export const navLinks = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "projects",
    title: "Projects",
  },
  {
    id: "contact",
    title: "Contact",
  },
];

const services = [
  {
    title: "Web Developer",
    icon: web,
  },
  {
    title: "Flutter Developer",
    icon: mobile,
  },
  {
    title: "Backend Developer",
    icon: backend,
  },
  {
    title: "Content Creator",
    icon: creator,
  },
];

const projects = [
  {
    name: "FridgeIT",
    description:
      "Your refrigerator transformed into a cutting-edge connected device. Experience the future of kitchen convenience as you gain real-time visibility into your fridge's contents. FridgeIT empowers users to effortlessly monitor the products stored inside, and, where applicable, view expiration dates. Say goodbye to wastage and hello to an intelligent system that streamlines your kitchen routine like never before. Embrace a smarter way to manage your fridge and stay in control of your fresh and delicious discoveries.",
    tags: [
      {
        name: "python",
        color: "blue-text-gradient",
      },
      {
        name: "firebase",
        color: "green-text-gradient",
      },
      {
        name: "flutter",
        color: "orange-text-gradient",
      },
      {
        name: "arduinoIDE",
        color: "pink-text-gradient",
      },
    ],
    image: fridgeit,
    source_code_link: "https://drive.google.com/file/d/13YWHhNytyreUbEuW-dSU8UMSJzvsGJLe/view?usp=drive_link",
  },
  {
    name: "Users Management",
    description:
      "A powerful CRUD web application designed for seamless user management. With robust authentication and authorization features, the system ensures secure access to its various functionalities. Users can effortlessly view a list of all users, add new users to the system, update their information, and even remove users when necessary. The system simplifies the process of managing user data, allowing you to focus on what matters most – building and maintaining a thriving user community.",
    tags: [
      {
        name: "reactjs",
        color: "blue-text-gradient",
      },
      {
        name: "csharp",
        color: "green-text-gradient",
      },
      {
        name: "noSQL",
        color: "pink-text-gradient",
      },
    ],
    image: crud,
    source_code_link: "https://github.com/coralavital/CRUD_Application",
  },
  {
    name: "Pets Nanny",
    description:
      "A web application that brings animal lovers together. It allows users to connect with others who either have animals or are looking to adopt. Users can easily contact each other through the platform and schedule meetups with potential pet owners. Whether you want to find a new furry friend or offer a loving home to a pet, ConnectPaws is the perfect place to make it happen.",
    tags: [
      {
        name: "nodejs",
        color: "blue-text-gradient",
      },
      {
        name: "ejs",
        color: "green-text-gradient",
      },
      {
        name: "firebase",
        color: "pink-text-gradient",
      },
    ],
    image: petsnanny,
    source_code_link: "https://github.com/coralavital/pets_nanny",
  },
];

export { services, projects };
