import packageJson from '/package.json';
const Footer = () => {
  return (
    <footer>
      <p>v{packageJson.version} | built with <span>❤</span> by <span>floyare</span></p>
    </footer>
  );
}
 
export default Footer;