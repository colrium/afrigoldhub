/* import { Redirect } from "@/lib/redirect";
export default Redirect; */

// to keep this root page with the defaultLocale
import Page, { getStaticProps } from "./[locale]/500";
export default Page;
export { getStaticProps };
