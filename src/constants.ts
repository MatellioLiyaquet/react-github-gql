import { gql } from '@apollo/client';
const headerClassName = 'header-class';

export const constants = {
  URI: 'https://api.github.com/graphql',
  PAGE_SIZE: 10,
  GRID_COLUMNS: [{
    field: 'name',
    headerName: 'Name',
    sortable: true,
    width: 800,
    headerClassName: headerClassName,
  },
  {
    field: 'stargazerCount',
    headerName: 'Stars',
    sortable: true,
    width: 400,
    headerClassName: headerClassName,
  },
  {
    field: 'forkCount',
    headerName: 'Forks',
    sortable: true,
    width: 400,
    headerClassName: headerClassName,
  },
  ],
  BACKGROUND_COLOR: '#F5F5F5',
  COLOR: 'black',
  INITIAL_STATE: {
    currentCursor: "",
    previousCursor: "",
    movement: 0
  },
  MOVEMENT: {
    LOAD: 0,
    FORWARD: 1,
    BACKWARD: 2
  },
  CURSORS: {
    AFTER: "after",
    BEFORE: "before"
  },
  QUERY: (value: any, type: string) => {
    value = !value ? null : '"' + value + '"'
    return gql`
    query githubGQL 
      {
        search(query: "facebook/react sort:created-asc", type: REPOSITORY, first: 10, ${type}: ${value}) {
            repositoryCount
          pageInfo {
                startCursor
                endCursor
            }
          nodes {
            ... on Repository {
                    id
                    name
                    stargazerCount
                    forkCount
                    url
                }
            }
        }
    }
    `;
  },
  MOCK_DATA: {
    "data": {
      "search": {
        "repositoryCount": 4792,
        "pageInfo": {
          "endCursor": "Y3Vyc29yOjE=",
          "startCursor": "Y3Vyc29yOjE=",
        },
        "nodes": [
          {
            "id": "MDEwOlJlcG9zaXRvcnk2MzUzNzI0OQ==",
            "name": "create-react-app",
            "stargazerCount": 95772,
            "forkCount": 24836,
            "url": "https://github.com/facebook/create-react-app",
            __typename: "Repository"
          }
        ]
      }
    }
  }
}