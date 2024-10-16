'use client';

import { PageTransition } from '@/components/shared/page-transition';
import { PageHeader } from '@/components/shared/page-header';
import { ContentSection } from '@/components/shared/content-section';
import { LegalSection } from '@/components/shared/legal-section';
import { Card, CardContent } from '@/components/ui/card';

export default function PrivacyPage() {
  return (
    <PageTransition>
      <div className='container py-24 sm:py-32 mx-auto'>
        <PageHeader
          title='Privacy Policy'
          description='Your privacy is important to us. Learn how we collect, use, and protect your personal information.'
        />
        <ContentSection>
          <Card>
            <CardContent className='p-6 sm:p-10'>
              <LegalSection title='1. Information We Collect'>
                <p>
                  We collect information you provide directly to us, such as
                  when you create an account, update your profile, or use our
                  services. This may include your name, email address, password,
                  age, gender, height, weight, and fitness goals.
                </p>
                <p>
                  We also collect information about your use of FitFlow,
                  including your workout data, progress, and interactions with
                  the app.
                </p>
              </LegalSection>

              <LegalSection title='2. How We Use Your Information'>
                <p>We use the information we collect to:</p>
                <ul>
                  <li>Provide, maintain, and improve our services</li>
                  <li>
                    Personalize your experience and deliver tailored content
                  </li>
                  <li>Process transactions and send related information</li>
                  <li>
                    Send you technical notices, updates, security alerts, and
                    support messages
                  </li>
                  <li>
                    Respond to your comments, questions, and customer service
                    requests
                  </li>
                  <li>
                    Communicate with you about products, services, offers, and
                    events
                  </li>
                  <li>
                    Monitor and analyze trends, usage, and activities in
                    connection with our services
                  </li>
                </ul>
              </LegalSection>

              <LegalSection title='3. Sharing of Information'>
                <p>
                  We do not share your personal information with third parties
                  except as described in this privacy policy or with your
                  consent.
                </p>
                <p>
                  We may share aggregated or de-identified information, which
                  cannot reasonably be used to identify you, for various
                  purposes including data analysis, research, and service
                  improvement.
                </p>
              </LegalSection>

              <LegalSection title='4. Data Security'>
                <p>
                  We take reasonable measures to help protect your personal
                  information from loss, theft, misuse, unauthorized access,
                  disclosure, alteration, and destruction.
                </p>
              </LegalSection>

              <LegalSection title='5. Your Choices'>
                <p>
                  You can access and update certain information about you from
                  within your FitFlow account settings. You can also request to
                  have your account deleted by contacting our support team.
                </p>
              </LegalSection>

              <LegalSection title='6. Changes to this Policy'>
                <p>
                  We may change this privacy policy from time to time. If we
                  make changes, we will notify you by revising the date at the
                  top of the policy and, in some cases, we may provide you with
                  additional notice.
                </p>
              </LegalSection>

              <LegalSection title='7. Contact Us'>
                <p>
                  If you have any questions about this privacy policy, please
                  contact us at privacy@fitflow.com.
                </p>
              </LegalSection>
            </CardContent>
          </Card>
        </ContentSection>
      </div>
    </PageTransition>
  );
}
