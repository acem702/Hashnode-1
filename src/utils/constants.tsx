import { Explore, Drafts, Bookmark, Hackathon, Team, More } from "~/svgs";
import { ArticleCard, Comment } from "~/types";

export const asideItems = [
  {
    name: "Explore",
    icon: <Explore className="h-4 w-4 fill-gray-700 dark:fill-gray-200" />,
    href: "/explore",
    type: "link",
  },
  {
    name: "Drafts",
    icon: <Drafts className="h-4 w-4 fill-gray-700 dark:fill-gray-200" />,
    href: "/drafts",
    type: "link",
  },
  {
    name: "Bookmarks",
    icon: <Bookmark className="h-4 w-4 fill-gray-700 dark:fill-gray-200" />,
    href: "/bookmarks",
    type: "link",
  },
  {
    name: "Hackathons",
    icon: <Hackathon className="h-4 w-4 fill-gray-700 dark:fill-gray-200" />,
    href: "/hackathons",
    type: "link",
  },
  {
    name: "Team Blogs",
    icon: <Team className="h-4 w-4 fill-gray-700 dark:fill-gray-200" />,
    href: "/team-blogs",
    type: "link",
  },
  {
    name: "More",
    icon: <More className="h-4 w-4 fill-gray-700 dark:fill-gray-200" />,
    type: "dropdown",
  },
];

export const trendingItems = [
  {
    name: "AWS",
    href: "/aws",
    latest_articles: 500,
  },
  {
    name: "React",
    href: "/react",
    latest_articles: 425,
  },
  {
    name: "Javascript",
    href: "/javascript",
    latest_articles: 405,
  },
  {
    name: "Python",
    href: "/python",
    latest_articles: 325,
  },
  {
    name: "Machine Learning",
    href: "/machine-learning",
    latest_articles: 286,
  },
];

