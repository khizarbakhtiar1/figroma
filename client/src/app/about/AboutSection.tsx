import Link from "next/link";

export function AboutSection() {
  return (
    <div className="w-full">
      <section className="w-full py-12 md:py-24 lg:py-32">
        <div className="container px-4 md:px-6">
          <div className="grid gap-12 lg:grid-cols-2 lg:gap-24">
            <div>
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
                  Our Mission
                </h2>
                <p className="text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  Figroma's mission is to revolutionize document verification by
                  leveraging the power of blockchain technology. We are
                  dedicated to providing a secure, decentralized platform that
                  empowers individuals and organizations to trust the
                  authenticity of digital documents.
                </p>
              </div>
            </div>
            <div>
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
                  Our Story
                </h2>
                <div className="grid gap-6">
                  <div className="grid grid-cols-[48px_1fr] items-start gap-4">
                    <div className="rounded-full bg-primary p-2 text-primary-foreground">
                      <CalendarDaysIcon className="h-4 w-4" />
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold">2020 - Founding</h3>
                      <p className="text-muted-foreground">
                        Figroma was founded by a team of blockchain experts and
                        document verification specialists, driven by the vision
                        of creating a secure and decentralized platform for
                        digital document management.
                      </p>
                    </div>
                  </div>
                  <div className="grid grid-cols-[48px_1fr] items-start gap-4">
                    <div className="rounded-full bg-primary p-2 text-primary-foreground">
                      <RocketIcon className="h-4 w-4" />
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold">
                        2021 - Platform Launch
                      </h3>
                      <p className="text-muted-foreground">
                        After extensive research and development, Figroma
                        launched its blockchain-based document verification
                        platform, empowering individuals and organizations to
                        trust the authenticity of their digital documents.
                      </p>
                    </div>
                  </div>
                  <div className="grid grid-cols-[48px_1fr] items-start gap-4">
                    <div className="rounded-full bg-primary p-2 text-primary-foreground">
                      <AwardIcon className="h-4 w-4" />
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold">
                        2022 - Industry Recognition
                      </h3>
                      <p className="text-muted-foreground">
                        Figroma's innovative approach to document verification
                        was recognized by industry leaders, earning prestigious
                        awards and accolades for its contribution to the field
                        of blockchain-based digital identity management.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="w-full py-12 md:py-24 lg:py-32 bg-muted">
        <div className="container px-4 md:px-6">
          <div className="grid gap-12 lg:grid-cols-2 lg:gap-24">
            <div>
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
                  How Figroma Works
                </h2>
                <p className="text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  Figroma's blockchain-based document verification process
                  ensures the authenticity and integrity of digital documents.
                  By leveraging the decentralized nature of the blockchain, we
                  provide a secure and transparent platform for individuals and
                  organizations to trust the documents they receive.
                </p>
              </div>
            </div>
            <div>
              <div className="grid gap-6">
                <div className="rounded-lg border bg-background p-6">
                  <div className="flex items-center gap-4">
                    <div className="rounded-full bg-primary p-3 text-primary-foreground">
                      <UploadIcon className="h-6 w-6" />
                    </div>
                    <h3 className="text-xl font-semibold">Document Upload</h3>
                  </div>
                  <p className="text-muted-foreground">
                    Users upload their digital documents to the Figroma
                    platform, where they are securely stored and registered on
                    the blockchain.
                  </p>
                </div>
                <div className="rounded-lg border bg-background p-6">
                  <div className="flex items-center gap-4">
                    <div className="rounded-full bg-primary p-3 text-primary-foreground">
                      <LockIcon className="h-6 w-6" />
                    </div>
                    <h3 className="text-xl font-semibold">
                      Blockchain Verification
                    </h3>
                  </div>
                  <p className="text-muted-foreground">
                    Figroma's blockchain-based verification process ensures the
                    authenticity and integrity of the uploaded documents,
                    providing a tamper-proof record of their history.
                  </p>
                </div>
                <div className="rounded-lg border bg-background p-6">
                  <div className="flex items-center gap-4">
                    <div className="rounded-full bg-primary p-3 text-primary-foreground">
                      <CheckIcon className="h-6 w-6" />
                    </div>
                    <h3 className="text-xl font-semibold">
                      Trusted Verification
                    </h3>
                  </div>
                  <p className="text-muted-foreground">
                    Verified documents can be easily shared and accessed,
                    providing a secure and trusted way to manage digital
                    documents across various applications and platforms.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="w-full py-12 md:py-24 lg:py-32">
        <div className="container px-4 md:px-6">
          <div className="space-y-4 text-center">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
              Our Team
            </h2>
            <p className="text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
              Meet the talented individuals behind Figroma's mission to
              revolutionize document verification.
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 mt-8 justify-center">
            <div className="bg-background rounded-lg shadow-lg overflow-hidden">
              <img
                alt="Khizar Bakhtiar - Founder & CEO"
                className="rounded-lg shadow-lg"
                src="/KhizarProfile.jpg"
              />
              <div className="p-4">
                <h3 className="text-xl font-semibold">Khizar Bakhtiar</h3>
                <p className="text-muted-foreground">Founder & CEO</p>
                <p className="text-sm text-muted-foreground mt-2">
                  Khizar is a seasoned blockchain developer with a passion for
                  revolutionizing digital identity management.
                </p>
                <div className="mt-4">
                  <Link
                    href="https://www.linkedin.com/in/khizarbakhtiar/"
                    className="text-primary hover:underline"
                    prefetch={false}
                  >
                    View Profile
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="w-full py-12 md:py-24 lg:py-32 bg-muted">
        <div className="container px-4 md:px-6">
          <div className="space-y-4 text-center">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
              Our Values
            </h2>
            <p className="text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
              Figroma's core values guide our mission to provide a secure and
              transparent document verification platform.
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 mt-8">
            <div className="bg-background rounded-lg shadow-lg p-6">
              <div className="flex items-center gap-4">
                <div className="rounded-full bg-primary p-3 text-primary-foreground">
                  <LockIcon className="h-6 w-6" />
                </div>
                <h3 className="text-xl font-semibold">Security</h3>
              </div>
              <p className="text-muted-foreground mt-2">
                Figroma prioritizes the security of digital documents by
                leveraging the power of blockchain technology to ensure the
                authenticity and integrity of all data stored on our platform.
              </p>
            </div>
            <div className="bg-background rounded-lg shadow-lg p-6">
              <div className="flex items-center gap-4">
                <div className="rounded-full bg-primary p-3 text-primary-foreground">
                  <EyeIcon className="h-6 w-6" />
                </div>
                <h3 className="text-xl font-semibold">Transparency</h3>
              </div>
              <p className="text-muted-foreground mt-2">
                Figroma believes in the importance of transparency, providing
                users with a clear and comprehensive view of the document
                verification process and the history of their digital documents.
              </p>
            </div>
            <div className="bg-background rounded-lg shadow-lg p-6">
              <div className="flex items-center gap-4">
                <div className="rounded-full bg-primary p-3 text-primary-foreground">
                  <LightbulbIcon className="h-6 w-6" />
                </div>
                <h3 className="text-xl font-semibold">Innovation</h3>
              </div>
              <p className="text-muted-foreground mt-2">
                Figroma is committed to driving innovation in the field of
                document verification, continuously exploring new technologies
                and solutions to enhance the user experience and meet the
                evolving needs of our clients.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="w-full py-12 md:py-24 lg:py-32 bg-muted">
        <div className="container grid items-center justify-center gap-4 px-4 text-center md:px-6 lg:gap-10">
          <div className="space-y-3">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
              Trusted Partners
            </h2>
            <p className="mx-auto max-w-[700px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
              Figroma collaborates with industry leaders to provide the best
              experience for our users.
            </p>
          </div>
          <div className="grid w-full grid-cols-2 items-stretch justify-center gap-4 md:grid-cols-4 lg:gap-6">
            <div className="mx-auto flex w-full items-center justify-center rounded-lg bg-background p-4 sm:p-8">
              <img
                src="/placeholder.svg"
                width="140"
                height="70"
                alt="Partner Logo"
                className="aspect-[2/1] overflow-hidden object-contain object-center"
              />
            </div>
            <div className="mx-auto flex w-full items-center justify-center rounded-lg bg-background p-4 sm:p-8">
              <img
                src="/placeholder.svg"
                width="140"
                height="70"
                alt="Partner Logo"
                className="aspect-[2/1] overflow-hidden object-contain object-center"
              />
            </div>
            <div className="mx-auto flex w-full items-center justify-center rounded-lg bg-background p-4 sm:p-8">
              <img
                src="/placeholder.svg"
                width="140"
                height="70"
                alt="Partner Logo"
                className="aspect-[2/1] overflow-hidden object-contain object-center"
              />
            </div>
            <div className="mx-auto flex w-full items-center justify-center rounded-lg bg-background p-4 sm:p-8">
              <img
                src="/placeholder.svg"
                width="140"
                height="70"
                alt="Partner Logo"
                className="aspect-[2/1] overflow-hidden object-contain object-center"
              />
            </div>
          </div>
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-3">
            <div className="flex flex-col items-center justify-center rounded-lg bg-background p-6 text-center">
              <div className="text-4xl font-bold text-primary">
                <div />+
              </div>
              <p className="text-muted-foreground">Active Users</p>
            </div>
            <div className="flex flex-col items-center justify-center rounded-lg bg-background p-6 text-center">
              <div className="text-4xl font-bold text-primary">
                <div />%
              </div>
              <p className="text-muted-foreground">Customer Satisfaction</p>
            </div>
            <div className="flex flex-col items-center justify-center rounded-lg bg-background p-6 text-center">
              <div className="text-4xl font-bold text-primary">
                <div />+
              </div>
              <p className="text-muted-foreground">Integrations</p>
            </div>
          </div>
        </div>
      </section>
      <section className="w-full py-12 md:py-24 lg:py-32">
        <div className="container grid items-center justify-center gap-4 px-4 text-center md:px-6 lg:gap-10">
          <div className="space-y-3">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
              Future Roadmap
            </h2>
            <p className="mx-auto max-w-[700px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
              Discover what's in store for Figroma in the coming months.
            </p>
          </div>
          <div className="grid w-full grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
            <div className="rounded-lg bg-background p-6">
              <h3 className="text-lg font-bold">Expanded Analytics</h3>
              <p className="text-muted-foreground">
                Gain deeper insights into your design projects with advanced
                analytics and reporting tools.
              </p>
              <div className="mt-4">
                <img
                  src="/placeholder.svg"
                  width="400"
                  height="200"
                  alt="Expanded Analytics"
                  className="aspect-[2/1] overflow-hidden rounded-lg object-cover"
                />
              </div>
            </div>
            <div className="rounded-lg bg-background p-6">
              <h3 className="text-lg font-bold">Collaborative Whiteboarding</h3>
              <p className="text-muted-foreground">
                Bring your team together with real-time collaborative
                whiteboarding and ideation tools.
              </p>
              <div className="mt-4">
                <img
                  src="/placeholder.svg"
                  width="400"
                  height="200"
                  alt="Collaborative Whiteboarding"
                  className="aspect-[2/1] overflow-hidden rounded-lg object-cover"
                />
              </div>
            </div>
            <div className="rounded-lg bg-background p-6">
              <h3 className="text-lg font-bold">Mobile App Integration</h3>
              <p className="text-muted-foreground">
                Access Figroma on the go with our new mobile app, seamlessly
                syncing your designs and projects.
              </p>
              <div className="mt-4">
                <img
                  src="/placeholder.svg"
                  width="400"
                  height="200"
                  alt="Mobile App Integration"
                  className="aspect-[2/1] overflow-hidden rounded-lg object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="w-full py-12 md:py-24 lg:py-32 bg-muted">
        <div className="container grid items-center justify-center gap-4 px-4 text-center md:px-6 lg:gap-10">
          <div className="space-y-3">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
              Our Impact
            </h2>
            <p className="mx-auto max-w-[700px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
              Discover the impact Figroma has made on our customers and the
              design community.
            </p>
          </div>
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-3">
            <div className="flex flex-col items-center justify-center rounded-lg bg-background p-6 text-center">
              <div className="text-4xl font-bold text-primary">
                <div />+
              </div>
              <p className="text-muted-foreground">Designs Created</p>
            </div>
            <div className="flex flex-col items-center justify-center rounded-lg bg-background p-6 text-center">
              <div className="text-4xl font-bold text-primary">
                <div />%
              </div>
              <p className="text-muted-foreground">Customer Satisfaction</p>
            </div>
            <div className="flex flex-col items-center justify-center rounded-lg bg-background p-6 text-center">
              <div className="text-4xl font-bold text-primary">
                <div />+
              </div>
              <p className="text-muted-foreground">Agencies Served</p>
            </div>
          </div>
        </div>
      </section>
      <section className="w-full py-12 md:py-24 lg:py-32 bg-muted">
        <div className="container grid items-center justify-center gap-4 px-4 text-center md:px-6 lg:gap-10">
          <div className="space-y-3">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
              Get in Touch
            </h2>
            <p className="mx-auto max-w-[700px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
              Have a question or want to learn more about Figroma? Reach out to
              our team.
            </p>
          </div>
          <div className="flex flex-col items-center justify-center gap-4 sm:flex-row">
            <Link
              href="#"
              className="inline-flex h-10 items-center justify-center rounded-md bg-primary px-8 text-sm font-medium text-primary-foreground shadow transition-colors hover:bg-primary/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50"
              prefetch={false}
            >
              Email Us
            </Link>
            <Link
              href="#"
              className="inline-flex h-10 items-center justify-center rounded-md border border-input bg-background px-8 text-sm font-medium shadow-sm transition-colors hover:bg-accent hover:text-accent-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50"
              prefetch={false}
            >
              Contact Form
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}

function AwardIcon(props: any) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="m15.477 12.89 1.515 8.526a.5.5 0 0 1-.81.47l-3.58-2.687a1 1 0 0 0-1.197 0l-3.586 2.686a.5.5 0 0 1-.81-.469l1.514-8.526" />
      <circle cx="12" cy="8" r="6" />
    </svg>
  );
}

