import React, { useEffect, useState } from 'react'
import Link from 'next/link'
import { useRouter } from 'next/navigation';

const Breadcrumb = () => {
    const router = useRouter();
    const [pathnames, setPathnames] = useState([]);

    useEffect(() => {
        if (router.isReady) {
            setPathnames(router.pathname.split('/').filter((x) => x));
        }
    }, [router.isReady, router.pathname]);

    if (!router.isReady) {
        return null; // or a loading indicator
    }
    return (
        <>
             <div className="breadcrumbs">
            <nav className="gf_breadcrumbs">
                <Link href="/" className="gf_breadcrumbs_link">Home</Link>
                {pathnames.map((value, index) => {
                    const href = '/' + pathnames.slice(0, index + 1).join('/');
                    const isLast = index === pathnames.length - 1;
                    const text = decodeURIComponent(value);

                    return (
                        <span key={href}>
                            <span className="gf_breadcrumbs-symbol">/</span>
                            {isLast ? (
                                <span className="gf_breadcrumbs-link gf_current_page">{text}</span>
                            ) : (
                                <Link href={href} className="gf_breadcrumbs_link">
                                    {text}
                                </Link>
                            )}
                        </span>
                    );
                })}
            </nav>
        </div>
        </>
    )
}

export default Breadcrumb