export const articles = [
  {
    id: "123asdfasdf",
    title: "Creating a 3D Table Configurator with React Three Fiber",
    slug: "creating-a-3d-table-configurator-with-react-three-fiber",
    cover_image:
      "https://cdn.hashnode.com/res/hashnode/image/upload/v1677291012839/7853f4fe-48c7-4598-84c4-92a50e04f740.jpeg?w=1600&h=840&fit=crop&crop=entropy&auto=compress,format&format=webp",
    user: {
      id: "1234rwefasd1",
      name: "Wawa Sensei",
      username: "sensei",
      profile:
        "https://cdn.hashnode.com/res/hashnode/image/upload/v1677289889479/HtVzFNQEw.jpg?w=500&h=500&fit=crop&crop=faces&auto=compress,format&format=webp",
    },
    content:
      "Let's create a 3D Table Configurator using the following libraries: Vite React Tailwind Three.js React Three Fiber Material UI 🔥 This tutorial is a good starting point to create a product configurator for your e-commerce website. You can use it to create a 3D configurator for a car, a phone, a table, a chair, a sofa, a bed, a house, a building, a robot, a spaceship, a plane, a boat, a bike, a motorcycle, a truck, a bus, a train, a plane, a drone, a helicopter, a tank, a submarine, a rocket, a satellite, a space station, a space shuttle, a space ship, a space probe, a space rover, a space telescope, a space elevator, a space habitat, a space colony, a space settlement, a space city, a space nation, a space empire, a space federation, a space alliance, a space republic, a space democracy, a space monarchy, a space dictatorship, a space oligarchy, a space plutocracy, a space theocracy, a space anarchy, a space utopia, a space dystopia, a space war, a space battle, a space invasion, a space exploration, a space colonization, a space mining, a space tourism, a space travel, a space station, a space elevator, a space habitat, a space colony, a space settlement, a space city, a space nation, a space empire, a space federation, a space alliance, a space republic, a space democracy, a space monarchy, a space dictatorship, a space oligarchy, a space plutocracy, a space theocracy, a space anarchy, a space utopia, a space dystopia, a space war, a space battle, a space invasion, a space exploration, a space colonization, a space mining, a space tourism, a space travel, a space station, a space elevator, a space habitat, a space colony, a space settlement, a space city, a space nation, a space empire, a space federation, a space alliance, a space republic, a space democracy, a space monarchy, a space dictatorship, a space oligarchy, a space plutocracy, a space theocracy, a space anarchy, a space utopia, a space dystopia, a space war, a space battle, a space invasion, a space exploration, a space colonization, a space mining, a space tourism, a space travel, a space station, a space elevator, a space habitat, a space colony, a space settlement, a space city, a space nation, a space empire, a",
    read_time: 9,

    tags: [
      {
        id: "1243fqwefasdfawef",
        name: "testing-tags",
        slug: "testing-tags",
      },
    ],
    subtitle:
      "Learn how to create a custom React hook to fetch data from an API",
    likes: ["1"],
    commentsCount: 0,
    userId: "",
    disabledComments: false,
    seoTitle: "",
    seoDescription: "",
    seoOgImage: "",
    createdAt: new Date("2021-08-24T15:30:00.000Z"),
    updatedAt: new Date("2021-08-24T15:30:00.000Z"),
  },
  {
    id: "212f2134fs34",
    title: "Data Visualization with Julia: Exploring Plots.jl",
    slug: "data-visualization-with-julia-exploring-plots-jl",
    cover_image:
      "https://cdn.hashnode.com/res/hashnode/image/upload/v1684601711468/c5e6e1be-79fe-4732-a29c-b4acac22db1a.png?w=1600&h=840&fit=crop&crop=entropy&auto=compress,format&format=webp",
    user: {
      id: "2342wfasdf2q43",
      name: "Ifihan Olusheye",
      username: "ifihan",
      profile:
        "https://cdn.hashnode.com/res/hashnode/image/upload/v1611248702682/ZgkBT0Bau.jpeg?w=500&h=500&fit=crop&crop=faces&auto=compress,format&format=webp",
    },
    content:
      "Data visualization is the graphical representation of data and information through visual elements such as charts, graphs, maps, and diagrams. It involves transforming raw data into visual formats that make it easier for people to understand. Data visualization is a key step in the data science process. It allows you to explore your data and communicate your insights with others. In this tutorial, we'll explore the Plots.jl package for data visualization in Julia. Plots.jl is a powerful plotting package that supports multiple backends. It's easy to use and produces beautiful plots. We'll use it to create a variety of plots, including scatter plots, line plots, bar plots, histograms, pie charts, and box plots. We'll also explore some of the advanced features of Plots.jl, such as subplots, annotations, and themes. Let's get started! Installing Plots.jl To install Plots.jl, open the Julia REPL and run the following command: julia> using Pkg julia> Pkg.add(\"Plots\") This will install Plots.jl and its dependencies. You can now load Plots.jl into your Julia session using the following command: julia> using Plots This will load Plots.jl and its dependencies into your Julia session. You can now use Plots.jl to create plots in Julia. Creating a Scatter Plot Let's start by creating a scatter plot. A scatter plot is a type of plot that displays values for two variables for a set of data. It's useful for visualizing the relationship between two variables. For example, you can use a scatter plot to visualize the relationship between a person's height and weight. To create a scatter plot in Plots.jl, we use the scatter() function. The scatter() function takes two arguments: the x-values and the y-values. For example, to create a scatter plot of the numbers 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, we can use the following code: julia> scatter(1:10, 1:10) This will create a scatter plot of the numbers 1, 2, 3, 4, 5, 6, 7, 8, 9, 10. We can also create a scatter plot of the numbers 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16,",
    read_time: 5,
    subtitle: null,
    tags: [
      {
        id: "1243fqwefasdfawef",
        name: "testing-tags",
        slug: "testing-tags",
      },
    ],
    likes: ["1"],
    commentsCount: 5,
    userId: "",
    disabledComments: false,
    seoTitle: "",
    seoDescription: "",
    seoOgImage: "",
    createdAt: new Date("2021-08-24T15:30:00.000Z"),
    updatedAt: new Date("2021-08-24T15:30:00.000Z"),
  },
  {
    id: "212asdf34f2334",
    title: "Using Intersection Observer API in React",
    slug: "using-intersection-observer-api-in-react",
    user: {
      id: "23123412fw423",
      name: "Samuel Umoren",
      username: "samuelumoren",
      profile:
        "https://cdn.hashnode.com/res/hashnode/image/upload/v1682932680171/80VHrCk6k.jpeg?w=500&h=500&fit=crop&crop=faces&auto=compress,format&format=webp",
    },
    content:
      "Sequelize is a powerful Object-Relational Mapping (ORM) library for Node.js that allows developers to interact with databases using JavaScript. It provides a simple and elegant way to define and interact with your database models. In this tutorial, we'll explore Sequelize and learn how to use it to interact with a PostgreSQL database. We'll start by installing Sequelize and creating a new project. Then we'll create a database model and use it to interact with our database. Let's get started! Installing Sequelize To install Sequelize, open the terminal and run the following command: npm install sequelize --save This will install Sequelize and its dependencies. You can now use Sequelize in your Node.js project. Creating a New Project To create a new project, open the terminal and run the following command: sequelize init This will create a new project in the current directory. It will also create a new directory called models. This directory will contain all your database models. Creating a Database Model To create a database model, open the terminal and run the following command: sequelize model:create --name User --attributes firstName:string,lastName:string,email:string This will create a new database model called User. It will also create a new file called user.js in the models directory. This file will contain the User model. You can now use this model to interact with your database. Using the Model To use the model, open the terminal and run the following command: sequelize model:create --name User --attributes firstName:string,lastName:string,email:string This will create a new database model called User. It will also create a new file called user.js in the models directory. This file will contain the User model. You can now use this model to interact with your database. Creating a Database To create a database, open the terminal and run the following command: sequelize model:create --name User --attributes firstName:string,lastName:string,email:string This will create a new database model called User. It will also create a new file called user.js in the models directory. This file will contain the User model. You can now use this model to interact with your database. Creating a Database To create a database, open the terminal and run the following command: sequelize model:create --name User --attributes firstName:string,lastName:string,email:string This will create a new database model called User. It will also create a new file called user.js in the models directory. This file will contain the User model. You can now use this model to interact with your database. Creating a Database To create a database, open the terminal and run the following command: sequelize model:create --name User --attributes firstName:string,lastName:string,email:string This will create a new database model called ",
    read_time: 5,
    subtitle: null,
    tags: [
      {
        id: "1243fqwefasdfawef",
        name: "testing-tags",
        slug: "testing-tags",
      },
    ],
    cover_image: null,
    likes: ["1", "2"],
    commentsCount: 20,
    userId: "",
    disabledComments: false,
    seoTitle: "",
    seoDescription: "",
    seoOgImage: "",
    createdAt: new Date("2021-08-24T15:30:00.000Z"),
    updatedAt: new Date("2021-08-24T15:30:00.000Z"),
  },
  {
    id: "212312345234",
    title: "Using Intersection Observer API in React",
    slug: "using-intersection-observer-api-in-react",
    user: {
      id: "2343412323",
      name: "Samuel Umoren",
      username: "samuelumoren",
      profile:
        "https://cdn.hashnode.com/res/hashnode/image/upload/v1682932680171/80VHrCk6k.jpeg?w=500&h=500&fit=crop&crop=faces&auto=compress,format&format=webp",
    },
    content:
      "Sequelize is a powerful Object-Relational Mapping (ORM) library for Node.js that allows developers to interact with databases using JavaScript. It provides a simple and elegant way to define and interact with your database models. In this tutorial, we'll explore Sequelize and learn how to use it to interact with a PostgreSQL database. We'll start by installing Sequelize and creating a new project. Then we'll create a database model and use it to interact with our database. Let's get started! Installing Sequelize To install Sequelize, open the terminal and run the following command: npm install sequelize --save This will install Sequelize and its dependencies. You can now use Sequelize in your Node.js project. Creating a New Project To create a new project, open the terminal and run the following command: sequelize init This will create a new project in the current directory. It will also create a new directory called models. This directory will contain all your database models. Creating a Database Model To create a database model, open the terminal and run the following command: sequelize model:create --name User --attributes firstName:string,lastName:string,email:string This will create a new database model called User. It will also create a new file called user.js in the models directory. This file will contain the User model. You can now use this model to interact with your database. Using the Model To use the model, open the terminal and run the following command: sequelize model:create --name User --attributes firstName:string,lastName:string,email:string This will create a new database model called User. It will also create a new file called user.js in the models directory. This file will contain the User model. You can now use this model to interact with your database. Creating a Database To create a database, open the terminal and run the following command: sequelize model:create --name User --attributes firstName:string,lastName:string,email:string This will create a new database model called User. It will also create a new file called user.js in the models directory. This file will contain the User model. You can now use this model to interact with your database. Creating a Database To create a database, open the terminal and run the following command: sequelize model:create --name User --attributes firstName:string,lastName:string,email:string This will create a new database model called User. It will also create a new file called user.js in the models directory. This file will contain the User model. You can now use this model to interact with your database. Creating a Database To create a database, open the terminal and run the following command: sequelize model:create --name User --attributes firstName:string,lastName:string,email:string This will create a new database model called ",
    read_time: 5,
    cover_image: null,
    tags: [
      {
        id: "1243fqwefasdfawef",
        name: "testing-tags",
        slug: "testing-tags",
      },
    ],
    likes: ["1", "2"],
    commentsCount: 20,
    userId: "",
    disabledComments: false,
    seoTitle: "",
    seoDescription: "",
    seoOgImage: "",
    subtitle: null,
    createdAt: new Date("2021-08-24T15:30:00.000Z"),
    updatedAt: new Date("2021-08-24T15:30:00.000Z"),
  },
  {
    id: "21226534534",
    title: "Using Intersection Observer API in React",
    slug: "using-intersection-observer-api-in-react",
    user: {
      id: "23421324513453",
      name: "Samuel Umoren",
      username: "samuelumoren",
      profile:
        "https://cdn.hashnode.com/res/hashnode/image/upload/v1682932680171/80VHrCk6k.jpeg?w=500&h=500&fit=crop&crop=faces&auto=compress,format&format=webp",
    },
    content:
      "Sequelize is a powerful Object-Relational Mapping (ORM) library for Node.js that allows developers to interact with databases using JavaScript. It provides a simple and elegant way to define and interact with your database models. In this tutorial, we'll explore Sequelize and learn how to use it to interact with a PostgreSQL database. We'll start by installing Sequelize and creating a new project. Then we'll create a database model and use it to interact with our database. Let's get started! Installing Sequelize To install Sequelize, open the terminal and run the following command: npm install sequelize --save This will install Sequelize and its dependencies. You can now use Sequelize in your Node.js project. Creating a New Project To create a new project, open the terminal and run the following command: sequelize init This will create a new project in the current directory. It will also create a new directory called models. This directory will contain all your database models. Creating a Database Model To create a database model, open the terminal and run the following command: sequelize model:create --name User --attributes firstName:string,lastName:string,email:string This will create a new database model called User. It will also create a new file called user.js in the models directory. This file will contain the User model. You can now use this model to interact with your database. Using the Model To use the model, open the terminal and run the following command: sequelize model:create --name User --attributes firstName:string,lastName:string,email:string This will create a new database model called User. It will also create a new file called user.js in the models directory. This file will contain the User model. You can now use this model to interact with your database. Creating a Database To create a database, open the terminal and run the following command: sequelize model:create --name User --attributes firstName:string,lastName:string,email:string This will create a new database model called User. It will also create a new file called user.js in the models directory. This file will contain the User model. You can now use this model to interact with your database. Creating a Database To create a database, open the terminal and run the following command: sequelize model:create --name User --attributes firstName:string,lastName:string,email:string This will create a new database model called User. It will also create a new file called user.js in the models directory. This file will contain the User model. You can now use this model to interact with your database. Creating a Database To create a database, open the terminal and run the following command: sequelize model:create --name User --attributes firstName:string,lastName:string,email:string This will create a new database model called ",
    read_time: 5,
    cover_image: null,
    subtitle: null,
    tags: [
      {
        id: "1243fqwefasdfawef",
        name: "testing-tags",
        slug: "testing-tags",
      },
    ],
    likes: ["1", "2"],
    commentsCount: 20,
    userId: "",
    disabledComments: false,
    seoTitle: "",
    seoDescription: "",
    seoOgImage: "",
    createdAt: new Date("2021-08-24T15:30:00.000Z"),
    updatedAt: new Date("2021-08-24T15:30:00.000Z"),
  },
  {
    id: "212313463454",
    title: "Using Intersection Observer API in React",
    slug: "using-intersection-observer-api-in-react",
    user: {
      id: "234213452433",
      name: "Samuel Umoren",
      username: "samuelumoren",
      profile:
        "https://cdn.hashnode.com/res/hashnode/image/upload/v1682932680171/80VHrCk6k.jpeg?w=500&h=500&fit=crop&crop=faces&auto=compress,format&format=webp",
    },
    content:
      "Sequelize is a powerful Object-Relational Mapping (ORM) library for Node.js that allows developers to interact with databases using JavaScript. It provides a simple and elegant way to define and interact with your database models. In this tutorial, we'll explore Sequelize and learn how to use it to interact with a PostgreSQL database. We'll start by installing Sequelize and creating a new project. Then we'll create a database model and use it to interact with our database. Let's get started! Installing Sequelize To install Sequelize, open the terminal and run the following command: npm install sequelize --save This will install Sequelize and its dependencies. You can now use Sequelize in your Node.js project. Creating a New Project To create a new project, open the terminal and run the following command: sequelize init This will create a new project in the current directory. It will also create a new directory called models. This directory will contain all your database models. Creating a Database Model To create a database model, open the terminal and run the following command: sequelize model:create --name User --attributes firstName:string,lastName:string,email:string This will create a new database model called User. It will also create a new file called user.js in the models directory. This file will contain the User model. You can now use this model to interact with your database. Using the Model To use the model, open the terminal and run the following command: sequelize model:create --name User --attributes firstName:string,lastName:string,email:string This will create a new database model called User. It will also create a new file called user.js in the models directory. This file will contain the User model. You can now use this model to interact with your database. Creating a Database To create a database, open the terminal and run the following command: sequelize model:create --name User --attributes firstName:string,lastName:string,email:string This will create a new database model called User. It will also create a new file called user.js in the models directory. This file will contain the User model. You can now use this model to interact with your database. Creating a Database To create a database, open the terminal and run the following command: sequelize model:create --name User --attributes firstName:string,lastName:string,email:string This will create a new database model called User. It will also create a new file called user.js in the models directory. This file will contain the User model. You can now use this model to interact with your database. Creating a Database To create a database, open the terminal and run the following command: sequelize model:create --name User --attributes firstName:string,lastName:string,email:string This will create a new database model called ",
    read_time: 5,
    subtitle: null,
    cover_image: null,
    tags: [
      {
        id: "1243fqwefasdfawef",
        name: "testing-tags",
        slug: "testing-tags",
      },
    ],
    likes: ["1", "2"],
    commentsCount: 20,
    userId: "",
    disabledComments: false,
    seoTitle: "",
    seoDescription: "",
    seoOgImage: "",
    createdAt: new Date("2021-08-24T15:30:00.000Z"),
    updatedAt: new Date("2021-08-24T15:30:00.000Z"),
  },
];

