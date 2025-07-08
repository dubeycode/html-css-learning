document.addEventListener("DOMContentLoaded",function(){
    const searchButton=document.getElementById("search-btn");
    const usernameinput=document.getElementById("user-input");
    const statsContainer=document.querySelector(".stats-container");
    const easyProgressCircle=document.querySelector(".easy-progress");
    const mediumProgressCircle=document.querySelector(".medium-progress");
    const hardProgressCircle=document.querySelector(".hard-progress");
    const easyLabel=document.getElementById("easy-lable");
    const mediumLabel=document.getElementById("medium-lable");
    const hardLabel=document.getElementById("hard-lable");
    const cardStatsContainer=document.querySelector(".stats-cards");
    
        // return true or false base on a regx 
        function validateusername(username){
            if(username.trim()===""){
                alert("username should not be empty");
                return false;
            }
            const regx= /^[a-zA-Z][a-zA-Z0-9_]{1,15}$/;
            const isMatching=regx.test(username);
            if(!isMatching){
                alert("Invalid username")
            }
            return isMatching;
        }

        async function fetchuserDetils(username){

            try{
                searchButton.textContent="searching....";
                searchButton.disabled=true;

                const proxyUrl = 'https://cors-anywhere.herokuapp.com/' 
                const targetUrl='https://leetcode.com/graphql/';

                const myHeaders=new Headers();
                myHeaders.append("content-type","application/json");

                const graphql = JSON.stringify({
                query: "\n    query userSessionProgress($username: String!) {\n  allQuestionsCount {\n    difficulty\n    count\n  }\n  matchedUser(username: $username) {\n    submitStats {\n      acSubmissionNum {\n        difficulty\n        count\n        submissions\n      }\n      totalSubmissionNum {\n        difficulty\n        count\n        submissions\n      }\n    }\n  }\n}\n    ",
                variables: { "username": `${username}` }
            })

            const requestOptions={
                method:"POST",
                headers: myHeaders,
                body:graphql,
                redirect:"follow"
            };
                const response = await fetch(proxyUrl+targetUrl, requestOptions);
                if(!response.ok){
                    throw new Error("unable to fatch the user detils")
                }
                const parsedData = await response.json();
                console.log("Logging data: ", parsedData) ;

                displayUserData(parsedData);
            }
            catch(error){
                statsContainer.innerHTML = `<p>${error.message}</p>`
            }
            finally{
                searchButton.textContent="searching....";
                searchButton.disabled=false;
            }
        }

        function updateProgress(solved,total,lable,circle){
            const progressDegree=(solved/total)*100
            circle.style.setProperty("--progress-degree",`${progressDegree}%`);
            lable.textContent=`${solved}/${total}`;
        }

        
        function displayUserData(parsedData){
            const totalQues=parsedData.data.allQuestionsCount[0].count;
            const totalEasyQues=parsedData.data.allQuestionsCount[1].count;
            const totalMediumQues=parsedData.data.allQuestionsCount[2].count
            const totalHardQues=parsedData.data.allQuestionsCount[3].count;

            const solvedTotalQues = parsedData.data.matchedUser.submitStats.acSubmissionNum[0].count;
            const solvedTotalEasyQues = parsedData.data.matchedUser.submitStats.acSubmissionNum[1].count;
            const solvedTotalMediumQues = parsedData.data.matchedUser.submitStats.acSubmissionNum[2].count;
            const solvedTotalHardQues = parsedData.data.matchedUser.submitStats.acSubmissionNum[3].count;

            updateProgress(solvedTotalEasyQues, totalEasyQues, easyLabel, easyProgressCircle);
            updateProgress(solvedTotalMediumQues, totalMediumQues, mediumLabel, mediumProgressCircle);
            updateProgress(solvedTotalHardQues, totalHardQues, hardLabel, hardProgressCircle);


        }

        searchButton.addEventListener('click',function(){
            const username=usernameinput.value
            console.log(username)
            if(validateusername(username)){
                fetchuserDetils(username);
            }
        })

})


