//closure defination --- Inner function has always access to the outer function 
// variables and parameters even after outer function has returned.


function interviewquestion(job) {
    return function(name) {
        if(job === 'desinger') {
            console.log(name,"your job is ready as designer");
        }
        else if(job === 'teacher') {
            console.log(name,"your job is ready as teacher");
        }
        else {
            console.log(name,"we dont have any job for you");
        }
    }
}

interviewquestion("designer")("saikumar");
interviewquestion("teacher")("saikumar");
interviewquestion()("saikumar");



