export const tagArticles = articles.filter((e) =>
  e.tags[0] ? e.tags[0].slug === "testing-tags" : false
);

export const drafts = [
  { id: "123123f24312", title: "Untitle", updatedAt: new Date() },
  { id: "12341523faerf145", title: "Testing", updatedAt: new Date() },
];

export const bookmarks = articles.slice(0, 2);

export const others = [
  [
    {
      id: "6as48df6a84e65w",
      name: "Feature Requests",
      link: "https://roadmap.hashnode.vercel.app/feature-requests",
    },
    {
      id: "6as48df6a84e65w",
      name: "Changelog",
      link: "https://roadmap.hashnode.vercel.app/changelog",
    },
    {
      id: "6as48df6a84e65w",
      name: "Hashnode APIs",
      link: "api.hahsnode.vercel.app",
    },
  ],
  [
    {
      id: "6as48df6a84e65w",
      name: "About",
      link: "https://hashnode.vercel.app/about",
    },
    {
      id: "a6s4f98w6e4f65as4d6f",
      name: "Service Status",
      link: "https://hashnode.vercel.app/status",
    },
    {
      id: "6as48dfas54f6a84we6a84e65w",
      name: "Official Blog",
      link: "https://hashnode.vercel.app/blog",
    },
    {
      id: "6as48df6a84easdf3a6we65w",
      name: "Press Kit",
      link: "https://hashnode.vercel.app/press",
    },
    {
      id: "6as48df6a84e65wqfwefd",
      name: "Support",

      link: "https://hashnode.vercel.app/support",
    },
    {
      id: "6as48df6a8123424e65w",
      name: "Careers",

      link: "https://hashnode.vercel.app/careers",
    },
    {
      id: "6as48df6a84e651243123w",
      name: "OSS ACK",
      link: "https://hashnode.vercel.app/oss-ack",
    },
  ],
  [
    {
      id: "6as4132412548df6a84e65w",
      name: "Privacy Policy",
      link: "https://hashnode.vercel.app/privacy",
    },
    {
      id: "a6f54a6s6as48df6a84e65w",
      name: "Terms of Service",
      link: "https://hashnode.vercel.app/terms",
    },
  ],
];

