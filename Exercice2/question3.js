const user = await getUser(1)
const [repos,levelNumber] = await getRepositories(user.gitHubUsername)

const brunch = await getBrunch(repos[levelNumber])

if (brunch == "master"){
  const committed = await postCommit(newVersion)
  if(committed){
    console.log("The new version is committed");
  }else{
    console.log("The new version is not committed");
  }
}