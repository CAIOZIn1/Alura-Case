import Link from "next/link" ;
import { ReactElement } from "react";

interface Props{
    children: String | any,
    href: any | String,
};

const LinkForPages = ({children, href, ...props}: Props): ReactElement => {
    return ( 
        <Link href={href} passHref legacyBehavior>
            <a {...props}>{children}</a>
        </Link>
     );
}
 
export default LinkForPages;