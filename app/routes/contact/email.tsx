export default function Email() {
    return (
        <section>
            <h2>Email Us</h2>
            <p>If you have any questions, feel free to reach out to us via email.</p>
            <form method="post">
                <label htmlFor="email">Email:</label>
                <input type="email" name="email" id="email" required />
                <button type="submit">Send</button>
            </form>
        </section>
    );
}