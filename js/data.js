/* ═══════════════════════════════════════════
   COURSES DATA — All 9 Learning Paths
═══════════════════════════════════════════ */
const COURSES = [
  {
    id: "java-dsa",
    emoji: "☕",
    color: "#f59e0b",
    category: "java",
    title: "Complete Java DSA",
    shortTitle: "Java DSA",
    level: "Beginner to Advanced",
    levelClass: "level-b2a",
    duration: "4 months",
    dailyCommit: "2 hrs/day",
    prereq: "No prior experience needed",
    description: "Master Data Structures & Algorithms in Java from absolute beginner to advanced competitive programming level. Build a solid foundation for technical interviews and real-world problem solving.",
    tags: ["Java", "DSA", "Algorithms", "Data Structures"],
    phases: [
      {
        title: "Java Foundations",
        duration: "Weeks 1–3 (~18 hrs)",
        topics: [
          "JDK setup, IDE (IntelliJ/Eclipse), Hello World",
          "Variables, data types, operators, type casting",
          "Control flow: if/else, switch, loops (for, while, do-while)",
          "Methods, parameters, return types, method overloading",
          "OOP basics: classes, objects, constructors",
          "Arrays: 1D, 2D, array manipulation"
        ]
      },
      {
        title: "Core OOP & Java Collections",
        duration: "Weeks 4–5 (~14 hrs)",
        topics: [
          "Inheritance, polymorphism, abstraction, encapsulation",
          "Interfaces and abstract classes",
          "Java Collections: ArrayList, LinkedList, Stack, Queue",
          "HashMap, HashSet, TreeMap, TreeSet",
          "Generics and type parameters",
          "Iterators and enhanced for loops"
        ]
      },
      {
        title: "DSA — Linear Structures",
        duration: "Weeks 6–8 (~18 hrs)",
        topics: [
          "Arrays: sliding window, two pointers, prefix sums",
          "Strings: manipulation, palindromes, anagrams",
          "Linked List: singly, doubly, circular, reversal",
          "Stack: balanced parentheses, next greater element",
          "Queue & Deque: BFS patterns, sliding window max",
          "Time & space complexity — Big O analysis"
        ]
      },
      {
        title: "Sorting, Searching & Recursion",
        duration: "Weeks 9–10 (~14 hrs)",
        topics: [
          "Sorting: bubble, selection, insertion, merge, quick sort",
          "Binary search and its variations",
          "Recursion fundamentals and call stack",
          "Backtracking: N-Queens, Sudoku solver",
          "Divide and conquer strategy"
        ]
      },
      {
        title: "Trees & Graphs",
        duration: "Weeks 11–13 (~18 hrs)",
        topics: [
          "Binary trees: traversals (inorder, preorder, postorder)",
          "BST: insert, delete, search, validate",
          "AVL trees and balancing concept",
          "Heaps and Priority Queue",
          "Graphs: adjacency list/matrix representation",
          "BFS, DFS, topological sort, cycle detection",
          "Shortest path: Dijkstra, Bellman-Ford"
        ]
      },
      {
        title: "Advanced Algorithms & DP",
        duration: "Weeks 14–17 (~28 hrs)",
        topics: [
          "Dynamic Programming: memoization vs tabulation",
          "Classic DP problems: Fibonacci, Knapsack, LCS, LIS",
          "Greedy algorithms: activity selection, Huffman",
          "Tries: insert, search, startsWith",
          "Segment trees and Fenwick trees",
          "Union-Find / Disjoint Set",
          "LeetCode patterns: 150 essential problems"
        ]
      }
    ],
    tips: [
      "Solve at least 2 LeetCode problems daily from Day 30 onwards",
      "Focus on patterns, not memorizing solutions",
      "Use Java's built-in PriorityQueue for heap problems",
      "Always analyze time/space complexity before coding",
      "Join NeetCode's Blind 75 and track progress"
    ],
    resources: [
      { type: "YouTube", icon: "▶️", name: "Data Structures & Algorithms in Java", author: "Kunal Kushwaha", url: "https://www.youtube.com/c/KunalKushwaha", free: true },
      { type: "YouTube", icon: "▶️", name: "Complete DSA Course — Java", author: "Apna College", url: "https://www.youtube.com/c/ApnaCollegeOfficial", free: true },
      { type: "YouTube", icon: "▶️", name: "NeetCode 150 Solutions", author: "NeetCode", url: "https://neetcode.io", free: true },
      { type: "Course", icon: "📘", name: "Data Structures & Algorithms Masterclass", author: "Udemy – Tim Buchalka", url: "https://www.udemy.com/course/data-structures-and-algorithms-deep-dive-using-java/", free: false },
      { type: "Practice", icon: "💻", name: "LeetCode — Java Track", author: "LeetCode", url: "https://leetcode.com", free: true },
      { type: "Practice", icon: "💻", name: "HackerRank Java", author: "HackerRank", url: "https://www.hackerrank.com/domains/java", free: true },
      { type: "Book", icon: "📗", name: "Introduction to Algorithms (CLRS)", author: "Cormen et al.", url: "https://mitpress.mit.edu/books/introduction-algorithms-third-edition", free: false },
      { type: "Website", icon: "🌐", name: "Visualgo — Algorithm Visualizer", author: "NUS Singapore", url: "https://visualgo.net", free: true }
    ]
  },
  {
    id: "ai-python",
    emoji: "🤖",
    color: "#7c6fef",
    category: "python",
    title: "AI Development & Testing with Python",
    shortTitle: "AI Dev + Python",
    level: "Beginner",
    levelClass: "level-beginner",
    duration: "5 months",
    dailyCommit: "2 hrs/day",
    prereq: "No Python knowledge required",
    description: "Go from zero Python knowledge to building and testing AI systems. Learn Python fundamentals, then dive deep into ML, LLMs, prompt engineering, and AI application testing.",
    tags: ["Python", "AI", "LLM", "ML", "pytest"],
    phases: [
      {
        title: "Python Fundamentals",
        duration: "Weeks 1–4 (~28 hrs)",
        topics: [
          "Python setup, pip, virtual environments",
          "Variables, data types, strings, numbers",
          "Lists, tuples, sets, dictionaries",
          "Control flow, loops, list comprehensions",
          "Functions, *args, **kwargs, decorators",
          "File I/O, JSON handling, exception handling",
          "OOP: classes, inheritance, magic methods"
        ]
      },
      {
        title: "Python for Data & APIs",
        duration: "Weeks 5–6 (~14 hrs)",
        topics: [
          "NumPy arrays and operations",
          "Pandas: DataFrames, filtering, groupby",
          "Matplotlib/Seaborn for data visualization",
          "requests library — consuming APIs",
          "Working with environment variables (.env)",
          "JSON/CSV parsing"
        ]
      },
      {
        title: "ML & AI Foundations",
        duration: "Weeks 7–10 (~28 hrs)",
        topics: [
          "Machine Learning concepts: supervised vs unsupervised",
          "scikit-learn: regression, classification, clustering",
          "Model evaluation: accuracy, precision, recall, F1",
          "Introduction to neural networks & deep learning",
          "TensorFlow/Keras basics",
          "OpenAI API — text generation & embeddings",
          "LangChain: chains, agents, memory"
        ]
      },
      {
        title: "Prompt Engineering & LLM Apps",
        duration: "Weeks 11–13 (~18 hrs)",
        topics: [
          "Prompt engineering patterns: zero-shot, few-shot, CoT",
          "Building LLM-powered applications",
          "RAG (Retrieval Augmented Generation)",
          "Vector databases: Pinecone, Chroma",
          "Building chatbots with LangChain",
          "FastAPI: building AI endpoints"
        ]
      },
      {
        title: "AI Testing & Quality",
        duration: "Weeks 14–17 (~28 hrs)",
        topics: [
          "pytest fundamentals and test structure",
          "Unit testing AI functions with mocks",
          "Testing LLM outputs: non-determinism challenges",
          "Evaluation frameworks: LLM-as-judge",
          "Testing AI APIs: response validation, latency",
          "Hallucination detection strategies",
          "AI model performance benchmarking"
        ]
      },
      {
        title: "Project: AI QA Agent",
        duration: "Weeks 18–20 (~18 hrs)",
        topics: [
          "Build an automated test suite for an AI app",
          "Implement semantic similarity checks",
          "Create regression tests for model outputs",
          "CI/CD pipeline for AI tests with GitHub Actions",
          "Monitoring AI apps in production"
        ]
      }
    ],
    tips: [
      "Use Google Colab or Jupyter Notebooks for ML experiments",
      "Get an OpenAI API key early to practice with real LLMs",
      "Testing AI is non-deterministic — learn assertion strategies",
      "Follow along with hands-on projects from Week 1",
      "LangSmith is excellent for LLM tracing and debugging"
    ],
    resources: [
      { type: "YouTube", icon: "▶️", name: "Python for Everybody", author: "freeCodeCamp / Dr. Chuck", url: "https://www.youtube.com/watch?v=8DvywoWv6fI", free: true },
      { type: "YouTube", icon: "▶️", name: "Machine Learning Crash Course", author: "Google", url: "https://developers.google.com/machine-learning/crash-course", free: true },
      { type: "YouTube", icon: "▶️", name: "LangChain Full Course", author: "Sam Witteveen / freeCodeCamp", url: "https://www.youtube.com/watch?v=lG7Uxts9SXs", free: true },
      { type: "Course", icon: "📘", name: "Complete Python Bootcamp", author: "Udemy – Jose Portilla", url: "https://www.udemy.com/course/complete-python-bootcamp/", free: false },
      { type: "Course", icon: "📘", name: "LLM Engineering Masterclass", author: "Udemy – Ed Donner", url: "https://www.udemy.com/course/llm-engineering-master-ai-and-large-language-models/", free: false },
      { type: "Docs", icon: "📄", name: "OpenAI Python SDK Docs", author: "OpenAI", url: "https://platform.openai.com/docs", free: true },
      { type: "Practice", icon: "💻", name: "Kaggle Python Track", author: "Kaggle", url: "https://www.kaggle.com/learn/python", free: true },
      { type: "Website", icon: "🌐", name: "Real Python Tutorials", author: "realpython.com", url: "https://realpython.com", free: true }
    ]
  },
  {
    id: "playwright-ts",
    emoji: "🎭",
    color: "#10b981",
    category: "testing",
    title: "Playwright with TypeScript & JavaScript",
    shortTitle: "Playwright (TS/JS)",
    level: "Beginner to Advanced",
    levelClass: "level-b2a",
    duration: "4 months",
    dailyCommit: "2 hrs/day",
    prereq: "Basic JavaScript knowledge helpful",
    description: "Master end-to-end testing with Microsoft Playwright using TypeScript and JavaScript. From setup to CI/CD integration, learn to build robust, maintainable browser automation frameworks.",
    tags: ["Playwright", "TypeScript", "JavaScript", "E2E"],
    phases: [
      {
        title: "JavaScript & TypeScript Essentials",
        duration: "Weeks 1–3 (~18 hrs)",
        topics: [
          "JS fundamentals: variables, functions, arrow functions",
          "Promises, async/await, error handling",
          "Modules: import/export, CommonJS vs ESM",
          "TypeScript: types, interfaces, generics",
          "TypeScript: enums, utility types, type guards",
          "npm/Node.js setup, tsconfig.json"
        ]
      },
      {
        title: "Playwright Core",
        duration: "Weeks 4–6 (~18 hrs)",
        topics: [
          "Playwright installation, project setup",
          "Browsers: Chromium, Firefox, WebKit",
          "Locators: getByRole, getByText, getByTestId",
          "Actions: click, fill, hover, drag",
          "Assertions: expect API, soft assertions",
          "Screenshots, video recording, traces",
          "playwright.config.ts deep dive"
        ]
      },
      {
        title: "Advanced Playwright Patterns",
        duration: "Weeks 7–10 (~24 hrs)",
        topics: [
          "Page Object Model (POM) with TypeScript classes",
          "Fixtures: built-in and custom",
          "API testing with Playwright request",
          "Network interception: mocking & stubbing",
          "Authentication state management",
          "Multi-tab and multi-browser contexts",
          "iFrames, file upload, download handling"
        ]
      },
      {
        title: "Framework Design & Reporting",
        duration: "Weeks 11–13 (~18 hrs)",
        topics: [
          "Test data management strategies",
          "Configuration for multiple environments",
          "Playwright HTML reporter, Allure integration",
          "Parallel execution and sharding",
          "Visual regression testing with screenshots",
          "Accessibility testing with @axe-core",
          "Mobile testing and device emulation"
        ]
      },
      {
        title: "CI/CD & Enterprise Patterns",
        duration: "Weeks 14–16 (~18 hrs)",
        topics: [
          "GitHub Actions with Playwright",
          "Docker containerization for Playwright",
          "Playwright in Jenkins pipelines",
          "Test retry strategies and flakiness reduction",
          "Blob storage for test reports",
          "Playwright Test component testing",
          "Performance metrics with Playwright"
        ]
      }
    ],
    tips: [
      "Use VS Code Playwright extension for debugging",
      "Record new tests with codegen to understand patterns",
      "Prefer getByRole locators for accessibility and stability",
      "Enable trace viewer for every failing test",
      "Use test.describe to organize and share fixtures"
    ],
    resources: [
      { type: "YouTube", icon: "▶️", name: "Playwright Beginners to Expert", author: "Automation Bro", url: "https://www.youtube.com/@AutomationBro", free: true },
      { type: "YouTube", icon: "▶️", name: "Playwright with TypeScript Course", author: "Rahul Shetty Academy", url: "https://www.youtube.com/@RahulShettyAcademy", free: true },
      { type: "YouTube", icon: "▶️", name: "TypeScript Full Course", author: "Traversy Media", url: "https://www.youtube.com/watch?v=BwuLxPH8IDs", free: true },
      { type: "Docs", icon: "📄", name: "Official Playwright Documentation", author: "Microsoft", url: "https://playwright.dev/docs/intro", free: true },
      { type: "Course", icon: "📘", name: "Playwright with TypeScript", author: "Udemy – Artem Bondar", url: "https://www.udemy.com/course/playwright-from-zero-to-hero/", free: false },
      { type: "Practice", icon: "💻", name: "Playwright Demo Apps", author: "practicesoftwaretesting.com", url: "https://practicesoftwaretesting.com", free: true },
      { type: "GitHub", icon: "📦", name: "Playwright Community Examples", author: "microsoft/playwright", url: "https://github.com/microsoft/playwright/tree/main/examples", free: true },
      { type: "YouTube", icon: "▶️", name: "Execute Automation Playwright", author: "Execute Automation", url: "https://www.youtube.com/@ExecuteAutomation", free: true }
    ]
  },
  {
    id: "restassured",
    emoji: "🔌",
    color: "#f59e0b",
    category: "testing",
    title: "RestAssured & API Testing (Java)",
    shortTitle: "RestAssured",
    level: "Beginner to Advanced",
    levelClass: "level-b2a",
    duration: "4 months",
    dailyCommit: "2 hrs/day",
    prereq: "Basic Java knowledge needed",
    description: "Learn API testing from scratch using Java and RestAssured. Build professional-grade API test frameworks covering REST, authentication, JSON/XML validation, and CI/CD integration.",
    tags: ["Java", "RestAssured", "API Testing", "TestNG", "Maven"],
    phases: [
      {
        title: "API & HTTP Foundations",
        duration: "Weeks 1–2 (~14 hrs)",
        topics: [
          "What is an API? REST vs SOAP vs GraphQL",
          "HTTP methods: GET, POST, PUT, PATCH, DELETE",
          "HTTP status codes and when to use them",
          "Request/Response structure: headers, body, params",
          "JSON and XML fundamentals",
          "Postman: manual API testing and collections",
          "Swagger/OpenAPI documentation reading"
        ]
      },
      {
        title: "RestAssured Basics",
        duration: "Weeks 3–5 (~18 hrs)",
        topics: [
          "Maven project setup, RestAssured dependency",
          "Given-When-Then BDD syntax",
          "GET requests: params, path params, query params",
          "POST requests: JSON body, form data",
          "Response extraction: path(), extract()",
          "JSON schema validation",
          "TestNG integration with RestAssured"
        ]
      },
      {
        title: "Authentication & Security Testing",
        duration: "Weeks 6–8 (~18 hrs)",
        topics: [
          "Basic Auth, Bearer Token, API Key",
          "OAuth 2.0 flow testing",
          "JWT token generation and validation",
          "Session management testing",
          "SSL/TLS certificate handling",
          "Testing security headers",
          "Rate limiting and throttling tests"
        ]
      },
      {
        title: "Advanced Validations & Deserialization",
        duration: "Weeks 9–11 (~18 hrs)",
        topics: [
          "Hamcrest matchers deep dive",
          "JSONPath and XPath expressions",
          "POJO deserialization with Jackson/Gson",
          "Response time assertions",
          "XML response validation",
          "GraphQL API testing with RestAssured",
          "File upload and download testing"
        ]
      },
      {
        title: "Framework Design",
        duration: "Weeks 12–14 (~18 hrs)",
        topics: [
          "RequestSpecification & ResponseSpecification",
          "Base URI and spec reuse patterns",
          "Test data management with TestNG data providers",
          "Reporting: Extent Reports, Allure",
          "Environment configuration with properties files",
          "Logging and debugging failed tests",
          "Parallel test execution"
        ]
      },
      {
        title: "CI/CD & Real-World Projects",
        duration: "Weeks 15–16 (~14 hrs)",
        topics: [
          "Maven Surefire plugin configuration",
          "Jenkins pipeline for API tests",
          "GitHub Actions workflow",
          "Mock servers with WireMock",
          "Contract testing with Pact",
          "Full project: testing a public REST API end-to-end"
        ]
      }
    ],
    tips: [
      "Always use RequestSpecification for DRY code",
      "Learn JSONPath expressions — they're core to RestAssured",
      "Use ReqRes.in and JSONPlaceholder to practice",
      "Master the Builder pattern for test data setup",
      "Combine with TestNG data providers for data-driven tests"
    ],
    resources: [
      { type: "YouTube", icon: "▶️", name: "Rest Assured API Testing", author: "Rahul Shetty Academy", url: "https://www.youtube.com/playlist?list=PLUDwpEzHYYLs33uFHeIJo-6eU92IoiMZ7", free: true },
      { type: "YouTube", icon: "▶️", name: "API Testing with RestAssured", author: "Automation Step by Step", url: "https://www.youtube.com/@AutomationStepByStep", free: true },
      { type: "Course", icon: "📘", name: "REST API Testing with RestAssured", author: "Udemy – Omprakash Chavan", url: "https://www.udemy.com/course/rest-api-testing-automation-using-rest-assured-framework/", free: false },
      { type: "Docs", icon: "📄", name: "RestAssured Official Docs", author: "rest-assured.io", url: "https://rest-assured.io", free: true },
      { type: "Practice", icon: "💻", name: "ReqRes.in — REST API", author: "ReqRes", url: "https://reqres.in", free: true },
      { type: "Practice", icon: "💻", name: "JSONPlaceholder Fake API", author: "typicode", url: "https://jsonplaceholder.typicode.com", free: true },
      { type: "Website", icon: "🌐", name: "Swagger Petstore API", author: "Swagger", url: "https://petstore.swagger.io", free: true },
      { type: "YouTube", icon: "▶️", name: "API Testing Masterclass", author: "Execute Automation", url: "https://www.youtube.com/@ExecuteAutomation", free: true }
    ]
  },
  {
    id: "sql-testing",
    emoji: "🗄️",
    color: "#3b82f6",
    category: "testing",
    title: "SQL for Testers & Developers",
    shortTitle: "SQL",
    level: "Beginner to Advanced",
    levelClass: "level-b2a",
    duration: "4 months",
    dailyCommit: "2 hrs/day",
    prereq: "No prior SQL experience needed",
    description: "Comprehensive SQL course designed specifically for QA engineers and developers. Learn to write queries for test data setup, validation, and database testing — from basics to complex stored procedures.",
    tags: ["SQL", "MySQL", "PostgreSQL", "Database Testing"],
    phases: [
      {
        title: "SQL Fundamentals",
        duration: "Weeks 1–3 (~18 hrs)",
        topics: [
          "What is a database? RDBMS concepts",
          "Installing MySQL Workbench / pgAdmin",
          "CREATE TABLE, data types, constraints",
          "INSERT, UPDATE, DELETE statements",
          "SELECT queries: WHERE, ORDER BY, LIMIT",
          "Filtering: AND, OR, NOT, IN, BETWEEN, LIKE",
          "NULL handling: IS NULL, COALESCE, IFNULL"
        ]
      },
      {
        title: "Intermediate Queries",
        duration: "Weeks 4–6 (~18 hrs)",
        topics: [
          "JOINs: INNER, LEFT, RIGHT, FULL OUTER",
          "UNION and UNION ALL",
          "Aggregate functions: COUNT, SUM, AVG, MIN, MAX",
          "GROUP BY and HAVING clauses",
          "Subqueries: scalar, correlated, EXISTS",
          "String functions: CONCAT, SUBSTRING, TRIM",
          "Date functions: NOW(), DATEDIFF, DATE_FORMAT"
        ]
      },
      {
        title: "Advanced SQL Concepts",
        duration: "Weeks 7–10 (~24 hrs)",
        topics: [
          "Window functions: ROW_NUMBER, RANK, DENSE_RANK",
          "LAG, LEAD, FIRST_VALUE, LAST_VALUE",
          "CTEs (Common Table Expressions) and recursive CTEs",
          "Views: creating and using",
          "Indexes: types, when to use, EXPLAIN plans",
          "Transactions: ACID, COMMIT, ROLLBACK, SAVEPOINT",
          "Stored procedures and functions",
          "Triggers: BEFORE/AFTER INSERT/UPDATE/DELETE"
        ]
      },
      {
        title: "SQL for QA Testers",
        duration: "Weeks 11–13 (~18 hrs)",
        topics: [
          "Setting up test data with SQL scripts",
          "Data validation queries for test verification",
          "Finding data inconsistencies and orphan records",
          "Testing data integrity constraints",
          "Performance testing queries with EXPLAIN",
          "Database schema testing strategies",
          "Comparing expected vs actual data"
        ]
      },
      {
        title: "PostgreSQL, NoSQL & Integrations",
        duration: "Weeks 14–16 (~18 hrs)",
        topics: [
          "PostgreSQL-specific features vs MySQL",
          "JSON columns in SQL (MySQL/PostgreSQL)",
          "Introduction to MongoDB (NoSQL concepts)",
          "JDBC: connecting Java to databases",
          "SQL in Python with psycopg2/SQLAlchemy",
          "Database testing in CI/CD pipelines",
          "Test database isolation strategies"
        ]
      }
    ],
    tips: [
      "Practice daily on HackerRank SQL — great for structured learning",
      "Always test your queries on a copy of production data",
      "Master EXPLAIN plans — essential for performance debugging",
      "Window functions separate intermediate from advanced SQL users",
      "Use CTEs to break complex queries into readable parts"
    ],
    resources: [
      { type: "YouTube", icon: "▶️", name: "SQL Full Course for Beginners", author: "Programming with Mosh", url: "https://www.youtube.com/watch?v=7S_tz1z_5bA", free: true },
      { type: "YouTube", icon: "▶️", name: "Advanced SQL Queries", author: "Alex The Analyst", url: "https://www.youtube.com/@AlexTheAnalyst", free: true },
      { type: "Course", icon: "📘", name: "The Complete SQL Bootcamp", author: "Udemy – Jose Portilla", url: "https://www.udemy.com/course/the-complete-sql-bootcamp/", free: false },
      { type: "Practice", icon: "💻", name: "HackerRank SQL Challenges", author: "HackerRank", url: "https://www.hackerrank.com/domains/sql", free: true },
      { type: "Practice", icon: "💻", name: "SQLZoo Interactive Tutorials", author: "SQLZoo", url: "https://sqlzoo.net", free: true },
      { type: "Practice", icon: "💻", name: "Mode SQL Tutorial", author: "Mode Analytics", url: "https://mode.com/sql-tutorial/", free: true },
      { type: "Website", icon: "🌐", name: "PostgreSQL Official Docs", author: "postgresql.org", url: "https://www.postgresql.org/docs/", free: true },
      { type: "YouTube", icon: "▶️", name: "Database Testing for Testers", author: "Software Testing Mentor", url: "https://www.youtube.com/@SoftwareTestingMentor", free: true }
    ]
  },
  {
    id: "api-testing-python",
    emoji: "🐍",
    color: "#7c6fef",
    category: "python",
    title: "API Testing using Python",
    shortTitle: "API Testing (Python)",
    level: "Beginner to Advanced",
    levelClass: "level-b2a",
    duration: "4 months",
    dailyCommit: "2 hrs/day",
    prereq: "Basic Python knowledge helpful",
    description: "Learn complete API testing using Python's powerful ecosystem — requests, pytest, Pydantic validation, and CI/CD integration. Build production-ready API test frameworks.",
    tags: ["Python", "pytest", "requests", "API Testing"],
    phases: [
      {
        title: "HTTP & API Fundamentals",
        duration: "Weeks 1–2 (~14 hrs)",
        topics: [
          "REST API concepts and HTTP protocol",
          "Status codes, headers, body types",
          "Postman for manual API exploration",
          "JSON: parsing, nested objects, arrays",
          "Authentication types: API Key, Bearer, OAuth2",
          "API documentation reading (Swagger, Postman docs)"
        ]
      },
      {
        title: "Python requests Library",
        duration: "Weeks 3–5 (~18 hrs)",
        topics: [
          "requests.get(), post(), put(), delete()",
          "Headers, query params, request body",
          "Response: status_code, json(), text, headers",
          "Session objects and cookie handling",
          "SSL verification and timeouts",
          "File uploads with multipart/form-data"
        ]
      },
      {
        title: "pytest for API Testing",
        duration: "Weeks 6–8 (~18 hrs)",
        topics: [
          "pytest structure: test files, functions, classes",
          "Fixtures: setup/teardown, scope (session/function/module)",
          "conftest.py best practices",
          "Parametrize for data-driven tests",
          "Assertions: assert with custom messages",
          "pytest plugins: pytest-html, allure-pytest",
          "Mocking with pytest-mock, responses"
        ]
      },
      {
        title: "Framework Design",
        duration: "Weeks 9–11 (~18 hrs)",
        topics: [
          "Building an API client wrapper class",
          "Pydantic models for response validation",
          "Environment management with python-dotenv",
          "Test data factories with Faker",
          "Schema validation with jsonschema",
          "Logging strategies for API tests",
          "pytest-xdist for parallel test execution"
        ]
      },
      {
        title: "Advanced Patterns & CI/CD",
        duration: "Weeks 12–16 (~28 hrs)",
        topics: [
          "Contract testing with Pact Python",
          "Performance baseline testing with requests",
          "GraphQL testing in Python",
          "WebSocket testing",
          "GitHub Actions for pytest runs",
          "Docker + pytest for isolated environments",
          "Reporting with Allure and GitHub Pages"
        ]
      }
    ],
    tips: [
      "Start with pytest-httpserver to mock dependencies",
      "Pydantic V2 is a game-changer for response validation",
      "Use conftest.py for shared fixtures across test files",
      "Always test unhappy paths — 4xx and 5xx responses",
      "httpx is a modern alternative to requests for async APIs"
    ],
    resources: [
      { type: "YouTube", icon: "▶️", name: "API Testing with Python & pytest", author: "Automation Bro", url: "https://www.youtube.com/@AutomationBro", free: true },
      { type: "YouTube", icon: "▶️", name: "pytest Full Tutorial", author: "Corey Schafer", url: "https://www.youtube.com/@coreyms", free: true },
      { type: "Course", icon: "📘", name: "Python API Test Automation", author: "Udemy – Bhanu Teja", url: "https://www.udemy.com/course/api-test-automation-using-python/", free: false },
      { type: "Docs", icon: "📄", name: "pytest Documentation", author: "pytest.org", url: "https://docs.pytest.org", free: true },
      { type: "Docs", icon: "📄", name: "Requests Library Docs", author: "requests.readthedocs.io", url: "https://requests.readthedocs.io", free: true },
      { type: "Practice", icon: "💻", name: "ReqRes.in — REST API Practice", author: "ReqRes", url: "https://reqres.in", free: true },
      { type: "GitHub", icon: "📦", name: "Awesome pytest", author: "GitHub Community", url: "https://github.com/augustogoulart/awesome-pytest", free: true },
      { type: "YouTube", icon: "▶️", name: "Python Testing with pytest", author: "ArjanCodes", url: "https://www.youtube.com/@ArjanCodes", free: true }
    ]
  },
  {
    id: "devops-testing",
    emoji: "⚙️",
    color: "#ff4d6d",
    category: "devops",
    title: "DevOps for Testing",
    shortTitle: "DevOps for QA",
    level: "Beginner to Advanced",
    levelClass: "level-b2a",
    duration: "5 months",
    dailyCommit: "2 hrs/day",
    prereq: "Basic command line knowledge helpful",
    description: "Master DevOps practices specifically for QA engineers. Learn Linux, Docker, Kubernetes, CI/CD pipelines, Jenkins, GitHub Actions, and monitoring — everything needed to integrate quality in DevOps workflows.",
    tags: ["DevOps", "Docker", "Jenkins", "GitHub Actions", "K8s"],
    phases: [
      {
        title: "Linux & Bash for Testers",
        duration: "Weeks 1–3 (~18 hrs)",
        topics: [
          "Linux command line essentials",
          "File system, permissions, process management",
          "Bash scripting: variables, loops, conditionals",
          "grep, sed, awk for log analysis",
          "SSH, SCP, environment variables",
          "Cron jobs for scheduled test runs",
          "Shell scripting for test automation"
        ]
      },
      {
        title: "Git & Version Control",
        duration: "Weeks 4–5 (~14 hrs)",
        topics: [
          "Git fundamentals: init, add, commit, push",
          "Branching strategies: Git Flow, trunk-based",
          "Pull requests and code review process",
          "Git hooks for pre-commit test runs",
          "GitHub: Actions, Issues, Projects",
          "Merge conflicts and resolution"
        ]
      },
      {
        title: "Docker for Testing",
        duration: "Weeks 6–8 (~18 hrs)",
        topics: [
          "Docker concepts: images, containers, registries",
          "Writing Dockerfiles for test environments",
          "docker-compose for multi-service testing",
          "Running Playwright/Selenium in Docker",
          "Docker volumes for test data persistence",
          "Container networking for API tests",
          "DockerHub and GitHub Container Registry"
        ]
      },
      {
        title: "CI/CD Pipelines",
        duration: "Weeks 9–12 (~24 hrs)",
        topics: [
          "CI/CD concepts and pipeline stages",
          "GitHub Actions: workflows, triggers, jobs, steps",
          "Jenkins: installation, pipelines, Jenkinsfile",
          "Parallel test execution in pipelines",
          "Test result publishing (JUnit XML, Allure)",
          "Environment-specific test runs (dev/staging/prod)",
          "Pipeline as Code best practices"
        ]
      },
      {
        title: "Kubernetes & Cloud Testing",
        duration: "Weeks 13–16 (~24 hrs)",
        topics: [
          "Kubernetes concepts: pods, deployments, services",
          "kubectl commands for testers",
          "Running test jobs in K8s",
          "Helm charts basics",
          "Cloud testing: AWS/GCP/Azure basics",
          "Infrastructure as Code: Terraform basics",
          "Monitoring: Prometheus, Grafana, ELK stack"
        ]
      },
      {
        title: "Quality Gates & DevSecOps",
        duration: "Weeks 17–20 (~24 hrs)",
        topics: [
          "SonarQube for code quality gates",
          "SAST/DAST security scanning in pipelines",
          "OWASP ZAP automated security testing",
          "Shift-left testing strategies",
          "Feature flags and canary deployments",
          "Observability: logging, tracing, metrics",
          "Site Reliability Engineering (SRE) basics"
        ]
      }
    ],
    tips: [
      "Set up a local K8s cluster with minikube or kind",
      "Use GitHub Actions for free CI/CD practice",
      "Docker Desktop is excellent for local container testing",
      "Learn YAML deeply — it's everywhere in DevOps",
      "Practice with real projects: containerize your test frameworks"
    ],
    resources: [
      { type: "YouTube", icon: "▶️", name: "DevOps for Beginners", author: "TechWorld with Nana", url: "https://www.youtube.com/@TechWorldwithNana", free: true },
      { type: "YouTube", icon: "▶️", name: "Docker & Kubernetes Complete Course", author: "freeCodeCamp", url: "https://www.youtube.com/watch?v=Wf2eSG3owoA", free: true },
      { type: "Course", icon: "📘", name: "DevOps Bootcamp", author: "Udemy – Mumshad Mannambeth", url: "https://www.udemy.com/course/learn-devops-the-complete-kubernetes-course/", free: false },
      { type: "Website", icon: "🌐", name: "Linux Foundation DevOps Fundamentals", author: "Linux Foundation", url: "https://training.linuxfoundation.org", free: false },
      { type: "Practice", icon: "💻", name: "Killercoda — Interactive Labs", author: "killercoda.com", url: "https://killercoda.com", free: true },
      { type: "Practice", icon: "💻", name: "Play with Docker", author: "Docker", url: "https://labs.play-with-docker.com", free: true },
      { type: "YouTube", icon: "▶️", name: "GitHub Actions Complete Tutorial", author: "Fireship", url: "https://www.youtube.com/@Fireship", free: true },
      { type: "Website", icon: "🌐", name: "DevOps Roadmap", author: "roadmap.sh", url: "https://roadmap.sh/devops", free: true }
    ]
  },
  {
    id: "jmeter",
    emoji: "⚡",
    color: "#f59e0b",
    category: "performance",
    title: "JMeter for Beginners",
    shortTitle: "JMeter",
    level: "Beginner",
    levelClass: "level-beginner",
    duration: "4 months",
    dailyCommit: "2 hrs/day",
    prereq: "Basic understanding of web apps",
    description: "Master Apache JMeter for performance and load testing. Learn to design test plans, execute stress tests, analyze results, and integrate JMeter into your CI/CD pipelines.",
    tags: ["JMeter", "Performance Testing", "Load Testing"],
    phases: [
      {
        title: "Performance Testing Foundations",
        duration: "Weeks 1–2 (~14 hrs)",
        topics: [
          "Performance testing types: load, stress, spike, soak",
          "Key metrics: throughput, response time, error rate, TPS",
          "JMeter installation and GUI overview",
          "Test Plan components: Thread Groups, Samplers",
          "HTTP Request sampler basics",
          "Listeners: View Results Tree, Summary Report",
          "Running your first load test"
        ]
      },
      {
        title: "Core JMeter Components",
        duration: "Weeks 3–5 (~18 hrs)",
        topics: [
          "Thread Group: users, ramp-up, loop count",
          "Samplers: HTTP, JDBC, FTP, SMTP",
          "Config Elements: HTTP Header Manager, Cookie Manager",
          "Assertions: Response, Duration, Size",
          "Pre-processors and Post-processors",
          "Timers: Constant, Gaussian, Uniform",
          "Recording with HTTP(S) Test Script Recorder"
        ]
      },
      {
        title: "Advanced Scenarios",
        duration: "Weeks 6–9 (~24 hrs)",
        topics: [
          "Correlation: Regular Expressions, XPath, CSS extractors",
          "Parameterization with CSV Data Set Config",
          "Variables and functions: ${VAR}, ${__time()}, ${__random()}",
          "Concurrent users with multiple thread groups",
          "Think time and pacing strategies",
          "Controllers: If, While, Loop, Random",
          "Modular test plans with modules"
        ]
      },
      {
        title: "APIs & Database Testing",
        duration: "Weeks 10–12 (~18 hrs)",
        topics: [
          "REST API performance testing",
          "OAuth and JWT in JMeter",
          "JDBC Request sampler — database load testing",
          "WebSocket performance testing",
          "GraphQL performance tests",
          "JMeter with Selenium for browser tests"
        ]
      },
      {
        title: "Analysis, Reporting & CI/CD",
        duration: "Weeks 13–16 (~24 hrs)",
        topics: [
          "JMeter Dashboard Report (HTML)",
          "Grafana + InfluxDB for real-time monitoring",
          "BlazeMeter cloud integration",
          "JMeter in non-GUI (command line) mode",
          "Jenkins integration with JMeter",
          "GitHub Actions for automated load tests",
          "Interpreting results and performance baselines",
          "Distributed load testing with JMeter remote"
        ]
      }
    ],
    tips: [
      "Always run JMeter in non-GUI mode for real tests",
      "Monitor server resources alongside JMeter tests",
      "Start with 10% of target load, gradually increase",
      "Use BlazeMeter Chrome extension to record tests",
      "Grafana + InfluxDB gives the best real-time dashboards"
    ],
    resources: [
      { type: "YouTube", icon: "▶️", name: "JMeter Complete Tutorial", author: "Naveen AutomationLabs", url: "https://www.youtube.com/@NaveenAutomationLabs", free: true },
      { type: "YouTube", icon: "▶️", name: "JMeter Beginners to Advanced", author: "Software Testing Help", url: "https://www.youtube.com/c/SoftwareTestingHelp", free: true },
      { type: "Course", icon: "📘", name: "JMeter from Scratch on Real-Time Project", author: "Udemy – Rahul Shetty", url: "https://www.udemy.com/course/jmeter-from-scratch-on-real-time-performance-testing-project/", free: false },
      { type: "Docs", icon: "📄", name: "Apache JMeter User Manual", author: "Apache", url: "https://jmeter.apache.org/usermanual/index.html", free: true },
      { type: "Practice", icon: "💻", name: "Blazedemo.com Test Site", author: "BlazeMeter", url: "https://blazedemo.com", free: true },
      { type: "Website", icon: "🌐", name: "BlazeMeter University", author: "BlazeMeter", url: "https://www.blazemeter.com/university", free: true },
      { type: "YouTube", icon: "▶️", name: "Performance Testing with JMeter", author: "SDET", url: "https://www.youtube.com/@sdettech", free: true },
      { type: "Website", icon: "🌐", name: "JMeter Plugins", author: "jmeter-plugins.org", url: "https://jmeter-plugins.org", free: true }
    ]
  },
  {
    id: "k6",
    emoji: "📈",
    color: "#10b981",
    category: "performance",
    title: "K6 for Beginners",
    shortTitle: "K6",
    level: "Beginner",
    levelClass: "level-beginner",
    duration: "4 months",
    dailyCommit: "2 hrs/day",
    prereq: "Basic JavaScript knowledge helpful",
    description: "Master modern performance testing with Grafana K6. Write performance tests as code using JavaScript, integrate with Grafana Cloud, and ship faster with built-in CI/CD support.",
    tags: ["K6", "Performance Testing", "JavaScript", "Grafana"],
    phases: [
      {
        title: "K6 Foundations",
        duration: "Weeks 1–3 (~18 hrs)",
        topics: [
          "What is K6? K6 vs JMeter comparison",
          "Installation and first script",
          "Virtual Users (VUs) and duration concepts",
          "HTTP: http.get(), http.post(), options",
          "Checks: validating status codes, response body",
          "Thresholds: defining pass/fail criteria",
          "K6 console output interpretation"
        ]
      },
      {
        title: "Test Scenarios & Workload Models",
        duration: "Weeks 4–6 (~18 hrs)",
        topics: [
          "Executors: ramping-vus, constant-vus, per-vu-iterations",
          "Smoke, load, stress, soak test patterns",
          "Scenarios: multiple concurrent workloads",
          "Stages: ramp-up, steady-state, ramp-down",
          "Think time with sleep()",
          "Groups for organizing test logic",
          "Tags and metadata"
        ]
      },
      {
        title: "Advanced K6 Features",
        duration: "Weeks 7–10 (~24 hrs)",
        topics: [
          "Data parameterization with CSV and JSON",
          "Environment variables in K6",
          "Custom metrics: Counter, Gauge, Rate, Trend",
          "K6 modules and SharedArray",
          "Testing WebSockets with k6/ws",
          "gRPC performance testing",
          "Browser testing with k6/browser",
          "HTTP/2 testing"
        ]
      },
      {
        title: "Monitoring & Output",
        duration: "Weeks 11–13 (~18 hrs)",
        topics: [
          "K6 output formats: JSON, CSV, InfluxDB",
          "Grafana dashboard setup for K6 results",
          "Grafana Cloud K6 (k6.io cloud)",
          "Real-time metrics streaming",
          "K6 results analysis and interpretation",
          "Comparing test runs",
          "Performance trend analysis"
        ]
      },
      {
        title: "CI/CD Integration & Best Practices",
        duration: "Weeks 14–16 (~18 hrs)",
        topics: [
          "GitHub Actions with K6",
          "Jenkins pipeline integration",
          "Threshold-based pass/fail in CI",
          "K6 Extensions ecosystem",
          "xk6-browser for browser metrics",
          "Performance testing as code principles",
          "Full project: API performance test suite"
        ]
      }
    ],
    tips: [
      "K6 scripts are JavaScript — leverage your existing JS skills",
      "Start every project with a smoke test (1 VU, short duration)",
      "Use SharedArray for large datasets to save memory",
      "Grafana Cloud K6 free tier is perfect for learning",
      "Export results to InfluxDB + Grafana for beautiful dashboards"
    ],
    resources: [
      { type: "YouTube", icon: "▶️", name: "K6 Crash Course", author: "Nicole van der Hoeven", url: "https://www.youtube.com/@nicolevanderhoeven", free: true },
      { type: "YouTube", icon: "▶️", name: "Performance Testing with K6", author: "k6 Official", url: "https://www.youtube.com/@k6io", free: true },
      { type: "Docs", icon: "📄", name: "K6 Official Documentation", author: "Grafana Labs", url: "https://k6.io/docs/", free: true },
      { type: "Course", icon: "📘", name: "K6 Load Testing", author: "Udemy", url: "https://www.udemy.com/course/k6-load-testing-performance-testing/", free: false },
      { type: "Practice", icon: "💻", name: "K6 Test Examples", author: "Grafana Labs", url: "https://github.com/grafana/k6/tree/master/examples", free: true },
      { type: "Website", icon: "🌐", name: "Grafana Cloud K6 Free Tier", author: "Grafana Labs", url: "https://grafana.com/products/cloud/k6/", free: true },
      { type: "GitHub", icon: "📦", name: "Awesome K6", author: "GitHub Community", url: "https://github.com/grafana/awesome-k6", free: true },
      { type: "YouTube", icon: "▶️", name: "K6 Browser Testing", author: "Nicole van der Hoeven", url: "https://www.youtube.com/@nicolevanderhoeven", free: true }
    ]
  }
];
