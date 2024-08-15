import Link from "next/link";
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";

export function Body() {
  return (
    <div className="w-full">
      <section className="w-full py-20 md:py-32 bg-gradient-to-r from-[#0077B6] to-[#00A8E8]">
        <div className="container px-4 md:px-6 grid md:grid-cols-2 gap-8 items-center">
          <div className="space-y-4">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white">
              Secure Document Verification for the Digital Age
            </h1>
            <p className="text-lg md:text-xl text-white">
              Instant verification of educational credentials using blockchain
              technology.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link
                href="/register"
                className="inline-flex h-10 items-center justify-center rounded-md bg-white px-6 text-sm font-medium text-[#0077B6] shadow transition-colors hover:bg-gray-100 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50"
                prefetch={false}
              >
                Register
              </Link>
              <Link
                href="#contact"
                className="inline-flex h-10 items-center justify-center rounded-md border border-white px-6 text-sm font-medium text-white shadow transition-colors hover:bg-white hover:text-[#0077B6] focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50"
                prefetch={false}
              >
                Contact Us
              </Link>
            </div>
          </div>
          <div className="hidden md:block">
            <img
              src="/nC_SH_J8QueCBvcUdX_m9A.png"
              width={540}
              height={400}
              alt="Hero Image"
              className="rounded-lg shadow-lg"
            />
          </div>
        </div>
      </section>
      <section className="w-full py-20 md:py-32">
        <div className="container px-4 md:px-6 space-y-8">
          <div className="text-center space-y-4">
            <h2 className="text-3xl md:text-4xl font-bold">
              Introducing Figroma: Secure Document Verification
            </h2>
            <p className="text-lg md:text-xl text-muted-foreground">
              Figroma is a decentralized application (DApp) that leverages
              blockchain technology to provide secure and instant verification
              of educational credentials.
            </p>
          </div>
        </div>
      </section>
      <section className="w-full py-20 md:py-32 bg-muted">
        <div className="container px-4 md:px-6 space-y-8">
          <div className="text-center space-y-4">
            <h2 className="text-3xl md:text-4xl font-bold">
              How Figroma Works
            </h2>
            <p className="text-lg md:text-xl text-muted-foreground">
              Figroma provides a simple and secure way to verify your
              educational credentials.
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            <div className="bg-background rounded-lg p-6 space-y-4 shadow-lg">
              <div className="bg-primary rounded-md p-3 w-fit">
                <UploadIcon className="w-6 h-6 text-primary-foreground" />
              </div>
              <h3 className="text-xl font-semibold">Upload Documents</h3>
              <p className="text-muted-foreground">
                Securely upload your educational documents to the Figroma
                platform.
              </p>
            </div>
            <div className="bg-background rounded-lg p-6 space-y-4 shadow-lg">
              <div className="bg-primary rounded-md p-3 w-fit">
                <BadgeCheckIcon className="w-6 h-6 text-primary-foreground" />
              </div>
              <h3 className="text-xl font-semibold">Verify Credentials</h3>
              <p className="text-muted-foreground">
                Instantly verify the authenticity of your educational
                credentials using blockchain technology.
              </p>
            </div>
            <div className="bg-background rounded-lg p-6 space-y-4 shadow-lg">
              <div className="bg-primary rounded-md p-3 w-fit">
                <ShareIcon className="w-6 h-6 text-primary-foreground" />
              </div>
              <h3 className="text-xl font-semibold">
                Share Verified Credentials
              </h3>
              <p className="text-muted-foreground">
                Share your verified educational credentials with employers,
                schools, and other institutions.
              </p>
            </div>
          </div>
        </div>
      </section>
      <section className="w-full py-20 md:py-32">
        <div className="container px-4 md:px-6 space-y-8">
          <div className="text-center space-y-4">
            <h2 id="features" className="text-3xl md:text-4xl font-bold">
              Key Features and Benefits
            </h2>
            <p className="text-lg md:text-xl text-muted-foreground">
              Figroma offers a range of features to make document verification
              easy and secure.
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            <div className="bg-background rounded-lg p-6 space-y-4 shadow-lg">
              <div className="bg-primary rounded-md p-3 w-fit">
                <LockIcon className="w-6 h-6 text-primary-foreground" />
              </div>
              <h3 className="text-xl font-semibold">
                Secure Blockchain-based Verification
              </h3>
              <p className="text-muted-foreground">
                Figroma leverages blockchain technology to ensure the
                authenticity and security of your educational documents.
              </p>
            </div>
            <div className="bg-background rounded-lg p-6 space-y-4 shadow-lg">
              <div className="bg-primary rounded-md p-3 w-fit">
                <ClockIcon className="w-6 h-6 text-primary-foreground" />
              </div>
              <h3 className="text-xl font-semibold">Instant Document Checks</h3>
              <p className="text-muted-foreground">
                Figroma provides instant verification of your educational
                credentials, saving you time and hassle.
              </p>
            </div>
            <div className="bg-background rounded-lg p-6 space-y-4 shadow-lg">
              <div className="bg-primary rounded-md p-3 w-fit">
                <FileIcon className="w-6 h-6 text-primary-foreground" />
              </div>
              <h3 className="text-xl font-semibold">
                Support for Multiple Document Types
              </h3>
              <p className="text-muted-foreground">
                Figroma can handle a wide range of educational documents,
                including transcripts, diplomas, and certificates.
              </p>
            </div>
            <div className="bg-background rounded-lg p-6 space-y-4 shadow-lg">
              <div className="bg-primary rounded-md p-3 w-fit">
                <ImportIcon className="w-6 h-6 text-primary-foreground" />
              </div>
              <h3 className="text-xl font-semibold">
                Integration with Educational Institutions
              </h3>
              <p className="text-muted-foreground">
                Figroma seamlessly integrates with educational institutions to
                streamline the verification process.
              </p>
            </div>
          </div>
        </div>
      </section>
      <section className="w-full py-20 md:py-32 bg-muted">
        <div className="container px-4 md:px-6 space-y-8">
          <div className="text-center space-y-4">
            <h2 className="text-3xl md:text-4xl font-bold">
              What Our Users Say
            </h2>
            <p className="text-lg md:text-xl text-muted-foreground">
              Hear from students, institutions, and verifiers who have used
              Figroma.
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            <div className="bg-background rounded-lg p-6 space-y-4 shadow-lg">
              <blockquote className="text-lg font-semibold leading-snug">
                "Figroma has made the credential verification process so much
                easier and faster. I'm able to securely share my documents with
                potential employers with just a few clicks."
              </blockquote>
              <div className="flex items-center gap-2">
                <Avatar>
                  <AvatarImage src="/placeholder-user.jpg" />
                  <AvatarFallback>JD</AvatarFallback>
                </Avatar>
                <div>
                  <p className="text-sm font-medium">John Doe</p>
                  <p className="text-sm text-muted-foreground">Student</p>
                </div>
              </div>
            </div>
            <div className="bg-background rounded-lg p-6 space-y-4 shadow-lg">
              <blockquote className="text-lg font-semibold leading-snug">
                "Figroma has been a game-changer for our institution. We can now
                quickly and reliably verify the credentials of our applicants,
                saving us time and resources."
              </blockquote>
              <div className="flex items-center gap-2">
                <Avatar>
                  <AvatarImage src="/placeholder-user.jpg" />
                  <AvatarFallback>JA</AvatarFallback>
                </Avatar>
                <div>
                  <p className="text-sm font-medium">Jane Appleseed</p>
                  <p className="text-sm text-muted-foreground">
                    Admissions Officer
                  </p>
                </div>
              </div>
            </div>
            <div className="bg-background rounded-lg p-6 space-y-4 shadow-lg">
              <blockquote className="text-lg font-semibold leading-snug">
                "As a verifier, I've been impressed with the accuracy and
                reliability of the Figroma platform. It's a game-changer for our
                organization."
              </blockquote>
              <div className="flex items-center gap-2">
                <Avatar>
                  <AvatarImage src="/placeholder-user.jpg" />
                  <AvatarFallback>SM</AvatarFallback>
                </Avatar>
                <div>
                  <p className="text-sm font-medium">Sarah Miller</p>
                  <p className="text-sm text-muted-foreground">
                    Credential Verifier
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="w-full py-20 md:py-32">
        <div className="container px-4 md:px-6 space-y-8">
          <div className="text-center space-y-4">
            <h2 className="text-3xl md:text-4xl font-bold">
              Figroma by the Numbers
            </h2>
            <p className="text-lg md:text-xl text-muted-foreground">
              Figroma has helped thousands of students and institutions with
              secure document verification.
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            <div className="bg-background rounded-lg p-6 space-y-4 shadow-lg">
              <div className="text-4xl font-bold">10,000+</div>
              <p className="text-muted-foreground">Documents Verified</p>
            </div>
            <div className="bg-background rounded-lg p-6 space-y-4 shadow-lg">
              <div className="text-4xl font-bold">500+</div>
              <p className="text-muted-foreground">
                Educational Institutions Onboarded
              </p>
            </div>
            <div className="bg-background rounded-lg p-6 space-y-4 shadow-lg">
              <div className="text-4xl font-bold">99.9%</div>
              <p className="text-muted-foreground">Verification Accuracy</p>
            </div>
          </div>
        </div>
      </section>
      <section className="w-full py-20 md:py-32 bg-muted">
        <div className="container px-4 md:px-6 space-y-8">
          <div className="text-center space-y-4">
            <h2 className="text-3xl md:text-4xl font-bold">
              Frequently Asked Questions
            </h2>
            <p className="text-lg md:text-xl text-muted-foreground">
              Got questions? We've got answers.
            </p>
          </div>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-background rounded-lg p-6 space-y-4 shadow-lg">
              <h3 className="text-xl font-semibold">How does Figroma work?</h3>
              <p className="text-muted-foreground">
                Figroma uses blockchain technology to securely store and verify
                educational credentials. Users can upload their documents, which
                are then verified against the blockchain. This ensures the
                authenticity and integrity of the credentials.
              </p>
            </div>
            <div className="bg-background rounded-lg p-6 space-y-4 shadow-lg">
              <h3 className="text-xl font-semibold">Is Figroma secure?</h3>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

function BadgeCheckIcon(props: any) {
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
      <path d="M3.85 8.62a4 4 0 0 1 4.78-4.77 4 4 0 0 1 6.74 0 4 4 0 0 1 4.78 4.78 4 4 0 0 1 0 6.74 4 4 0 0 1-4.77 4.78 4 4 0 0 1-6.75 0 4 4 0 0 1-4.78-4.77 4 4 0 0 1 0-6.76Z" />
      <path d="m9 12 2 2 4-4" />
    </svg>
  );
}

function ClockIcon(props: any) {
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
      <circle cx="12" cy="12" r="10" />
      <polyline points="12 6 12 12 16 14" />
    </svg>
  );
}

function FileIcon(props: any) {
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
      <path d="M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7Z" />
      <path d="M14 2v4a2 2 0 0 0 2 2h4" />
    </svg>
  );
}

function ImportIcon(props: any) {
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
      <path d="M12 3v12" />
      <path d="m8 11 4 4 4-4" />
      <path d="M8 5H4a2 2 0 0 0-2 2v10a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V7a2 2 0 0 0-2-2h-4" />
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

function ShareIcon(props: any) {
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
      <path d="M4 12v8a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-8" />
      <polyline points="16 6 12 2 8 6" />
      <line x1="12" x2="12" y1="2" y2="15" />
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
