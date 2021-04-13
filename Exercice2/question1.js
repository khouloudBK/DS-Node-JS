
const getUserCallback = (user) =>{
    getRepositories(user.gitHubUsername, getRepositoriesCallback);
}
          
const getRepositoriesCallback = (repos,levelNumber)=>{
    getBrunch(repos[levelNumber],getBrunchCallback);
}
          
const getBrunchCallback = (brunch)=>{
    if (brunch == "master"){
        postCommit(newVersion,postCommitCallback);
    }
}
          
const postCommitCallback = (committed)=>{
    if(committed){
        console.log("The new version is committed");
    } else {
        console.log("The new version is not committed");
    }
}
          
getUser(1, getUserCallback);