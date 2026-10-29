import Image from "next/image";
import styles from "./page.module.css";

const EFFECTIVE_DATE = "28 October 2026";

const SECTIONS = [
  { id: "what-it-does", title: "What the app does" },
  { id: "what-we-dont-collect", title: "What we don't collect" },
  { id: "permissions", title: "Permissions we ask for" },
  { id: "ads", title: "Advertising" },
  { id: "purchases", title: "In-app purchases" },
  { id: "downloader", title: "Link downloader" },
  { id: "sharing", title: "Who we share data with" },
  { id: "your-control", title: "Retention & deletion" },
  { id: "security", title: "Security" },
  { id: "children", title: "Children's privacy" },
  { id: "changes", title: "Changes to this policy" },
  { id: "contact", title: "Contact" },
];

const THIRD_PARTIES = [
  {
    name: "Google AdMob",
    purpose: "Showing ads, measuring ads, preventing fraud",
    data: "Advertising ID, IP address, device and app information, ad interactions",
    link: "https://policies.google.com/privacy",
  },
  {
    name: "Google Play Billing",
    purpose: "Processing the optional Pro purchase",
    data: "Purchase details (handled by Google; we never see your payment details)",
    link: "https://payments.google.com/payments/apis-secure/u/0/get_legal_document?ldo=0&ldt=privacynotice",
  },
  {
    name: "cobalt.tools",
    purpose: "Fetching media for the Link downloader (only if you use it)",
    data: "The link you paste, and your IP address as part of the request",
    link: "https://cobalt.tools/about/privacy",
  },
];

