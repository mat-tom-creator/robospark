import React from "react";
import Input from "../../common/Input";
import useForm from "../../../hooks/useForm";
import { validateEmail, validateRequired } from "../../../utils/validators";
import { Mail, Phone, MapPin } from "lucide-react";

const ContactForm: React.FC = () => {
  const initialValues = {
    name: "",
    email: "",
    subject: "",
    message: "",
  };

  const validationRules = {
    name: (value: string) => validateRequired(value, "Name"),
    email: validateEmail,
    subject: (value: string) => validateRequired(value, "Subject"),
    message: (value: string) => validateRequired(value, "Message"),
  };

  const { values, errors, handleChange, handleSubmit } = useForm(
    initialValues,
    validationRules,
    onSubmit
  );

  function onSubmit(formValues: typeof initialValues) {
    // This would connect to the backend API in Phase 3
    console.log("Form submitted:", formValues);
    alert("Thank you for your message! We will get back to you soon.");
  }

  return (
    <section className="py-16 bg-background">
      <div className="container mx-auto px-4">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-navy mb-3">Get in Touch</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Have questions or feedback? We'd love to hear from you. Our team
              is here to help with any inquiries about our programs,
              subscriptions, or technical support.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white rounded-lg shadow-md p-6">
              <div className="flex items-center mb-4">
                <div className="p-2 bg-primary/10 rounded-full mr-3">
                  <Mail size={20} className="text-primary" />
                </div>
                <h3 className="text-lg font-bold text-navy">Email Us</h3>
              </div>
              <p className="text-gray-600 mb-2">General Inquiries:</p>
              <a
                href="mailto:info@robospark.example.com"
                className="text-primary hover:underline"
              >
                info@robospark.example.com
              </a>
              <p className="text-gray-600 mt-4 mb-2">Technical Support:</p>
              <a
                href="mailto:support@robospark.example.com"
                className="text-primary hover:underline"
              >
                support@robospark.example.com
              </a>
            </div>

            <div className="bg-white rounded-lg shadow-md p-6">
              <div className="flex items-center mb-4">
                <div className="p-2 bg-primary/10 rounded-full mr-3">
                  <Phone size={20} className="text-primary" />
                </div>
                <h3 className="text-lg font-bold text-navy">Call Us</h3>
              </div>
              <p className="text-gray-600 mb-2">Customer Service:</p>
              <a
                href="tel:+12025550157"
                className="text-primary hover:underline"
              >
                (202) 555-0157
              </a>
              <p className="text-gray-600 mt-4 mb-2">Hours of Operation:</p>
              <p className="text-navy">Monday-Friday: 9am-6pm EST</p>
              <p className="text-navy">Saturday: 10am-2pm EST</p>
            </div>

            <div className="bg-white rounded-lg shadow-md p-6">
              <div className="flex items-center mb-4">
                <div className="p-2 bg-primary/10 rounded-full mr-3">
                  <MapPin size={20} className="text-primary" />
                </div>
                <h3 className="text-lg font-bold text-navy">Visit Us</h3>
              </div>
              <p className="text-gray-600 mb-2">Headquarters:</p>
              <address className="text-navy not-italic">
                123 Innovation Way
                <br />
                Suite 400
                <br />
                Boston, MA 02110
              </address>
            </div>
          </div>

          <div className="mt-12 bg-white rounded-lg shadow-md p-8">
            <h3 className="text-xl font-bold text-navy mb-6">
              Send Us a Message
            </h3>
            <form onSubmit={handleSubmit}>
              <div className="grid md:grid-cols-2 gap-6">
                <Input
                  type="text"
                  name="name"
                  id="name"
                  label="Your Name"
                  value={values.name}
                  onChange={handleChange}
                  error={errors.name}
                  required
                />

                <Input
                  type="email"
                  name="email"
                  id="email"
                  label="Email Address"
                  value={values.email}
                  onChange={handleChange}
                  error={errors.email}
                  required
                />
              </div>

              <Input
                type="text"
                name="subject"
                id="subject"
                label="Subject"
                value={values.subject}
                onChange={handleChange}
                error={errors.subject}
                required
              />

              <div className="mb-4">
                <label
                  htmlFor="message"
                  className="block text-navy font-medium mb-2"
                >
                  Message <span className="text-accent">*</span>
                </label>
                <textarea
                  name="message"
                  id="message"
                  rows={5}
                  value={values.message}
                  onChange={handleChange}
                  className={`w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-primary transition-colors
                    ${errors.message ? "border-accent" : "border-gray-300"}`}
                  required
                ></textarea>
                {errors.message && (
                  <p className="mt-1 text-accent text-sm">{errors.message}</p>
                )}
              </div>

              <button
                type="submit"
                className="bg-primary text-white py-2 px-6 rounded-md font-medium hover:bg-primary/90 transition-colors"
              >
                Send Message
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactForm;
