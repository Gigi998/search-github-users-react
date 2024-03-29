# Search Github users

Project in Action -[Search Github Users](https://search-github-users-react-project.netlify.app/)

## Project from Udemy React Course

[React Course](https://www.udemy.com/course/react-tutorial-and-projects-course/?referralCode=FEE6A921AF07E2563CEF)

## Starter Project

- css provided (global styles, styled components)
- folders/files already setup
- all imports included (warnings)
- index.js for easier imports
- to start a project run following commands:
  - "npm install"
  - "npm install react-router-dom@6"
  - "npm start"

## Styled Components

[Styled-Components - Main Docs](https://styled-components.com/)

```jsx
import styled from "styled-components";

const ReactComponent = () => {
 // logic here
 return <Wrapper>
 {some content}
 </Wrapper>
}


const Wrapper = styled.htmlElement`
write your styles here
`
export default ReactComponent
```

## React Icons

[React Icons - Main Docs](https://react-icons.github.io/react-icons/)

```jsx
import { FiUsers, FiUserPlus } from "react-icons/fi";
<FiUsers className="nameOfTheClass"> </FiUsers>;
```

## React Router Dom

version used - "react-router-dom": "^6.4.0",

- [react-router-dom - Main Docs](https://reactrouter.com/web/guides/quick-start)

- make sure to install react-router dom@6
- run following command in your terminal: "npm install react-router-dom@6"

## Gihthub API

- [Root Endpoint](https://api.github.com)
- [Get User](https://api.github.com/users/wesbos)
- [Repos](https://api.github.com/users/john-smilga/repos?per_page=100)
- [Followers](https://api.github.com/users/john-smilga/followers)
- [Rate Limit](https://api.github.com/rate_limit)

  For unauthenticated requests, the rate limit allows for up to 60 requests per hour. Unauthenticated requests are associated with the originating IP address, and not the user making requests.

## Fusion Charts

- [Fusion Charts - Main Docs](https://www.fusioncharts.com/)
- [First React Chart](https://www.fusioncharts.com/dev/getting-started/react/your-first-chart-using-react)
- [List Of Charts](https://www.fusioncharts.com/dev/chart-guide/list-of-charts)
- [Themes](https://www.fusioncharts.com/dev/themes/introduction-to-themes)

## Deployment

[Netlify](https://www.netlify.com/)

## Additional Info

#### Redirects with react-router-dom

In order for routing to work on netlify, redirects was added to the public folder

- \_redirects file in public

```

/*    /index.html   200

```

[Redirects Blog Post](https://dev.to/dance2die/page-not-found-on-netlify-with-react-router-58mc)

#### Warnings and create-react-app

package.json

```js
"build": "CI= react-scripts build",
```

[create-react-app Warning Fix Blog Post](https://community.netlify.com/t/how-to-fix-build-failures-with-create-react-app-in-production/17752)
