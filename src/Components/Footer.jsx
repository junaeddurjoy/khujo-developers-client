const Footer = () => {
    return (
        <div>
            <footer className="footer p-10 text-base-content">
                <aside>
                    <img className="h-24 w-24" src="https://i.ibb.co/KwR5XVt/dev-icon-6.png" alt="" />
                    <p><span className="font-bold text-xl">Khujo - Developers</span><br />A job placement platform for Developers.</p>
                </aside>
                <nav>
                    <header className="footer-title">Services</header>
                    <a className="link link-hover">Job Post</a>
                    <a className="link link-hover">Job Placement</a>
                    <a className="link link-hover">Job Searching</a>
                </nav>
                <nav>
                    <header className="footer-title">Company</header>
                    <a className="link link-hover">About us</a>
                    <a className="link link-hover">Contact</a>
                </nav>
                <nav>
                    <header className="footer-title">Legal</header>
                    <a className="link link-hover">Terms of use</a>
                    <a className="link link-hover">Privacy policy</a>
                    <a className="link link-hover">Cookie policy</a>
                </nav>
            </footer>
        </div>
    );
};

export default Footer;