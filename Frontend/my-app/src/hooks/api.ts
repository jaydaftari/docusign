// src/api.ts
export const fetchUser = async () => {
    // const response = await fetch('http://localhost:3001/user'); //put the api url
    // if (!response.ok) {
    //   throw new Error('Failed to fetch user data');
    // }
    const response={      //need to take it from api
        user: {displayName:"jay"}
    }
    // const data = await response.json();
    const data = await response;
    return data;
  };