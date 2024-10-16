'use client';

import { PageTransition } from '@/components/shared/page-transition';
import { PageHeader } from '@/components/shared/page-header';
import { ContentSection } from '@/components/shared/content-section';
import { LegalSection } from '@/components/shared/legal-section';
import { Card, CardContent } from '@/components/ui/card';

export default function TermsPage() {
  return (
    <PageTransition>
      <div className='container py-24 sm:py-32 mx-auto'>
        <PageHeader
          title='Terms and Conditions'
          description='Please read these terms and conditions carefully before using FitFlow.'
        />
        <ContentSection>
          <Card>
            <CardContent className='p-6 sm:p-10'>
              <LegalSection title='1. Acceptance of Terms'>
                <p>
                  By accessing or using FitFlow, you agree to be bound by these
                  Terms and Conditions and all applicable laws and regulations.
                  If you do not agree with any part of these terms, you may not
                  use our service.
                </p>
              </LegalSection>

              <LegalSection title='2. Use of Service'>
                <p>
                  You must be at least 18 years old to use FitFlow. You are
                  responsible for maintaining the confidentiality of your
                  account and password. You agree to accept responsibility for
                  all activities that occur under your account.
                </p>
              </LegalSection>

              <LegalSection title='3. User Content'>
                <p>
                  You retain all rights to any content you submit, post or
                  display on or through FitFlow. By posting content, you grant
                  us a non-exclusive, worldwide, royalty-free license to use,
                  modify, publicly perform, publicly display, reproduce, and
                  distribute such content on and through FitFlow.
                </p>
              </LegalSection>

              <LegalSection title='4. Intellectual Property'>
                <p>
                  The FitFlow service and its original content, features, and
                  functionality are owned by FitFlow and are protected by
                  international copyright, trademark, patent, trade secret, and
                  other intellectual property or proprietary rights laws.
                </p>
              </LegalSection>

              <LegalSection title='5. Termination'>
                <p>
                  We may terminate or suspend your account and bar access to the
                  Service immediately, without prior notice or liability, under
                  our sole discretion, for any reason whatsoever and without
                  limitation, including but not limited to a breach of the
                  Terms.
                </p>
              </LegalSection>

              <LegalSection title='6. Limitation of Liability'>
                <p>
                  In no event shall FitFlow, nor its directors, employees,
                  partners, agents, suppliers, or affiliates, be liable for any
                  indirect, incidental, special, consequential or punitive
                  damages, including without limitation, loss of profits, data,
                  use, goodwill, or other intangible losses, resulting from your
                  access to or use of or inability to access or use the Service.
                </p>
              </LegalSection>

              <LegalSection title='7. Changes to Terms'>
                <p>
                  We reserve the right to modify or replace these Terms at any
                  time. If a revision is material, we will provide at least 30
                  days&apos; notice prior to any new terms taking effect. What
                  constitutes a material change will be determined at our sole
                  discretion.
                </p>
              </LegalSection>

              <LegalSection title='8. Contact Us'>
                <p>
                  If you have any questions about these Terms, please contact us
                  at legal@fitflow.com.
                </p>
              </LegalSection>
            </CardContent>
          </Card>
        </ContentSection>
      </div>
    </PageTransition>
  );
}
