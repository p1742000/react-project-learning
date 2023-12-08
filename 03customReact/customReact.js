// Step 4 : defining the function.

function createElement(reactElement, container){
   /* 
    const domElement = document.createElement(reactElement.type);
    domElement.setAttribute('href', reactElement.props.href);
    domElement.setAttribute('target', reactElement.props.target);
    domElement.innerHTML = reactElement.children;

    container.appendChild(domElement);
    */

    //above code is manually adding only 2 parameters (2 times we have added setAttribute and that too fixed Elements : first one is 'href' and second one is 'target'). So, it will not work with other elements and also with more/less number of parameters also it will not work. So,

    // optimisation of above code
    const domElement = document.createElement(reactElement.type);
    for (const prop in reactElement.props) {
        // console.log(prop);
       if (prop === 'children') continue;
       domElement.setAttribute(prop,reactElement.props[prop]);
    }
    domElement.innerHTML = reactElement.children;

    container.appendChild(domElement);
}

// Step 2 : creating format of the element
// react is taking this kind of/type of (not exactly this format) format by default as we will including react-libraries. So, react founders has written some codebase to add react in some format.
const reactElement = {
    type: 'a',
    props: {
        href: 'https://google.com',
        target: '_blank'
    },
    children: 'Click me to visit Google'
}

// Step 1 : selecting element with "root" id which is there in index.html. and we are injecting this customReact.js as a script in index.html. That's why once this script is applied, it will detect those HTML elements from index.html and start applying whatever javascript we have written.
const mainContainer = document.querySelector('#root');

// Step 3: invoking the function which will render your component/element into DOM.
// here "reactElement" is our components that we are creating in actual react. and "mainCOntainer" is where we want to inject our components.
createElement(reactElement, mainContainer);