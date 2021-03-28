const NotFoundUser = {
  message: "Not Found",
  documentation_url: "https://docs.github.com/rest/reference/users#get-a-user",
};

export const getUser = async (username) => {
  if (username != "pedro2") {
    return Promise.resolve({
      status: 200,
      data: {
        login: username,
        id: 43411882,
        node_id: "MDQ6VXNlcjQzNDExODgy",
        avatar_url: "https://avatars.githubusercontent.com/u/43411882?v=4",
        gravatar_id: "",
        url: "https://api.github.com/users/victorfernandesraton",
        html_url: "https://github.com/victorfernandesraton",
        followers_url:
          "https://api.github.com/users/victorfernandesraton/followers",
        following_url:
          "https://api.github.com/users/victorfernandesraton/following{/other_user}",
        gists_url:
          "https://api.github.com/users/victorfernandesraton/gists{/gist_id}",
        starred_url:
          "https://api.github.com/users/victorfernandesraton/starred{/owner}{/repo}",
        subscriptions_url:
          "https://api.github.com/users/victorfernandesraton/subscriptions",
        organizations_url:
          "https://api.github.com/users/victorfernandesraton/orgs",
        repos_url: "https://api.github.com/users/victorfernandesraton/repos",
        events_url:
          "https://api.github.com/users/victorfernandesraton/events{/privacy}",
        received_events_url:
          "https://api.github.com/users/victorfernandesraton/received_events",
        type: "User",
        site_admin: false,
        name: "Victor Raton",
        company: null,
        blog: "",
        location: null,
        email: null,
        hireable: null,
        bio: null,
        twitter_username: null,
        public_repos: 37,
        public_gists: 1,
        followers: 6,
        following: 8,
        created_at: "2018-09-19T13:26:55Z",
        updated_at: "2021-03-26T18:09:37Z",
      },
    });
  } else {
    return Promise.resolve({ data: { ...NotFoundUser }, status: 404 });
  }
};
