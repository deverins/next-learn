New way of creating react components, splitting them into two types:
1. Sever Components (SSR)
2. Client Components (CSR)

### SSR
- In Next.js, all components are SSR by default
- They have ability to run task like reading file or fetching data from the database.
- However, they don't have ability to use hook or handle user interaction.
- They are rendered on the server and then sent to the client.
- They are used for static pages like home page, about page, etc.

### CSR
- To create CSR component, it is necessary to add 'use client' at the top of the component file.
- CRS component can't perform task like reading file or fetching data from the database.But they have ability to use hook and handle user interactions.


##Routing Conventions
All routes must be placed inside the app folder.
Every file that corresponds to a route must be named page.js.
Every folder corresponds to a segment in the browser URL.

###Example
- /app/about/page.js
- /app/profile/page.js

#Nested Routes
- /app/about/page.js
- /app/about/team/page.js

#Dynamic Routes
-/app/products/[id]/page.js

#Dynamic Routes with Slug
-/app/products/[...slug]/page.js

#Dynamic Routes with Params
-/app/products/[id]/page.js

#Dynamic Routes with Params and Slug
-/app/products/[...slug]/page.js

#Dynamic Routes with Params and Slug
-/app/products/[...slug]/page.js

#Catch all segments

#Private Folders
- A private folder indicate that it is a private implementation details and should not be considered by routing system. 
The folders and all its subfolders should excluded from the routing system.
Prefiex the folder name with an underscore.

#Routes groups
- Allows us to logically group our routes and project files withouts affecting the URL path structure

##Auth Routes
- /app/login/page.js
- /app/register/page.js
- /app/forgot-password/page.js
- /app/reset-password/page.js
##Routes group omitted
eg:(auth)

#Layout
- A page is UI that's unique to a route
- A layout is UI that's shared across multiple pages in the app

###How to Create a Layout
-You can define a layout by defaut exporting a React component from layout.jsx.
-That component should accept a children prop that will be populated with a child page during rendering
#Route Group Layout
##Route Group Uses:
- To organize project in amanner that doesen't affect URL.
- To selectively apply a layout to certain segment while leaving others unchanged