export const trending = [
  {
    id: "12345",
    title: "Incredible Discovery in Deep Space!",
    user: {
      name: "John Doe",
      profile:
        "https://cdn.hashnode.com/res/hashnode/image/upload/v1680307844268/5d7c75c1-6668-4556-86fa-704396926856.png?w=500&h=500&fit=crop&crop=faces&auto=compress,format&format=webp",
      id: "98765",
    },
    likesCount: 532,
    commentsCount: 87,
  },
  {
    id: "23456",
    title: "New Recipes for Summer Delights",
    user: {
      name: "Jane Smith",
      profile:
        "https://cdn.hashnode.com/res/hashnode/image/upload/v1684859615973/gc_c8CNhY.png?w=500&h=500&fit=crop&crop=faces&auto=compress,format&format=webp",
      id: "54321",
    },
    likesCount: 782,
    commentsCount: 112,
  },
  {
    id: "34567",
    title: "Breaking News: Earthquake Hits City",
    user: {
      name: "Michael Johnson",
      profile:
        "https://cdn.hashnode.com/res/hashnode/image/upload/v1678624600195/2x7sf0LJn.png?w=500&h=500&fit=crop&crop=faces&auto=compress,format&format=webp",
      id: "13579",
    },
    likesCount: 315,
    commentsCount: 42,
  },
  {
    id: "45678",
    title: "Exclusive Interview with Famous Author",
    user: {
      name: "Sarah Anderson",
      profile:
        "https://cdn.hashnode.com/res/hashnode/image/upload/v1678624600195/2x7sf0LJn.png?w=500&h=500&fit=crop&crop=faces&auto=compress,format&format=webp",
      id: "24680",
    },
    likesCount: 642,
    commentsCount: 95,
  },
];

