const Form=()=>{
    function signUp(formData){
        const email = formData.get("email");
        const password = formData.get("password");
        console.log(email,password);
        // formEl.reset();
    }
    return(
        <section class="form">
            <h1>Signup form</h1>
            <form action={signUp} id='form'>
                <label htmlFor="email">Email:</label>
                <input id="email" type="email" name="email" placeholder="joe@school.com"/>
                <br />
                <label htmlFor="password">Password:</label>
                
                <input id="password" name="password" type="password"/>
                <br/>
                <button>Submit</button>
            </form>
        </section>
    );
}

export default Form;