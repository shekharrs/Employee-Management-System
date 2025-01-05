const employees = [
    {
      id: 1,
      firstName: "Arjun",
      email: "employee1@example.com",
      password: "123",
      taskCounts: {
        active: 2,
        newTask: 1,
        completed: 1,
        failed: 0,
      },
      tasks: [
        {
          active: true,
          newTask: false,
          completed: false,
          failed: false,
          taskTitle: "Design Homepage Layout",
          taskDescription: "Create a wireframe for the homepage redesign",
          taskDate: "2024-10-12",
          category: "Design",
        },
        {
          active: true,
          newTask: true,
          completed: false,
          failed: false,
          taskTitle: "Update Branding Colors",
          taskDescription: "Apply new branding colors to the website",
          taskDate: "2024-10-13",
          category: "Design",
        },
        {
          active: false,
          newTask: false,
          completed: true,
          failed: false,
          taskTitle: "Revise Company Logo",
          taskDescription: "Adjust the company logo dimensions",
          taskDate: "2024-10-10",
          category: "Design",
        },
      ],
    },
    {
      id: 2,
      firstName: "Ravi",
      email: "employee2@example.com",
      password: "456",
      taskCounts: {
        active: 1,
        newTask: 1,
        completed: 0,
        failed: 0,
      },
      tasks: [
        {
          active: true,
          newTask: false,
          completed: false,
          failed: false,
          taskTitle: "Prototype Mobile UI",
          taskDescription: "Build a prototype for the mobile interface",
          taskDate: "2024-10-13",
          category: "Mobile Development",
        },
        {
          active: true,
          newTask: true,
          completed: false,
          failed: false,
          taskTitle: "Design User Dashboard",
          taskDescription: "Create a user-friendly dashboard for the app",
          taskDate: "2024-10-14",
          category: "Mobile Development",
        },
      ],
    },
    {
      id: 3,
      firstName: "Priya",
      email: "employee3@example.com",
      password: "789",
      taskCounts: {
        active: 3,
        newTask: 2,
        completed: 1,
        failed: 0,
      },
      tasks: [
        {
          active: true,
          newTask: false,
          completed: false,
          failed: false,
          taskTitle: "Build REST API",
          taskDescription: "Develop API endpoints for user authentication",
          taskDate: "2024-10-14",
          category: "Backend Development",
        },
        {
          active: true,
          newTask: true,
          completed: false,
          failed: false,
          taskTitle: "Fix Database Schema",
          taskDescription: "Update database schema for better performance",
          taskDate: "2024-10-15",
          category: "Database Management",
        },
        {
          active: true,
          newTask: true,
          completed: false,
          failed: false,
          taskTitle: "Optimize Query Speed",
          taskDescription: "Enhance query execution time",
          taskDate: "2024-10-16",
          category: "Database Management",
        },
        {
          active: false,
          newTask: false,
          completed: true,
          failed: false,
          taskTitle: "Document API Endpoints",
          taskDescription: "Create detailed documentation for APIs",
          taskDate: "2024-10-13",
          category: "Backend Development",
        },
      ],
    },
    {
      id: 4,
      firstName: "Meera",
      email: "employee4@example.com",
      password: "101112",
      taskCounts: {
        active: 0,
        newTask: 0,
        completed: 0,
        failed: 0,
      },
      tasks: [],
    },
    {
      id: 5,
      firstName: "Karan",
      email: "employee5@example.com",
      password: "131415",
      taskCounts: {
        active: 4,
        newTask: 3,
        completed: 1,
        failed: 0,
      },
      tasks: [
        {
          active: true,
          newTask: true,
          completed: false,
          failed: false,
          taskTitle: "Develop Unit Tests",
          taskDescription: "Write unit tests for the new features",
          taskDate: "2024-10-16",
          category: "Testing",
        },
        {
          active: true,
          newTask: true,
          completed: false,
          failed: false,
          taskTitle: "Codebase Cleanup",
          taskDescription: "Remove unnecessary files and optimize code",
          taskDate: "2024-10-17",
          category: "Code Review",
        },
        {
          active: true,
          newTask: true,
          completed: false,
          failed: false,
          taskTitle: "Enhance Authentication",
          taskDescription: "Add multi-factor authentication",
          taskDate: "2024-10-18",
          category: "Security",
        },
        {
          active: false,
          newTask: false,
          completed: true,
          failed: false,
          taskTitle: "Review Test Cases",
          taskDescription: "Ensure all test cases are accurate and up to date",
          taskDate: "2024-10-15",
          category: "Testing",
        },
      ],
    },
  ];
  
  

const admin = [
  {
    id: 1,
    email: "admin@example.com",
    password: "123",
  },
];

// setLocalStorage
export const setLocalStorage = () => {
  localStorage.setItem("employees", JSON.stringify(employees));
  localStorage.setItem("admin", JSON.stringify(admin));
};

// getLocalStorage
export const getLocalStorage = () => {
  const employees = JSON.parse(localStorage.getItem("employees"));
  const admin = JSON.parse(localStorage.getItem("admin"));

  return { employees, admin };
};
