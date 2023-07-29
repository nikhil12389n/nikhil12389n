import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebookF, faTwitter, faGoogle, faInstagram, faLinkedinIn, faGithub } from '@fortawesome/free-brands-svg-icons';
import { Link } from 'react-router-dom';

export default function Footer() {
  return (
    <footer className="bg-light text-center text-white">
      <div className="container p-4 pb-0">
        <section className="mb-4">
          <Link
            className="btn text-white btn-floating m-1"
            style={{ backgroundColor: '#3b5998' }}
            target="_blank"
            to="https://www.facebook.com/campaign/landing.php?campaign_id=15461201666&extra_1=s%7Cc%7C589521732875%7Cb%7Cfacebook%20%27%7C&placement=&creative=589521732875&keyword=facebook%20%27&partner_id=googlesem&extra_2=campaignid%3D15461201666%26adgroupid%3D130924380175%26matchtype%3Db%26network%3Dg%26source%3Dnotmobile%26search_or_content%3Ds%26device%3Dc%26devicemodel%3D%26adposition%3D%26target%3D%26targetid%3Dkwd-327195741349%26loc_physical_ms%3D1007740%26loc_interest_ms%3D%26feeditemid%3D%26param1%3D%26param2%3D&gclid=EAIaIQobChMIoqmXl6n4_wIVyJJmAh2QjQBXEAAYASAAEgL0mfD_BwE"
            role="button"
          >
            <FontAwesomeIcon icon={faFacebookF} />
          </Link>
          <Link
            className="btn text-white btn-floating m-1"
            style={{ backgroundColor: '#55acee' }}
            target="_blank"
            to="https://twitter.com/i/flow/login?redirect_after_login=%2Flogin%3Flang%3Den"
            role="button"
          >
            <FontAwesomeIcon icon={faTwitter} />
          </Link>
          <Link
            className="btn text-white btn-floating m-1"
            style={{ backgroundColor: '#dd4b39' }}
            to="https://www.google.com/"
            target="_blank"
            role="button"
          >
            <FontAwesomeIcon icon={faGoogle} />
          </Link>
          <Link
            className="btn text-white btn-floating m-1"
            style={{ backgroundColor: '#ac2bac' }}
            target="_blank"
            to="https://www.instagram.com/explore/"
            role="button"
          >
            <FontAwesomeIcon icon={faInstagram} />
          </Link>

          <Link
            className="btn text-white btn-floating m-1"
            style={{ backgroundColor: '#0082ca' }}
            target="_blank"
            to="https://in.linkedin.com/?src=go-pa&trk=sem-ga_campid.14650114788_asid.150089839322_crid.656569072777_kw.www%20linkedin_d.c_tid.kwd-2246447582_n.g_mt.e_geo.1007740&mcid=6844056167778418689&cid=&gclid=EAIaIQobChMIxMvApKn4_wIVzYRLBR2ZIgpYEAAYASAAEgL22vD_BwE&gclsrc=aw.ds"
            role="button"
          >
            <FontAwesomeIcon icon={faLinkedinIn} />
          </Link>

          <Link
            className="btn text-white btn-floating m-1"
            style={{ backgroundColor: '#333333' }}
            target="_blank"
            to="https://github.com/"
            role="button"
          >
            <FontAwesomeIcon icon={faGithub} />
          </Link>
        </section>
      </div>
      <div className="text-center p-3" style={{ backgroundColor: 'rgba(0, 0, 0, 0.2)' }}>
        © 2020. All rights reserved.
        
      </div>
    </footer>
  );
}
