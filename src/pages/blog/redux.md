---
title: Redux
date: "2018-09-17"
cat: "blog"
---

The following shell commands will create the necessary shell for us to make the Redux Template

`npx create-react-app redux-template`

`cd redux-template`

`yarn add axios react-redux redux redux-thunk`

`mkdir src/actions src/components src/constants src/reducers src/store`

`mkdir components/views components/containers components/layout`

`touch src/store/index.js src/reducers/index.js src/reducers/dataReducers.js src/actions/index.js src/constants/index.js src/components/views/index.js src/components/views/showData.js`

We can run a quick `yarn start` to test if the page works by going to localhost:3000.
Savor it, for it will probably be error free..

Now lets build the index files we just created. The list of files is as follows (from /src/):

1. **store**/index.js
2. **reducers**/index.js
3. **reducers**/dataReducersjs
4. **actions**/index.js
5. **constants**/index.js

## Store

### store/index.js

```javascript
import { createStore, applyMiddleware, combineReducers, compose } from "redux";
import thunk from "redux-thunk";
import { dataReducer } from "../reducers";

const reducers = combineReducers({
  comments: dataReducer
});

const initialState = {};

const middleware = [thunk];

const store = createStore(
  reducers,
  initialState,
  compose(
    applyMiddleware(...middleware),
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
  )
);

export default store;
```

---

## Reducers

### reducers/index.js

```javascript
import dataReducer from "./dataReducer";

export { dataReducer };
```

### reducers/index.js

```javascript
import { LOAD_DATA, LOAD_MORE_DATA } from "../constants";

let initialState = {
  data: [],
  splicedDataArray: null
};

export default (state = initialState, action) => {
  let updated = Object.assign({}, state);
  let copyArray;
  let splicedArray;
  let copyData;
  switch (action.type) {
    case LOAD_DATA:
      //Make a copy of incoming data
      copyData = Object.assign({}, action.data);
      // extract the array from CopyData ALL 500 comments
      copyArray = copyData.data;
      //Take the first 15 comments
      splicedArray = copyArray.splice(0, 15);
      //push it in the empty array exist inside the state
      splicedArray.forEach(item => {
        updated.data.push(item);
      });
      //take rest of the spliced records and set to updated.splicedDataArray
      updated.splicedDataArray = copyData.data;

      return updated;
    case LOAD_MORE_DATA:
      let newData = updated.splicedDataArray.splice(0, 15);

      updated.data = [...state.data, ...newData];

      return updated;
    default:
      return updated;
  }
};
```

---

## Actions

### actions/index.js

```javascript
import axios from "axios";

import { LOAD_DATA, LOAD_MORE_DATA } from "../constants";

export const getData = () => dispatch => {
  axios
    .get(`https://jsonplaceholder.typicode.com/comments`)
    .then(res => {
      dispatch({
        type: LOAD_DATA,
        data: res
      });
    })
    .catch(err => {
      console.log(err);
    });
};

export const loadMoreData = () => dispatch => {
  dispatch({
    type: LOAD_MORE_DATA
  });
};
```

---

## Constants

### constants/index.js

```javascript
export const LOAD_DATA = "LOAD_DATA";
export const LOAD_MORE_DATA = "LOAD_MORE_DATA";
```

---

So far we've taken care of:

- [x] Store
- [x] Reducers
- [x] Actions
- [x] Constants

---

---

Now we'll move into..

## Components

Components are broken into:

- Layout
  - Home.js
- Containers
  - index.js
  - Search.js
- View
  - index.js
  - ShowData.js

### **layout**/Home.js

```javascript
import React, { Component } from "react";

import { Search } from "../containers";

class Home extends Component {
  render() {
    return (
      <div>
        <Search />
      </div>
    );
  }
}

export default Home;
```

### **containers**/index.js

```javascript
import Search from "./Search";
export { Search };
```

### **containers**/Search.js

```javascript
import React, { Component } from "react";
import { connect } from "react-redux";

import { ShowData } from "../views";
import { getData, loadMoreData } from "../../actions";

class Search extends Component {
  componentDidMount() {
    this.props.getData();

    this.scrollListener = window.addEventListener("scroll", e => {
      this.handleScroll(e);
    });
  }

  handleScroll = e => {
    let lastListItem = document.querySelector("ul.comments > li:last-child");

    let lastListItemOffset = lastListItem.offsetTop + lastListItem.clientHeight;
    let pageOffset = window.pageYOffset + window.innerHeight;

    let bottomOffset = 20;

    if (pageOffset > lastListItemOffset - bottomOffset) {
      this.props.loadMoreData();
    }
  };

  render() {
    let comments = this.props.comments;
    let loadComments;

    if (comments.data.length <= 0) {
      loadComments = "";
    } else {
      loadComments = comments.data.map(item => {
        return (
          <li key={item.id} style={{ listStyle: "none" }}>
            <ShowData item={item} />
          </li>
        );
      });
    }

    return (
      <div>
        <ul className="comments">{loadComments}</ul>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  comments: state.comments
});

export default connect(
  mapStateToProps,
  { getData, loadMoreData }
)(Search);
```

###**views**/index.js

```javascript
import ShowData from "./ShowData";
export { ShowData };
```

###**views**/ShowData.js

```javascript
import React, { Component } from "react";

const showData = props => {
  return (
    <div className="comment">
      <h1>{props.item.email}</h1>
      <p>{props.item.body}</p>
    </div>
  );
};
export default showData;
```
