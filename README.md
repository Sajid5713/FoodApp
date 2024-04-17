# FoodApp
This is a food application build for practice for the React.js 


Some Guidelines to keep it mind to run this app:

1. First setup git 
    - git init
    - git remote add origin URL
    - create .gitignore file to ignore file to be pushed to github

    Note: Don't push those file which can be recreated again like:
        - .parcel-cache  'it is create when build is made'
        - dist           'created when build is made'
        - node_modules    'simply use npm install / npm i to reinstall the dependencies via package.json'  

2. Install React and React-dom
    - npm i react
    - npm i react-dom

    Note: Above file are necessary to use react function and syntax

3. Install parcel bundler 
    - npm i -D parcel for development environment

4. Install npm 
    - this will install all dependencies for parcel and its dependencies ( transitive dependency )

5. Generate the main file like app.js
    - setup to make render procedure possible 

6. React hooks
    - hooks are specialized function that are used for enhanced features
    - when used they make the component to rerendered.
    - two commonly used hooks are useStare and useEffect
        - they are imported from 'react'
        syntax:
            - const [name,setName] = useState(object)
                - name of the state variable
                - setName a specialized utility function to update the state variable with 
                  rerender of the component.

            - useEffect( ()=>{} , [dependencies])
                - two arguments one callback function and dependency.
                - when dependency is called useEffect will be called at initial rendered.
                - when a dependency is set according to variable it will be called when that 
                  variable is changed /altered

Note: .map don't work for object so has to check it before putting it inside variable or state variable. Use conditional rendering to go to get array data.

Note: Export has two type of export one is default and one named export. Use named export when there is need of
exporting two different variable at same time.

7. Install react-icons to use various icons library provided by react-icons.

8. To create routers, I have use react-router dependency that allow various feature to make route system more
dynamic and easy to navigate b/w the components.

