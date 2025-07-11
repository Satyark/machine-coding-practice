export interface ExplorerItem {
    id: string;
    name: string;
    isFolder: boolean;
    items: ExplorerItem[]; // recursive type for nesting
  }
  
const explorer: ExplorerItem = {
    id:"1",
    name: "root",
    isFolder: true,
    items: [
      {
        id:"2",
        name: "public",
        isFolder: true,
        items: [
          {
            id:"3",
            name: "public nested 1",
            isFolder: true,
            items: [
              {
                id:"4",
                name: "index.html",
                isFolder: false,
                items: []
              },
              {
                id:"5",
                name: "hello.html",
                isFolder: false,
                items: []
              }
            ]
          },
          {
            id:"6",
            name: "public nested 2",
            isFolder: true,
            items: [
              {
                id:"7",
                name: "index.html",
                isFolder: false,
                items: []
              },
              {
                id:"8",
                name: "hello.html",
                isFolder: false,
                items: []
              }
            ]
          },
          {
            id:"9",
            name: "public_nested_file",
            isFolder: false,
            items: []
          }
        ]
      },
      {
        id:"10",
        name: "src",
        isFolder: true,
        items: [
          {
            id:"11",
            name: "App.js",
            isFolder: false,
            items: []
          },
          {
            id:"12",
            name: "Index.js",
            isFolder: false,
            items: []
          },
          {
            id:"13",
            name: "styles.css",
            isFolder: false,
            items: []
          }
        ]
      },
      {
        id:"14",
        name: "package.json",
        isFolder: false,
        items: []
      }
    ]
  };
  
  export default explorer;

  export const accordionData = [
    {
      id: 1,
      title: "What is your return policy?",
      content: "You can return any item within 30 days of purchase for a full refund.",
    },
    {
      id: 2,
      title: "Do you offer technical support?",
      content: "Yes, we provide 24/7 technical support via chat, email, and phone.",
    },
    {
      id: 3,
      title: "How long does shipping take?",
      content: "Shipping usually takes 3–5 business days, depending on your location.",
    },
    {
      id: 4,
      title: "Can I change my order after placing it?",
      content: "Yes, you can modify your order within 1 hour of placing it.",
    },
  ];