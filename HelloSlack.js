exports.handler = function(context, event, callback) {
    let botName = event.CurrentInput;
    
    if(botName.toLowerCase().includes("bot")){ //Here we set the trigger word
        let question = [
            {
                "question":{
                    "say": "Hi there, can you give the GitHub username? :computer:"
                },
                "name":"bot_name",
            },
        ];
        let responseObject = {
	        "actions": [
		        {
			        "collect": {
				        "name": "ask_name",
				        "questions":question,
					    "on_complete": {
                            "redirect": "task://Answering_Slack"
				        },
		    	    }
		        }
	        ]
        };
    callback(null, responseObject);
    }
};