export const recentActivity = [
  {
    activity_type: "Replied",
    slug: "@test/test",
    activity_content: "Dotenv-vault: The New Way to Manage .env",
    date: "May 25",
  },

  {
    activity_type: "Replied",
    slug: "@test/test",
    activity_content: "Dotenv-vault: The New Way to Manage .env",
    date: "May 25",
  },
  {
    activity_type: "Wrote an article",
    slug: "@test/test",
    activity_content: "Dotenv-vault: The New Way to Manage .env",
    date: "May 23",
  },
  {
    activity_type: "Replied",
    slug: "@test/test",
    activity_content:
      "The Next.js 13 App Directory and Server Components: What You Need to Know",
    date: "May 15",
  },
  {
    activity_type: "Wrote an article",
    slug: "@test/test",
    activity_content:
      "The Next.js 13 App Directory and Server Components: What You Need to Know",
    date: "May 13",
  },
  {
    activity_type: "Wrote an article",
    slug: "@test/test",
    activity_content:
      "Insta-Next: Sweatless React State Management with Zustand",
    date: "Apr 24",
  },
  {
    activity_type: "Wrote an article",
    slug: "@test/test",
    activity_content:
      "Breaking into the Software Industry as a Data Analysis Student",
    date: "Apr 21",
  },
  {
    activity_type: "Wrote an article",
    slug: "@test/test",
    activity_content: "A Layman's Guide to Leetcode",
    date: "Apr 14",
  },
  {
    activity_type: "Replied",
    slug: "@test/test",
    activity_content: "Insta-Next: Deploying Next.js on Vercel / using Docker",
    date: "Apr 13",
  },
  {
    activity_type: "Wrote an article",
    slug: "@test/test",
    activity_content: "Insta-Next: Deploying Next.js on Vercel / using Docker",
    date: "Apr 12",
  },
  {
    activity_type: "Replied",
    slug: "@test/test",
    activity_content:
      "Fiber (Go) vs. Nickel.rs (Rust): A Performance Showdown in 'Hello World'",
    date: "Apr 11",
  },
  {
    activity_type: "Wrote an article",
    slug: "@test/test",
    activity_content: "Insta-Next: Likes and Followers",
    date: "Apr 11",
  },
  {
    activity_type: "Commented",
    slug: "@test/test",
    activity_content:
      "Fiber (Go) vs. Nickel.rs (Rust): A Performance Showdown in 'Hello World'",
    date: "Apr 11",
  },
  {
    activity_type: "Wrote an article",
    slug: "@test/test",
    activity_content:
      "Insta-Next: Creating Posts and Stories with POST Requests",
    date: "Apr 8",
  },
  {
    activity_type: "Replied",
    slug: "@test/test",
    activity_content: "Insta-Next: Constructing Database with Prisma",
    date: "Apr 7",
  },
  {
    activity_type: "Wrote an article",
    slug: "@test/test",
    activity_content: "Insta-Next: Authentication with NextAuth",
    date: "Apr 6",
  },
  {
    activity_type: "Wrote an article",
    slug: "@test/test",
    activity_content: "Insta-Next: More UI with Mantine",
    date: "Apr 6",
  },
  {
    activity_type: "Wrote an article",
    slug: "@test/test",
    activity_content: "Insta-Next: Improving UI with Mantine and Tailwind",
    date: "Apr 6",
  },
  {
    activity_type: "Wrote an article",
    slug: "@test/test",
    activity_content: "Insta-Next: Exploring APIs with React Queries",
    date: "Apr 6",
  },
  {
    activity_type: "Wrote an article",
    slug: "@test/test",
    activity_content: "Insta-Next: Constructing Database with Prisma",
    date: "Apr 6",
  },
  {
    activity_type: "Wrote an article",
    slug: "@test/test",
    activity_content: "Insta-Next: Introduction & Designs",
    date: "Apr 6",
  },
  {
    activity_type: "Wrote an article",
    slug: "@test/test",
    activity_content: "Reminiscing High School: SMK Seri Bintang Utara",
    date: "Mar 18",
  },
  {
    activity_type: "Wrote an article",
    slug: "@test/test",
    activity_content: "Conditions? More like Polymorphism",
    date: "Mar 16",
  },
  {
    activity_type: "Wrote an article",
    slug: "@test/test",
    activity_content: "Visibility and Stability: A Hidden Relationship",
    date: "Mar 15",
  },
  {
    activity_type: "Wrote an article",
    slug: "@test/test",
    activity_content: "Keep it Simple, Stupid with React Components",
    date: "Jan 26",
  },
  {
    activity_type: "Wrote an article",
    slug: "@test/test",
    activity_content: "Two Sum",
    date: "Jan 7",
  },
  {
    activity_type: "Wrote an article",
    slug: "@test/test",
    activity_content: "Ultimate Guide to Python One-Liners",
    date: "Jan 1",
  },
  {
    activity_type: "Wrote an article",
    slug: "@test/test",
    activity_content: "Container With Most Water",
    date: "Dec 29 2022",
  },
  {
    activity_type: "Wrote an article",
    slug: "@test/test",
    activity_content: "Longest Palindromic Substring",
    date: "Dec 26 2022",
  },
  {
    activity_type: "Replied",
    slug: "@test/test",
    activity_content: "Longest Substring Without Repeating Characters",
    date: "Dec 25 2022",
  },
  {
    activity_type: "Wrote an article",
    slug: "@test/test",
    activity_content: "Longest Substring Without Repeating Characters",
    date: "Dec 25 2022",
  },
  {
    activity_type: "Wrote an article",
    slug: "@test/test",
    activity_content: "2022 Review: Programming and Self-Discovery",
    date: "Dec 24 2022",
  },
  {
    activity_type: "Wrote an article",
    slug: "@test/test",
    activity_content: "Rebuilding My Portfolio Website from Scratch",
    date: "Dec 18 2022",
  },
  {
    activity_type: "Wrote an article",
    slug: "@test/test",
    activity_content: "Juggling with Life",
    date: "Dec 17 2022",
  },
  {
    activity_type: "Wrote an article",
    slug: "@test/test",
    activity_content: "Hello, Hashnode",
    date: "Dec 15 2022",
  },
  {
    activity_type: "Joined Hashnode",
    slug: "@test/test",
    activity_content: null,
    date: "May 25 2004",
  },
];