export default function PrivacyPolicyPage() {
  return (
    <main className={styles.page} id="top">
      <div className={styles.container}>
        <div className={styles.header}>
          <div className={styles.badge}>
            <Image
              src="/logo.png"
              alt="Status Saver logo"
              width={48}
              height={48}
              className={styles.badgeImage}
              priority
            />
          </div>
          <div>
            <p className={styles.appName}>Status Saver</p>
            <p className={styles.appPublisher}>by Safravo Ltd</p>
          </div>
        </div>

        <h1 className={styles.title}>Status Saver Privacy Policy</h1>
        <p className={styles.updated}>Effective date: {EFFECTIVE_DATE}</p>

        <p className={styles.intro}>
          This policy explains what information the Status Saver Android
          app (&quot;the app&quot;), published by Safravo Ltd
          (&quot;we&quot;, &quot;us&quot;), collects, how it is used, and
          who it is shared with. Short version: Status Saver has no
          accounts and no servers of its own, and your statuses never leave
          your phone. The only data that leaves your device goes to the
          third parties listed in Section 7.
        </p>

        <nav className={styles.toc} aria-label="Sections">
          <p className={styles.tocTitle}>Jump to a section</p>
          <ol className={styles.tocGrid}>
            {SECTIONS.map((s, i) => (
              <li key={s.id}>
                <a href={`#${s.id}`} className={styles.tocLink}>
                  <span className={styles.tocNum}>
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  {s.title}
                </a>
              </li>
            ))}
          </ol>
        </nav>

        <section className={styles.section} id="what-it-does">
          <div className={styles.sectionHead}>
            <span className={styles.sectionNum}>01</span>
            <h2 className={styles.sectionTitle}>What the app does</h2>
          </div>
          <p>
            Status Saver helps you view and save WhatsApp and WhatsApp
            Business status updates that are already stored on your own
            device. When you view someone&apos;s status, WhatsApp
            temporarily downloads it to a folder on your phone. This app
            lets you browse that folder and copy anything you choose into
            your device&apos;s regular photo gallery.
          </p>
          <p>
            The app is not made, endorsed, or affiliated with WhatsApp or
            Meta. It simply reads files WhatsApp has already placed on your
            device.
          </p>
        </section>

        <section className={styles.section} id="what-we-dont-collect">
          <div className={styles.sectionHead}>
            <span className={styles.sectionNum}>02</span>
            <h2 className={styles.sectionTitle}>What we don&apos;t collect</h2>
          </div>
          <p>Status Saver has no backend server and no user accounts. That means:</p>
          <ul>
            <li>
              Status images and videos you view or save never leave your
              device. We have no way to see, receive, or store them.
            </li>
            <li>
              We don&apos;t ask for your name, phone number, email,
              contacts, location, or WhatsApp account details.
            </li>
            <li>We don&apos;t track which statuses you view, save, or share.</li>
            <li>
              We don&apos;t run our own analytics or tracking. We do not
              sell your data.
            </li>
          </ul>
          <div className={styles.card}>
            <p className={styles.cardTitle}>In short</p>
            <p>
              We (Safravo Ltd) don&apos;t receive any of your data. The only
              data that leaves your device goes directly to the third
              parties in Section 7.
            </p>
          </div>
        </section>

        <section className={styles.section} id="permissions">
          <div className={styles.sectionHead}>
            <span className={styles.sectionNum}>03</span>
            <h2 className={styles.sectionTitle}>Permissions we ask for</h2>
          </div>
          <p>The app requests a small number of Android permissions, each used for exactly one purpose:</p>
          <div className={styles.pillRow}>
            <span className={styles.pill}>Folder access (SAF)</span>
            <span className={styles.pill}>Save to gallery</span>
            <span className={styles.pill}>Notifications</span>
            <span className={styles.pill}>Internet</span>
          </div>
          <ul>
            <li>
              <strong>Folder access</strong> uses Android&apos;s Storage
              Access Framework. You pick the exact WhatsApp status folder
              yourself through the system&apos;s own file picker, and the
              app can only read that one folder. You can revoke this access
              at any time from the app&apos;s Settings.
            </li>
            <li>
              <strong>Save to gallery</strong>: when you tap
              &quot;Save&quot;, the app adds that file to your gallery. The
              app does not request access to read your photos or videos. On
              Android 12 and older, Android asks for storage permission
              only so the file can be written.
            </li>
            <li>
              <strong>Notifications</strong> are optional. If you enable
              them, the app runs a local, on-device check for new statuses
              and shows a notification. Nothing about what is found is sent
              anywhere.
            </li>
            <li>
              <strong>Internet</strong> is used only to load ads, process
              in-app purchases, and run the Link downloader if you use it.
            </li>
          </ul>
        </section>

        <section className={styles.section} id="ads">
          <div className={styles.sectionHead}>
            <span className={styles.sectionNum}>04</span>
            <h2 className={styles.sectionTitle}>Advertising</h2>
          </div>
          <p>
            Status Saver shows ads through Google AdMob to keep the app
            free. We request non-personalized ads only. Even so, to deliver
            and measure ads and to prevent fraud, Google AdMob
            automatically collects the following from your device:
          </p>
          <ul>
            <li>your device&apos;s advertising ID</li>
            <li>your IP address (used to estimate a general location, such as your country)</li>
            <li>device and app information (model, Android version, language, app version)</li>
            <li>ad interactions (which ads were shown and whether they were tapped)</li>
          </ul>
          <p>
            This data is sent directly to Google and handled under the{" "}
            <a
              href="https://policies.google.com/privacy"
              target="_blank"
              rel="noopener noreferrer"
            >
              Google Privacy Policy
            </a>
            . See also{" "}
            <a
              href="https://policies.google.com/technologies/partner-sites"
              target="_blank"
              rel="noopener noreferrer"
            >
              how Google uses data from apps that use its services
            </a>
            . You can reset or delete your advertising ID at any time in
            Android Settings → Google → Ads (or Settings → Privacy → Ads).
          </p>
        </section>

        <section className={styles.section} id="purchases">
          <div className={styles.sectionHead}>
            <span className={styles.sectionNum}>05</span>
            <h2 className={styles.sectionTitle}>In-app purchases</h2>
          </div>
          <p>
            Status Saver offers an optional Pro upgrade that removes ads.
            Purchases are handled entirely by Google Play Billing. We never
            receive your name, card, or payment details. The app only
            receives confirmation from Google Play that the purchase was
            made, so it can unlock Pro features on your device.
          </p>
        </section>

        <section className={styles.section} id="downloader">
          <div className={styles.sectionHead}>
            <span className={styles.sectionNum}>06</span>
            <h2 className={styles.sectionTitle}>Link downloader</h2>
          </div>
          <p>
            The app includes an optional Link downloader. If you paste a
            link and tap download, that link is sent to a third-party
            processing service,{" "}
            <a
              href="https://cobalt.tools/about/privacy"
              target="_blank"
              rel="noopener noreferrer"
            >
              cobalt.tools
            </a>
            , which returns the media file. Only the link you paste is
            sent, together with your IP address as part of the internet
            request. The downloaded file is saved on your device. If you
            don&apos;t use the Link downloader, nothing is sent to this
            service.
          </p>
        </section>

        <section className={styles.section} id="sharing">
          <div className={styles.sectionHead}>
            <span className={styles.sectionNum}>07</span>
            <h2 className={styles.sectionTitle}>Who we share data with</h2>
          </div>
          <p>
            We do not sell or rent your data. Data is only handled by the
            following third parties, for the purposes described above:
          </p>
          <div className={styles.tableWrap}>
            <table className={styles.table}>
              <thead>
                <tr>
                  <th>Third party</th>
                  <th>Purpose</th>
                  <th>Data</th>
                </tr>
              </thead>
              <tbody>
                {THIRD_PARTIES.map((p) => (
                  <tr key={p.name}>
                    <td>
                      <a href={p.link} target="_blank" rel="noopener noreferrer">
                        {p.name}
                      </a>
                    </td>
                    <td>{p.purpose}</td>
                    <td>{p.data}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p>
            When you tap &quot;Share&quot; in the app, Android&apos;s own
            share menu opens and the file goes only to the app you choose.
            We may also disclose information if required by law, but since
            we hold no user data, there is nothing for us to disclose.
          </p>
        </section>

        <section className={styles.section} id="your-control">
          <div className={styles.sectionHead}>
            <span className={styles.sectionNum}>08</span>
            <h2 className={styles.sectionTitle}>Data retention &amp; deletion</h2>
          </div>
          <p>
            We store no personal data on any server, so there is nothing
            for us to retain or delete. Data collected by Google or
            cobalt.tools is kept according to their own privacy policies.
            You are always in control:
          </p>
          <ul>
            <li>
              Revoke the app&apos;s folder access anytime from Settings →
              Storage &amp; Access.
            </li>
            <li>
              Delete anything you&apos;ve saved directly from the Saved tab,
              or from your gallery app.
            </li>
            <li>
              Reset or delete your advertising ID in Android Settings.
            </li>
            <li>
              Uninstalling the app removes all of its local data
              immediately.
            </li>
            <li>
              For any privacy request, email us at{" "}
              <a href="mailto:info@safravo.co.ke">info@safravo.co.ke</a> and
              we will respond within 30 days.
            </li>
          </ul>
        </section>

        <section className={styles.section} id="security">
          <div className={styles.sectionHead}>
            <span className={styles.sectionNum}>09</span>
            <h2 className={styles.sectionTitle}>Security</h2>
          </div>
          <p>
            Your statuses and saved files are processed only on your
            device. All connections the app makes to third-party services
            (ads, purchases, and the Link downloader) use encrypted HTTPS.
          </p>
        </section>

        <section className={styles.section} id="children">
          <div className={styles.sectionHead}>
            <span className={styles.sectionNum}>10</span>
            <h2 className={styles.sectionTitle}>Children&apos;s privacy</h2>
          </div>
          <p>
            Status Saver is a general-audience utility and is not directed
            at children under 13. We do not knowingly collect personal
            information from children. If you believe a child has provided
            information through the app, contact us and we will help.
          </p>
        </section>

        <section className={styles.section} id="changes">
          <div className={styles.sectionHead}>
            <span className={styles.sectionNum}>11</span>
            <h2 className={styles.sectionTitle}>Changes to this policy</h2>
          </div>
          <p>
            If this policy changes, we&apos;ll post the new version on this
            page and update the effective date at the top. Since the app
            has no accounts, we can&apos;t email you directly, so please
            check back here occasionally, especially after updating the
            app.
          </p>
        </section>

        <section className={styles.section} id="contact">
          <div className={styles.sectionHead}>
            <span className={styles.sectionNum}>12</span>
            <h2 className={styles.sectionTitle}>Contact</h2>
          </div>
          <p>
            Questions about this policy or how Status Saver works? Contact
            Safravo Ltd at{" "}
            <a href="mailto:info@safravo.co.ke">info@safravo.co.ke</a> or{" "}
            <a href="tel:+254746289413">+254 746 289 413</a>.
          </p>
          <a href="#top" className={styles.backToTop}>
            ↑ Back to top
          </a>
        </section>

        <footer className={styles.footer}>
          Effective date: {EFFECTIVE_DATE}. Status Saver is developed by
          Safravo Ltd and is not affiliated with WhatsApp or Meta.
        </footer>
      </div>
    </main>
  );
}
