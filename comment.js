const textareaElement = document.getElementById("comment") // grabbing textarea element
            
            function myFunction() {
                const commentText = textareaElement.value
                const commentLength = commentText.length

                const characterCount = document.getElementById("characterCount")
                characterCount.innerText = commentLength
                
            }  
            
            function displayComment(){
                const newCommentText = document.getElementById("comment").value //contains the string value of the comment
                const newCommentElement = document.createElement("p") //Makes a new element 
                newCommentElement.innerHTML = newCommentText //Makes the text content (.innerHTML) of this new element = newCommentText
                const commentList = document.getElementById("comment-list") //selecting the comment-list div
                commentList.appendChild(newCommentElement) //append the newCommentElement child to the parent commentList div

                document.getElementById("comment").value = "" //sets comment box to empty once above actions have been run

                const characterCount = document.getElementById("characterCount")
                characterCount.innerText = "0" //num.toString() toString converts number to string // 0 + "" converts 0 to string// +"72" converts 72 to a number
                textareaElement.className = "" // Removing full-text-box class and returns to original classless text area element (and therefore the red border) (can also be an if statement)
            }  

            
            function characterLimitNotice(){
                const commentBoxText = document.getElementById("comment").value //selects the string value of the comment
                const commentLength = commentBoxText.length // Returns the length of string value
                

                if (commentLength === 140){
                    textareaElement.className = "full-text-box" // adds full-text-box class (140 characters) to textarea element
                  
                }else{
                    textareaElement.className = "" // Removing full-text-box class and returns to original classless text area element (and therefore the red border)
                }
            }
            
            function textAreaInputHandler(){
                characterLimitNotice()
                myFunction()
            }
            