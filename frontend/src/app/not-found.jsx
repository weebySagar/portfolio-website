import Link from "next/link";

import "@/styles/global/_global.scss";
import "@/styles/not found/_not-found.scss";

export default function NotFound() {
  return (
    <section className="not-found text-center">
      <div className="container">
        <div className="inner-wrap">
          <img src="/not-found.png" alt="" className="img-fluid" />
          <div className="row justify-content-center">
            <div className="col-12 col-md-8">

         
          <h2 className="text-uppercase">Page Not Found</h2>
          <p>We looked everywhere for this page. Are you sure the website URL is correct?</p>
          </div>
            </div>
          <Link href="/" className="button-primary">
            <span>

            Return Home
            </span>
            </Link>
        </div>
      </div>
    </section>
  );
}
