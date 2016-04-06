var querystring = require('querystring');
var request = require('request');

var url = 'http://localhost:5000/';
//var url = 'https://peaceful-brushlands-94865.herokuapp.com/';

var github_commit = {
    "after":"1481a2de7b2a7d02428ad93446ab166be7793fbb",
    "before":"17c497ccc7cca9c2f735aa07e9e3813060ce9a6a",
    "commits":[
       {
          "author":{
             "email":"github@sjorsgielen.nl",
             "name":"Sjors"
          },
          "message":"This is me testing the client"
       },
       {
          "author":{
             "email":"marlon@tweedegolf.com",
             "name":"Marlon"
          },
          "message":"This is me testing the client"
       }
    ],
    "repository":{
       "name":"testing",
       "url":"https://github.com/octokitty/testing"
    }
};

var gitlab_commit = {
  "object_kind": "push",
  "before": "95790bf891e76fee5e1747ab589903a6a1f80f22",
  "after": "da1560886d4f094c3e6c9ef40349f7d38b5d27d7",
  "repository":{
    "name": "Diaspora",
    "url": "git@example.com:mike/diasporadiaspora.git"
  },
  "commits": [
    {
      "id": "b6568db1bc1dcd7f8b4d5a946b0b91f9dacd7327",
      "author": {
        "email": "marlon@tweedegolf.com",
         "name":"Marlon"
      },
      "message":"This is me testing the client"

    },
    {
      "id": "da1560886d4f094c3e6c9ef40349f7d38b5d27d7",
      "author": {
        "email": "nick@astrant.net",
        "name":"Nick"
      },
      "message":"This is me testing the client"
    }
  ]
};

var jira_hook =  {
  "issue": {
    "key":"JRA-20002",
    "fields":{
      "summary":"Implemented Musac"
    }
  },
  "user": {
    "emailAddress":"github@sjorsgielen.nl",
    "name":"Sjors"
  },
  "changelog": {
    "items": [
      {
        "toString": "resolved",
        "field": "status"
      }
    ]
  },
  "webhookEvent": "jira:issue_updated"
};


