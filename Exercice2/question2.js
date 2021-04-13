const getUserPromise = (userId) => new Promise((resolve, reject) => {
    getUser(userId,(user)=>{
      if (!user){
        reject("The user is not valid")
      }
      getRepositories(user.gitHubUsername,(repos,levelNumber)=>{
        if (!repos || !levelNumber || !repos[levelNumber]){
          reject("The repos or levelNumber is not valid")
        }
        getBrunch(repos[levelNumber],(brunch)=>{
          if (brunch == "master") {
            postCommit(newVersion,(committed)=>{
              if(committed){
                resolve("The new version is committed")
              } else {
                reject("The new version is not committed")
              }
            })
          }else {
            reject("The branch is not master")
          }
        })
      })
    });
  })
  
  
  getUserPromise(1)
    .then((msg) => {
      console.log(msg)
    })
    .catch((err) => {
      console.log(err)
    })