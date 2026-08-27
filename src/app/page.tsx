import Image from "next/image";
import styles from "./page.module.css";

const SECTIONS = [
  { id: "what-it-does", title: "What the app does" },
  { id: "what-we-dont-collect", title: "What we don't collect" },
  { id: "permissions", title: "Permissions we ask for" },
  { id: "ads", title: "Advertising" },
  { id: "your-control", title: "Your control over your data" },
  { id: "children", title: "Children's privacy" },
  { id: "changes", title: "Changes to this policy" },
  { id: "contact", title: "Contact" },
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

        <h1 className={styles.title}>How Status Saver handles your data</h1>
        <p className={styles.updated}>Effective date: 24 August 2026</p>

        <p className={styles.intro}>
          Short version: Status Saver doesn&apos;t have servers, doesn&apos;t
          have accounts, and doesn&apos;t collect your statuses. Everything
          you save stays on your phone. Here&apos;s the full policy.
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
              We don&apos;t ask for your name, phone number, email, or
              WhatsApp account details.
            </li>
            <li>We don&apos;t track which statuses you view, save, or share.</li>
            <li>
              We don&apos;t run our own analytics or tracking SDKs beyond the
              advertising service described in Section 4.
            </li>
          </ul>
          <div className={styles.card}>
            <p className={styles.cardTitle}>In short</p>
            <p>If it&apos;s not in Section 4, we don&apos;t collect it.</p>
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
            <span className={styles.pill}>Photos &amp; media</span>
            <span className={styles.pill}>Notifications</span>
          </div>
          <ul>
            <li>
              <strong>Folder access</strong> uses Android&apos;s Storage
              Access Framework. You pick the exact WhatsApp media folder
              yourself through the system&apos;s own file picker, and you
              can revoke that access at any time from the app&apos;s
              Settings.
            </li>
            <li>
              <strong>Photos &amp; media</strong> access is used only to copy
              a status you tap &quot;Save&quot; on into your gallery.
            </li>
            <li>
              <strong>Notifications</strong> are optional. If you enable
              them, they only power a local, on-device check for new
              statuses, and no data about what&apos;s found is sent
              anywhere.
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
            free. We request non-personalized ads, but Google&apos;s
            ad-serving process may still collect limited technical data,
            such as your advertising identifier and general device
            information. Google uses this for ad delivery, measurement, and
            fraud prevention, under its own privacy terms.
          </p>
          <p>
            You can read how Google handles this data in the{" "}
            <a
              href="https://policies.google.com/privacy"
              target="_blank"
              rel="noopener noreferrer"
            >
              Google Privacy Policy
            </a>{" "}
            and manage your ad personalization settings from your
            device&apos;s Android settings at any time.
          </p>
        </section>

        <section className={styles.section} id="your-control">
          <div className={styles.sectionHead}>
            <span className={styles.sectionNum}>05</span>
            <h2 className={styles.sectionTitle}>Your control over your data</h2>
          </div>
          <p>Since everything the app touches lives on your device, you&apos;re always in control:</p>
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
              Uninstalling the app removes all of its local data
              immediately. There&apos;s nothing left on any server to
              delete, because nothing was ever sent to one.
            </li>
          </ul>
        </section>

        <section className={styles.section} id="children">
          <div className={styles.sectionHead}>
            <span className={styles.sectionNum}>06</span>
            <h2 className={styles.sectionTitle}>Children&apos;s privacy</h2>
          </div>
          <p>
            Status Saver is a general-audience utility and is not directed
            at children under 13. We do not knowingly collect personal
            information from children, and as explained in Section 2, we
            don&apos;t collect personal information from anyone.
          </p>
        </section>

        <section className={styles.section} id="changes">
          <div className={styles.sectionHead}>
            <span className={styles.sectionNum}>07</span>
            <h2 className={styles.sectionTitle}>Changes to this policy</h2>
          </div>
          <p>
            If this policy changes, we&apos;ll update the effective date at
            the bottom of this page. Since the app has no accounts, we
            can&apos;t email you directly, so please check back here
            occasionally, especially after updating the app.
          </p>
        </section>

        <section className={styles.section} id="contact">
          <div className={styles.sectionHead}>
            <span className={styles.sectionNum}>08</span>
            <h2 className={styles.sectionTitle}>Contact</h2>
          </div>
          <p>
            Questions about this policy or how Status Saver works? Reach the
            developer at{" "}
            <a href="mailto:info@safravo.co.ke">info@safravo.co.ke</a> or{" "}
            <a href="tel:+254746289413">+254 746 289 413</a>.
          </p>
          <a href="#top" className={styles.backToTop}>
            ↑ Back to top
          </a>
        </section>

        <footer className={styles.footer}>
          Effective date: 24 August 2026. Status Saver is developed
          independently and is not affiliated with WhatsApp or Meta.
        </footer>
      </div>
    </main>
  );
}