/*
  Data:
AWS
169 articles this week

JavaScript
287 articles this week

Python
166 articles this week

Web Development
256 articles this week

React
144 articles this week

Devops
289 articles this week

add unique id to each tag
*/
export const trendingTags = [
  {
    id: "12345",
    name: "AWS",
    image:
      "https://cdn.hashnode.com/res/hashnode/image/upload/v1607508501076/CYQAUOwqq.png?w=200&h=200&fit=crop&crop=faces&auto=compress,format&format=webp",
    articlesCount: 169,
  },
  {
    id: "23456",
    name: "JavaScript",
    image:
      "https://cdn.hashnode.com/res/hashnode/image/upload/v1607082785538/EryuLRriM.png?w=200&h=200&fit=crop&crop=faces&auto=compress,format&format=webp",
    articlesCount: 287,
  },
  {
    id: "34567",
    name: "Python",
    image:
      "https://cdn.hashnode.com/res/hashnode/image/upload/v1607321670861/lG265gIUp.png?w=200&h=200&fit=crop&crop=faces&auto=compress,format&format=webp",
    articlesCount: 166,
  },
  {
    id: "45678",
    name: "Web Development",
    image:
      "https://cdn.hashnode.com/res/hashnode/image/upload/vdxecajl3uwbprclsctm/1450469658.jpg?w=200&h=200&fit=crop&crop=faces&auto=compress,format&format=webp&auto=compress,format&format=webp",
    articlesCount: 256,
  },
  {
    id: "56789",
    name: "React",
    image:
      "https://cdn.hashnode.com/res/hashnode/image/upload/v1513321478077/ByCWNxZMf.png?w=200&h=200&fit=crop&crop=faces&auto=compress,format&format=webp",
    articlesCount: 144,
  },
  {
    id: "67890",
    name: "Devops",
    image:
      "https://cdn.hashnode.com/res/hashnode/image/upload/cnvm0znfqcrwelhgtblb/1496913014.png?w=200&h=200&fit=crop&crop=faces&auto=compress,format&format=webp&auto=compress,format&format=webp",
    articlesCount: 289,
  },
];

