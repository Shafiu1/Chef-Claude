const Form=()=>{
    return(
        <section>
            <h1>Signup form</h1>
            <form>
                <label htmlFor="email">Email:</label>
                <input id="email" type="email" name="email" placeholder="joe@school.com"/>
                <br />
                <label htmlFor="password">Password:</label>
                
                <input id="password" name="password" type="password"/>
            </form>
        </section>
    );
}

export default Form;