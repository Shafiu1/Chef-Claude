const Form = ( props ) => {
    function signUp(formData) {
        const data = Object.fromEntries(formData);
        console.log(data);
    }

    let styles = {
        backgroundColor: props.darkMode ? "#222222" : "#cccccc",
    };

    return (
        <section className="form">
            <h1>Signup form</h1>
            <form action={signUp} id="form">
                <label htmlFor="email">Email:</label>
                <input id="email" type="email" name="email" placeholder="joe@school.com" />
                <br />
                <label htmlFor="password">Password:</label>
                <input id="password" name="password" type="password" />
                <br />

                <label htmlFor="favColor">What is your favorite color?</label>
                <select id="favColor" name="favColor" defaultValue="" required>
                    <option value="" disabled>--Choose a color--</option>
                    <option value="red">Red</option>
                    <option value="green">Green</option>
                    <option value="yellow">Yellow</option>
                    <option value="magenta">Magenta</option>
                    <option value="blue">Blue</option>
                </select>
                <br />
                <button style={styles}>Submit</button>
            </form>
        </section>
    );
};

export default Form;