export const trendingArticles = [];
export const bookmarksArticles = [...articles].splice(0, 3);

// export const fakeComments: Comment[] = [
//   {
//     id: "1",
//     content: "Great post!",
//     hasLiked: true,
//     likesCount: 10,
//     createdAt: new Date("2023-06-15"),
//     replies: [
//       {
//         id: "1.1",
//         content: "I agree!",
//         hasLiked: false,
//         likesCount: 5,
//         createdAt: new Date("2023-06-15"),
//         replies: [],
//         user: {
//           id: "2",
//           name: "John Doe",
//           profile:
//             "https://yt3.ggpht.com/yti/AHyvSCBbo7U8vNQ5HyqHYmiYi3pZEVEVhYSaqkc7jQ=s88-c-k-c0x00ffffff-no-rj-mo",
//         },
//       },
//       {
//         id: "1.2",
//         content: "Totally agreed!",
//         hasLiked: false,
//         likesCount: 0,
//         createdAt: new Date("2023-06-15"),
//         replies: [],
//         user: {
//           id: "21234",
//           name: "Ujen Doe",
//           profile:
//             "https://yt3.ggpht.com/yti/AHyvSCBbo7U8vNQ5HyqHYmiYi3pZEVEVhYSaqkc7jQ=s88-c-k-c0x00ffffff-no-rj-mo",
//         },
//       },
//     ],
//     user: {
//       id: "1",
//       name: "Jane Smith",
//       profile:
//         "https://yt3.ggpht.com/-xGHWnXB5JPwYMXBsCkjyRglj55rQiCUpYS0RHNIL-Vjm4zOaLooEbvBcu2gFpQlmymZh4OCbbo=s88-c-k-c0x00ffffff-no-rj",
//     },
//   },
//   {
//     id: "2",
//     content: "Nice work!",
//     hasLiked: false,
//     likesCount: 2,
//     createdAt: new Date("2023-06-14"),
//     replies: [],
//     user: {
//       id: "3",
//       name: "Bob Johnson",
//       profile:
//         "https://yt3.ggpht.com/ytc/AGIKgqNZVUQ8QIhj7XrkGtjJt_28foz9lxcxPe_132Yb=s88-c-k-c0x00ffffff-no-rj",
//     },
//   },
// ];
