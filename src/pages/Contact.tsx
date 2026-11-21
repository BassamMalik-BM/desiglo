import { useState } from "react";
import { Link, useSearchParams } from "react-router-dom";
import { ArrowUpRight, CheckCircle2 } from "lucide-react";
import { useForm, ValidationError } from "@formspree/react";
import Button from "../components/common/Button";
export default function Contact({ project = false, booking = false }: { project?: boolean; booking?: boolean }) {
  const [params] = useSearchParams();
  const [state, submit, reset] = useForm(
    import.meta.env.VITE_FORMSPREE_FORM_ID || "mljrllee",
  );
  const [error, setError] = useState("");
  const selected = params.get("plan") || "";
  async function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setError("");
    try {
      await submit(e);
    } catch {
      setError(
        "Your inquiry could not be sent. Please check your connection and try again.",
      );
    }
  }
  return (
    <section className="project-form-page dg-container">
      <div className="project-form-header">
        <p className="eyebrow">
          {booking ? "BOOK A CALL" : project ? "START A PROJECT" : "LET’S CONNECT"}
        </p>
        <h1>
          {booking ? <>Let’s talk about<br />your next project.</> : project ? (
            <>
              Your next chapter
              <br />
              starts here.
            </>
          ) : (
            <>
              Good things start
              <br />
              with a conversation.
            </>
          )}
        </h1>
        <p>
          {booking ? "Share a few details and your preferred time. We’ll email you to agree a time and send the call details." : "Tell us a little about your business and what you have in mind. We’ll take it from there."}
        </p>
      </div>
      <div className="inquiry-grid">
        <aside className="inquiry-aside">
          <h2>From an idea to a plan.</h2>
          <p>
            You don’t need a perfect brief. A few details will help us
            understand where you are and where you want to go.
          </p>
          {[
            booking ? "Send your preferred time and timezone" : "Share your goals and requirements",
            booking ? "Receive a time confirmation by email" : "Discuss the right approach",
            booking ? "Talk through your project and next steps" : "Receive a tailored scope and estimate",
          ].map((s, i) => (
            <div className="inquiry-step" key={s}>
              <span>0{i + 1}</span>
              {s}
            </div>
          ))}
          <p>
            Looking for a starting point?
            <br />
            <Link className="text-link" to="/pricing">
              Explore our packages <ArrowUpRight size={15} />
            </Link>
          </p>
        </aside>
        <div className="inquiry-panel">
          {state.succeeded ? (
            <div className="form-success" role="status">
              <CheckCircle2 size={42} />
              <h2>{booking ? "Call request sent." : "Thanks for reaching out."}</h2>
              <p>
                {booking ? "We’ll reply by email to confirm a suitable time. Your call is not booked until we confirm it." : "Your inquiry has been sent. We’ll review the details and reply using the email address you provided."}
              </p>
              <Button onClick={() => reset()} variant="secondary">
                {booking ? "Request another call" : "Send another inquiry"}
              </Button>
            </div>
          ) : (
            <form onSubmit={onSubmit}>
              <input
                type="hidden"
                name="source"
                value={booking ? "Call request" : project ? "Project inquiry" : "Contact inquiry"}
              />
              <input
                type="text"
                name="_gotcha"
                tabIndex={-1}
                autoComplete="off"
                style={{ display: "none" }}
                aria-hidden="true"
              />
              <div className="form-grid">
                <label>
                  Your name *
                  <input
                    name="name"
                    autoComplete="name"
                    placeholder="Alex Morgan"
                    required
                    maxLength={100}
                  />
                </label>
                <label>
                  Email address *
                  <input
                    name="email"
                    autoComplete="email"
                    type="email"
                    placeholder="alex@company.com"
                    required
                    maxLength={254}
                  />
                </label>
                <label>
                  Company
                  <input
                    name="company"
                    autoComplete="organization"
                    placeholder="Your business name"
                    maxLength={150}
                  />
                </label>
                <label>
                  Current website
                  <input
                    name="website"
                    placeholder="yourwebsite.com"
                    maxLength={300}
                  />
                </label>
                <label>
                  What do you need? *
                  <select name="service" required defaultValue="">
                    <option value="" disabled>
                      Select a service
                    </option>
                    <option>Website Design & Development</option>
                    <option>Mobile Apps</option>
                    <option>Brand Identity</option>
                    <option>SEO</option>
                    <option>Digital Marketing</option>
                    <option>Custom Software</option>
                    <option>E-commerce</option>
                    <option>Website Redesign</option>
                    <option>Maintenance</option>
                    <option>Not sure yet</option>
                  </select>
                </label>
                <label>
                  Estimated budget (USD)
                  <select
                    name="budget"
                    defaultValue={
                      selected === "Basic"
                        ? "$1,000–$1,500"
                        : selected === "Standard"
                          ? "$1,500–$2,000"
                          : selected === "Premium"
                            ? "$2,000–$3,000"
                            : ""
                    }
                  >
                    <option value="">Select a range</option>
                    <option>Under $1,000 — smaller updates</option>
                    <option>$1,000–$1,500</option>
                    <option>$1,500–$2,000</option>
                    <option>$2,000–$3,000</option>
                    <option>$3,000+</option>
                    <option>Not sure yet</option>
                  </select>
                </label>
                {booking && <>
                  <label>Preferred day and time *<input name="preferred_time" required maxLength={200} placeholder="e.g. Tuesday afternoon, or any weekday" /></label>
                  <label>Timezone or city *<input name="timezone" required maxLength={100} placeholder="e.g. Karachi (UTC+5)" /></label>
                </>}
                {selected && <input type="hidden" name="selected_plan" value={selected} />}
                <label className="form-wide">
                  Ideal timeline
                  <select name="timeline" defaultValue="">
                    <option value="">Select a timeline</option>
                    <option>As soon as possible</option>
                    <option>2–4 weeks</option>
                    <option>1–2 months</option>
                    <option>2–3 months</option>
                    <option>Flexible</option>
                  </select>
                </label>
                <label className="form-wide">
                  Tell us about your project *
                  <textarea
                    name="message"
                    placeholder="What does your business do? What would you like your website to achieve?"
                    required
                    minLength={10}
                    maxLength={10000}
                  />
                </label>
              </div>
              <label className="form-consent">
                <input
                  type="checkbox"
                  name="privacy_consent"
                  value="yes"
                  required
                />
                <span>
                  I agree that Desiglo may use these details to respond to my
                  inquiry, as described in the{" "}
                  <Link to="/privacy-policy">Privacy Policy</Link>.
                </span>
              </label>
              {error && (
                <p className="form-error" role="alert">
                  {error}
                </p>
              )}
              <ValidationError errors={state.errors} className="form-error" />
              <Button type="submit" disabled={state.submitting}>
                {state.submitting ? "Sending…" : booking ? "Request a call" : "Send inquiry"}
                <ArrowUpRight size={17} />
              </Button>
              <p className="form-note">
                {booking ? "No payment required. We’ll confirm availability by email. Fields marked * are required." : "No commitment required. Fields marked * are required."}
              </p>
            </form>
          )}
        </div>
      </div>
    </section>
  );
}
