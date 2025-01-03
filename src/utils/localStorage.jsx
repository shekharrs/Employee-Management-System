const employees = [
  {
    id: 1,
    email: "employee1@example.com",
    password: "123",
    name: "Employee 1",
    tasks: [
      {
        active: true,
        newTask: true,
        completed: false,
        failed: false,
        taskTitle: "Prepare Monthly Report",
        taskDescription: "Compile and analyze the monthly sales data.",
        taskDate: "2025-01-05",
        category: "Analysis",
        assignedTo: "Employee 1",
      },
      {
        active: false,
        newTask: false,
        completed: true,
        failed: false,
        taskTitle: "Client Meeting Preparation",
        taskDescription: "Prepare presentation slides for the client meeting.",
        taskDate: "2025-01-02",
        category: "Preparation",
        assignedTo: "Employee 1",
      },
      {
        active: false,
        newTask: false,
        completed: false,
        failed: true,
        taskTitle: "Resolve Software Bug",
        taskDescription:
          "Debug and resolve the issue reported in the payment module.",
        taskDate: "2025-01-03",
        category: "Development",
        assignedTo: "Employee 1",
      },
    ],
  },
  {
    id: 2,
    email: "employee2@example.com",
    password: "123",
    name: "Employee 2",
    tasks: [
      {
        active: true,
        newTask: false,
        completed: false,
        failed: false,
        taskTitle: "Organize Team Workshop",
        taskDescription: "Plan and schedule the quarterly team workshop.",
        taskDate: "2025-01-06",
        category: "Organization",
        assignedTo: "Employee 2",
      },
      {
        active: false,
        newTask: true,
        completed: false,
        failed: false,
        taskTitle: "Update Company Policy Document",
        taskDescription: "Review and update the employee handbook.",
        taskDate: "2025-01-08",
        category: "Documentation",
        assignedTo: "Employee 2",
      },
    ],
  },
  {
    id: 3,
    email: "employee3@example.com",
    password: "123",
    name: "Employee 3",
    tasks: [
      {
        active: true,
        newTask: false,
        completed: false,
        failed: false,
        taskTitle: "Customer Feedback Analysis",
        taskDescription: "Analyze feedback and provide recommendations.",
        taskDate: "2025-01-10",
        category: "Analysis",
        assignedTo: "Employee 3",
      },
      {
        active: false,
        newTask: true,
        completed: false,
        failed: false,
        taskTitle: "Create Marketing Campaign",
        taskDescription: "Draft email templates and social media posts.",
        taskDate: "2025-01-07",
        category: "Marketing",
        assignedTo: "Employee 3",
      },
    ],
  },
  {
    id: 4,
    email: "employee4@example.com",
    password: "123",
    name: "Employee 4",
    tasks: [
      {
        active: true,
        newTask: false,
        completed: false,
        failed: false,
        taskTitle: "Inventory Check",
        taskDescription: "Audit stock and report discrepancies.",
        taskDate: "2025-01-09",
        category: "Audit",
        assignedTo: "Employee 4",
      },
      {
        active: false,
        newTask: false,
        completed: true,
        failed: false,
        taskTitle: "Assist Customer Queries",
        taskDescription: "Respond to customer inquiries via email.",
        taskDate: "2025-01-04",
        category: "Support",
        assignedTo: "Employee 4",
      },
    ],
  },
  {
    id: 5,
    email: "employee5@example.com",
    password: "123",
    name: "Employee 5",
    tasks: [
      {
        active: false,
        newTask: true,
        completed: false,
        failed: false,
        taskTitle: "Prepare Financial Statement",
        taskDescription: "Generate year-end financial statements.",
        taskDate: "2025-01-12",
        category: "Finance",
        assignedTo: "Employee 5",
      },
      {
        active: true,
        newTask: false,
        completed: false,
        failed: false,
        taskTitle: "Vendor Follow-Up",
        taskDescription: "Follow up with vendors for pending invoices.",
        taskDate: "2025-01-06",
        category: "Procurement",
        assignedTo: "Employee 5",
      },
    ],
  },
];

const admin = [
  {
    id: "admin1",
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

  return {employees, admin};
};