function CalendarDaysIcon(props: any) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M8 2v4" />
      <path d="M16 2v4" />
      <rect width="18" height="18" x="3" y="4" rx="2" />
      <path d="M3 10h18" />
      <path d="M8 14h.01" />
      <path d="M12 14h.01" />
      <path d="M16 14h.01" />
      <path d="M8 18h.01" />
      <path d="M12 18h.01" />
      <path d="M16 18h.01" />
    </svg>
  );
}

function CheckIcon(props: any) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M20 6 9 17l-5-5" />
    </svg>
  );
}

function EyeIcon(props: any) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M2 12s3-7 10-7 10 7 10 7-3 7-10 7-10-7-10-7Z" />
      <circle cx="12" cy="12" r="3" />
    </svg>
  );
}

function LightbulbIcon(props: any) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M15 14c.2-1 .7-1.7 1.5-2.5 1-.9 1.5-2.2 1.5-3.5A6 6 0 0 0 6 8c0 1 .2 2.2 1.5 3.5.7.7 1.3 1.5 1.5 2.5" />
      <path d="M9 18h6" />
      <path d="M10 22h4" />
    </svg>
  );
}

function LockIcon(props: any) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <rect width="18" height="11" x="3" y="11" rx="2" ry="2" />
      <path d="M7 11V7a5 5 0 0 1 10 0v4" />
    </svg>
  );
}

function RocketIcon(props: any) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M4.5 16.5c-1.5 1.26-2 5-2 5s3.74-.5 5-2c.71-.84.7-2.13-.09-2.91a2.18 2.18 0 0 0-2.91-.09z" />
      <path d="m12 15-3-3a22 22 0 0 1 2-3.95A12.88 12.88 0 0 1 22 2c0 2.72-.78 7.5-6 11a22.35 22.35 0 0 1-4 2z" />
      <path d="M9 12H4s.55-3.03 2-4c1.62-1.08 5 0 5 0" />
      <path d="M12 15v5s3.03-.55 4-2c1.08-1.62 0-5 0-5" />
    </svg>
  );
}

function UploadIcon(props: any) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
      <polyline points="17 8 12 3 7 8" />
      <line x1="12" x2="12" y1="3" y2="15" />
    </svg>
  );
}

function XIcon(props: any) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M18 6 6 18" />
      <path d="m6 6 12 12" />
    </svg>
  );
}
