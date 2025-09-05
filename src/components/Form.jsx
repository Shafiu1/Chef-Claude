const Form=()=>{
    function signUp(formData){
        const data = Object.fromEntries(formData);
        console.log(data);
    }
    return(
        <section className="form">
            <h1>Signup form</h1>
            <form action={signUp} id='form'>
                <label htmlFor="email">Email:</label>
                <input id="email" type="email" name="email" placeholder="joe@school.com"/>
                <br />
                <label htmlFor="password">Password:</label>
                
                <input id="password" name="password" type="password"/>
                <br/>

                <label htmlFor="favColor"> What is you favorite color?</label>
                <select id="favColor" name="favColor" defaultValue="" required>
                    <option value="" disabled>--Chose a color--</option>
                    <option value="red">Red</option>
                    <option value="green">Green</option>
                    <option value="yellow">Yellow</option>
                    <option value="magenta">Magenta</option>
                    <option value="blue">Blue</option>
                </select>
                <br/>
                <button>Submit</button>
            </form>
        </section>
    );
}

export default Form;

// {
//     "email": "sdfdf@dfsf.com",
//         "password": "dfdfsdfsdf",
//             "favColor": "magenta"
// }