'use client';

import { PageTransition } from '@/components/shared/page-transition';
import { PageHeader } from '@/components/shared/page-header';
import { ContentSection } from '@/components/shared/content-section';
import { LegalSection } from '@/components/shared/legal-section';
import { Card, CardContent } from '@/components/ui/card';

export default function CookiePolicyPage() {
  return (
    <PageTransition>
      <div className='container py-24 sm:py-32 mx-auto'>
        <PageHeader
          title='Cookie Policy'
          description='Learn about how FitFlow uses cookies and similar technologies to improve your experience.'
        />
        <ContentSection>
          <Card>
            <CardContent className='p-6 sm:p-10'>
              <LegalSection title='1. What are Cookies?'>
                <p>
                  Cookies are small text files that are placed on your device
                  when you visit a website. They are widely used to make
                  websites work more efficiently and provide information to the
                  owners of the site.
                </p>
              </LegalSection>

              <LegalSection title='2. How We Use Cookies'>
                <p>We use cookies for several purposes, including:</p>
                <ul>
                  <li>Authentication: To remember your login status</li>
                  <li>
                    Preferences: To remember your settings and preferences
                  </li>
                  <li>Analytics: To understand how visitors use our website</li>
                  <li>
                    Performance: To improve the speed and performance of our
                    service
                  </li>
                  <li>Advertising: To deliver relevant ads (if applicable)</li>
                </ul>
              </LegalSection>

              <LegalSection title='3. Types of Cookies We Use'>
                <p>We use the following types of cookies:</p>
                <ul>
                  <li>
                    Essential cookies: Necessary for the website to function
                    properly
                  </li>
                  <li>
                    Functional cookies: Enhance the functionality of the website
                  </li>
                  <li>
                    Analytical cookies: Help us understand how visitors interact
                    with the website
                  </li>
                  <li>
                    Targeting cookies: Used to deliver personalized content and
                    ads
                  </li>
                </ul>
              </LegalSection>

              <LegalSection title='4. Third-Party Cookies'>
                <p>
                  Some of our pages may contain content from third-party
                  services like Google Analytics or social media platforms.
                  These services may set their own cookies. We do not control
                  the placement of these cookies.
                </p>
              </LegalSection>

              <LegalSection title='5. Managing Cookies'>
                <p>
                  Most web browsers allow you to control cookies through their
                  settings. You can usually find these settings in the
                  &quot;options&quot; or &quot;preferences&quot; menu of your
                  browser. You can also use your browser settings to delete
                  existing cookies.
                </p>
                <p>
                  Please note that disabling certain cookies may impact the
                  functionality of our website.
                </p>
              </LegalSection>

              <LegalSection title='6. Changes to this Policy'>
                <p>
                  We may update this Cookie Policy from time to time. We
                  encourage you to review this policy periodically for any
                  changes.
                </p>
              </LegalSection>

              <LegalSection title='7. Contact Us'>
                <p>
                  If you have any questions about our use of cookies, please
                  contact us at cookies@fitflow.com.
                </p>
              </LegalSection>
            </CardContent>
          </Card>
        </ContentSection>
      </div>
    </PageTransition>
  );
}