var github_commit2 = {
  "zen": "Keep it logically awesome.",
  "hook_id": 7983008,
  "hook": {
    "type": "Repository",
    "id": 7983008,
    "name": "web",
    "active": true,
    "events": [
      "push"
    ],
    "config": {
      "url": "https://peaceful-brushlands-94865.herokuapp.com/",
      "content_type": "json",
      "insecure_ssl": "0",
      "secret": "********"
    },
    "updated_at": "2016-04-06T13:07:21Z",
    "created_at": "2016-04-06T13:07:21Z",
    "url": "https://api.github.com/repos/abudaan/test/hooks/7983008",
    "test_url": "https://api.github.com/repos/abudaan/test/hooks/7983008/test",
    "ping_url": "https://api.github.com/repos/abudaan/test/hooks/7983008/pings",
    "last_response": {
      "code": null,
      "status": "unused",
      "message": null
    }
  },
  "repository": {
    "id": 3842467,
    "name": "test",
    "full_name": "abudaan/test",
    "owner": {
      "login": "abudaan",
      "id": 299669,
      "avatar_url": "https://avatars.githubusercontent.com/u/299669?v=3",
      "gravatar_id": "",
      "url": "https://api.github.com/users/abudaan",
      "html_url": "https://github.com/abudaan",
      "followers_url": "https://api.github.com/users/abudaan/followers",
      "following_url": "https://api.github.com/users/abudaan/following{/other_user}",
      "gists_url": "https://api.github.com/users/abudaan/gists{/gist_id}",
      "starred_url": "https://api.github.com/users/abudaan/starred{/owner}{/repo}",
      "subscriptions_url": "https://api.github.com/users/abudaan/subscriptions",
      "organizations_url": "https://api.github.com/users/abudaan/orgs",
      "repos_url": "https://api.github.com/users/abudaan/repos",
      "events_url": "https://api.github.com/users/abudaan/events{/privacy}",
      "received_events_url": "https://api.github.com/users/abudaan/received_events",
      "type": "User",
      "site_admin": false
    },
    "private": false,
    "html_url": "https://github.com/abudaan/test",
    "description": "test",
    "fork": false,
    "url": "https://api.github.com/repos/abudaan/test",
    "forks_url": "https://api.github.com/repos/abudaan/test/forks",
    "keys_url": "https://api.github.com/repos/abudaan/test/keys{/key_id}",
    "collaborators_url": "https://api.github.com/repos/abudaan/test/collaborators{/collaborator}",
    "teams_url": "https://api.github.com/repos/abudaan/test/teams",
    "hooks_url": "https://api.github.com/repos/abudaan/test/hooks",
    "issue_events_url": "https://api.github.com/repos/abudaan/test/issues/events{/number}",
    "events_url": "https://api.github.com/repos/abudaan/test/events",
    "assignees_url": "https://api.github.com/repos/abudaan/test/assignees{/user}",
    "branches_url": "https://api.github.com/repos/abudaan/test/branches{/branch}",
    "tags_url": "https://api.github.com/repos/abudaan/test/tags",
    "blobs_url": "https://api.github.com/repos/abudaan/test/git/blobs{/sha}",
    "git_tags_url": "https://api.github.com/repos/abudaan/test/git/tags{/sha}",
    "git_refs_url": "https://api.github.com/repos/abudaan/test/git/refs{/sha}",
    "trees_url": "https://api.github.com/repos/abudaan/test/git/trees{/sha}",
    "statuses_url": "https://api.github.com/repos/abudaan/test/statuses/{sha}",
    "languages_url": "https://api.github.com/repos/abudaan/test/languages",
    "stargazers_url": "https://api.github.com/repos/abudaan/test/stargazers",
    "contributors_url": "https://api.github.com/repos/abudaan/test/contributors",
    "subscribers_url": "https://api.github.com/repos/abudaan/test/subscribers",
    "subscription_url": "https://api.github.com/repos/abudaan/test/subscription",
    "commits_url": "https://api.github.com/repos/abudaan/test/commits{/sha}",
    "git_commits_url": "https://api.github.com/repos/abudaan/test/git/commits{/sha}",
    "comments_url": "https://api.github.com/repos/abudaan/test/comments{/number}",
    "issue_comment_url": "https://api.github.com/repos/abudaan/test/issues/comments{/number}",
    "contents_url": "https://api.github.com/repos/abudaan/test/contents/{+path}",
    "compare_url": "https://api.github.com/repos/abudaan/test/compare/{base}...{head}",
    "merges_url": "https://api.github.com/repos/abudaan/test/merges",
    "archive_url": "https://api.github.com/repos/abudaan/test/{archive_format}{/ref}",
    "downloads_url": "https://api.github.com/repos/abudaan/test/downloads",
    "issues_url": "https://api.github.com/repos/abudaan/test/issues{/number}",
    "pulls_url": "https://api.github.com/repos/abudaan/test/pulls{/number}",
    "milestones_url": "https://api.github.com/repos/abudaan/test/milestones{/number}",
    "notifications_url": "https://api.github.com/repos/abudaan/test/notifications{?since,all,participating}",
    "labels_url": "https://api.github.com/repos/abudaan/test/labels{/name}",
    "releases_url": "https://api.github.com/repos/abudaan/test/releases{/id}",
    "deployments_url": "https://api.github.com/repos/abudaan/test/deployments",
    "created_at": "2012-03-27T10:10:22Z",
    "updated_at": "2016-04-06T12:55:14Z",
    "pushed_at": "2016-04-06T12:55:13Z",
    "git_url": "git://github.com/abudaan/test.git",
    "ssh_url": "git@github.com:abudaan/test.git",
    "clone_url": "https://github.com/abudaan/test.git",
    "svn_url": "https://github.com/abudaan/test",
    "homepage": "test",
    "size": 0,
    "stargazers_count": 1,
    "watchers_count": 1,
    "language": null,
    "has_issues": true,
    "has_downloads": true,
    "has_wiki": true,
    "has_pages": false,
    "forks_count": 0,
    "mirror_url": null,
    "open_issues_count": 0,
    "forks": 0,
    "open_issues": 0,
    "watchers": 1,
    "default_branch": "master"
  },
  "sender": {
    "login": "abudaan",
    "id": 299669,
    "avatar_url": "https://avatars.githubusercontent.com/u/299669?v=3",
    "gravatar_id": "",
    "url": "https://api.github.com/users/abudaan",
    "html_url": "https://github.com/abudaan",
    "followers_url": "https://api.github.com/users/abudaan/followers",
    "following_url": "https://api.github.com/users/abudaan/following{/other_user}",
    "gists_url": "https://api.github.com/users/abudaan/gists{/gist_id}",
    "starred_url": "https://api.github.com/users/abudaan/starred{/owner}{/repo}",
    "subscriptions_url": "https://api.github.com/users/abudaan/subscriptions",
    "organizations_url": "https://api.github.com/users/abudaan/orgs",
    "repos_url": "https://api.github.com/users/abudaan/repos",
    "events_url": "https://api.github.com/users/abudaan/events{/privacy}",
    "received_events_url": "https://api.github.com/users/abudaan/received_events",
    "type": "User",
    "site_admin": false
  }
}



console.log('Testing github hook:', url);

var payload = JSON.stringify(github_commit2);

request.post({url: url + 'commit', form: github_commit2}, function(err, res, body) {
    console.log('Received:', body);
});

/*
payload = JSON.stringify(gitlab_commit);

request.post({url: url + 'commit', form: gitlab_commit}, function(err, res, body) {
    console.log('Received:', body);
});

request.post({url: url + 'issue/MUS-1', form: jira_hook}, function(err, res, body) {
    console.log('Received:', body);
});
*/